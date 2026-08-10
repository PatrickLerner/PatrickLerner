---
title: The Steam Deck Black Screen Is Fixable
date: 2026-08-10
excerpt: My Steam Deck sat empty for weeks and then refused to turn on, even after hours on the charger. It is not dead. It is a stuck BIOS, and one button combination brings it back.
---

I left my Steam Deck uncharged for a long stretch. I took it with me on a long vacation, but got too busy to use it much. When I finally picked it up again, it seemed dead. Not "low battery" dead. Nothing at all. Just a blank screen.

So I put it on the charger. Even for a few hours. Still nothing: black screen, no logo, no reaction to the power button. It seems like it is a known issue, and many claim it is unfixable, but it seems mine came back.

## The fix

Hold all three at once for a few seconds:

- the three-dot button (**...**, the one under the right trackpad)
- **volume down**
- **power**

The LED next to the power button starts flashing. That is the signal that it worked. This combination triggers a BIOS reset.

Now the important part: **leave it alone.** Put it on the charger, don't touch it, don't press anything. It took about 20 minutes (!) for me. So give it some time before you decide it failed. It looks like it does nothing, no more flashing, but if it worked, then it will suddenly turn on after a while.

## What it actually was

When it came back up, the battery was at 100%. All those hours on the charger had worked fine. The device had been charging the entire time and just refused to show me anything. I also noticed it did get warm during charging, so I suspected it was not completely dead.

So it was never a power problem. Something in the BIOS got itself into a state it could not leave on its own, and the only way out is that button combination. The battery draining fully seems to be what puts it there.

It is a genuinely frightening failure mode, because every signal you get says the hardware is gone. But it isn't.

## Credit on where to find these fixes

- [Reddit thread](https://www.reddit.com/r/SteamDeck/comments/xjs8ry/deck_refuses_to_boot_slow_blink_from_power_button/)
- [Dear Valve... How to Fix the Black Screen!](https://www.youtube.com/watch?v=x82UOZ4bpR4) by Joey Does Tech
