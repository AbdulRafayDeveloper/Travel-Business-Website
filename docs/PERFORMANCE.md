# Performance report

Measured on 2026-10-11 with Lighthouse 12 (Chromium, simulated slow 4G and 4x CPU) and with real Chromium sessions under CDP throttling (slow 4G, 150 ms RTT, 4x CPU). "Before" is the production deployment at the start of the task; "after" is the production build of the final code served locally (the Vercel alias was placed behind Vercel Authentication during the task, so later live runs were not possible).

## Home page, mobile (Moto G Power emulation)

| Metric | Before | After |
|---|---|---|
| Lighthouse performance | 52 | 71 |
| Accessibility / Best practices / SEO | 97 / 100 / 100 | 100 / 100 / 100 |
| First Contentful Paint (simulated) | 2.3 s | 2.1 s |
| Largest Contentful Paint (simulated) | 12.8 s | 6.5 s |
| Largest Contentful Paint (real, throttled slow 4G) | not measured | 2.2 s |
| Total Blocking Time | 300 ms | 220 ms |
| Cumulative Layout Shift | 0.26 | 0 (real throttled: 0.03) |
| Total transfer | 2,343 KB | 1,248 KB |

## Home page, desktop

| Metric | Before | After |
|---|---|---|
| Lighthouse performance | 73 | 94 |
| Accessibility | 97 | 100 |
| LCP (simulated) | 1.8 s | 1.6 s |
| CLS | 0.28 | 0 |

Lighthouse's simulated mobile LCP stays pessimistic because it models the three preloaded brand font files and the hero image on a 1.6 Mbit/s link; a real throttled session paints the hero image at 2.2 s.

## What changed

1. **Icon font 1,111 KB to 33 KB.** Material Symbols is now a self-hosted WOFF2 subset containing only the icons listed in `src/config/icons.ts` (guarded by `tests/icons.spec.ts`), preloaded, with no external stylesheet request. Each icon reserves a 1em box so ligature names never widen the layout before the font paints.
2. **Urdu font 254 KB to one 20 KB file.** Noto Nastaliq Urdu loads a single weight with `font-display: optional`, so a slow first visit shows the system Urdu fallback instead of swapping and shifting the page.
3. **Zod bundle 433 KB to 147 KB (raw).** Named imports instead of the `z` namespace let Turbopack drop the locale table Zod re-exports.
4. **CLS 0.26 to 0.** The root `loading.tsx` created a Suspense boundary that streamed a 60 vh placeholder before the real content on every page, pushing the footer around; it was removed. The home hero's minimum height is capped so oversized viewports cannot reflow the page, and icon boxes are reserved.
5. **Hero image** served at quality 60 behind its dark overlay; `images.qualities` configured so Next does not fall back to defaults.
6. **Caching.** Immutable one-year cache for `/images/*` and `/fonts/*`, one week for brand icons, long CDN cache for social cards.
7. **Security without regressions.** Strict CSP (self plus the Google Maps frame), no external fonts, Zod running jitless so no eval is attempted.
8. **Accessibility to 100.** Darker gold and orange accent tokens, dark text on WhatsApp green, logo accessible name from visible text, valid definition-list markup.

## Remaining opportunities (not applied)

- Fraunces is loaded as a variable font with optical-size and softness axes in two styles (265 KB). Static 600-weight cuts would save about 150 KB but change the display letterforms; left as a design decision.
- Simulated TBT of about 200 ms comes from React hydration of the forms and package explorer; further gains would need deferring those client components, which would delay interactivity for the planner.
