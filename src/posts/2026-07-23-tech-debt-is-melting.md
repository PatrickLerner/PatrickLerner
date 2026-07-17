---
title: Tech debt is melting
date: 2026-07-23
theme: ai-in-practice
---

Everyone worries that AI is burying us in tech debt. In our codebase the opposite is happening. Tech debt is melting.

Take the list of files that sat exempt from our frontend test coverage rules for years. Too tedious to backfill, never worth the effort. Now we point an agent at it: it finds what it can automate, opens the issues, and schedules them for a "Claude in CI" run that writes tests to pin down the current behavior. The files come off the exempt list one by one.

Or the `any` and `unknown` types left behind by a TypeScript migration years ago, still scattered through the old backoffice code. They are getting typed properly now, bit by bit. Work that was always "someday" ships.

It is not free. It needs steering, and an engineer still has to decide what correct means before trusting a generated test or type. But it's side work now, handed off and checked rather than done by hand, and we are shipping more of these fixes than ever without slowing core product.

It pays dividends, too. Every fix makes the AI better at the code. Agents struggle most in loose, dynamic environments where a mistake only shows up at runtime. They do far better in strict ones, Rust or strict TypeScript, where the compiler catches errors before they ship, or in well tested ones like our core Ruby app, where coverage sits at 100% of lines.

Paying down tech debt toward stricter types and better tests is not just cleanup. It builds the guardrails that make the AI more reliable, which lets it do more with less breakage.

The loop finally runs in the right direction.
