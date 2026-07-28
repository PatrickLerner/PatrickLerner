---
title: When Claude Code forgets your MCP servers
date: 2026-07-28
---

Claude Code started telling me it had no access to MCP servers I use every day. It would claim GitLab or Slack were not connected, even though the tools were right there and worked fine in a fresh chat a minute earlier.

The behavior is confusing because it is inconsistent. Same setup, same servers, but sometimes the tools are present and sometimes Claude denies they exist.

Sometimes it fails harder, with a hard API error mid-task:

```
API Error: 400 Tool reference 'WaitForMcpServers' not found in available tools
```

Claude tried to call a tool it believed was loaded, the API disagreed, and the whole turn died. Same root cause, louder failure.

## What is actually happening

Claude Code does not hold every tool from every connected MCP server in context at once. It loads a set at the start of a session and then discovers more lazily, only searching for additional tools when a task seems to need them. That search is not exhaustive. If you have a lot of servers connected, the discovery can miss the one you need and Claude concludes the tool is not there.

The root cause is volume. We connected too many MCPs to the company account. For any given person most of them are dead weight: servers you never call, half of which you do not even have access to. They cost tokens on every session and they crowd out the servers you rely on.

## The fix

Deny the servers you never use. In `~/.claude/settings.json`:

```json
"deniedMcpServers": [
  { "serverName": "claude.ai Gmail" },
  { "serverName": "claude.ai Google Calendar" },
  { "serverName": "claude.ai Google Drive" },
  { "serverName": "claude.ai Spotify" },
  { "serverName": "claude.ai Brevo" },
  { "serverName": "claude.ai Buffer" },
  { "serverName": "claude.ai HubSpot" },
  { "serverName": "claude.ai Klaviyo" },
  { "serverName": "claude.ai Mixpanel" },
  { "serverName": "claude.ai Notion" },
  { "serverName": "claude.ai Personio" },
  { "serverName": "claude.ai PostHog" },
  { "serverName": "claude.ai Windsor.ai" }
]
```

Keep the ones you actually work with, deny the rest. Two things get better at once: token consumption drops, and the servers you kept stop disappearing because Claude has fewer places to look.

## The real lesson

The denylist is a per-person patch on an org-level mistake. Every connected MCP is a standing tax on everyone's context, whether they use it or not. The better move is to not connect company-wide servers most people cannot use in the first place. Until that happens, trim your own list.

If you see Claude confidently deny a tool you know is connected, do not argue with it. Look at how many servers you have loaded first.
