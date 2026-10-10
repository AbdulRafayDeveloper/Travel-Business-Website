import { DepartureList } from "@/components/cards/DepartureList";
import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { upcomingDepartures } from "@/data/departures";

const seasonNotes = [
  { icon: "ac_unit", title: "Winter", text: "December to February. Pleasant weather, and the school holiday dates fill fast" },
  { icon: "nights_stay", title: "Ramadan", text: "Last Ashra groups are confirmed 4 to 6 months ahead" },
  { icon: "wb_sunny", title: "Shawwal", text: "Lighter crowds and good prices in the weeks after Eid" },
];

export function HomeDepartures() {
  return (
    <section className="bg-night py-section-sm text-white md:py-section" aria-label="Departures">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeading number="05" eyebrow="Group departures" tone="dark" title={<>Fixed dates, <em className="text-gold">real seats</em>.</>} lede="Travel with a Raahi group leader from your own city. Seat counts update as bookings come in." />
          <ul className="mt-8 divide-y divide-white/10">
            {seasonNotes.map((s) => (
              <li key={s.title} className="flex items-start gap-3 py-4">
                <Icon name={s.icon} className="mt-0.5 text-[22px] text-gold" />
                <p><span className="font-bold text-gold-pale">{s.title}</span> <span className="text-white/75">· {s.text}</span></p>
              </li>
            ))}
          </ul>
          <LinkButton href="/departures" variant="gold" className="mt-6" icon="event">Full departure calendar</LinkButton>
        </div>
        <div className="rounded-2xl bg-ivory p-5 text-ink shadow-soft md:p-7">
          <p className="eyebrow mb-2 text-gold-deep">Next departures</p>
          <DepartureList departures={upcomingDepartures(6)} />
        </div>
      </Container>
    </section>
  );
}
