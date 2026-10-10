# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## What this is

A static, bilingual (English / Arabic) marketing site for "AluTrade Global", a metal trading company. Next.js 16.2 App Router, React 19, TypeScript (strict), Tailwind CSS v4. Deployed on Vercel. There is no backend: no API routes, no server actions, no database, no auth. The contact and quote forms are client-only and just flip a `submitted` flag; nothing is sent anywhere.

Note: AGENTS.md says to read `node_modules/next/dist/docs/`, but that folder is not present in this install. Fall back to the official Next.js 16 docs when unsure about an API.

## Commands

```bash
npm run dev      # dev server at http://localhost:3000
npm run lint     # eslint (flat config: next/core-web-vitals + next/typescript)
npm run build    # production build — see note below
npm run start    # serve the production build
npx tsc --noEmit # type-check (no dedicated script)
node scripts/generate-brand-assets.js   # regenerate favicons / PWA icons / og-image.png from public/logo-icon.svg (uses sharp)
```

There is no test suite and no test runner configured.

The project owner's brief (`ai_docs/Prompt.md`) says not to produce production builds unprompted. Use `npm run lint` and `npx tsc --noEmit` to verify changes; only run `npm run build` when explicitly asked.

## Architecture

### Pages are thin server components; everything visual is a client component

Every route under `src/app/**/page.tsx` follows the same shape:

```tsx
<SchemaOrg schema={...} />          // one or more JSON-LD blocks
<Header />
<main id="main-content" className="pt-20">   // pt-20 offsets the fixed h-20 header
  <SectionA /> <SectionB /> ...
</main>
<Footer />
```

The page file owns `export const metadata`, builds JSON-LD via the helpers in `src/components/SchemaOrg.tsx` (`organizationSchema`, `websiteSchema`, `buildBreadcrumbSchema`, `buildFAQSchema`, `buildServiceSchema`, `buildProductSchema`, `buildWebPageSchema`), and composes section components. It contains no copy and no logic.

Section components live flat in `src/components/` (one file per section, named `<Page><Section>.tsx`, e.g. `WhyHero`, `ProductsGrid`). Almost all of them are `"use client"` because they read translated copy through the language context. Keep new sections in that folder and that naming style.

### i18n is client-side state, not routing

- `src/constants/translations.ts` is a single object with `en` and `ar` keys (~1700 lines). The context type is `typeof translations.en`, so **the `ar` branch must mirror the `en` structure exactly** or the type breaks. All UI copy, alt text, and Material icon names live here; components never hardcode user-facing strings.
- `src/providers/LanguageProvider.tsx` (wrapped around everything in `layout.tsx`) holds `locale` in `useState("en")`. It is not persisted and not reflected in the URL. On change it sets `lang` and `dir` on `<html>` and on a wrapper `<div>`.
- Components call `useLanguage()` from `src/context/LanguageContext.tsx` to get `{ locale, setLocale, t }`. The EN/AR toggle buttons in `Header.tsx` are currently commented out (site is English-only for now); uncomment them and re-add `locale`/`setLocale` to the destructure to re-enable.
- Because locale is client state, `metadata`, sitemap, and JSON-LD are English only. Server-side code that needs copy imports `translations` directly and reads `translations.en` (see `faqs/page.tsx`).
- RTL support: use Tailwind logical utilities (`start-0`, `text-start`, `ps-*`, `ms-*`) rather than `left/right`, flip directional arrow icons with `locale === "ar" ? "rotate-180" : ""`, and add `[dir="rtl"]` overrides in `globals.css` for anything CSS-only.

### Contact actions

- The business phone number lives once in `contactNumber` in `src/constants/site.ts` (display, E.164, `wa.me` URL, `tel:` URL). Never hardcode it elsewhere.
- `ContactActions` renders the WhatsApp + Call button pair; `WhatsAppFloat` is the fixed bottom-right button mounted in `layout.tsx`; `ContactChannels` is the Call / WhatsApp / Email card with copy buttons on the contact page.
- Every former "Request a Quote" button (header, hero, CTA sections, product sidebar, footer) and the contact-page `ContactForm` are commented out in place, not deleted, with a note explaining how to restore them. The `/request-a-quote` route and `QuoteForm` still exist but nothing links to them.
- Business identity is Pakistan (Lahore head office, PKT hours, Karachi/Port Qasim/Gwadar ports). The street address is a placeholder in `siteConfig.contact.address` and the translations until the owner supplies the real one.

### SEO plumbing

- `src/constants/site.ts` exports `siteConfig` (name, contact details, description) and `getBaseUrl()` (`NEXT_PUBLIC_SITE_URL` → `VERCEL_URL` → hardcoded Vercel fallback). Every page computes `BASE_URL`/`PAGE_URL` from it for canonical, OpenGraph and Twitter metadata. `NEXT_PUBLIC_SITE_URL` is the only project env var.
- `src/app/sitemap.ts` is a hardcoded route list. **Add any new route there** and to the breadcrumb schema on the page.
- `robots.ts`, `manifest.ts`, `icon.tsx`, `apple-icon.tsx`, `opengraph-image.tsx`, `twitter-image.tsx` are generated metadata routes. The static PNG equivalents in `public/` come from `scripts/generate-brand-assets.js`; regenerate rather than hand-edit them.
- `next.config.ts` strips `console.*` in production, sets security headers, and allows remote `next/image` sources only from `lh3.googleusercontent.com` (the stock imagery host). Add any new remote host there.

### Photos

