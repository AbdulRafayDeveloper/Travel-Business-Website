import { Icon } from "@/components/ui/Icon";
import { Stars } from "@/components/ui/Stars";
import type { Review } from "@/types";
import { cn, formatDate } from "@/lib/utils";

interface ReviewCardProps {
  review: Review;
  variant?: "row" | "feature";
  tone?: "light" | "dark";
  className?: string;
}

/** Dated, attributed review. "row" is a divided list item; "feature" is the large pull-quote. */
export function ReviewCard({ review, variant = "row", tone = "light", className }: ReviewCardProps) {
  const dark = tone === "dark";
  if (variant === "feature") {
    return (
      <figure className={cn("relative", className)}>
        <Icon name="format_quote" className={cn("absolute -start-2 -top-6 text-[72px]", dark ? "text-gold/40" : "text-gold/50")} />
        <blockquote className={cn("display-title relative text-2xl md:text-3xl lg:text-4xl", dark ? "text-white" : "text-haram-deep")}>“{review.text}”</blockquote>
        <figcaption className={cn("mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm", dark ? "text-white/80" : "text-slate")}>
          <Stars value={review.rating} />
          <span className={cn("font-bold", dark ? "text-gold-pale" : "text-ink")}>{review.name}</span>
          <span>{review.city} · {formatDate(review.date)}</span>
          <span className="rounded-md bg-gold-pale px-2 py-0.5 text-xs font-semibold text-gold-deep">{review.packageName}</span>
        </figcaption>
      </figure>
    );
  }
  return (
    <article className={cn("py-5", className)}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-haram-soft font-display text-lg font-semibold text-haram-deep" aria-hidden="true">
            {review.name.charAt(0)}
          </span>
          <div>
            <p className="font-bold text-ink">{review.name}</p>
            <p className="text-xs text-slate">{review.city} · travelled with {review.travelledWith.toLowerCase()}</p>
          </div>
        </div>
        <div className="text-end text-xs text-slate">
          <Stars value={review.rating} />
          <p>{formatDate(review.date)} · via {review.source}</p>
        </div>
      </div>
      <p className="mt-3 leading-relaxed text-ink">{review.text}</p>
      <p className="mt-2 flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-md bg-sand px-2 py-0.5 font-semibold text-haram-deep">{review.packageName}</span>
        {review.consultant && <span className="text-slate">Consultant: {review.consultant}</span>}
        <span className="flex items-center gap-1 text-haram"><Icon name="verified" className="text-[14px]" /> Verified traveller</span>
      </p>
    </article>
  );
}
