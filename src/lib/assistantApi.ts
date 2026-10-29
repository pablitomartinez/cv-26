export type AssistantMessageRole = "user" | "assistant";

export interface AssistantHistoryItem {
  role: AssistantMessageRole;
  content: string;
}

export interface AssistantChatMessage {
  content: string;
  fullContent?: string;
  isRevealing?: boolean;
}

export const genericAssistantError =
  "El asistente no pudo responder en este momento.";

export class AssistantRequestError extends Error {
  readonly kind: "rate_limit" | "generic";
  readonly retryAfter: string | null;

  constructor(
    message: string,
    kind: "rate_limit" | "generic",
    retryAfter: string | null = null,
  ) {
    super(message);
    this.name = "AssistantRequestError";
    this.kind = kind;
    this.retryAfter = retryAfter;
  }
}

export const requestAssistantMessage = async (
  message: string,
  history: AssistantHistoryItem[],
  fetcher: typeof fetch = fetch,
): Promise<string> => {
  let response: Response;
  try {
    response = await fetcher("/api/assistant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, history }),
    });
  } catch {
    throw new AssistantRequestError(genericAssistantError, "generic");
  }

  if (response.status === 429) {
    throw new AssistantRequestError(
      genericAssistantError,
      "rate_limit",
      response.headers.get("Retry-After"),
    );
  }

  if (!response.ok) {
    throw new AssistantRequestError(genericAssistantError, "generic");
  }

  let data: unknown;
  try {
    data = await response.json();
  } catch {
    throw new AssistantRequestError(genericAssistantError, "generic");
  }

  if (typeof data !== "object" || data === null || Array.isArray(data)) {
    throw new AssistantRequestError(genericAssistantError, "generic");
  }

  const payload = data as Record<string, unknown>;
  if (
    typeof payload.message !== "string" ||
    !payload.message.trim() ||
    payload.mode !== "ai"
  ) {
    throw new AssistantRequestError(genericAssistantError, "generic");
  }

  return payload.message.trim();
};

export const getVisibleAssistantContent = (
  message: AssistantChatMessage,
): string => {
  const visibleContent = message.isRevealing
    ? message.content
    : message.fullContent ?? message.content;

  return visibleContent.trim() ? visibleContent : genericAssistantError;
};
