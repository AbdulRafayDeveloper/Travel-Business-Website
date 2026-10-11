# Raahi Umrah & Travel

Marketing and lead-generation website for an Umrah travel agency serving Pakistan. It publishes packages with real per-person prices, hotel rates, group departure dates and visa guidance, and turns visitors into leads through validated forms that hand off to WhatsApp. Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4, and deployed on Vercel.

## Overview

The site exists to let a pilgrim compare Umrah packages without a phone call, trust what they see, and then reach a consultant in one tap. Content is written for Pakistani families: departure cities across Pakistan, prices in PKR for Quad, Triple and Double sharing, JazzCash and Easypaisa payment options, Urdu accents in the headings, and plain English throughout.

It is intended for three audiences:

- Pilgrims and families choosing a package, a hotel or a departure date.
- Existing customers checking visa requirements or the status of their application.
- Travel agents who want to resell the packages through the partner programme.

Core workflow: a visitor browses packages (filter, sort, compare), opens a package page, and either messages WhatsApp with a prefilled text about that package or submits the three-step planner. Every form is validated in the browser and again in a server action, returns a reference number, and offers a WhatsApp handoff that includes the reference and the visitor's choices. There is no database; leads can be forwarded to a webhook.

## Features

### Packages and pricing
- Eight packages with Quad, Triple and Double prices per person, the hotel in each city with walking distance to the Haram, airlines, departure cities, inclusions and exclusions, and a generated day-by-day itinerary.
- Catalogue with category, duration and departure-city filters, price and length sorting, and a side-by-side comparison drawer for up to three packages.
- Ramadan landing page with the last-Ashra package, its departures and a day-in-Ramadan timeline.
- Hotel-only listings for Makkah and Madinah with nightly rates and distances.
- Group departure calendar grouped by month with seats left and starting prices.

### Visa assistance
- Document checklist with progress, a consultation form with client-side file validation (type and size), and a demo status tracker driven by booking references.
- Wording that states the agency assists and Saudi authorities issue the visa.

### Lead capture
- Three-step planner with a live cost estimate, prefilled from the home page quick planner or from a package page.
- Call-back, contact, hotel-only and travel-agent forms.
- Server action that validates with Zod, returns a reference and optionally forwards the lead to a webhook.
- Prefilled WhatsApp links on every package card, hero, call-to-action band, sticky mobile bar and floating desktop button.

### Content
- Six long-form guides (rituals, packing, elderly and children, Makkah and Madinah ziyarat, timing and cost) with in-page tables of contents.
- About, reviews with a rating summary, FAQs by topic, contact with office maps, agent programme, payment safety, privacy, terms and refund pages.

### SEO and branding
- Per-page metadata, canonical URLs, Open Graph and Twitter cards, JSON-LD (TravelAgency with offices, WebSite, WebPage, BreadcrumbList, FAQPage, TouristTrip with Offers, Article, Review, Person).
- Image sitemap with real modification dates, robots rules that block preview deployments, security headers including a Content Security Policy.
- Branded 1200×630 social cards rendered on demand at `/og` with the page title and photo, plus the full icon set (favicons, Apple, Android, maskable, monochrome, pinned tab) and a web app manifest.

### Quality
- Playwright suite across desktop Chromium, mobile Firefox and mobile Chromium covering every route, forms, navigation, SEO routes and the icon subset.
- Lint, strict TypeScript and a production build with every route prerendered.

## Tech Stack

| Category | Technology |
|-----------|------------|
| Frontend | Next.js 16.2 (App Router, Server Components, Turbopack), React 19.2, TypeScript 5 (strict) |
| Backend | Next.js server action for leads (`src/actions/leads.ts`), Node.js route handler for social cards (`src/app/og/route.tsx`) |
| Database | None; content lives in typed TypeScript modules under `src/data` |
| Authentication | None |
| AI Services | None |
| State Management | React state and React Hook Form; no global store |
| Styling | Tailwind CSS v4 (CSS-first `@theme` tokens), Fraunces, Plus Jakarta Sans and Noto Nastaliq Urdu via `next/font`, self-hosted Material Symbols subset |
| Validation | Zod 4 (client and server), `@hookform/resolvers` |
| Images | `next/image` with AVIF/WebP, `sharp` for social cards |
| Testing | Playwright 1.64 |
| Deployment | Vercel (`vercel.json`), GitHub `main` branch auto-deploys |
| Other Services | WhatsApp deep links (`wa.me`), Google Maps embeds on the contact page, optional lead webhook |

