import { buildAssistantContext } from "./_lib/assistant/assistantContext.js";
import { assistantInstructions } from "./_lib/assistant/assistantInstructions.js";

const MAX_MESSAGE_LENGTH = 500;
const MAX_OUTPUT_TOKENS = 240;
const RATE_LIMIT_MAX_REQUESTS = 10;
const RATE_LIMIT_WINDOW_SECONDS = 10 * 60;
const OPENAI_RESPONSES_URL = "https://api.openai.com/v1/responses";
const GENERIC_ERROR = "El asistente no pudo responder en este momento.";
const RATE_LIMIT_ERROR = "Demasiadas solicitudes. Intentá nuevamente más tarde.";

interface OpenAITextContent {
  type: "output_text";
  text: string;
}

interface OpenAIMessageOutput {
  type: "message";
  content?: OpenAITextContent[];
}

interface OpenAIResponsesPayload {
  output?: OpenAIMessageOutput[];
  output_text?: string;
}

interface RateLimitResult {
  limited: boolean;
  retryAfter?: number;
}

interface UpstashPipelineItem {
  result?: unknown;
  error?: string;
}

const jsonResponse = (
  body: Record<string, unknown>,
  status: number,
  headers?: HeadersInit,
) =>
  Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      ...headers,
    },
  });

const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const getRequiredEnv = (
  name:
    | "OPENAI_API_KEY"
    | "OPENAI_MODEL"
    | "UPSTASH_REDIS_REST_URL"
    | "UPSTASH_REDIS_REST_TOKEN",
): string => {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`${name} is not configured`);
  }

  return value;
};

const parsePositiveInteger = (value: unknown): number | null => {
  const numberValue =
    typeof value === "number"
      ? value
      : typeof value === "string"
        ? Number.parseInt(value, 10)
        : Number.NaN;

  return Number.isInteger(numberValue) && numberValue > 0 ? numberValue : null;
};

const getClientIp = (request: Request): string => {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const forwardedIp = forwardedFor?.split(",")[0]?.trim();

  return (
    forwardedIp ||
    request.headers.get("x-real-ip")?.trim() ||
    request.headers.get("cf-connecting-ip")?.trim() ||
    "unknown"
  );
};

const buildRateLimitKey = (ip: string): string =>
  `portfolio-assistant:rate-limit:${ip}`;

const checkRateLimit = async (request: Request): Promise<RateLimitResult> => {
  const redisUrl = getRequiredEnv("UPSTASH_REDIS_REST_URL").replace(/\/$/, "");
  const redisToken = getRequiredEnv("UPSTASH_REDIS_REST_TOKEN");
  const key = buildRateLimitKey(getClientIp(request));

  const response = await fetch(`${redisUrl}/pipeline`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${redisToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify([
      ["INCR", key],
      ["EXPIRE", key, RATE_LIMIT_WINDOW_SECONDS, "NX"],
      ["TTL", key],
    ]),
  });

  if (!response.ok) {
    throw new Error(`Upstash request failed with status ${response.status}`);
  }

  const results: unknown = await response.json();

  if (!Array.isArray(results)) {
    throw new Error("Invalid Upstash pipeline response");
  }

  const pipelineResults = results as UpstashPipelineItem[];
  const pipelineError = pipelineResults.find((item) => item.error);

  if (pipelineError) {
    throw new Error("Upstash pipeline command failed");
  }

  const requestCount = parsePositiveInteger(pipelineResults[0]?.result);
  const ttl = parsePositiveInteger(pipelineResults[2]?.result);

  if (requestCount === null) {
    throw new Error("Invalid Upstash rate limit counter");
  }

  return {
    limited: requestCount > RATE_LIMIT_MAX_REQUESTS,
    retryAfter: ttl ?? RATE_LIMIT_WINDOW_SECONDS,
  };
};

const buildModelInstructions = (assistantContext: string): string =>
  [
    "INSTRUCCIONES DEL SISTEMA",
    assistantInstructions,
    "",
    "CONTEXTO PROFESIONAL",
    assistantContext,
  ].join("\n");

const extractAssistantMessage = (payload: unknown): string | null => {
  if (!isObject(payload)) return null;

  if (typeof payload.output_text === "string" && payload.output_text.trim()) {
    return payload.output_text.trim();
  }

  const responsePayload = payload as OpenAIResponsesPayload;
  const outputText = responsePayload.output
    ?.flatMap((item) => item.content ?? [])
    .filter((content): content is OpenAITextContent => content.type === "output_text")
    .map((content) => content.text)
    .join("")
    .trim();

  return outputText || null;
};

const createAssistantResponse = async (message: string): Promise<string> => {
  const apiKey = getRequiredEnv("OPENAI_API_KEY");
  const model = getRequiredEnv("OPENAI_MODEL");
  const assistantContext = buildAssistantContext();

  const response = await fetch(OPENAI_RESPONSES_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      instructions: buildModelInstructions(assistantContext),
      input: [
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: message,
            },
          ],
        },
      ],
      max_output_tokens: MAX_OUTPUT_TOKENS,
      store: false,
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenAI request failed with status ${response.status}`);
  }

  const payload: unknown = await response.json();
  const assistantMessage = extractAssistantMessage(payload);

  if (!assistantMessage) {
    throw new Error("OpenAI response did not include text output");
  }

  return assistantMessage;
};

export default {
  async fetch(request: Request): Promise<Response> {
    if (request.method !== "POST") {
      return jsonResponse(
        { error: "Método no permitido." },
        405,
        { Allow: "POST" },
      );
    }

    let body: unknown;

    try {
      body = await request.json();
    } catch {
      return jsonResponse(
        { error: "El cuerpo de la solicitud debe ser JSON válido." },
        400,
      );
    }

    if (!isObject(body) || !("message" in body)) {
      return jsonResponse({ error: "El campo message es obligatorio." }, 400);
    }

    if (typeof body.message !== "string") {
      return jsonResponse(
        { error: "El campo message debe ser un texto." },
        400,
      );
    }

    const message = body.message;
    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      return jsonResponse({ error: "El mensaje no puede estar vacío." }, 400);
    }

    if (trimmedMessage.length > MAX_MESSAGE_LENGTH) {
      return jsonResponse(
        {
          error: `El mensaje no puede superar los ${MAX_MESSAGE_LENGTH} caracteres.`,
        },
        413,
      );
    }

    let rateLimit: RateLimitResult;

    try {
      rateLimit = await checkRateLimit(request);
    } catch {
      console.error("Assistant rate limit error");

      return jsonResponse({ error: GENERIC_ERROR }, 503);
    }

    if (rateLimit.limited) {
      return jsonResponse(
        { error: RATE_LIMIT_ERROR },
        429,
        rateLimit.retryAfter
          ? { "Retry-After": String(rateLimit.retryAfter) }
          : undefined,
      );
    }

    let assistantMessage: string;

    try {
      assistantMessage = await createAssistantResponse(trimmedMessage);
    } catch {
      console.error("Assistant provider error");

      return jsonResponse({ error: GENERIC_ERROR }, 502);
    }

    return jsonResponse(
      {
        message: assistantMessage,
        mode: "ai",
      },
      200,
    );
  },
};
