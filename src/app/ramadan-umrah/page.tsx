import type { Metadata } from "next";
import Image from "next/image";
import { DepartureList } from "@/components/cards/DepartureList";
import { PackageCard } from "@/components/cards/PackageCard";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CallbackForm } from "@/features/inquiry/CallbackForm";
import { departures } from "@/data/departures";
import { siteImages } from "@/data/images";
import { packages, ramadanPackages } from "@/data/packages";
import { buildBreadcrumbSchema, buildFaqSchema, buildMetadata, buildWebPageSchema } from "@/lib/seo";
import { formatPkr } from "@/lib/utils";

const title = "Ramadan Umrah Packages 2027 from Pakistan | Last Ashra with Sehri & Iftar";
const description =
  "Ramadan 2027 Umrah packages from Lahore, Karachi and Islamabad with the last ten nights in Makkah, Sehri and Iftar included, extra Taraweeh shuttles and Eid prayer in Madinah. Limited seats, per-person prices shown.";
const path = "/ramadan-umrah";

export const metadata: Metadata = buildMetadata({ title, description, path, image: siteImages.haramInterior.src });

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Ramadan Umrah", path },
];

const ramadanFaqs = [
  { q: "When is Ramadan 2027 expected?", a: "Ramadan 1448 is expected to begin around 8 February 2027 and end around 9 March 2027, subject to moon sighting. The last ten nights fall in the final week of February and the first days of March; our Ramadan departures leave Pakistan on 24 and 25 February." },
  { q: "Why are Ramadan packages so much more expensive?", a: "Hotels near both Harams charge three to five times their normal rates in the last ten nights, and airlines raise fares for the peak. We fix our hotel allocations months ahead, which is why the price is published and does not change after you pay the deposit." },
  { q: "Are Sehri and Iftar really included?", a: "Yes. Both hotels serve a Sehri and Iftar buffet included in the package. Many pilgrims still break their fast in the Haram with dates and Zamzam; the hotel Iftar is there when you return." },
  { q: "How crowded is Makkah in the last Ashra?", a: "Very. Expect long walks and full prayer halls. We choose hotels with shuttle schedules adapted to Taraweeh and Tahajjud, and our group leaders guide you to less crowded areas of the mosque." },
  { q: "Can I do Itikaf?", a: "Itikaf in Masjid al-Haram requires a permit issued through the Nusuk app in limited numbers. We help you apply, but we cannot guarantee a permit. Many pilgrims spend the nights in the Haram and return to the hotel for a few hours of rest." },
  { q: "When should I book?", a: "Ramadan groups are confirmed four to six months ahead and usually sell out by the end of Rajab. A deposit now secures your seat and hotel at the published price." },
];

const whyRamadan = [
  { icon: "star", title: "Umrah in Ramadan equals Hajj in reward", text: "The Prophet ﷺ said: 'Umrah in Ramadan is equal to Hajj with me.' (Bukhari). Many families save for years for exactly this trip." },
  { icon: "nights_stay", title: "Laylat al-Qadr in Masjid al-Haram", text: "Our 15-night itinerary places the odd nights of the last Ashra in Makkah." },
  { icon: "celebration", title: "Eid in Madinah", text: "You travel to Madinah before Eid and pray Eid in Masjid an-Nabawi, a calmer end to the journey." },
  { icon: "restaurant", title: "Fasting made easy", text: "Sehri and Iftar buffets, extra shuttles after Taraweeh and Tahajjud, and dates and water in every vehicle." },
];

