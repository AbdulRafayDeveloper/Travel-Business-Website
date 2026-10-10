import type { Metadata } from "next";
import Link from "next/link";
import { DepartureList } from "@/components/cards/DepartureList";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";
import { departures, departuresByMonth } from "@/data/departures";
import { siteImages } from "@/data/images";
import { buildBreadcrumbSchema, buildMetadata, buildWebPageSchema } from "@/lib/seo";
import { formatMonth } from "@/lib/utils";

const title = "Umrah Group Departures 2026 to 2027 from Lahore, Karachi & Islamabad";
const description = `${departures.length} fixed-date Umrah group departures from ${siteConfig.departureCities.slice(0, 4).join(", ")} with airline, package, seats left and starting price. Winter, Ramadan and school-holiday dates.`;
const path = "/departures";

export const metadata: Metadata = buildMetadata({ title, description, path, photo: "airplane" });

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Departures", path },
];

const groupBenefits = [
  { icon: "groups", title: "A Raahi group leader on every flight", text: "Meets you at check-in in Pakistan, travels with the group and leads Umrah and ziyarat." },
  { icon: "savings", title: "Group fares, individual rooms", text: "Shared coaches and group fares keep the price down, and your family still keeps its own room." },
  { icon: "family_restroom", title: "Women and elders welcome", text: "Several women travel alone or with sisters in every group. Wheelchair arrangements on request." },
  { icon: "event_repeat", title: "Dates that fit Pakistani calendars", text: "December school holidays, Shab-e-Barat, the last Ashra of Ramadan and the quiet Shawwal weeks." },
];

export default function DeparturesPage() {
  const months = departuresByMonth();
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(crumbs)} />
      <JsonLd data={buildWebPageSchema({ name: title, description, path })} />

      <PageHero
        crumbs={crumbs}
        variant="band"
        urdu="گروپ روانگی کی تاریخیں"
        eyebrow={`${departures.length} departures over ${months.length} months`}
        title={<>Fixed dates with a <em className="text-gold">group leader</em>.</>}
        lede="Every departure shows the airline, the package it belongs to, seats remaining and the lowest per-person price. Seats are confirmed in order of deposit."
      >
        <nav aria-label="Jump to month" className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          {months.map((m) => (
            <a key={m.month} href={`#m-${m.month.slice(0, 7)}`} className="whitespace-nowrap rounded-full border border-white/30 px-3.5 py-1.5 text-sm font-semibold text-white hover:border-gold hover:text-gold">
              {formatMonth(m.month)} <span className="text-white/60">· {m.items.length}</span>
            </a>
          ))}
        </nav>
      </PageHero>

      <section className="bg-ivory py-section-sm md:py-section" aria-label="Departure calendar">
        <Container className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading eyebrow="Why travel in a group" title={<>Together is <em>easier</em>.</>} size="md" />
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {groupBenefits.map((b) => (
                <li key={b.title} className="flex gap-4 py-4">
                  <Icon name={b.icon} className="mt-0.5 text-[24px] text-haram" />
                  <div>
                    <p className="font-bold text-ink">{b.title}</p>
                    <p className="text-sm text-slate">{b.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-slate">
              Travelling on your own dates? Every package is available privately. <Link href="/plan-your-umrah" className="font-bold text-haram underline">Request custom dates</Link>.
            </p>
          </div>

          <div className="space-y-12">
            {months.map((m) => (
              <div key={m.month} id={`m-${m.month.slice(0, 7)}`} className="scroll-mt-32">
                <div className="flex items-baseline justify-between border-b-2 border-haram pb-2">
                  <h2 className="font-display text-3xl font-semibold text-haram-deep">{formatMonth(m.month)}</h2>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate">{m.items.length} departures</span>
                </div>
                <DepartureList departures={m.items} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand image={siteImages.airplane} title={<>Hold a seat <em className="text-gold">today</em>.</>} text="A PKR 50,000 deposit per person confirms your seat on any departure. Tell us the date and city and we send the booking form within the hour." whatsappMessage="Assalam o Alaikum, I want to reserve seats on a group departure." />
    </>
  );
}
