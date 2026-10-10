import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

const included = [
  { icon: "badge", title: "Umrah visa processing", text: "Through a Saudi-licensed operator, with mandatory medical insurance." },
  { icon: "flight", title: "Return air ticket", text: "Economy class from your departure city. The airline is named on every package." },
  { icon: "hotel", title: "Hotels as listed", text: "Named hotels with nights per city and distance to the Haram in metres." },
  { icon: "directions_bus", title: "All transfers", text: "Airport → Makkah → Madinah → airport in air-conditioned vehicles." },
  { icon: "tour", title: "Guided ziyarat", text: "Historic sites in both cities with a Raahi group leader." },
  { icon: "school", title: "Training & travel pack", text: "Pre-departure session, printed guide, vouchers and a WhatsApp group." },
];

const notIncluded = ["Meals unless stated", "Personal shopping & phone SIM", "Qurbani / Dam", "Extra nights or upgrades", "Wheelchair hire inside the Haram", "New Saudi fees after booking"];

/** Two-tone comparison: six included items as an icon ledger, exclusions as a plain list on the side. */
export function PackagesIncluded() {
  return (
    <section className="bg-ivory py-section-sm md:py-section" aria-label="Included">
      <Container>
        <SectionHeading eyebrow="In every package" title={<>What <em>every</em> Raahi package includes.</>} lede="No matter the category, these six things are always part of the price. Cheap quotes elsewhere often leave two or three of them out." />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
          <ul className="grid gap-x-10 sm:grid-cols-2">
            {included.map((item, i) => (
              <li key={item.title} className="flex gap-4 border-b border-line py-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-haram-soft text-haram"><Icon name={item.icon} className="text-[24px]" /></span>
                <div>
                  <p className="font-bold text-ink"><span className="me-2 font-display italic text-gold-deep">0{i + 1}</span>{item.title}</p>
                  <p className="mt-1 text-sm text-slate">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border border-line bg-white p-6">
            <p className="eyebrow text-slate">Not included</p>
            <ul className="mt-3 space-y-2.5 text-sm text-ink">
              {notIncluded.map((n) => (
                <li key={n} className="flex items-start gap-2"><Icon name="remove_circle_outline" className="mt-0.5 text-[18px] text-slate" />{n}</li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-slate">Typical food cost in Makkah and Madinah is SAR 15 to 25 per meal at Pakistani restaurants near both Harams.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
