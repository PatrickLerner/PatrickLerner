---
title: New laptop in thirty minutes
date: 2026-09-01
theme: ai-in-practice
---

A new work laptop usually means a day of reinstalling and reconfiguring. Mine was ready for real work in about 30 minutes.

That is because the whole setup is just code. A few months ago I moved my setup to the Nix package manager, which also runs on macOS. Everything is declared in one config: my tools, Claude Code, the full vim and terminal setup, Raycast scripts, Karabiner remaps, even the wallpaper.

And an agent manages that config. When I need a new tool, I ask Claude. It edits the config, installs the tool, and makes sure it is backed up and secure. Because the whole setup lives in git, the next machine inherits it. Setting up the new laptop is just: install Nix, log into my accounts, done.

Nix adds a nice trick on top: with nix-shell an agent can pull a tool in just to run it, then drop it, with nothing left on my system.

The same pattern runs through the rest of my setup. Notes and knowledge base are plain Markdown in git. An agent files them, links them (e.g. importing 1:1 Notes to Markdown), and keeps them tidy. My tasks live in taskmd, plain text files I edit on the laptop or capture from my phone over Telegram through a small agent (via zeroclaw).

It does not need a more clever model necessarily, but the interface is what matters. Local and plain text wins every time. Anything written that way is portable, future proof, any agent and human can understand, change, and improve it.
