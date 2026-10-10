"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

/** Trust numbers: a sentence on the left, oversized numerals on the right. */
export function HomeStats() {
  const { t } = useLanguage();
  const s = t.homePage.statsIntro;

  return (
    <section className="bg-primary text-white">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop py-8 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        <div className="lg:col-span-4 text-start">
          <p className="font-display text-lg md:text-xl font-semibold uppercase tracking-[0.2em] text-[#F87B1B] mb-1">{s.kicker}</p>
          <h2 className="display-title text-3xl md:text-4xl">{s.title}</h2>
        </div>
        <dl className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-y-6">
          {t.homePage.stats.map((stat, index) => (
            <div key={index} className={`text-start px-4 md:px-6 ${index > 0 ? "md:border-s border-white/20" : ""} ${index % 2 === 1 ? "border-s border-white/20 md:border-s" : ""}`}>
              <dd className="font-display text-5xl md:text-6xl font-bold text-[#F87B1B] leading-none">{stat.value}</dd>
              <dt className="mt-1.5 text-base font-semibold text-white/90 leading-snug">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
