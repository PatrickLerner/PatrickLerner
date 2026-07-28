---
title: Instrument your agents
date: 2026-07-28
---

If you run automated AI agent sessions, instrument them.

We run a "Claude Orchestrator" that dispatches agents against GitLab issues and merge requests in the background. Nobody watches them run. That is the point. But it also means you lose visibility into how they actually behave.

Dump everything to structured logs. Every tool call, every action. Just as simple JSON. After a handful of runs, hand those traces back to another agent and ask it to analyze them.

It finds its own failure loops: keeps calling a tool the wrong way, reaches for the wrong tool entirely, wastes three steps on something that does not help. Once you can see the failed loops, the fix is obvious. Tighten the prompt so it stops doing that, or write a small wrapper tool that solves the exact problem cleanly.

After that, the system gets smarter and starts saving tokens and time.

The model is genuinely good at reading its own logs and finding its own patterns. But none of it works without the logs. You cannot improve what you cannot see.
