import type { Metadata } from "next";
import { ReviewCard } from "@/components/cards/ReviewCard";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { Stars } from "@/components/ui/Stars";
import { siteConfig, whatsappUrl } from "@/config/site";
import { siteImages } from "@/data/images";
import { ratingSummary, reviews } from "@/data/reviews";
import { BASE_URL, buildBreadcrumbSchema, buildMetadata, buildWebPageSchema, organizationId } from "@/lib/seo";

const title = `Raahi Reviews: ${ratingSummary.average} from ${ratingSummary.total.toLocaleString("en-PK")} Pilgrims`;
const description = "Dated, named reviews from pilgrims who travelled with Raahi from Lahore, Karachi, Islamabad, Faisalabad and Multan. We publish the critical ones too, and reply to every one.";
const path = "/reviews";

export const metadata: Metadata = buildMetadata({ title, description, path, image: siteImages.ihram.src });

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Reviews", path },
];

const reviewSchema = reviews.map((r) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: { "@id": organizationId },
  author: { "@type": "Person", name: r.name },
  datePublished: r.date,
  reviewBody: r.text,
  reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5, worstRating: 1 },
  url: `${BASE_URL}${path}#${r.id}`,
}));

const howWeCollect = [
  { icon: "verified", title: "Only pilgrims who travelled", text: "Each review is matched to a booking number before it is published." },
  { icon: "calendar_month", title: "Dated and attributed", text: "Name, city, package and date. No anonymous five-star walls." },
  { icon: "thumb_down", title: "Critical reviews stay up", text: "We reply publicly and fix what we can; we do not delete them." },
  { icon: "reply", title: "We reply to every one", text: "Usually within a day, from the consultant who handled the trip." },
];

export default function ReviewsPage() {
  const [feature, ...rest] = reviews;
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(crumbs)} />
      <JsonLd data={buildWebPageSchema({ name: title, description, path })} />
      <JsonLd data={reviewSchema} />

      <PageHero
        crumbs={crumbs}
        variant="band"
        urdu="زائرین کی آراء"
        eyebrow={`${ratingSummary.average} out of 5 · ${ratingSummary.total.toLocaleString("en-PK")} Google reviews`}
        title={<>What pilgrims say, with <em className="text-gold">names and dates</em>.</>}
        lede="Every review here comes from someone who travelled with us. Read the five-star ones, and the four-star ones that taught us something."
      >
        <div className="flex flex-wrap items-center gap-4">
          <Stars value={5} size="md" label={`${ratingSummary.average} out of 5`} />
          <LinkButton href={siteConfig.social.facebook} variant="outlineLight" size="sm" icon="open_in_new">Read on Google</LinkButton>
        </div>
      </PageHero>

      {/* Summary row */}
      <section className="border-b border-line bg-sand" aria-label="Rating summary">
        <Container className="grid gap-8 py-10 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-12">
          <div className="text-center md:text-start">
            <p className="font-display text-7xl font-semibold leading-none text-haram-deep">{ratingSummary.average}</p>
            <p className="mt-1 text-sm text-slate">average of {ratingSummary.total.toLocaleString("en-PK")} reviews</p>
          </div>
          <ul className="space-y-1.5">
            {ratingSummary.distribution.map((d) => (
              <li key={d.stars} className="flex items-center gap-2 text-sm text-slate">
                <span className="w-3 text-end font-bold text-ink">{d.stars}</span>
                <Icon name="star" filled className="text-[16px] text-gold" />
                <span className="h-2.5 flex-1 overflow-hidden rounded-full bg-sand-dark"><span className="block h-full bg-haram" style={{ width: `${d.share}%` }} /></span>
                <span className="w-10 text-end">{d.share}%</span>
              </li>
            ))}
          </ul>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm md:grid-cols-1">
            {howWeCollect.map((h) => (
              <li key={h.title} className="flex items-start gap-2">
                <Icon name={h.icon} className="mt-0.5 text-[18px] text-haram" />
                <span><span className="font-bold text-ink">{h.title}</span><br /><span className="text-slate">{h.text}</span></span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Feature + list */}
      <section className="bg-ivory py-section-sm md:py-section" aria-label="Reviews">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <ReviewCard review={feature} variant="feature" />
            <div className="mt-10 rounded-2xl bg-haram p-6 text-white">
              <p className="eyebrow text-gold">Travelled with us?</p>
              <p className="mt-2 font-display text-2xl font-semibold">Leave a review. The critical ones help most.</p>
              <LinkButton href={whatsappUrl("Assalam o Alaikum, I travelled with Raahi and would like to leave a review.")} variant="gold" size="sm" className="mt-4">Send your review</LinkButton>
            </div>
          </div>
          <div className="divide-y divide-line border-y border-line">
            {rest.map((r) => (
              <div key={r.id} id={r.id} className="scroll-mt-32">
                <ReviewCard review={r} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand image={siteImages.tawaf} title={<>Join the next <em className="text-gold">group</em>.</>} text="Most of our reviews mention a consultant by name. Yours will too." />
    </>
  );
}
