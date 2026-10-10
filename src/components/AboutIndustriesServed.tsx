"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/SectionHeading";

/** Industries as a three-column ruled list (no tiles). */
export function AboutIndustriesServed() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-section-gap bg-paper border-y rule px-4 md:px-margin-desktop">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <SectionHeading title={t.about.industries.title} size="md" />
        </div>
        <ol className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 border-t rule">
          {t.about.industries.items.map((item, index) => (
            <li key={index} className="flex items-center gap-4 py-4 border-b rule text-start">
              <span className="font-display text-lg font-semibold text-primary/50 w-8">{String(index + 1).padStart(2, "0")}</span>
              <span className="material-symbols-outlined text-3xl text-[#F87B1B]">{item.icon}</span>
              <span className="font-display text-2xl font-bold uppercase text-primary leading-none">{item.title}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
