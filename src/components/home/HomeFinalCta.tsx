import { Accordion } from "@/components/ui/Accordion";
import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CallbackForm } from "@/features/inquiry/CallbackForm";
import { homeFaqs } from "@/data/faqs";
import { planHref } from "@/config/navigation";

/** Closing band: FAQ accordion on the left, "call me back" form on a gold card on the right. */
export function HomeFinalCta() {
  return (
    <section className="bg-ivory py-section-sm md:py-section" aria-label="Common questions and call back">
      <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <SectionHeading number="09" eyebrow="Common questions" title={<>Answers before you <em>ask</em>.</>} lede="Four questions every family asks on the first call. The full list has twenty more." />
          <Accordion items={homeFaqs} className="mt-8 border-y border-line" />
          <LinkButton href="/faqs" variant="ghost" className="mt-4" icon="arrow_forward">All FAQs</LinkButton>
        </div>
        <div className="relative rounded-2xl bg-haram p-6 text-white shadow-soft md:p-8">
          <p className="urdu text-2xl text-gold-pale">ہم آپ کو کال کریں؟</p>
          <h3 className="display-title mt-1 text-3xl md:text-4xl">Let a consultant <em className="text-gold">call you</em>.</h3>
          <p className="mt-3 text-white/80">Leave your number and we call back within 30 minutes during support hours. No obligation, no payment.</p>
          <CallbackForm tone="dark" className="mt-6" />
          <p className="mt-4 text-center text-sm text-white/70">
            Prefer a detailed quote? <LinkButton href={planHref} variant="ghost" size="sm" className="!text-gold-pale hover:!bg-white/10" icon="arrow_forward">Use the full planner</LinkButton>
          </p>
        </div>
      </Container>
    </section>
  );
}
