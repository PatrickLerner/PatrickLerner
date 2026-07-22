---
title: Routing z.ai GLM Through Headroom in opencode
date: 2026-07-22
theme: ai-in-practice
---

A short tutorial for adding a z.ai GLM coding model (GLM-5.2) to opencode, routed through the Headroom proxy so requests still get context compression.

The request path is: opencode sends OpenAI-format requests to Headroom on localhost, Headroom forwards them to z.ai's coding endpoint and passes your key through unchanged.

## Prerequisites

- Headroom running locally (`headroom doctor` should show it on port 8787).
- A z.ai API key on a GLM Coding Plan.

## 1. Use the coding endpoint

Two things to get right up front:

- Endpoint: `https://api.z.ai/api/coding/paas/v4`, not the plain `paas/v4`. The general endpoint returns "insufficient balance" on a coding-plan key.
- Path: z.ai's path is `/chat/completions` directly under `/v4`, with no `/v1` segment. Headroom appends `/v1/chat/completions` by default, so you have to override it (step 2).

## 2. Add the provider to opencode

In `~/.config/opencode/opencode.jsonc`, under `provider`:

```jsonc
"zai": {
  "npm": "@ai-sdk/openai-compatible",
  "name": "Z.ai GLM Coding (via Headroom)",
  "options": {
    "baseURL": "http://127.0.0.1:8787/v1",
    "apiKey": "{env:ZAI_API_KEY}",
    "headers": {
      "x-headroom-base-url": "https://api.z.ai/api/coding/paas/v4",
      "x-headroom-original-path": "/chat/completions"
    }
  },
  "models": {
    "glm-5.2": {
      "name": "GLM-5.2 (coding)",
      "limit": { "context": 200000, "output": 131072 }
    }
  }
}
```

- `x-headroom-base-url` tells Headroom which upstream to forward to.
- `x-headroom-original-path` overrides the default `/v1/chat/completions` so the URL matches z.ai. Without it you get a 404 on `.../v4/v1/chat/completions`.
- `apiKey` reads `ZAI_API_KEY` from the environment. Do not paste the key into this file.

## 3. Set the key

Export your z.ai key as `ZAI_API_KEY` in the environment opencode runs in:

```sh
export ZAI_API_KEY=<your-z.ai-key>
```

## 4. Verify

Direct to z.ai (checks the key and plan):

```sh
curl -s https://api.z.ai/api/coding/paas/v4/chat/completions \
  -H "Authorization: Bearer $ZAI_API_KEY" -H "Content-Type: application/json" \
  -d '{"model":"glm-5.2","messages":[{"role":"user","content":"reply with exactly: pong"}],"max_tokens":2048}'
```

Through Headroom (checks the full opencode path):

```sh
curl -s http://127.0.0.1:8787/v1/chat/completions \
  -H "Authorization: Bearer $ZAI_API_KEY" -H "Content-Type: application/json" \
  -H "x-headroom-base-url: https://api.z.ai/api/coding/paas/v4" \
  -H "x-headroom-original-path: /chat/completions" \
  -d '{"model":"glm-5.2","messages":[{"role":"user","content":"reply with exactly: pong"}],"max_tokens":2048}'
```

Both should return `pong`. Then start opencode and pick **Z.ai GLM Coding > GLM-5.2**.

## Gotchas

- GLM-5.2 is a reasoning model. It spends tokens thinking before it answers, so keep the output limit high (131k here) or short replies come back empty.
- Headroom renames `max_tokens` to `max_completion_tokens` on the way out. z.ai accepts it.
- "Insufficient balance" means you are on the wrong endpoint (`paas/v4` instead of `coding/paas/v4`), not that you are out of credit.
- A 404 with a path like `/v4/v1/chat/completions` means the `x-headroom-original-path` header is missing.
- List available models: `curl -s https://api.z.ai/api/paas/v4/models -H "Authorization: Bearer $ZAI_API_KEY"`.
