import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { Guide } from "@/types";
import { cn, formatDate } from "@/lib/utils";

interface GuideCardProps {
  guide: Guide;
  variant?: "list" | "tile";
  className?: string;
}

/** Editorial guide entry: "list" is a ruled row with thumbnail, "tile" a tall arch-photo tile. */
export function GuideCard({ guide, variant = "list", className }: GuideCardProps) {
  const href = `/umrah-guide/${guide.slug}`;
  if (variant === "tile") {
    return (
      <Link href={href} className={cn("group flex flex-col", className)}>
        <div className="arch-mask relative aspect-[4/5] overflow-hidden">
          <Image src={guide.image} alt={guide.title} fill sizes="(min-width: 1024px) 300px, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
        <p className="eyebrow mt-4 text-gold-deep">{guide.category} · {guide.readMinutes} min</p>
        <h3 className="mt-1 font-display text-xl font-semibold leading-snug text-haram-deep group-hover:underline">{guide.title}</h3>
      </Link>
    );
  }
  return (
    <Link href={href} className={cn("group grid grid-cols-[88px_1fr] gap-4 py-5 sm:grid-cols-[120px_1fr]", className)}>
      <div className="relative aspect-square overflow-hidden rounded-lg sm:aspect-[4/3]">
        <Image src={guide.image} alt={guide.title} fill sizes="120px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div>
        <p className="eyebrow text-gold-deep">{guide.category}</p>
        <h3 className="mt-1 font-display text-xl font-semibold leading-snug text-haram-deep group-hover:underline md:text-2xl">{guide.title}</h3>
        <p className="mt-1.5 hidden text-sm text-slate sm:block">{guide.excerpt}</p>
        <p className="mt-2 flex items-center gap-3 text-xs text-slate">
          <span className="flex items-center gap-1"><Icon name="schedule" className="text-[14px]" />{guide.readMinutes} min read</span>
          <span>Updated {formatDate(guide.updatedOn)}</span>
        </p>
      </div>
    </Link>
  );
}
