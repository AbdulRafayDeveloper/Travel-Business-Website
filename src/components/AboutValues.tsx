"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/SectionHeading";

/** Core values as a single ruled line of words with icons. */
export function AboutValues() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-section-gap px-4 md:px-margin-desktop max-w-container-max mx-auto">
      <SectionHeading title={t.about.values.title} size="md" className="mb-10" />
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-b rule divide-x rule">
        {t.about.values.items.map((item, index) => (
          <li key={index} className="py-8 px-4 flex flex-col items-center text-center gap-3">
            <span className="material-symbols-outlined text-4xl md:text-5xl text-[#F87B1B]">{item.icon}</span>
            <span className="font-display text-xl md:text-2xl font-bold uppercase text-primary leading-none">{item.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
