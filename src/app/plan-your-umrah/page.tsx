import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { PlannerForm } from "@/features/inquiry/PlannerForm";
import { contactNumber, siteConfig, whatsappUrl } from "@/config/site";
import { team } from "@/data/company";
import { buildBreadcrumbSchema, buildMetadata, buildWebPageSchema } from "@/lib/seo";

const title = "Plan Your Umrah: Free Quote in 2 Minutes";
const description =
  "Tell us your departure city, month, duration, hotel category and travellers. See a live estimate, then a named Raahi consultant calls back within 30 minutes with a written quote. No payment needed.";
const path = "/plan-your-umrah";

export const metadata: Metadata = buildMetadata({ title, description, path, photo: "duaHands" });

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Plan your Umrah", path },
];

const whatHappens = [
  { icon: "call", title: "A named consultant calls", text: `Within 30 minutes during ${siteConfig.supportHours}. You will know who you are speaking to.` },
  { icon: "receipt_long", title: "Two or three written options", text: "Hotels named, distances in metres, airline, dates and the exact per-person price for your room type." },
  { icon: "schedule", title: "No pressure, no payment", text: "Take your time. The quote is valid for 7 days, and a deposit confirms it whenever you are ready." },
];

export default function PlanYourUmrahPage() {
  const consultants = team.filter((t) => t.id !== "director" && t.id !== "abdullah").slice(0, 3);
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(crumbs)} />
      <JsonLd data={buildWebPageSchema({ name: title, description, path, type: "ContactPage" })} />

      <PageHero
        crumbs={crumbs}
        variant="band"
        urdu="اپنا عمرہ پلان کریں"
        eyebrow="Free quote in 2 minutes, no payment needed"
        title={<>Tell us your plan. We do the <em className="text-gold">rest</em>.</>}
        lede="Three short steps. You see a live estimate as you go, and a consultant calls back with options and a written quote."
      />

      <section className="bg-ivory py-section-sm md:py-section" aria-label="Planner">
        <Container>
          <Suspense fallback={<div className="h-[420px] animate-pulse rounded-2xl bg-sand" aria-hidden="true" />}>
            <PlannerForm />
          </Suspense>
        </Container>
      </section>

      <section className="border-t border-line bg-sand py-section-sm md:py-section" aria-labelledby="what-happens-title">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <p className="eyebrow flex items-center gap-2 text-gold-deep"><span className="h-px w-8 bg-gold" aria-hidden="true" />After you send</p>
            <h2 id="what-happens-title" className="display-title mt-3 text-3xl text-haram-deep md:text-4xl">What happens <em>next</em>.</h2>
            <ol className="mt-6 divide-y divide-line border-y border-line">
              {whatHappens.map((w, i) => (
                <li key={w.title} className="flex gap-4 py-4">
                  <span className="font-display text-2xl italic text-gold-deep">0{i + 1}</span>
                  <div>
                    <p className="flex items-center gap-2 font-bold text-ink"><Icon name={w.icon} className="text-[20px] text-haram" />{w.title}</p>
                    <p className="mt-1 text-sm text-slate">{w.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className="eyebrow flex items-center gap-2 text-gold-deep"><span className="h-px w-8 bg-gold" aria-hidden="true" />Who will call you</p>
            <ul className="mt-5 divide-y divide-line border-y border-line">
              {consultants.map((c) => (
                <li key={c.id} className="flex items-start gap-4 py-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-haram font-display text-xl text-white">{c.name.charAt(0)}</span>
                  <div>
                    <p className="font-bold text-ink">{c.name}</p>
                    <p className="text-sm text-slate">{c.role} · {c.languages.join(", ")}</p>
                    <p className="mt-1 text-sm text-ink">{c.bio}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-slate">
              Prefer to talk now? <a href={whatsappUrl("Assalam o Alaikum, I want to plan my Umrah. Please guide me.")} target="_blank" rel="noopener noreferrer" className="font-bold text-whatsapp-deep underline">WhatsApp</a> or call <a href={contactNumber.telUrl} dir="ltr" className="font-bold text-haram underline">{contactNumber.display}</a>.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
