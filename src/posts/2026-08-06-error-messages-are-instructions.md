---
title: Error messages are instructions
date: 2026-08-06
theme: ai-in-practice
linkedin: https://www.linkedin.com/feed/update/urn:li:share:7491026621848633344
---

Error messages are instructions. Both for humans as well as agents.

But let's focus on the internal tooling for a moment. When an agent reads your linter, the build or any helper script failing, it will need to fix it. A rule that just says "failed" will make the agent guess. It reads the code again, tries something, and sometimes loops in circles. You just paid time and tokens for the guessing.

A rule that says "do not use `unknown` here, the value comes from the schema, use `JobSchema` instead" works obviously different. The agent gets caught red-handed, but it is also handed the correct move. No guessing and reliable fixes.

For internal tooling, think about this. Every custom lint rule and type check is a chance to do this. Write them so they say clearly what is wrong AND what to do instead. Just like a human is confused by cryptic errors, any agent will also have to google it or consult the code or the docs.

And this definitely also beats putting the same guidance in a prompt. Prompts sit at the top of the context and get crowded out as the session grows. Prompts are soft and an agent can ignore them. A failing check is hard and the agent must resolve it. Write your guidance there.
