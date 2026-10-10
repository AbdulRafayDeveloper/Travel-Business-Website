import type { Metadata } from "next";
import Image from "next/image";
import { HotelTable } from "@/components/cards/HotelTable";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CallbackForm } from "@/features/inquiry/CallbackForm";
import { siteConfig } from "@/config/site";
import { faqGroups } from "@/data/faqs";
import { hotels, hotelsInCity } from "@/data/hotels";
import { siteImages } from "@/data/images";
import { buildBreadcrumbSchema, buildFaqSchema, buildHotelListSchema, buildMetadata, buildWebPageSchema } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

const title = "Makkah & Madinah Hotels Near the Haram with Nightly Rates in PKR";
const description = `Hotel-only rates for ${hotels.length} inspected hotels in Makkah and Madinah: distance to the Haram in metres, meals, shuttle and price per night in PKR. Book just the hotel if you have your own flights.`;
const path = "/hotels";

export const metadata: Metadata = buildMetadata({ title, description, path, image: siteImages.hotelsHero.src });

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Hotels", path },
];

const hotelFaqs = [faqGroups[3].items[1], faqGroups[3].items[2], faqGroups[3].items[4], faqGroups[0].items[2]];

const distanceGuide = [
  { range: "0 – 200 m", icon: "directions_walk", text: "Inside or beside the Haram complex. Elderly pilgrims and families with small children should aim for this band." },
  { range: "200 – 600 m", icon: "directions_walk", text: "A comfortable 3 – 8 minute walk through covered streets with shops and restaurants." },
  { range: "600 m – 1.5 km", icon: "hiking", text: "Fine for fit adults. Expect 10 – 18 minutes each way; hills on the Misfalah side of Makkah." },
  { range: "Shuttle hotels", icon: "directions_bus", text: "Further out with a free 24-hour bus. Cheapest option; allow 30 – 45 minutes door to gate around prayer times." },
];

export default function HotelsPage() {
  const makkah = hotelsInCity("Makkah");
  const madinah = hotelsInCity("Madinah");
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(crumbs)} />
      <JsonLd data={buildWebPageSchema({ name: title, description, path, type: "CollectionPage" })} />
      <JsonLd data={buildHotelListSchema(hotels)} />
      <JsonLd data={buildFaqSchema(hotelFaqs)} />

      <PageHero
        crumbs={crumbs}
        variant="split"
        image={siteImages.hotelsHero}
        urdu="مکہ اور مدینہ کے ہوٹل"
        eyebrow={`${hotels.length} inspected hotels · rates updated ${formatDate(siteConfig.pricesUpdatedOn)}`}
        title={<>Hotels we have <em>slept in</em>, priced per night.</>}
        lede="Already have your flights or visa? Book only the hotel. Every distance below is the walk from the hotel door to the nearest Haram gate, measured by our team."
      >
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink">
          <li className="flex items-center gap-1.5"><Icon name="bed" className="text-[18px] text-haram" /> Double room, per night</li>
          <li className="flex items-center gap-1.5"><Icon name="family_restroom" className="text-[18px] text-haram" /> Triple &amp; quad on request</li>
          <li className="flex items-center gap-1.5"><Icon name="event_available" className="text-[18px] text-haram" /> Held for 24 h while you decide</li>
        </ul>
      </PageHero>

      {/* Distance guide as a ruled strip */}
      <section className="border-b border-line bg-sand" aria-label="How to read the distances">
        <Container>
          <dl className="grid divide-y divide-line md:grid-cols-4 md:divide-x md:divide-y-0">
            {distanceGuide.map((d) => (
              <div key={d.range} className="py-5 md:px-5 md:first:ps-0 md:last:pe-0">
                <dt className="flex items-center gap-2 font-display text-xl font-semibold text-haram-deep"><Icon name={d.icon} className="text-[22px] text-gold-deep" />{d.range}</dt>
                <dd className="mt-1 text-sm text-slate">{d.text}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Makkah */}
      <section className="bg-ivory py-section-sm md:py-section" aria-label="Makkah">
        <Container className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading number="01" eyebrow="Makkah al-Mukarramah" title={<>Hotels around <em>Masjid al-Haram</em>.</>} size="md" lede="From budget shuttle hotels to rooms inside the Clock Tower. Shuttle hotels are the cheapest way to stay longer; walkable hotels save energy for worship." />
            <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src={siteImages.makkahNight.src} alt={siteImages.makkahNight.alt} fill sizes="(min-width: 1024px) 420px, 100vw" className="object-cover" />
            </div>
          </div>
          <HotelTable city="Makkah" hotels={makkah} />
        </Container>
      </section>

      {/* Madinah */}
      <section className="bg-haram-mist py-section-sm md:py-section" aria-label="Madinah">
        <Container className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <HotelTable city="Madinah" hotels={madinah} className="lg:order-1" />
          <div className="lg:order-2 lg:sticky lg:top-32 lg:self-start">
            <SectionHeading number="02" eyebrow="Madinah al-Munawwarah" title={<>Hotels around <em>Masjid an-Nabawi</em>.</>} size="md" lede="The Central Zone is flat and compact, so almost every hotel here is within a few minutes' walk. Rooms facing the courtyard let you hear the adhan." />
            <div className="arch-mask relative mt-8 aspect-[4/5] max-w-xs overflow-hidden">
              <Image src={siteImages.madinahNight.src} alt={siteImages.madinahNight.alt} fill sizes="(min-width: 1024px) 320px, 70vw" className="object-cover" />
            </div>
          </div>
        </Container>
      </section>

      {/* Hotel-only inquiry */}
      <section className="bg-ivory py-section-sm md:py-section" aria-label="Hotel inquiry">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading number="03" eyebrow="Hotel-only booking" title={<>Send your dates, get a <em>held room</em>.</>} lede="Tell us the hotel, dates and number of rooms. We confirm availability, hold the room for 24 hours and send a payment link to an official account." />
          <div className="rounded-2xl border border-line bg-white p-6 shadow-card md:p-8">
            <CallbackForm topic="Hotel-only booking" />
          </div>
        </Container>
      </section>

      <FaqSection items={hotelFaqs} eyebrow="Hotel questions" lede="Distance, food, elderly travellers and changing hotels." />
      <CtaBand image={siteImages.madinahCourtyard} title={<>Need flights and visa <em className="text-gold">too</em>?</>} text="Our packages combine these same hotels with flights, transfers and ziyarat, usually for less than booking separately." primaryHref="/umrah-packages" primaryLabel="See packages" whatsappMessage="Assalam o Alaikum, I am looking at hotels on your website. Please help me choose." />
    </>
  );
}
