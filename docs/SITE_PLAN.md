# Raahi Umrah — Site Plan

Working document for the rebuild of this codebase into an Umrah travel website for the Pakistani market. Written 2026-10-11 after studying the five reference sites.

## 1. What the references taught us

| Site | Borrow | Avoid |
|---|---|---|
| **Sastaticket** (`/pages/umrah-packages`) | Double / Triple / Quad per-person price block; "12 Nights, 13 Days" + star rating as card title; separate hotel-only nightly rates; distance to Haram in metres; bilingual EN/Urdu visa-deadline notice bar; short lead form with +92 prefix and WhatsApp alternative beneath; payment-logo strip (JazzCash, Easypaisa, HBL, Visa, Mastercard, PayPak); "Call 24/7" in header | Carousels for the core catalogue; no filters, no detail pages, no itineraries; fake "last updated" timestamp; typos (Li Meridian, Makkha); prices marked up as H2; whole-card click opens popup; no Terms/Refund links; no FAQ or Product schema |
| **Trips.pk** | 3-field funnel (duration 7–28 days, passengers 1–10+, tier Economy→VIP) then name/city/phone, explicit callback promise, WhatsApp handoff on thank-you; floating WhatsApp + "Get Offers" pair; mid-page "agents online" banner; concrete trust specifics (licence authority, D-U-N-S, 24/7 phone vs office hours, "no surprise charges", named consultants in reviews); hotel tables with distance; inclusions/exclusions; "what cheap quotes omit" warnings; FAQPage schema everywhere; city × duration × tier landing matrix; official-accounts payment-safety page | Missing/contradictory prices; "Search" that never shows results; typos everywhere; two WhatsApp numbers; buttons linking to `#`; countdown timers at 00; no sitemap; keyword-stuffed pages |
| **Bookme** | Umrah theme in deep green `#12413B` + gold `#D4AF37`; traveller counters (Adult/Child/Infant); per-pilgrim passport dropzone; price summary that updates; 4-step progress bar; paired filled + outline buttons; "Why book with us" six tiles; FAQ accordion with FAQPage schema | Claiming to issue visas / "instant" / ministry logo; OG tags reused from home; thin explanation of process |
| **BookMyUmrah** | Occupancy price table (Double/Triple/Quad) with validity window; distance to Haram on every card; facilities matrix with expandable policies; compare table of your own tiers; "no payment until verification call"; multi-criteria reviews (seniors-friendly, hotels, organisation, value) | Site is dead (NXDOMAIN since mid-2025); thin cards with truncated names, lorem-ipsum footer, duplicated FAQ answers, "0 of 0 people" ratings, bookings that led nowhere |
| **TFC Tours** | Numbered sections (01–06); Urdu line above English H2 (Nastaliq); eyebrow "Since 2005 · City"; status chips "Open now · Replies in under 1 hour"; B2B agent portal section with concrete requirements; full FAQ; TravelAgency + LocalBusiness JSON-LD with geo & hours; hreflang; per-page H1 | No prices, hotel names or reviews; "0+" animated counters; conflicting years/hours/phone formats; broken wa.me digit; unanswered FAQs; red/black luxury palette that reads as "expensive" rather than trustworthy |

### 1a. BookMyUmrah
Verified 2026-10-11: the domain no longer resolves (last Wayback capture June 2025). Findings above come from archived snapshots of the 2015–2021 marketplace and a short-lived 2025 relaunch.

### Cross-cutting conclusions
1. **Price transparency is the #1 differentiator.** Every package shows PKR per person for Quad / Triple / Double, a real "Prices updated on" date, and what is included/excluded. Hotels show nightly PKR and walking distance.
2. **WhatsApp is the primary conversion channel in Pakistan.** Every package card, hero and CTA offers a prefilled WhatsApp message; a sticky mobile Call + WhatsApp bar; a floating WhatsApp button; callback promise ("a consultant calls you within 30 minutes, 9 am–11 pm PKT").
3. **Trust must be specific, not decorative.** Licence/enrolment numbers (placeholders clearly labelled), named consultants, dated reviews with departure city, Google rating with count, payment-safety notice ("pay only to these official accounts"), director's message, physical offices with maps.
4. **Pakistani needs:** departure cities (Lahore, Karachi, Islamabad, Sialkot, Multan, Peshawar, Faisalabad); Ramadan / Shab-e-Barat / winter / school-holiday departures; family rooms and elderly care (wheelchair, ground-floor); PIA / Saudia / Airblue / flynas / flyJinnah; JazzCash / Easypaisa / bank transfer / instalments; Urdu touches; polio card & vaccination reminders; women travelling without mahram now allowed (note).
5. **Honest visa language.** We *assist* with Umrah visa processing through Saudi Ministry-licensed operators; the visa is issued by Saudi authorities; the upload form starts a consultation, not a government application. No "instant", "guaranteed" or ministry logos.
6. **No carousels for the catalogue; no "0+" counters; no box grids as the default layout.** Each section gets its own composition (timeline, ledger table, split arch photo, ribbon band, map strip, ticket-stub cards, marquee notice, stacked accordion, stats as a hairline ruled row, etc.).

