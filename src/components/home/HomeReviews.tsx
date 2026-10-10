import { ReviewCard } from "@/components/cards/ReviewCard";
import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stars } from "@/components/ui/Stars";
import { featuredReviews, ratingSummary } from "@/data/reviews";

/** One large pull-quote plus a divided list of dated reviews and a Google rating summary. */
export function HomeReviews() {
  const [feature, ...rest] = featuredReviews;
  return (
    <section className="bg-sand py-section-sm md:py-section" aria-label="Reviews">
      <Container>
        <SectionHeading number="06" eyebrow="Pilgrims' words" urdu="زائرین کی آراء" title={<>Reviews with <em>names, cities and dates</em>.</>} lede="Every review below is from a pilgrim who travelled with us. We publish the good and the critical, and we reply to both." />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <ReviewCard review={feature} variant="feature" />
            <div className="mt-10 flex flex-wrap items-center gap-6 rounded-2xl border border-gold/40 bg-ivory p-5">
              <div>
                <p className="font-display text-5xl font-semibold leading-none text-haram-deep">{ratingSummary.average}</p>
                <Stars value={5} size="md" className="mt-1" label={`${ratingSummary.average} out of 5`} />
                <p className="mt-1 text-sm text-slate">{ratingSummary.total.toLocaleString("en-PK")} Google reviews</p>
              </div>
              <ul className="flex-1 space-y-1.5 min-w-[200px]">
                {ratingSummary.distribution.map((d) => (
                  <li key={d.stars} className="flex items-center gap-2 text-xs text-slate">
                    <span className="w-3 text-end font-bold">{d.stars}</span>
                    <Icon name="star" filled className="text-[14px] text-gold" />
                    <span className="h-2 flex-1 overflow-hidden rounded-full bg-sand-dark"><span className="block h-full bg-haram" style={{ width: `${d.share}%` }} /></span>
                    <span className="w-8 text-end">{d.share}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="divide-y divide-line border-y border-line">
              {rest.map((r) => (
                <ReviewCard key={r.id} review={r} />
              ))}
            </div>
            <LinkButton href="/reviews" variant="outline" className="mt-6" icon="arrow_forward">Read all reviews</LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
