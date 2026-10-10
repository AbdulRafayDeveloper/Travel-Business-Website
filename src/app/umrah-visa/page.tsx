import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VisaChecklist } from "@/features/visa/VisaChecklist";
import { VisaConsultForm } from "@/features/visa/VisaConsultForm";
import { VisaTracker } from "@/features/visa/VisaTracker";
import { faqGroups } from "@/data/faqs";
import { siteImages } from "@/data/images";
import { visaDisclaimer, visaDocuments, visaFacts, visaFaqs, visaStages } from "@/data/visa";
import { buildBreadcrumbSchema, buildFaqSchema, buildMetadata, buildServiceSchema, buildWebPageSchema } from "@/lib/seo";

const title = "Umrah Visa Assistance from Pakistan: Documents, Timeline & Tracking";
const description =
  "Umrah visa processing assistance through Saudi-licensed operators. Document checklist for Pakistani passports, 2 to 7 working day timeline, secure consultation form and application status tracking. Visas are issued by Saudi authorities.";
const path = "/umrah-visa";

export const metadata: Metadata = buildMetadata({ title, description, path, image: siteImages.visaHero.src });

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Umrah Visa", path },
];

const allVisaFaqs = [...visaFaqs, ...faqGroups[1].items];

export default function UmrahVisaPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(crumbs)} />
      <JsonLd data={buildWebPageSchema({ name: title, description, path })} />
      <JsonLd data={buildServiceSchema({ name: "Umrah visa assistance", description, path })} />
      <JsonLd data={buildFaqSchema(allVisaFaqs)} />

      <PageHero
        crumbs={crumbs}
        variant="photo"
        image={siteImages.visaHero}
        urdu="عمرہ ویزا میں رہنمائی"
        eyebrow="Visa help, documents and tracking"
        title={<>Your Umrah visa, <em className="text-gold">checked and followed up</em>.</>}
        lede="We prepare and submit your application through a Saudi-licensed Umrah operator, check every document first, and tell you where it stands at each stage."
      >
        <p className="flex max-w-2xl gap-3 rounded-xl border border-gold/40 bg-white/10 p-4 text-sm text-white/90">
          <Icon name="info" className="mt-0.5 shrink-0 text-[20px] text-gold" />
          <span>{visaDisclaimer}</span>
        </p>
      </PageHero>

      {/* Facts strip */}
      <section className="border-b border-line bg-sand" aria-label="Visa facts">
        <Container>
          <dl className="grid grid-cols-2 divide-line md:grid-cols-4 md:divide-x">
            {visaFacts.map((f, i) => (
              <div key={f.label} className={`py-6 md:px-5 md:first:ps-0 md:last:pe-0 ${i % 2 === 1 ? "ps-5 md:ps-5" : ""} ${i < 2 ? "border-b border-line md:border-b-0" : ""}`}>
                <dt className="eyebrow !text-[0.65rem] text-slate">{f.label}</dt>
                <dd className="mt-1 font-display text-2xl font-semibold text-haram-deep">{f.value}</dd>
                <dd className="text-xs text-slate">{f.note}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Process timeline */}
      <section className="bg-ivory py-section-sm md:py-section" aria-label="Process">
        <Container className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading number="01" eyebrow="How it works" title={<>Five stages, <em>no guesswork</em>.</>} size="md" lede="You get a WhatsApp message at every stage. Nothing is submitted until your deposit is receipted and your documents pass our check." />
          </div>
          <ol className="relative border-s-2 border-gold/50 ps-8">
            {visaStages.map((s, i) => (
              <li key={s.id} className="relative pb-8 last:pb-0">
                <span className="absolute -start-[2.45rem] flex h-10 w-10 items-center justify-center rounded-full bg-haram font-display text-lg font-semibold text-white">{i + 1}</span>
                <h3 className="font-display text-2xl font-semibold text-haram-deep">{s.title}</h3>
                <p className="mt-1 text-slate">{s.detail}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Checklist */}
      <section id="checklist" className="scroll-mt-28 bg-haram-mist py-section-sm md:py-section" aria-label="Checklist">
        <Container className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading number="02" eyebrow="Document checklist" urdu="ضروری دستاویزات" title={<>Gather these <em>before</em> you pay.</>} size="md" lede="Tick each item as you collect it. Most refusals and delays come from passport validity and photo quality, so check those twice." />
            <ul className="mt-6 space-y-2 text-sm text-slate">
              <li className="flex gap-2"><Icon name="lightbulb" className="text-[18px] text-gold-deep" /> Photograph the passport flat, in daylight, with all four corners visible.</li>
              <li className="flex gap-2"><Icon name="lightbulb" className="text-[18px] text-gold-deep" /> Children need their own passport and a B-form, and so do infants.</li>
              <li className="flex gap-2"><Icon name="lightbulb" className="text-[18px] text-gold-deep" /> Polio drops are given free at government hospitals and airport health counters.</li>
            </ul>
          </div>
          <VisaChecklist documents={visaDocuments} />
        </Container>
      </section>

      {/* Consultation form + tracker */}
      <section id="apply" className="scroll-mt-28 bg-ivory py-section-sm md:py-section" aria-label="Apply">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading number="03" eyebrow="Start a consultation" title={<>Send your details <em>securely</em>.</>} size="md" lede="A consultant reviews your documents and confirms current requirements before any payment." />
            <div className="mt-8 rounded-2xl border border-line bg-white p-5 shadow-card md:p-7">
              <VisaConsultForm />
            </div>
          </div>
          <div>
            <SectionHeading number="04" eyebrow="Already applied?" title={<>Track your <em>application</em>.</>} size="md" lede="Enter the booking reference from your deposit receipt to see which stage your application is at." />
            <div className="mt-8 rounded-2xl border border-line bg-white p-5 shadow-card md:p-7">
              <VisaTracker />
            </div>
          </div>
        </Container>
      </section>

      <FaqSection items={allVisaFaqs} eyebrow="Visa questions" lede="Who issues the visa, what documents are needed, women travelling without a mahram, and refusals." />
      <CtaBand image={siteImages.airplane} title={<>Visa sorted. <em className="text-gold">Flights and hotels</em> next?</>} text="Most pilgrims book the visa as part of a package; it is cheaper and one less thing to coordinate." primaryHref="/umrah-packages" primaryLabel="See packages" whatsappMessage="Assalam o Alaikum, I need help with my Umrah visa." />
    </>
  );
}
