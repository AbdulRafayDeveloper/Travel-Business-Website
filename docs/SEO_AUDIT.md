# SEO audit and implementation report

Raahi Umrah & Travel, audited and fixed on 2026-10-11 against Google Search Essentials, Core Web Vitals, semantic and entity SEO, E-E-A-T and AI-search guidance, within the limits of what can be verified from the repository and the live deployment.

## 1. Issues found and fixes applied

| Area | Issue found | Fix |
|---|---|---|
| URL source of truth | `getBaseUrl()` fell back to a hardcoded Vercel domain. | Removed. `NEXT_PUBLIC_SITE_URL` is the only configured origin; Vercel production falls back to `VERCEL_PROJECT_PRODUCTION_URL`, previews to their own `VERCEL_URL`, local to localhost. No production domain exists in application code (`grep https://` in `src/` returns only external services). |
| Preview indexing | Preview deployments would have served a production `robots.txt` and `index, follow` header. | `robots.ts` returns `disallow: /` when `VERCEL_ENV` is not `production`; the `X-Robots-Tag` header becomes `noindex, nofollow` on previews. |
| Canonicals | Built by string concatenation. | Built with the `URL` API in `buildMetadata()`; canonical, OG URL and social card URL share one origin. |
| Sitemap | `lastModified` was "now" on every build; no image entries. | Real dates per route (prices date for commercial pages, content and legal dates elsewhere); image sitemap entries for every page, package and guide. Only canonical, indexable URLs are listed. |
| Social previews | Raw photos (not 1200×630) as `og:image`; no fallback for pages without a photo. | Branded JPEG card per page via `/og`, root `opengraph-image` as fallback (see Task 3). |
| Structured data | Organization lacked offices and founder; no Person entities. | `TravelAgency` now carries three office `location`s, `founder`, `aggregateRating`, `sameAs`; About page lists team as `Person` (`worksFor`). Existing: `WebSite`, `WebPage`/`CollectionPage`/`AboutPage`/`ContactPage`/`FAQPage`, `BreadcrumbList`, `TouristTrip` + `Offer` (one per room type), `Article`, `Review`, `Service`, `ItemList` of hotels. |
| Headings | Several H1s did not carry the page's primary entity. | Home, hotels, departures, about and FAQ H1s now name Umrah, the cities or the page topic without keyword stuffing. One H1 per page is enforced by tests. |
| Security headers | CSP and Permissions-Policy missing; `X-Powered-By` exposed. | CSP (self + Google Fonts + Google Maps frame), Permissions-Policy, nosniff, SAMEORIGIN, Referrer-Policy, `poweredByHeader: false`. |
| Error pages | No root-layout error boundary. | `global-error.tsx` added; custom 404 and `error.tsx` already existed. |
| Images | Next warned about unconfigured qualities. | `images.qualities` configured; AVIF/WebP, lazy loading, explicit sizes and alt text everywhere; hero uses `priority`. Long-lived cache headers for `/images/*` and brand icons. |
| Verification | No Search Console hook. | Optional `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` renders the meta tag when set. |

## 2. Keyword map

| Page | Primary | Secondary and long-tail |
|---|---|---|
| `/` | Umrah packages from Pakistan | Umrah packages Lahore / Karachi / Islamabad, Umrah package price, licensed Umrah operator Pakistan |
| `/umrah-packages` | Umrah packages with prices | 3 star / 4 star / 5 star Umrah package, Umrah package per person price, Quad Triple Double sharing |
| `/umrah-packages/[slug]` | Package name (e.g. 12 nights Standard Umrah) | nights in Makkah and Madinah, hotel names, departure cities, airline |
| `/ramadan-umrah` | Ramadan Umrah packages 2027 | last Ashra Umrah, Ramadan Umrah price, Eid in Madinah |
| `/hotels` | Makkah hotels near Haram, Madinah hotels | hotel distance from Haram, per night rate PKR, shuttle hotels |
| `/departures` | Umrah group departures | fixed date Umrah groups, group leader, December school holiday Umrah |
| `/umrah-visa` | Umrah visa assistance Pakistan | Umrah visa documents, polio card, visa processing time, women without mahram |
| `/plan-your-umrah` | Umrah quote | customised Umrah package, Umrah cost estimate |
| `/umrah-guide` and articles | how to perform Umrah, Umrah packing list, Umrah with elderly parents, Makkah ziyarat, Madinah ziyarat, best time for Umrah and cost | step by step, first time pilgrims, Riyadh ul-Jannah booking |
| `/about`, `/reviews`, `/faqs`, `/contact`, `/agents`, `/payment-safety` | Raahi + topic (reviews, FAQs, contact, travel agent partner, payment safety) | licensed Umrah operator, official bank accounts, Umrah fraud |

