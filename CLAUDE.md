# patricklerner.com

Personal site (blog + CV). Static, prerendered with `vite-react-ssg`, deployed to GitHub Pages from `main`.

## Privacy: keep this site consent-free

This site needs **no cookie consent banner** because it stores/reads nothing on the visitor's device and loads no third-party assets. Analytics is GoatCounter (cookieless). Fonts are system stacks. That is a deliberate constraint, not an accident.

**Do not add anything that would break it:**

- No cookies, `localStorage`, `sessionStorage`, `IndexedDB`, or fingerprinting.
- No third-party embeds or remote assets: no Google Fonts, no YouTube/Vimeo iframes, no CDN scripts, no external images. Self-host and inline instead.
- No tracking/analytics beyond the existing cookieless GoatCounter.

Anything on that list triggers §25 TDDDG (consent banner) and/or new GDPR disclosures. If a change genuinely needs one, flag it and update `/impressum` (the combined legal notice + privacy page in `src/Impressum.tsx`) first — do not add it silently.

## Legal page

- `src/Impressum.tsx`, routed at `/impressum`, `noindex`, linked from both footers (`Layout.tsx` and `Home.tsx`'s `hero-footer`).
- Draft text, not lawyer-reviewed. Yerevan address (operator lives in Armenia, still registered in Germany).