## Project Structure

```
raahi-umrah/
├── src/
│   ├── app/                 Routes, metadata routes (sitemap, robots, manifest, icons, OG), error pages
│   │   ├── umrah-packages/  Catalogue and [slug] package pages
│   │   ├── umrah-guide/     Guide index and [slug] articles
│   │   ├── og/              Route handler that renders branded social cards
│   │   └── ...              hotels, departures, ramadan-umrah, umrah-visa, plan-your-umrah, about, reviews, faqs, contact, agents, payment-safety, legal
│   ├── components/
│   │   ├── layout/          Header (drawer), Footer, PageHero, MobileStickyBar, WhatsAppFloat, NoticeRibbon, LegalPage
│   │   ├── ui/              Button, Field, SectionHeading, Accordion, Badge, Stars, PriceBlock, Breadcrumbs, JsonLd, Icon
│   │   ├── graphics/        Logo, LogoMark, GeoPattern (SVG)
│   │   ├── cards/           PackageCard, HotelTable, ReviewCard, GuideCard, DepartureList
│   │   ├── home/            One file per home-page section
│   │   ├── packages/        Package detail sections
│   │   └── sections/        Shared page sections (FaqSection, CtaBand, PaymentPlans, PackagesIncluded)
│   ├── features/            Client components with state: forms, package explorer, visa checklist and tracker
│   ├── data/                Packages, hotels, departures, reviews, FAQs, guides, ziyarat, company, visa, image registry
│   ├── config/              Site identity and contact channels, navigation, icon subset list
│   ├── lib/                 SEO builders, social card renderer, Zod schemas, formatting utilities
│   ├── actions/             Server action for lead submission
│   └── types/               Shared TypeScript types
├── public/
│   ├── images/umrah/        Optimised photography (Pexels and Unsplash; sources in manifest.json)
│   ├── fonts/               Self-hosted Material Symbols subset
│   └── *.png, *.svg, *.ico  Brand icons
├── tests/                   Playwright specs and the route list
├── docs/                    Site plan, SEO audit, performance report
├── next.config.ts           Security headers, CSP, image qualities, cache headers
├── playwright.config.ts     Three browser projects; starts the dev server when needed
└── .env.example             Documented environment variables
```

## Architecture

### Frontend
Every route under `src/app` is a thin Server Component: it builds metadata with `buildMetadata()`, renders JSON-LD blocks, and composes section components. Sections are Server Components by default and read copy from `src/data` and identity from `src/config/site.ts`; the phone number, offices, licences and social links live in one place. Client Components are limited to what needs state: the header drawer, accordions, the package explorer, the visa checklist and tracker, the quick planner and the forms. All routes are prerendered at build time; the two dynamic segments use `generateStaticParams`.

### Styling
Design tokens (colours, fonts, spacing, radii) are declared in `@theme` in `src/app/globals.css` and used as Tailwind utilities. Display headings use Fraunces with an italic gold accent, body copy uses Plus Jakarta Sans, and Urdu lines use Noto Nastaliq Urdu with `font-display: optional`. Icons are Material Symbols subset to the names in `src/config/icons.ts` and served from `public/fonts`.

### Data flow
Content is plain TypeScript: packages reference hotels by id, departures reference packages by slug, and the image registry maps every photo to a path and alt text. Pages import these modules directly, so changing a price or a hotel is a data edit, not a component edit. The SEO helpers in `src/lib/seo.ts` derive every absolute URL from `getBaseUrl()`, which reads `NEXT_PUBLIC_SITE_URL` and falls back to the Vercel production URL, the preview URL or localhost.

