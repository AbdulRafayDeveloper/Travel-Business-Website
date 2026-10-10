import type { OccupancyPrices, RoomType } from "@/types";
import { formatPkr, roomShortLabels } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface PriceBlockProps {
  prices: OccupancyPrices;
  tone?: "light" | "dark";
  size?: "sm" | "md";
  highlight?: RoomType;
  className?: string;
}

const order: RoomType[] = ["quad", "triple", "double"];

/** Three-column per-person price ledger: Quad / Triple / Double. */
export function PriceBlock({ prices, tone = "light", size = "md", highlight = "quad", className }: PriceBlockProps) {
  const dark = tone === "dark";
  return (
    <dl className={cn("grid grid-cols-3 divide-x", dark ? "divide-white/15" : "divide-line", className)}>
      {order.map((room) => (
        <div key={room} className={cn("px-3 first:ps-0 last:pe-0", size === "sm" ? "py-1" : "py-2")}>
          <dt className={cn("eyebrow !tracking-[0.14em]", dark ? "text-gold-pale/80" : "text-slate", size === "sm" && "!text-[0.65rem]")}>{roomShortLabels[room]}</dt>
          <dd className={cn("mt-1 font-display font-semibold leading-none", size === "sm" ? "text-lg" : "text-xl md:text-2xl", dark ? "text-white" : room === highlight ? "text-haram" : "text-ink")}>
            <span className={cn("me-0.5 align-top font-sans font-bold", size === "sm" ? "text-[0.6rem]" : "text-xs")}>PKR</span>
            {formatPkr(prices[room], false)}
          </dd>
        </div>
      ))}
    </dl>
  );
}
