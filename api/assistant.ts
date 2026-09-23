import { buildAssistantContext } from "./_lib/assistant/assistantContext.js";
import { assistantInstructions } from "./_lib/assistant/assistantInstructions.js";

const MAX_MESSAGE_LENGTH = 500;
const MAX_OUTPUT_TOKENS = 240;
const OPENAI_RESPONSES_URL = "https://api.openai.com/v1/responses";
const GENERIC_ERROR = "El asistente no pudo responder en este momento.";

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

const getRequiredEnv = (name: "OPENAI_API_KEY" | "OPENAI_MODEL"): string => {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`${name} is not configured`);
  }

  return value;
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
