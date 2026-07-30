---
title: Instrument your agents
date: 2026-07-28
---

If you run automated AI agent sessions, instrument them.

Make agents improve themselves. For example we run a "Claude Orchestrator" that dispatches agents against GitLab issues and merge requests in the background. Nobody watches them run. That is the point. But it also means you lose visibility into how they actually behave.

We dump everything to structured logs. Every tool call, every action. It's just simple JSON logs. Then after a handful of runs, we hand those traces back to another agent and ask it to analyze them.

It finds its own failure loops: keeps calling a tool the wrong way, reaches for the wrong tool entirely, wastes three steps on something that does not help. Once you can see the failed loops, the fix is obvious. Tighten the prompt so it stops doing that, or write a small wrapper tool that solves the exact problem cleanly.

After that, the system gets smarter and starts saving tokens and time.

The models are genuinely good at reading their own logs and finding their own patterns. But none of it works without the logs. You cannot improve what you cannot see.

So if you run agentic work, make it analyze itself.
