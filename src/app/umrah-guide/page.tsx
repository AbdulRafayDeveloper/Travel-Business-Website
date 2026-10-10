import type { Metadata } from "next";
import Image from "next/image";
import { GuideCard } from "@/components/cards/GuideCard";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { guides } from "@/data/guides";
import { siteImages } from "@/data/images";
import { madinahZiyarat, makkahZiyarat } from "@/data/ziyarat";
import { buildBreadcrumbSchema, buildMetadata, buildWebPageSchema } from "@/lib/seo";

const title = "Umrah Guides: How to Perform Umrah, Packing, Ziyarat & Costs";
const description =
  "Plain-language Umrah guides written by Raahi group leaders: step-by-step rituals, packing checklist for Pakistani pilgrims, travelling with elderly parents and children, Makkah and Madinah ziyarat, best time and real costs.";
const path = "/umrah-guide";

export const metadata: Metadata = buildMetadata({ title, description, path, image: siteImages.guideHero.src });

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Umrah Guides", path },
];

export default function GuidesPage() {
  const [lead, ...rest] = guides;
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(crumbs)} />
      <JsonLd data={buildWebPageSchema({ name: title, description, path, type: "CollectionPage" })} />

      <PageHero
        crumbs={crumbs}
        variant="split"
        image={siteImages.guideHero}
        urdu="عمرہ کی رہنمائی"
        eyebrow={`${guides.length} guides written by our group leaders`}
        title={<>Learn Umrah <em>before</em> you fly.</>}
        lede="Everything we teach in our pre-departure sessions, written down. Short sections, Pakistani context, and the mistakes we see every week."
      />

      {/* Lead article as a wide editorial feature */}
      <section className="bg-ivory py-section-sm md:py-section" aria-labelledby="guides-lead-title">
        <Container>
          <article className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-14">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
              <Image src={lead.image} alt={lead.title} fill priority sizes="(min-width: 1024px) 720px, 100vw" className="object-cover" />
            </div>
            <div>
              <p className="eyebrow text-gold-deep">Start here · {lead.category} · {lead.readMinutes} min</p>
              <h2 id="guides-lead-title" className="display-title mt-2 text-3xl text-haram-deep md:text-4xl">{lead.title}</h2>
              <p className="mt-4 text-slate">{lead.excerpt}</p>
              <LinkButton href={`/umrah-guide/${lead.slug}`} className="mt-6" icon="arrow_forward">Read the guide</LinkButton>
            </div>
          </article>
          <div className="mt-10 divide-y divide-line border-y border-line">
            {rest.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </Container>
      </section>

      {/* Ziyarat index */}
      <section className="bg-sand py-section-sm md:py-section" aria-label="Ziyarat">
        <Container>
          <SectionHeading eyebrow="Ziyarat sites" title={<>Places you will <em>visit</em>.</>} size="md" lede="Included on every package's guided tours. Tap a site for its story." />
          <div className="mt-10 grid gap-12 lg:grid-cols-2">
            {[
              { city: "Makkah", sites: makkahZiyarat, href: "/umrah-guide/makkah-ziyarat-places-to-visit" },
              { city: "Madinah", sites: madinahZiyarat, href: "/umrah-guide/madinah-ziyarat-places-to-visit" },
            ].map((group) => (
              <div key={group.city}>
                <h3 className="border-b-2 border-haram pb-2 font-display text-2xl font-semibold text-haram-deep">{group.city}</h3>
                <ul className="divide-y divide-line">
                  {group.sites.map((z) => (
                    <li key={z.id} className="grid grid-cols-[72px_1fr] gap-4 py-3">
                      <div className="relative aspect-square overflow-hidden rounded-lg">
                        <Image src={z.image} alt={z.name} fill sizes="72px" className="object-cover" />
                      </div>
                      <div>
                        <p className="font-bold text-ink">{z.name}</p>
                        <p className="text-sm text-slate">{z.blurb}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <a href={group.href} className="mt-3 inline-block text-sm font-bold text-haram underline underline-offset-2">Read the {group.city} ziyarat guide</a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand image={siteImages.tawaf} title={<>Questions the guides <em className="text-gold">did not</em> answer?</>} text="Our consultants have performed Umrah dozens of times. Ask anything, from ihram rules to which hotel floor to request." whatsappMessage="Assalam o Alaikum, I have a question about performing Umrah." />
    </>
  );
}
