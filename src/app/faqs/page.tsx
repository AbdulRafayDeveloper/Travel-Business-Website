import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { allFaqs, faqGroups } from "@/data/faqs";
import { siteImages } from "@/data/images";
import { buildBreadcrumbSchema, buildFaqSchema, buildMetadata, buildWebPageSchema } from "@/lib/seo";

const title = "Umrah FAQs: Prices, Visa, Booking, Payment & Hotels";
const description = `${allFaqs.length} straight answers about Umrah from Pakistan: whether prices are final, who issues the visa, deposits and instalments, cancellation, hotel distances, food, airlines and travelling with elderly parents.`;
const path = "/faqs";

export const metadata: Metadata = buildMetadata({ title, description, path, photo: "haramInterior" });

const crumbs = [
  { name: "Home", path: "/" },
  { name: "FAQs", path },
];

export default function FaqsPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(crumbs)} />
      <JsonLd data={buildWebPageSchema({ name: title, description, path, type: "FAQPage" })} />
      <JsonLd data={buildFaqSchema(allFaqs)} />

      <PageHero
        crumbs={crumbs}
        variant="split"
        image={siteImages.haramInterior}
        urdu="اکثر پوچھے گئے سوالات"
        eyebrow={`${allFaqs.length} questions across ${faqGroups.length} topics`}
        title={<>Umrah questions, with straight answers <em>before</em> you call.</>}
        lede="Grouped by topic. If your question is not here, WhatsApp us and we will add the answer for the next family."
      >
        <nav aria-label="FAQ topics" className="flex flex-wrap gap-2">
          {faqGroups.map((g) => (
            <a key={g.id} href={`#${g.id}`} className="inline-flex items-center gap-1.5 rounded-full border border-haram/30 bg-white px-3.5 py-1.5 text-sm font-semibold text-haram-deep hover:border-haram">
              <Icon name={g.icon} className="text-[18px] text-gold-deep" />
              {g.title} <span className="text-slate">· {g.items.length}</span>
            </a>
          ))}
        </nav>
      </PageHero>

      <section className="bg-ivory py-section-sm md:py-section" aria-label="All questions">
        <Container className="space-y-16">
          {faqGroups.map((g, i) => (
            <div key={g.id} id={g.id} className="grid scroll-mt-32 gap-6 lg:grid-cols-[0.6fr_1.4fr] lg:gap-16">
              <div className="lg:sticky lg:top-32 lg:self-start">
                <p className="eyebrow flex items-center gap-2 text-gold-deep"><span className="font-display text-lg italic">0{i + 1}</span><span className="h-px w-8 bg-gold" aria-hidden="true" /></p>
                <h2 className="display-title mt-2 flex items-center gap-3 text-3xl text-haram-deep md:text-4xl">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-haram-soft text-haram"><Icon name={g.icon} className="text-[24px]" /></span>
                  {g.title}
                </h2>
              </div>
              <Accordion items={g.items} defaultOpen={i === 0 ? 0 : -1} className="border-y border-line" />
            </div>
          ))}
        </Container>
      </section>

      <CtaBand image={siteImages.duaHands} title={<>Still have a <em className="text-gold">question</em>?</>} text="Ask it on WhatsApp. A consultant answers in minutes during support hours, and we add good questions to this page." whatsappMessage="Assalam o Alaikum, I have a question that is not in your FAQs." />
    </>
  );
}
