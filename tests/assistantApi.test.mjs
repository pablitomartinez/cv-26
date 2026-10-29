import test from "node:test";
import assert from "node:assert/strict";
import {
  AssistantRequestError,
  getVisibleAssistantContent,
  requestAssistantMessage,
} from "../src/lib/assistantApi.ts";

const response = (body, init = {}) =>
  new Response(JSON.stringify(body), {
    status: 200,
    headers: { "Content-Type": "application/json" },
    ...init,
  });

test("returns the complete text from a valid assistant response", async () => {
  const expected = "Pablo es desarrollador full stack y trabaja en productos web.";
  const actual = await requestAssistantMessage("¿Quién es Pablo?", [], async () =>
    response({ message: expected, mode: "ai" }),
  );

  assert.equal(actual, expected);
});

test("rejects empty and unexpected JSON responses", async () => {
  for (const body of [
    { message: "   ", mode: "ai" },
    { output_text: "Texto sin contrato de API" },
    { message: 42, mode: "ai" },
    null,
  ]) {
    await assert.rejects(
      requestAssistantMessage("qué onda", [], async () => response(body)),
      AssistantRequestError,
    );
  }

  await assert.rejects(
    requestAssistantMessage("qué onda", [], async () =>
      new Response("no es json", { status: 200 }),
    ),
    AssistantRequestError,
  );
});

test("HTTP and network errors reject so the UI can clear loading and offer retry", async () => {
  await assert.rejects(
    requestAssistantMessage("qué onda", [], async () => response({}, { status: 502 })),
    AssistantRequestError,
  );
  await assert.rejects(
    requestAssistantMessage("qué onda", [], async () => {
      throw new TypeError("Failed to fetch");
    }),
    AssistantRequestError,
  );
});

test("keeps the full answer visible when the reveal animation completes", () => {
  const fullText = "Pablo es desarrollador full stack.";
  assert.equal(
    getVisibleAssistantContent({
      content: "Pablo es",
      fullContent: fullText,
      isRevealing: false,
    }),
    fullText,
  );
});
