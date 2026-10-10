import Image from "next/image";
import { HotelTable } from "@/components/cards/HotelTable";
import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { hotelsInCity } from "@/data/hotels";
import { siteImages } from "@/data/images";

/** Ledger tables for Makkah and Madinah with a wide photo strip between heading and tables. */
export function HomeHotelsTeaser() {
  return (
    <section className="bg-ivory py-section-sm md:py-section" aria-label="Hotels">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading number="04" eyebrow="Hotel-only rates" title={<>Already have flights? Book just the <em>hotel</em>.</>} lede="Nightly rates in PKR for a double room, with walking distance to the Haram. Ask for your dates and we hold the room while you decide." />
          <LinkButton href="/hotels" variant="outline" icon="arrow_forward">All 20 hotels</LinkButton>
        </div>

        <div className="relative mt-10 h-40 overflow-hidden rounded-2xl md:h-56">
          <Image src={siteImages.hotelsHero.src} alt={siteImages.hotelsHero.alt} fill sizes="(min-width: 1280px) 1240px, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-haram-deep/80 via-haram-deep/30 to-transparent" aria-hidden="true" />
          <p className="absolute bottom-4 start-5 max-w-md text-white">
            <span className="eyebrow text-gold-pale">Inspected by our team</span>
            <span className="mt-1 block font-display text-xl font-semibold md:text-2xl">Distance means walking distance from the hotel door to the nearest Haram gate.</span>
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <HotelTable city="Makkah" hotels={hotelsInCity("Makkah").slice(0, 5)} compact />
          <HotelTable city="Madinah" hotels={hotelsInCity("Madinah").slice(0, 5)} compact />
        </div>
      </Container>
    </section>
  );
}