No two pages target the same primary term; package pages are differentiated by name, nights and hotels.

## 3. Heading structure

One H1 per page (tested). H2 for each section via `SectionHeading`, H3 for items (cards, FAQ questions, team members, hotel names). Legal and guide articles render H2 per section with an in-page table of contents. Footer columns use H3.

## 4. Metadata

Every route exports unique `title` and `description` (uniqueness is tested), canonical, Open Graph (title, description, url, type, site name, locale, 1200×630 image with alt) and Twitter card (summary_large_image, site, creator). Dynamic routes use `generateMetadata` with `generateStaticParams`. Theme colour, viewport, manifest, icons and Apple web app metadata are set in the root layout. Unknown routes return the branded 404 with `noindex`.

## 5. Crawlability, indexing and rendering

All 42 routes are statically prerendered (SSG); no client-side-only SEO content. `robots.txt` allows everything except `/api/` and `/_next/` in production. No query-parameter pages are linked; the package explorer filters client-side without changing the URL. Lowercase, hyphenated, no-trailing-slash URLs throughout. No redirects are needed. Internal link coverage: every route is reachable from header or footer navigation and the sitemap; related packages, related guides and ziyarat cross-links add contextual depth. No orphan pages (tested: every internal link on the home page resolves).

## 6. E-E-A-T and entity signals

Named founder and team with roles and languages, licence lines (placeholders until supplied), three physical offices with map embeds and hours, dated and attributed reviews with a published collection policy, a payment safety page, and legal pages (privacy, terms, refund). Consistent entity naming: "Raahi Umrah & Travel" everywhere, `@id` links between Organization, WebSite, WebPage, Review and Person nodes. Note: the stats, reviews, licence numbers and bank details are demo content supplied by the project and must be replaced with real figures before launch; the schema reflects what the site states.

## 7. AI search and featured snippets

Direct-answer FAQ blocks with `FAQPage` schema on home, packages, hotels, visa, Ramadan and FAQ pages; guides open with a plain-language answer paragraph and use numbered steps and short lists; prices, distances and timelines are stated as facts in text, not only in images.

## 8. Performance and accessibility

Server Components by default; client JS limited to forms, the package explorer, accordions, the header drawer and visa tools. Fonts via `next/font` with `display: swap` and the Urdu face not preloaded. Images: `next/image`, AVIF/WebP, sized, lazy, hero prioritised. Skip link, landmarks, labelled forms and sections, focus-visible ring, keyboard-operable drawer and accordions, colour contrast on the green/gold palette. Measured results are in Task 6's report.

## 9. Validation performed

- `npm run build`: all routes prerendered without warnings.
- Playwright suite on desktop Chromium, mobile Firefox and mobile Chromium: every route checked for 200, one H1, metadata, valid JSON-LD, no console errors, no overflow, no broken images; sitemap and robots; unique titles and descriptions; social card size and type.
- Live checks on the Vercel production deployment for sitemap host, robots, icons and social cards.
- Not performed (no access from this environment): Google Search Console, PageSpeed Insights, Rich Results Test and the W3C validator. JSON-LD was validated structurally by parsing every block and checking required properties in code.

## 10. Environment and URL configuration

`NEXT_PUBLIC_SITE_URL` (documented in `.env.example`) is the single origin; set it in Vercel Production to the final domain. `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` and `INQUIRY_WEBHOOK_URL` are optional. No secrets are exposed through public variables. Preview deployments never produce production canonicals, sitemap or robots.
