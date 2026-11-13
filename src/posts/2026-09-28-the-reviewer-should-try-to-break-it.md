---
title: The Reviewer Should Try To Break It
date: 2026-09-28
theme: ai-in-practice
linkedin: https://www.linkedin.com/feed/update/urn:li:share:7510292987692789761
---

A reviewer that trusts the author's own summary is not a review.

My AI code review setup runs two agents: one that writes the code, and one that reviews it. The goal is that they do not share context.

The failure this prevents is simple. The implementer finishes and writes a summary: done, all tests pass. If the reviewer reads that summary first, it inherits the implementer's blind spots and just agrees with them.

I instruct my reviewer to be adversarial in its review and treat the code as untrusted.

It gets the plan or the spec, and the commits. It checks the code against those, not against what the implementer claims it did. Its instruction is to find what is wrong, not to confirm the work is fine.

This is the same rule as human code review. A reviewer who approves a pull request because a colleague says it works was never reviewing anything.

In the new world of software factories review is one of the hardest steps to get right. Set up wrong, it also becomes the step most likely to wave broken work through.