- All site photography is local under `public/images/{products,site}/` and referenced only through `src/constants/images.ts` (`productImages` keyed by product id, `siteImages` for hero/about/detail/gallery). Never hardcode image URLs in components; the old `lh3.googleusercontent.com` stock links are gone.
- Photos are Unsplash-licensed (no attribution required) optimized JPEGs, about 1400px wide for cards and 2000px for heroes. The owner asked for no public credits page; the source list is kept outside the repo.
- `/about` assembles the existing About* components plus `LeadershipMessage` and the inquiry banner.
- Solution pages `/pre-engineered-buildings`, `/petrol-pump-canopy` and `/careers` are thin server pages wrapping client content components (`PebContent`, `CanopyContent`, `CareersContent`) built from the shared blocks in `PageSections.tsx` (`PageHero`, `PageIntro`, `IconTileGrid`, `ChipList`, `ProcessSteps`, `PageCta`). Their copy lives in `translations.<locale>.pebPage / canopyPage / careersPage`.
- Home order: Hero, HomeStats (the HomeHighlights strip exists but is unmounted; the owner found it redundant with the stats), HomeAboutTeaser, HomeProductShowcase, HomeServices (shows 12, expandable), HomeFeaturedProjects, LeadershipMessage, InquiryBanner. The header shows only a Call Now button; WhatsApp lives in the floating button and page CTAs.
- The director message in `homePage.leadership` has no name or photo yet; the owner has not supplied them.

### Design language (Oct 2026 redesign)

- Industrial editorial, deliberately unlike the kksteel.com.pk reference: Barlow Condensed display headings (`.display-title`, uppercase, via `--font-display`), Hanken Grotesk body at a larger root size (17px, 18px from md) for older readers, warm `bg-paper` bands, hairline rules (`.rule`), numbered lists (01, 02…), the offset orange `.photo-frame` motif, and full-bleed navy bands. Avoid rounded card grids; prefer divided lists, ruled columns, timelines, and sticky-left/list-right layouts.
- `SectionHeading` (orange bar + kicker + condensed title + lede) is the standard section opener. Buttons are `rounded-md`, not pill/xl.
- Arabic falls back to the sans font for display titles (`[dir="rtl"] .display-title`).
- Header nav always uses the short labels (PEB, Canopy); icons appear only at 2xl.

### Styling

- Tailwind v4, CSS-first: there is no `tailwind.config`. Theme tokens are declared in `@theme` in `src/app/globals.css` and used as normal utilities. Palette is Material-style: `bg-primary` / navy `#11224E`, orange accent `bg-tertiary-fixed-dim` / `#F87B1B`, `bg-surface*`, `text-on-surface*`, etc. Layout tokens: `max-w-container-max` (1280px), `px-margin-desktop` (40px), `gap-gutter` (24px), `py-section-gap` (80px).
- Font is Hanken Grotesk via `next/font` (`--font-hanken-grotesk` → `font-sans`). Icons are the Material Symbols Outlined web font loaded in `layout.tsx`; render with `<span className="material-symbols-outlined">icon_name</span>`.
- Shared utility classes (`.premium-card`, `.glass-panel`, `.industrial-overlay`, `.stat-card-divider`) are defined in `globals.css`.

### Home page and product catalog

- The home page (`src/app/page.tsx`) is intentionally minimal: `Hero` + `HomeHighlights` (highlight), `HomeProductShowcase` (product showcase), `HomeServices` (services), `InquiryBanner` (CTA). The older About/Why/Industries/Gallery/Testimonial home sections still exist in `src/components/` but are not mounted anywhere; do not re-add them to the home page without being asked.
- Home catalog copy lives in `translations.<locale>.homePage` (highlights, products.items, services.items), each item with a Material Symbols `icon` and an `href` into `/products#<id>`.
- The products page grid (`ProductsGrid`) renders `translations.<locale>.productsPage.categories` grouped by `group` (`metals`, `steel`, `fabrication`) with headings from `productsPage.groups`. Each category has a stable `id` (used as the DOM anchor), an `icon`, and `specs`. Only the four metal categories have photos (keyed by id in `ProductsGrid`); the rest render a navy icon tile. Add new products there in both locales.
- The steel and fabrication range (sheets, bars, beams, coils, cable tray, roof sheets, racks, shuttering plate, grating, perforated plate, pallet, solar stands, PEB, petrol pump canopy) mirrors the reference site kksteel.com.pk; specs for the fabrication items come from that site.
- Header nav links carry a Material icon (`icon` field on `navLinks` / `drawerSecondaryLinks` in `Header.tsx`).

### Routes

`/`, `/products`, `/products/aluminum-scrap` (the only product detail page), `/industries`, `/why-choose-us`, `/faqs`, `/contact`, `/request-a-quote`, `/privacy-policy`, `/terms-of-service`, plus `error.tsx` and `not-found.tsx`. The desktop header nav shows only Home / Products / Contact; Why Choose Us, Industries and FAQs appear in the mobile drawer and footer.

## Project rules (from `ai_docs/`)

`ai_docs/AI_PROJECT_RULES.md` is the owner's mandatory standards document and `ai_docs/Prompt.md` is the original brief (in Urdu). The parts that apply to this codebase:

- Match the Figma designs exactly and keep every page fully responsive on all devices.
- Keep the exact URLs listed above; do not rename routes.
- Keep SEO complete on every page: metadata, canonical, OG/Twitter, JSON-LD, sitemap entry.
- English is the default language; every piece of copy must work in both `en` and `ar`.
- Server Components by default, Client Components only when needed; `page.tsx` stays lightweight with no business logic.
- Always `next/image`, never a plain `<img>`.
- Strict TypeScript, no `any`, no unused or commented-out code, zero lint and type errors.
- Any new environment variable must be added to a `.env.example` and documented.
- The rules file also covers databases, auth, payments, AI integrations, etc. Those sections do not apply unless such features are added.
