---
title: Bugs that fix themselves
date: 2026-07-02
linkedin: https://www.linkedin.com/feed/update/urn:li:share:7478327946718445569
---

Why is your setup not auto-healing? Why are your bugs not fixing themselves yet?

Ours are. It is a combination of two systems.

First, we hand an issue to an agent that fixes it in CI automatically. It implements a solution and runs the tests, no engineer at the keyboard. We lovingly call our agent "Clawde" 😸

Second, another agent watches Sentry. It filters the noise, finds the bugs that matter, traces each one back to the change that caused it, and decides whether an AI can fix it. If it can, it hands it to the first system.

Together, bugs flow from the error stream into a ready fix. An engineer reviews, approves, merges. They start from a solution, not a raw stack trace. And the agent surfaces quiet bugs that throw too few errors to catch attention, the ones that would otherwise sit in the backlog for months.

The best part is that it improves. A few days ago an engineer pointed out that some bugs got filed under the wrong project, because the real cause was upstream in another service. We adjusted the prompt, and it got better. Self-learning, with some guidance.

It is not perfect. But the direction has changed: bugs get fixed instead of piling up, and it gets better every week. Definitely a real case for optimism about AI.
