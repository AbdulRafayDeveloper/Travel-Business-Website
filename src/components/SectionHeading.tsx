import React from "react";

interface SectionHeadingProps {
  /** Small label above the title, e.g. "01 — Products" */
  kicker?: string;
  title: string;
  lede?: string;
  tone?: "light" | "dark";
  align?: "start" | "center";
  size?: "md" | "lg";
  className?: string;
}

/**
 * Editorial section heading: orange bar + kicker + condensed display title.
 * Shared by every page so headings read as one family without boxes.
 */
export function SectionHeading({ kicker, title, lede, tone = "light", align = "start", size = "lg", className = "" }: SectionHeadingProps) {
  const dark = tone === "dark";
  const center = align === "center";
  return (
    <div className={`${center ? "text-center mx-auto max-w-3xl" : "text-start max-w-3xl"} ${className}`}>
      <div className={`flex items-center gap-3 mb-4 ${center ? "justify-center" : ""}`}>
        <span className="block w-10 h-1.5 bg-[#F87B1B]" aria-hidden="true" />
        {kicker && (
          <span className={`font-display text-base md:text-lg font-semibold uppercase tracking-[0.2em] ${dark ? "text-[#F87B1B]" : "text-primary"}`}>
            {kicker}
          </span>
        )}
      </div>
      <h2 className={`display-title ${size === "lg" ? "text-4xl md:text-6xl" : "text-3xl md:text-5xl"} ${dark ? "text-white" : "text-primary"}`}>
        {title}
      </h2>
      {lede && (
        <p className={`mt-5 text-lg md:text-xl leading-relaxed ${dark ? "text-white/90" : "text-secondary"}`}>{lede}</p>
      )}
    </div>
  );
}
