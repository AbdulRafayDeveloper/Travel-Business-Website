import { GuideCard } from "@/components/cards/GuideCard";
import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { guides } from "@/data/guides";

/** Editorial list: three arch-photo tiles for the newest guides, then a ruled list of the rest. */
export function HomeGuides() {
  const [a, b, c, ...rest] = guides;
  return (
    <section className="bg-ivory py-section-sm md:py-section" aria-label="Guides">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading number="08" eyebrow="Umrah guides" title={<>Learn before you <em>travel</em>.</>} lede="Plain-language guides written by our group leaders: how to perform Umrah, what to pack, travelling with elders, ziyarat and real costs." />
          <LinkButton href="/umrah-guide" variant="outline" icon="arrow_forward">All guides</LinkButton>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[a, b, c].map((g) => (
            <GuideCard key={g.slug} guide={g} variant="tile" />
          ))}
        </div>
        <div className="mt-8 divide-y divide-line border-t border-line">
          {rest.map((g) => (
            <GuideCard key={g.slug} guide={g} />
          ))}
        </div>
      </Container>
    </section>
  );
}
