"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

/** Big numerals in a row, then a running line of standards. */
export function AboutTrustStats() {
  const { t } = useLanguage();

  return (
    <>
      <section className="py-16 md:py-section-gap px-4 md:px-margin-desktop max-w-container-max mx-auto">
        <dl className="grid grid-cols-1 md:grid-cols-3 md:divide-x rule gap-y-10">
          {t.about.trust.items.map((item, index) => (
            <div key={index} className={`text-start ${index > 0 ? "md:ps-10" : ""}`}>
              <dd className="font-display text-7xl md:text-8xl font-bold text-primary leading-none">{item.value}</dd>
              <dt className="mt-3 font-display text-xl md:text-2xl font-semibold uppercase tracking-wide text-[#F87B1B]">{item.label}</dt>
              <p className="mt-3 text-base md:text-lg text-secondary leading-relaxed max-w-xs">{item.desc}</p>
            </div>
          ))}
        </dl>
      </section>

      <section className="bg-primary text-white py-6 overflow-hidden">
        <p className="px-4 md:px-margin-desktop max-w-container-max mx-auto font-display text-2xl md:text-3xl font-semibold uppercase tracking-[0.15em] text-center">
          {t.about.standards.items.map((std, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <>
                  {" "}
                  <span className="text-[#F87B1B] mx-3" aria-hidden="true">/</span>{" "}
                </>
              )}
              <span className="whitespace-nowrap">{std}</span>
            </React.Fragment>
          ))}
        </p>
      </section>
    </>
  );
}
