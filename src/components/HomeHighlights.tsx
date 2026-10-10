"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

/** Four key selling points as a divided strip (no cards). */
export function HomeHighlights() {
  const { t } = useLanguage();

  return (
    <section className="bg-paper border-b rule">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 rule">
        {t.homePage.highlights.map((item, index) => (
          <div key={index} className="flex items-center gap-4 py-6 md:py-8 px-3 md:px-6 first:ps-0 text-start">
            <span
              className="material-symbols-outlined text-[#F87B1B] text-4xl md:text-5xl flex-shrink-0"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {item.icon}
            </span>
            <span className="min-w-0">
              <span className="block font-display text-2xl md:text-3xl font-bold uppercase text-primary leading-none">
                {item.title}
              </span>
              <span className="block text-sm md:text-base text-secondary mt-1">{item.desc}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
