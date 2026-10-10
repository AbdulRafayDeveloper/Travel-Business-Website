# Raahi Umrah & Travel

Marketing and lead-generation website for an Umrah travel company serving the Pakistani market. Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4; deployed on Vercel.

Live site: https://travel-business-website-2.vercel.app

## What the site does

- Publishes every Umrah package with per-person prices for Quad, Triple and Double rooms, named Makkah and Madinah hotels with distance to the Haram in metres, airlines, departure cities, inclusions and a day-by-day itinerary.
- Hotel-only nightly rates, a group departure calendar, a Ramadan landing page and six long-form Umrah guides.
- Visa assistance page with an interactive document checklist, a consultation form with client-side document validation and a demo status tracker. Wording is deliberately honest: Raahi assists; Saudi authorities issue visas.
- A three-step "Plan your Umrah" form with a live cost estimate, plus call-back, contact, agent-partner and hotel-only forms. All forms validate with Zod on the client and in a server action, return a reference number and hand off to a prefilled WhatsApp message.
- Complete SEO: per-page metadata, canonical, Open Graph/Twitter, JSON-LD (TravelAgency, WebSite, BreadcrumbList, FAQPage, TouristTrip + Offer, Article, Review), sitemap, robots, manifest and generated social images.

## Getting started

```bash
npm install
npm run dev            # http://localhost:3000
npm run lint           # eslint
npm run typecheck      # tsc --noEmit
npm run build && npm run start
```

Copy `.env.example` to `.env.local`. `NEXT_PUBLIC_SITE_URL` sets canonical URLs; `INQUIRY_WEBHOOK_URL` (optional) forwards validated leads to a webhook.

## Testing

Playwright runs three projects: desktop Chromium (1440×900), mobile Firefox (390×844) and mobile Chromium (Pixel 7).

```bash
npm run test:e2e                 # all projects (starts the dev server on port 3100 if needed)
npm run test:e2e:desktop
npm run test:e2e:mobile
BASE_URL=https://travel-business-website-2.vercel.app npm run test:e2e   # against a deployment
```

The suite checks every route for HTTP 200, a single H1, metadata, valid JSON-LD, no console errors, no horizontal overflow and no broken images; that the home hero fits the first viewport; the mobile drawer, sticky contact bar and desktop navigation; the package explorer filters and compare drawer; every form's validation and success state; the visa checklist and tracker; and sitemap, robots, manifest and social images.

## Project structure

```
src/app/                 routes (thin server components), metadata routes, error/not-found/loading
src/components/
  layout/                Header, Footer, PageHero, MobileStickyBar, WhatsAppFloat, NoticeRibbon, LegalPage
  ui/                    Button, Field, SectionHeading, Accordion, Badge, Stars, PriceBlock, Breadcrumbs, JsonLd, Icon
  graphics/              Logo, LogoMark, GeoPattern (SVG)
  cards/                 PackageCard, HotelTable, ReviewCard, GuideCard, DepartureList
  home/                  one file per home-page section
  packages/              package detail sections
  sections/              shared page sections (FaqSection, CtaBand, PaymentPlans, PackagesIncluded)
src/features/            client-side interactive features (forms, explorer, visa tools)
src/data/                typed content: packages, hotels, departures, reviews, faqs, guides, ziyarat, company, visa, images
src/config/              site identity, contact channels, navigation
src/lib/                 seo helpers, validation schemas, utils
src/actions/             server action for lead submission
src/types/               shared TypeScript types
public/images/umrah/     optimised photography (Pexels/Unsplash, see manifest.json)
tests/                   Playwright suite
docs/SITE_PLAN.md        research findings, brand, design system and page plan
```

## Content and brand

- Brand: **Raahi** (راہی, "wayfarer"). Palette: deep green `#0E4D45`, gold `#D4A53A`, ivory/sand neutrals, night `#0B1F2A`. Fonts: Fraunces (display), Plus Jakarta Sans (body), Noto Nastaliq Urdu (Urdu accents).
- Phone numbers, emails, office addresses, licence numbers and bank accounts are placeholders in `src/config/site.ts` and `src/data/company.ts`; replace them before going live with a real business.
- Photos are licensed from Pexels and Unsplash (no attribution required); sources are recorded in `public/images/umrah/manifest.json`.

## Deployment

The project is linked to the Vercel project `travel-business-website-2`. `git push` to `main` or `vercel --prod` deploys. Set `NEXT_PUBLIC_SITE_URL` in Vercel to the final domain when one is attached.
