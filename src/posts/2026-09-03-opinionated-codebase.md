---
title: Opinionated Codebase
date: 2026-09-03
theme: ai-in-practice
---

If you want to get great results, you need to set your project up for agentic success.

Common advice now is making a codebase "AI ready" by writing better docs for the agent to read. But that misses the real problems, e.g. that there are five ways to write the same service, three ways to touch the database, four helpers that do the same thing under different names. Old legacy code that should not be used for reference.

An agent facing that mess copies whatever pattern is closest, or adds a sixth variant instead of picking one of the five. The codebase gets messier with every change, agent-written or not.

Uniformity and clarity is really what is needed, and that can be achieved by investing also in reducing the tech debt and creating a clear structure in the app.

Vibe coding fails for the same reason. The person vibing has no strong opinion on anything, so the code keeps piling up instead of getting streamlined.
