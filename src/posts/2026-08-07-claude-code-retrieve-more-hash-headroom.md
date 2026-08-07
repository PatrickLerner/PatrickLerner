---
title: '"Retrieve more: hash" in Claude Code is Headroom compression'
excerpt: 'Claude Code shows "items compressed to" with a "Retrieve more: hash" marker, or a <<ccr>> tag, then claims it cannot read the file. That is Headroom context compression. Tell it to call headroom_retrieve.'
date: 2026-08-07
---

Claude reads a file or loads a skill and then tells you it cannot access the content. Or that the output looks truncated. Or that the MCP server is not connected.

Look at what it actually got back:

```
[519 items compressed to 358 (from 65 source lines). Retrieve more: hash=d6d4291341f9224734e72987]
```

Or the other form:

```
<<ccr:a1b2c3,json,48213>>
```

That is [Headroom](https://github.com/headroomlabs-ai/headroom). You installed it, it compresses tool output before it reaches the model, and big payloads get swapped for an opaque reference. The original sits in a local cache. Hash, format, size, nothing else.

Claude has a pointer and no habit of following it.

## The fix

Tell it to remember, once:

```
remember: output like "Retrieve more: hash=..." or <<ccr:hash,format,size>> is
Headroom compression, not an error and not the content. Call headroom_retrieve
with the reference instead of reasoning about the tag.
```

## If there is no headroom_retrieve tool

Then the pointer really does lead nowhere, because the proxy is compressing but the MCP server was never wired in. Install it and restart the agent:

```sh
headroom mcp install
claude mcp list   # headroom should say Connected
```

Two traps after that. The cache TTL is five minutes, so an old reference returns nothing and you just re-run the original tool. And compression only happens when your agent goes through the proxy, `ANTHROPIC_BASE_URL=http://127.0.0.1:8787`.

Compression only helps if the model fetches the original when it needs it. Otherwise you just deleted your tool output.
