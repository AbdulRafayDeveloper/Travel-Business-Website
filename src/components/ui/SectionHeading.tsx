import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Section number like "01" rendered in the eyebrow. */
  number?: string;
  eyebrow?: string;
  /** Optional Urdu line shown above the title. */
  urdu?: string;
  title: ReactNode;
  lede?: ReactNode;
  tone?: "light" | "dark";
  align?: "start" | "center";
  size?: "md" | "lg" | "xl";
  className?: string;
  as?: "h1" | "h2" | "h3";
}

const sizes = {
  md: "text-3xl md:text-4xl",
  lg: "text-4xl md:text-5xl",
  xl: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
};

/**
 * Standard section opener: numbered eyebrow with a gold hairline, optional Urdu line,
 * Fraunces display title (use <em> for the gold italic word) and a lede.
 */
export function SectionHeading({ number, eyebrow, urdu, title, lede, tone = "light", align = "start", size = "lg", className, as: Tag = "h2" }: SectionHeadingProps) {
  const dark = tone === "dark";
  const center = align === "center";
  return (
    <div className={cn(center ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-start", className)}>
      {(number || eyebrow) && (
        <div className={cn("mb-4 flex items-center gap-3", center && "justify-center")}>
          {number && <span className={cn("font-display text-lg italic", dark ? "text-gold" : "text-gold-deep")}>{number}</span>}
          <span className={cn("h-px w-10", dark ? "bg-gold/70" : "bg-gold")} aria-hidden="true" />
          {eyebrow && <span className={cn("eyebrow", dark ? "text-gold-pale/90" : "text-haram")}>{eyebrow}</span>}
        </div>
      )}
      {/* .urdu sets direction: rtl, so physical text-left keeps the line flush with the English title */}
      {urdu && <p className={cn("urdu mb-1 text-xl md:text-2xl", center ? "text-center" : "text-right md:text-left", dark ? "text-gold-pale" : "text-haram")}>{urdu}</p>}
      <Tag className={cn("display-title", sizes[size], dark ? "text-white" : "text-haram-deep")}>{title}</Tag>
      {lede && <p className={cn("lede mt-5", dark ? "text-white/85" : "text-slate")}>{lede}</p>}
    </div>
  );
}
