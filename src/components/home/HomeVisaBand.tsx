import Image from "next/image";
import { GeoPattern } from "@/components/graphics/GeoPattern";
import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteImages } from "@/data/images";
import { visaDisclaimer, visaStages } from "@/data/visa";

/** Dark green band: visa process as a numbered timeline beside a passport photo with an honest disclaimer. */
export function HomeVisaBand() {
  return (
    <section className="relative overflow-hidden bg-haram-deep py-section-sm text-white md:py-section" aria-label="Visa assistance">
      <GeoPattern color="#F7EBC9" opacity={0.06} size={120} />
      <Container className="relative grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <SectionHeading number="07" eyebrow="Umrah visa assistance" tone="dark" title={<>Your visa, looked after <em className="text-gold">from start to finish</em>.</>} lede="Send us clear photos of your documents on WhatsApp or through the secure form. We check them the same day and track every stage with you." />
          <ol className="mt-8 space-y-0">
            {visaStages.map((s, i) => (
              <li key={s.id} className="relative flex gap-4 pb-6 last:pb-0">
                {i < visaStages.length - 1 && <span className="absolute start-[15px] top-8 bottom-0 w-px bg-gold/40" aria-hidden="true" />}
                <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold font-display text-sm font-semibold text-haram-deep">{i + 1}</span>
                <div>
                  <h3 className="font-bold text-gold-pale">{s.title}</h3>
                  <p className="text-sm text-white/75">{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href="/umrah-visa" variant="gold" icon="arrow_forward">Visa documents &amp; tracker</LinkButton>
            <LinkButton href="/umrah-visa#checklist" variant="outlineLight" icon="checklist" iconPosition="start">Document checklist</LinkButton>
          </div>
        </div>
        <div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl rotate-1 shadow-soft">
            <Image src={siteImages.visaHero.src} alt={siteImages.visaHero.alt} fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
          </div>
          <p className="mt-6 flex gap-3 rounded-xl border border-gold/40 bg-white/5 p-4 text-sm text-white/80">
            <Icon name="info" className="mt-0.5 shrink-0 text-[20px] text-gold" />
            <span>{visaDisclaimer}</span>
          </p>
        </div>
      </Container>
    </section>
  );
}