## 2. Brand

- **Name:** **Raahi** (راہی — "wayfarer"). Full: *Raahi Umrah & Travel*. Distinct from Sastaticket / Trips / Bookme / BookMyUmrah / The Flight Centre.
- **Tagline (EN):** "Your trusted companion to the Haramain."
- **Tagline (UR):** آپ کا ہمسفر، حرمین تک
- **Logo mark:** a pointed mihrab arch in deep green containing a rising gold path (the road / "raah") that ends in a crescent; works as a square app icon. Wordmark set in Fraunces.
- **Voice:** warm, plain, specific. Short sentences. Prices and facts first. No hype words ("instant", "guaranteed", "#1").
- **Identity details (placeholders, labelled):** Head office Lahore (Gulberg), branches Karachi & Islamabad; "Licensed Umrah operator — Ministry of Religious Affairs enrolment no. [placeholder]"; DTS licence Punjab [placeholder]; since 2012; 18,000+ pilgrims served (static).

## 3. Visual system

- **Colours** (Tailwind v4 `@theme` tokens):
  - `haram` deep green `#0E4D45` (primary), `haram-deep` `#083833`, `haram-soft` `#DCEBE6` (tint), `haram-mist` `#F0F6F4`
  - `gold` `#D4A53A`, `gold-deep` `#A97E17` (text on light), `gold-pale` `#F7EBC9`
  - `ivory` `#FBF8F2` (page), `sand` `#F3ECDD` (bands), `sand-dark` `#E7DCC4`
  - `night` `#0B1F2A` (dark bands), `ink` `#15262B` (text), `slate` `#51636A` (muted text), `line` `#D9D5CB` (rules)
  - `sunset` `#E07A3F` (urgency badges only), `whatsapp` `#25D366`
- **Type:** Fraunces (display, 500–700) · Plus Jakarta Sans (body 400–800) · Noto Nastaliq Urdu (Urdu lines, 400/600). Root 17px, 18px from md.
- **Motifs:** pointed-arch photo masks (`.arch-mask`), 8-point star geometric SVG pattern at low opacity on bands, hairline gold rules, numbered section labels (01 · Packages), ticket-stub package cards with perforated edge, ribbon price tags, dotted route lines (Pakistan → Jeddah → Makkah → Madinah).
- **Buttons:** `rounded-lg`, filled green primary, gold secondary, outline tertiary, WhatsApp green; paired filled + outline.

## 4. Routes and sections

