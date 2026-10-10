import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AgentForm } from "@/features/agents/AgentForm";
import { siteImages } from "@/data/images";
import { buildBreadcrumbSchema, buildMetadata, buildWebPageSchema } from "@/lib/seo";

const title = "For Travel Agents: Raahi B2B Umrah Partner Programme";
const description =
  "Sell Raahi Umrah packages under your own agency name: net B2B rates, same-day written quotes, visa processing, hotel allocations in Ramadan and a dedicated partner desk. For licensed travel agents across Pakistan.";
const path = "/agents";

export const metadata: Metadata = buildMetadata({ title, description, path, image: siteImages.coachBus.src });

const crumbs = [
  { name: "Home", path: "/" },
  { name: "For Travel Agents", path },
];

const benefits = [
  { icon: "request_quote", title: "Net rates, your margin", text: "A B2B rate sheet for every package and hotel, updated weekly. You decide your selling price." },
  { icon: "schedule", title: "Same-day written quotes", text: "Send us the dates and the number of travellers on WhatsApp. A quote in your agency's name comes back within hours." },
  { icon: "badge", title: "Visa processing for your clients", text: "Submit through our Saudi-licensed operator with document checks done by our team." },
  { icon: "hotel", title: "Ramadan allocations", text: "Confirmed rooms near both Harams in the last Ashra, reserved for partners who book early." },
  { icon: "groups", title: "Group leaders on request", text: "Use a Raahi group leader for your departures, or train your own with us." },
  { icon: "support_agent", title: "Partner desk", text: "A dedicated WhatsApp line for agents, 9 am to 11 pm, with a named account manager." },
];

const requirements = [
  "A valid DTS or provincial tourism licence, or Ministry of Religious Affairs enrolment, or an application in progress",
  "SECP or sole-proprietor registration and NTN",
  "Office address and owner's CNIC copy",
  "A refundable security deposit of PKR 100,000 if you want ticketing on credit. Prepaid accounts need no deposit",
];

const steps = [
  { step: "01", title: "Apply", text: "Fill the form below. We call within one working day." },
  { step: "02", title: "Verify", text: "Share your licence and registration documents. We visit your office or do a video call." },
  { step: "03", title: "Onboard", text: "Receive the rate sheet, partner WhatsApp line and booking forms." },
  { step: "04", title: "Sell", text: "Quote, book and earn, with Raahi handling visas, hotels and ground operations." },
];

export default function AgentsPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(crumbs)} />
      <JsonLd data={buildWebPageSchema({ name: title, description, path })} />

      <PageHero
        crumbs={crumbs}
        variant="split"
        image={siteImages.coachBus}
        urdu="ٹریول ایجنٹس کے لیے"
        eyebrow="Partner programme for licensed travel agents"
        title={<>Sell Umrah with <em>Raahi behind you</em>.</>}
        lede="For travel agencies in Gujranwala, Sialkot, Faisalabad, Multan, Peshawar and beyond: our hotels, visas and ground team, your clients and your brand."
      />

      {/* Benefits */}
      <section className="bg-ivory py-section-sm md:py-section" aria-label="Benefits">
        <Container>
          <SectionHeading number="01" eyebrow="What partners get" title={<>Everything a small agency <em>cannot</em> build alone.</>} size="md" />
          <ul className="mt-10 grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <li key={b.title} className="flex gap-4 border-t border-line py-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-haram-soft text-haram"><Icon name={b.icon} className="text-[22px]" /></span>
                <div>
                  <p className="font-bold text-ink">{b.title}</p>
                  <p className="mt-1 text-sm text-slate">{b.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Requirements + steps */}
      <section className="bg-night py-section-sm text-white md:py-section" aria-label="Requirements">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading number="02" eyebrow="Requirements" tone="dark" title={<>What we <em className="text-gold">ask for</em>.</>} size="md" />
            <ul className="mt-8 space-y-3">
              {requirements.map((r) => (
                <li key={r} className="flex items-start gap-3 text-white/85"><Icon name="check_circle" filled className="mt-0.5 text-[20px] text-gold" />{r}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading number="03" eyebrow="How onboarding works" tone="dark" title={<>Live within <em className="text-gold">a week</em>.</>} size="md" />
            <ol className="mt-8 divide-y divide-white/15 border-y border-white/15">
              {steps.map((s) => (
                <li key={s.step} className="flex gap-4 py-4">
                  <span className="font-display text-2xl italic text-gold">{s.step}</span>
                  <div>
                    <p className="font-bold text-gold-pale">{s.title}</p>
                    <p className="text-sm text-white/75">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Form */}
      <section id="apply" className="scroll-mt-28 bg-sand py-section-sm md:py-section" aria-label="Partner application">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading number="04" eyebrow="Apply" title={<>Tell us about your <em>agency</em>.</>} size="md" lede="Our partnerships manager calls within one working day. No fees to join." />
          <div className="rounded-2xl border border-line bg-white p-5 shadow-card md:p-7">
            <AgentForm />
          </div>
        </Container>
      </section>

      <CtaBand title={<>Questions before you <em className="text-gold">apply</em>?</>} text="Message the partner desk directly. We are happy to share sample rate sheets and talk through how allocations work." whatsappMessage="Assalam o Alaikum, I run a travel agency and want to know about the Raahi partner programme." primaryHref="#apply" primaryLabel="Apply above" />
    </>
  );
}
