---
title: Stop complaining automate it
date: 2026-07-21
theme: ai-in-practice
---

Stop complaining and just start automating it. You don't need the automation to be good. You need it to be able to get better.

We wired up a CI agent a while back. Assign a label in our issue tracker, and the agent runs against the code in CI and tries to implement it. The first version was deliberately thin: no database access, couldn't run the tests. People tried it, hit the limits fast, and sometimes got bad results. But for simple changes, a copy tweak or removing a finished A/B test, it was already good enough to do the baseline work.

And the most important part: it got people actually using an automation, engineers and non-engineers.

Then you iterate. Let an agent read the run logs, find where it fell short, and fill in some of the gaps. It extended itself. Repeat until it becomes useful.

Same thing at home. A bit back I picked up a 40-euro second-hand computer to experiment with zeroclaw. I installed NixOS and gave an agent access to manage the whole system config. My girlfriend and I hit the edges quickly, then let it reconfigure and fix things. Same loop. Interesting results fast.

In both cases the early version covered roughly 80% of the easy cases. That's not impressive on its own. The useful part is that once the loop exists, adding capability gets cheap. You're not rebuilding from scratch. You're giving the agent feedback it can act on.

Two instincts slow this down: waiting until the tool is actually good before you rely on it, or accepting the boring manual work as something you cannot change. But the baseline doesn't have to be good. It has to exist, and it has to be able to improve.
