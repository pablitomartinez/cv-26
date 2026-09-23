import { buildAssistantContext } from "../src/data/assistant/assistantContext.ts";
import { assistantInstructions } from "../src/data/assistant/assistantInstructions.ts";

const MAX_MESSAGE_LENGTH = 500;

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

    const assistantContext = buildAssistantContext();

    if (!assistantInstructions || !assistantContext) {
      return jsonResponse(
        { error: "El asistente no pudo responder en este momento." },
        500,
      );
    }

    return jsonResponse(
      {
        message: "Backend del asistente conectado correctamente.",
        mode: "mock",
      },
      200,
    );
  },
};