| Route | Purpose | Sections (each visually distinct) |
|---|---|---|
| `/` | Home | 1 Hero (full-viewport-fit, arch photo, Urdu line, 3-field quick planner, trust chips) · 2 Notice ribbon (visa dates / Ramadan seats) · 3 Stats hairline row · 4 Featured packages (ticket-stub cards, Q/T/D prices) · 5 How it works (4-step route line) · 6 Why Raahi (split: arch photo + numbered list) · 7 Hotels teaser (ledger table Makkah/Madinah) · 8 Departures strip (month tabs) · 9 Reviews (big-quote + dated review list, Google rating) · 10 Visa assistance band (dark, 3 steps) · 11 Guides teaser (editorial list) · 12 Payment & trust strip (logos) · 13 Director message · 14 Final CTA (callback form + WhatsApp) |
| `/umrah-packages` | Catalogue | Hero · filters (duration, tier, departure city, month, budget) · sortable list with Q/T/D prices · compare drawer (up to 3) · "what is included in every package" · payment plans · FAQ · CTA |
| `/umrah-packages/[slug]` | Package detail (8 packages) | Sticky price card · gallery · hotels with distance · day-by-day itinerary · inclusions/exclusions · flights · dates & availability · booking steps · related packages · FAQ · JSON-LD `TouristTrip` + `Offer` |
| `/ramadan-umrah` | Seasonal landing | Ramadan dates, why book early, Ramadan packages filtered, Taraweeh/Iftar notes, FAQ |
| `/hotels` | Hotel-only rates | Makkah list + Madinah list (ledger tables: distance, meals, shuttle, nightly PKR), map strip, hotel-only inquiry |
| `/departures` | Group departure calendar | Month-by-month list, seats left, airline, from-city, price-from |
| `/umrah-visa` | Visa assistance | Honest explainer · eligibility · document checklist (interactive) · fees & timeline · upload consultation form (demo, client-side) · status tracker (reference-number demo) · FAQ |
| `/plan-your-umrah` | Smart inquiry | 3-step planner (trip → travellers → contact) with live estimate range, RHF + Zod, server action validation, WhatsApp handoff |
| `/umrah-guide` | Guides hub | Article list |
| `/umrah-guide/[slug]` | Guide articles (6) | How to perform Umrah · First-time checklist · Umrah with family & elderly · Makkah ziyarat · Madinah ziyarat · Best time & costs |
| `/about` | Company | Story timeline · team · licences · offices · director |
| `/reviews` | Reviews | Google rating summary · filterable dated reviews · video placeholders · leave-a-review CTA |
| `/faqs` | FAQ | Grouped accordions + FAQPage schema |
| `/contact` | Contact | Offices with maps · hours · channels · form |
| `/agents` | B2B partners | Portal benefits · requirements · registration interest form |
| `/payment-safety` | Official accounts | Accepted methods · official account list · scam warning |
| `/privacy-policy`, `/terms-and-conditions`, `/refund-policy` | Legal | Prose |
| `loading.tsx`, `error.tsx`, `not-found.tsx` | System | |

## 5. Data model (`src/data/*.ts`, typed in `src/types/`)

- `Package { slug, name, nights, days, tier (economy|standard|premium|vip), stars, departureCities[], airlines[], makkahHotel{id, nights}, madinahHotel{id, nights}, meals, transport, visaIncluded, ziyarat, prices{quad,triple,double}, pricesUpdatedOn, highlights[], itinerary[], inclusions[], exclusions[], tags[], seatsLeft?, featured }`
- `Hotel { id, city, name, stars, distanceM, walkMinutes, shuttle, meals, nightlyPkr, image, amenities[] }`
- `Departure { id, date, from, airline, packageSlug, seatsLeft, priceFrom }`
- `Review { id, name, city, date, rating, text, package, consultant? }`
- `FaqGroup { id, title, items[{q,a}] }`
- `Guide { slug, title, excerpt, readMinutes, sections[{heading, paragraphs[]}] }`
- `ZiyaratSite { id, city, name, blurb, image }`
- `Office { city, address, phone, hours, mapEmbed }`

## 6. Architecture decisions

- English-first with Urdu accents (no locale switcher, no `ar` mirror). The old `LanguageProvider` is removed; copy lives in typed data/content modules so most components are **Server Components**.
- Client Components only for: header drawer, package filters/compare, forms (React Hook Form + Zod), accordions, visa tracker, planner estimate, sticky mobile bar.
- Server action `submitInquiry` validates with Zod; if `INQUIRY_WEBHOOK_URL` is set it forwards the lead, otherwise returns success (documented in `.env.example`). The client also builds a prefilled WhatsApp message.
- SEO: per-page `metadata`, canonical, OG/Twitter, JSON-LD (`TravelAgency`, `WebSite`, `BreadcrumbList`, `FAQPage`, `TouristTrip`/`Offer`, `LodgingBusiness`, `Article`), sitemap incl. dynamic routes, robots, manifest, generated OG image.
- Folder structure: `src/app`, `src/components/{layout,ui,graphics,sections/*}`, `src/features/*` (interactive), `src/data`, `src/types`, `src/lib`, `src/config`, `src/actions`, `src/hooks`.
- Testing: Playwright (`tests/`), projects for Desktop Chromium, Mobile Firefox (Pixel-size viewport), Mobile Chromium; checks hero fit, nav drawer, links, forms, no console errors, responsive screenshots.