### Forms and the lead action
Forms use React Hook Form with Zod resolvers. On submit they call `submitLead(kind, values)`, a server action that re-validates with the same schema, generates a reference such as `RH-ABC123XYZ`, forwards the payload to `INQUIRY_WEBHOOK_URL` when configured (with a timeout and structured logging, never logging personal data), and returns a typed result. The success state shows the reference and a WhatsApp link whose message includes the visitor's choices. The visa consultation form validates files in the browser and does not upload them.

### Social cards
`src/lib/og.tsx` renders a branded 1200×630 card with `next/og`, embeds the page photo cropped by `sharp`, loads the brand fonts from Google Fonts at render time, and re-encodes the result as JPEG so previews stay under the size limits of messaging apps. `/og` accepts the title, eyebrow, subtitle and photo key as query parameters; the root `opengraph-image` and `twitter-image` use the same renderer as the fallback.

### External integrations
WhatsApp links are built by `whatsappUrl()` in `src/config/site.ts`. The contact page embeds Google Maps for each office. No other third-party scripts run in the browser.

## Getting Started

### Prerequisites
- Node.js 20 or later (Vercel builds with Node 24)
- npm 10 or later
- For end-to-end tests: Playwright browsers (`npx playwright install chromium firefox`)

### Installation

```bash
git clone https://github.com/AbdulRafayDeveloper/Travel-Business-Website.git
cd Travel-Business-Website
npm install
cp .env.example .env.local   # then edit values
npm run dev                  # http://localhost:3000
```

### Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Recommended in production | Canonical origin for canonical links, sitemap, robots, Open Graph and JSON-LD. Without it, Vercel production uses the project URL, previews use their own URL and local uses `http://localhost:3000`. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional | Google Search Console verification token; renders the meta tag when set. |
| `INQUIRY_WEBHOOK_URL` | Optional | HTTPS endpoint that receives validated leads as JSON. Leave empty to run without a backend. |

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build; every route is prerendered |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (`next/core-web-vitals` and `next/typescript`) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run test:e2e` | Playwright on all three projects (starts the dev server on port 3100 if nothing is listening) |
| `npm run test:e2e:desktop` / `npm run test:e2e:mobile` | Subsets of the suite |

Run the suite against a deployment with `BASE_URL=https://your-domain npm run test:e2e`.

## Testing

The Playwright suite (`tests/`) checks, for every route: HTTP 200, exactly one H1, title and description, a canonical link, valid JSON-LD, no console errors, no horizontal overflow and no broken images after scrolling. It also covers the home hero fitting the first viewport, the mobile drawer (open, scroll lock, navigate, close), the sticky contact bar versus the desktop WhatsApp button, the package explorer filters and compare drawer, every form's validation and success state, the visa checklist and tracker, the sitemap, robots, manifest, icons and social cards, uniqueness of titles and descriptions, and that every Material Symbols icon used in the code is in the subset list.

## Content and configuration

- Prices, hotels, departures, reviews, FAQs and guides are edited in `src/data`. Update `siteConfig.pricesUpdatedOn` when prices change; it is shown on the site and used in the sitemap.
- Phone number, email, offices, licence lines, social links and support hours are in `src/config/site.ts`.
- Phone numbers, addresses, licence numbers and bank accounts in the data are placeholders until the business supplies real ones.
- Photos live in `public/images/umrah` and are registered with alt text in `src/data/images.ts`.

### Fonts
Fraunces, Plus Jakarta Sans and Noto Nastaliq Urdu are loaded through `next/font` in `src/app/layout.tsx`. Material Symbols is a self-hosted subset: after adding an icon to `src/config/icons.ts`, request the stylesheet URL exported as `materialSymbolsSubsetUrl` with a current Chrome user agent, download the WOFF2 it references and replace `public/fonts/material-symbols.woff2`. The icon test fails if an icon is used without being listed.

## Deployment

Pushing to `main` deploys to the Vercel project `travel-business-website-2`; `vercel --prod` deploys from a local checkout. Set `NEXT_PUBLIC_SITE_URL` in the Vercel project's Production environment to the final domain. Preview deployments serve a `robots.txt` that disallows crawling and a `noindex` header, so they can never be indexed in place of the production site.