export default function RamadanUmrahPage() {
  const ramadanDepartures = departures.filter((d) => d.label?.includes("Ramadan"));
  const featured = ramadanPackages[0];
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(crumbs)} />
      <JsonLd data={buildWebPageSchema({ name: title, description, path })} />
      <JsonLd data={buildFaqSchema(ramadanFaqs)} />

      <PageHero
        crumbs={crumbs}
        variant="photo"
        image={siteImages.haramInterior}
        urdu="رمضان المبارک میں عمرہ"
        eyebrow="Ramadan 1448 · expected 8 Feb – 9 Mar 2027"
        title={<>The last Ashra in Makkah, <em className="text-gold">Eid in Madinah</em>.</>}
        lede={`Fifteen nights with Sehri and Iftar included, from ${formatPkr(featured.prices.quad)} per person in quad sharing. Departures from Lahore, Karachi and Islamabad on 24–25 February 2027.`}
      >
        <p className="inline-flex items-center gap-2 rounded-lg bg-sunset px-3 py-1.5 text-sm font-bold text-white">
          <Icon name="local_fire_department" className="text-[18px]" /> {featured.seatsLeft} seats left across all three cities
        </p>
      </PageHero>

      {/* Why Ramadan: four stacked rows beside a tall photo */}
      <section className="bg-ivory py-section-sm md:py-section" aria-label="Why ramadan">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="arch-mask relative aspect-[4/5] max-w-md overflow-hidden">
            <Image src={siteImages.dates.src} alt={siteImages.dates.alt} fill sizes="(min-width: 1024px) 480px, 90vw" className="object-cover" />
          </div>
          <div>
            <SectionHeading number="01" eyebrow="Why Ramadan" title={<>A month worth <em>planning for</em>.</>} size="md" />
            <ol className="mt-8 divide-y divide-line border-y border-line">
              {whyRamadan.map((w, i) => (
                <li key={w.title} className="grid grid-cols-[auto_1fr] gap-4 py-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-pale text-gold-deep"><Icon name={w.icon} className="text-[22px]" /></span>
                  <div>
                    <p className="font-bold text-ink"><span className="me-2 font-display italic text-gold-deep">0{i + 1}</span>{w.title}</p>
                    <p className="mt-1 text-sm text-slate">{w.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Package + departures */}
      <section className="bg-night py-section-sm text-white md:py-section" aria-label="Ramadan packages">
        <Container>
          <SectionHeading number="02" eyebrow="Ramadan packages" tone="dark" title={<>Published prices, <em className="text-gold">fixed</em> once you pay the deposit.</>} lede="Seats are allocated in order of deposit. The price shown is per person and includes visa, flights, both hotels, Sehri and Iftar, transfers and ziyarat." />
          <div className="mt-10 grid gap-8 lg:grid-cols-[400px_1fr] lg:gap-12">
            <div>
              {ramadanPackages.map((p) => (
                <PackageCard key={p.slug} pkg={p} />
              ))}
            </div>
            <div className="rounded-2xl bg-ivory p-5 text-ink md:p-7">
              <p className="eyebrow text-gold-deep">Ramadan departures</p>
              <DepartureList departures={ramadanDepartures} showPackage={false} />
              <p className="mt-4 text-sm text-slate">Prefer the first Ashra or a full month? We arrange private Ramadan dates from the {packages.length} base packages. Ask on WhatsApp.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Day in Ramadan timeline */}
      <section className="bg-sand py-section-sm md:py-section" aria-label="Ramadan day">
        <Container className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <SectionHeading number="03" eyebrow="A day in the last Ashra" title={<>How the day <em>flows</em>.</>} size="md" lede="Timings shift with the adhan; this is the rhythm our groups settle into after the first day." />
          <ol className="grid gap-x-8 sm:grid-cols-2">
            {[
              ["3:30 am", "Tahajjud and Sehri", "Shuttle to the Haram for Tahajjud, or Sehri buffet at the hotel first."],
              ["5:00 am", "Fajr in the Haram", "Stay for Quran until the heat rises, then rest at the hotel."],
              ["12:30 pm", "Zuhr", "Most pilgrims pray Zuhr and Asr in the Haram and rest between them."],
              ["6:15 pm", "Iftar", "Dates and Zamzam in the Haram, Maghrib, then dinner at the hotel or in the Haram."],
              ["8:00 pm", "Isha and Taraweeh", "Twenty rak'ahs behind the Imams of the Haram; extra shuttle after Taraweeh."],
              ["Odd nights", "Laylat al-Qadr", "Qiyam until Fajr with the group leader; the hotel keeps Sehri ready."],
            ].map(([time, heading, text]) => (
              <li key={heading} className="flex gap-4 border-b border-line py-4">
                <span className="w-20 shrink-0 font-display text-lg font-semibold text-haram-deep">{time}</span>
                <div>
                  <p className="font-bold text-ink">{heading}</p>
                  <p className="text-sm text-slate">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <FaqSection items={ramadanFaqs} eyebrow="Ramadan questions" lede="Dates, prices, crowds and Itikaf." showAllLink={false} />

      <section className="bg-ivory py-section-sm md:py-section" aria-label="Ramadan form">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading number="04" eyebrow="Reserve now" title={<>Seats go in order of <em>deposit</em>.</>} lede="Leave your number and a consultant confirms current availability for your city within 30 minutes, then sends the booking form." />
          <div className="rounded-2xl border border-line bg-white p-6 shadow-card md:p-8">
            <CallbackForm topic="Ramadan 2027 Umrah" />
          </div>
        </Container>
      </section>

      <CtaBand image={siteImages.madinahNight} title={<>Questions about <em className="text-gold">Ramadan</em>?</>} text="Our consultants have led Ramadan groups for years. Ask about crowds, Itikaf permits, elderly parents or travelling with children." whatsappMessage="Assalam o Alaikum, I am interested in the Ramadan 2027 Umrah package." />
    </>
  );
}
