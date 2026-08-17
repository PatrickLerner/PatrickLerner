---
title: Filing is the bottleneck
date: 2026-07-16
theme: ai-in-practice
linkedin: https://www.linkedin.com/feed/update/urn:li:share:7483401372961406976
---

Filing the work is now harder than doing it.

We have an internal dashboard where we launch local coding agent tasks. And we recently moved one of our repos from GitLab to GitHub. I'd already wired up GitHub support in the dashboard and most of our tools. But the quick-launch shortcut still only accepts GitLab URLs. Claude is good, but not perfect. It also forgets something sometimes. 😜

Today I pasted a GitHub URL to launch a task, and the shortcut rejected it. Not a real blocker. I can work around it another way and get my actual work done. But it will annoy me again next time.

The fix is also trivial. No need of course to do it by hand. But the way to the fix is this: open a quick claude session, dictate the problem by voice, ask it to create an issue. Then I assign a label. Afterwards a runner in the cloud picks it up, implements it, opens a merge request. For something this small on an internal tool, review is almost a formality.

The only manual step left is filing it into the system. That is the hard part now. Everything after that runs itself. And the tempting thing, every time, is to skip past the small annoyances and never file them at all, because each one seems minor. But friction adds up. Remove enough of it, even the small parts, and everything moves faster.

That holds even more for bigger work now too. Models keep getting better and more reliable. If you have an idea sitting in a drawer, at least file it. It might not get built today. But the odds it gets built at all just went way up.
