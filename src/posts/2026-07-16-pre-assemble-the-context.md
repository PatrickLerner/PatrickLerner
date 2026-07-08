---
title: Pre-assemble the context
date: 2026-07-16
theme: ai-in-practice
---

Don't give an agent MCP tools and hope it fetches the right context. Pre-assemble the context deterministically and put it straight in the prompt.

When our internal Claude dispatcher runs on a merge request, it gets its own isolated environment. Before the agent starts, a wrapper collects everything relevant to that merge request: did CI pass, what failed, are there open review comments and what do they say. That context gets trimmed of noise and dropped into the prompt.

Another case is our Sentry watch agent. It needs to know which bugs are already recorded in our system. Fetching that ahead of time and handing it over beats letting the agent fight its way around GitLab's unreliable search. We give it a local file it can grep and parse, with a fraction of the error rate.

The alternative is wiring up MCP tools and letting the agent pull what it needs at call time. That has two problems. The agent has to decide to fetch the right things, and it does not always. And tool responses are verbose; they burn tokens on noise the agent does not need.

When you know the context ahead of time, compute it and pass it in. Worst case, if you can't compute it all up front, give the agent helper scripts to aggregate it. Still more reliable than MCP.

Reserve the model for judgment. Do the data gathering for it.
