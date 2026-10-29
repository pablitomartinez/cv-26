import test from "node:test";
import assert from "node:assert/strict";
import { build } from "esbuild";
import { fileURLToPath } from "node:url";

const bundle = await build({
  entryPoints: [fileURLToPath(new URL("../api/assistant.ts", import.meta.url))],
  bundle: true,
  platform: "node",
  format: "esm",
  write: false,
});
const source = Buffer.from(bundle.outputFiles[0].contents).toString("base64");
const { default: assistantApi } = await import(`data:text/javascript;base64,${source}`);

const originalFetch = globalThis.fetch;
process.env.OPENAI_API_KEY = "mock-key";
process.env.OPENAI_MODEL = "mock-model";
process.env.UPSTASH_REDIS_REST_URL = "https://redis.example";
process.env.UPSTASH_REDIS_REST_TOKEN = "mock-token";

const callAssistant = async (providerResponse) => {
  globalThis.fetch = async (url) => {
    if (String(url).startsWith("https://redis.example/")) {
      return Response.json([
        { result: 1 },
        { result: "OK" },
        { result: 600 },
      ]);
    }

    return providerResponse;
  };

  return assistantApi.fetch(
    new Request("https://portfolio.example/api/assistant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "¿Quién es Pablo?" }),
    }),
  );
};

test("OpenAI output_text becomes the documented non-empty JSON response", async () => {
  const response = await callAssistant(
    Response.json({ output_text: "Pablo es desarrollador." }),
  );
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), {
    message: "Pablo es desarrollador.",
    mode: "ai",
  });
});

test("nested output_text is extracted; empty or unexpected structures return an error", async () => {
  const nested = await callAssistant(
    Response.json({
      output: [
        { type: "reasoning", content: [{ type: "output_text", text: "ignored" }] },
        { type: "message", content: [{ type: "output_text", text: "Respuesta" }] },
      ],
    }),
  );
  assert.equal(nested.status, 200);
  assert.equal((await nested.json()).message, "Respuesta");

  for (const body of [
    { output_text: "  " },
    { output: [{ type: "message", content: [{ type: "output_text", text: 3 }] }] },
    { output: "unexpected" },
  ]) {
    const response = await callAssistant(Response.json(body));
    assert.equal(response.status, 502);
    assert.ok((await response.json()).error);
  }
});

test("provider HTTP and malformed JSON failures never return an empty success", async () => {
  for (const providerResponse of [
    new Response("provider failure", { status: 500 }),
    new Response("not json", { status: 200 }),
  ]) {
    const response = await callAssistant(providerResponse);
    assert.equal(response.status, 502);
    assert.ok((await response.json()).error);
  }
});

test.after(() => {
  globalThis.fetch = originalFetch;
});
