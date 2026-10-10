import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

const stats = [
  { value: siteConfig.stats.pilgrims, label: "pilgrims travelled with Raahi" },
  { value: `${siteConfig.stats.years} years`, label: `licensed since ${siteConfig.foundedYear}` },
  { value: `${siteConfig.stats.rating} / 5`, label: `from ${siteConfig.stats.reviews} Google reviews` },
  { value: `${siteConfig.stats.cities} cities`, label: "departures across Pakistan" },
];

/** Hairline ruled stats row. Values are rendered statically so crawlers and first paint never see "0+". */
export function HomeStats() {
  return (
    <section aria-label="Raahi at a glance" className="border-b border-line bg-ivory">
      <Container>
        <dl className="grid grid-cols-2 divide-line md:grid-cols-4 md:divide-x">
          {stats.map((s, i) => (
            <div key={s.label} className={`flex flex-col py-6 md:items-center md:py-8 md:text-center ${i % 2 === 1 ? "ps-6 md:ps-0" : ""} ${i < 2 ? "border-b border-line md:border-b-0" : ""}`}>
              <dt className="order-2 mt-1 text-sm text-slate">{s.label}</dt>
              <dd className="order-1 font-display text-3xl font-semibold text-haram-deep md:text-4xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
