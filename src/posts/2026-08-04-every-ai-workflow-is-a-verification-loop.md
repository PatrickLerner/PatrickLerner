---
title: Every AI Workflow Is a Verification Loop
date: 2026-08-04
theme: ai-in-practice
linkedin: https://www.linkedin.com/feed/update/urn:li:share:7490292038433812480
---

Every AI workflow needs to run the same loop: generate, then check, then fix if the check fails.

It sounds obvious, but too many people skip the second step. They generate once and that is it. AI gets it wrong often enough that trusting the first output blindly is a bad bet.

Generation, step one, is never perfect. Models produce a plausible answer, not always a correct one. Step two, the check, is where the real work happens.

For code, we use reviews (AI and human), we use linters. If something fails, it goes back to development. The same flow needs to be done everywhere.

For example, I use the same loop on my own writing. Before I post here on LinkedIn, all my text goes through Vale, a linter that scores readability. This post ran through that loop before you read it, and it caught a few awkward phrases.

Step two can be agentic (an AI reviewer), automated (a linter), or human. Without it, all you are shipping is unchecked AI slop.

Even when the check only catches a problem one time in ten, that is the one time worth building for.
