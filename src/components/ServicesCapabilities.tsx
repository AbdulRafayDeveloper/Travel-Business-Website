"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

/** Four capabilities as ruled columns (orange top rule, no boxes). */
export function ServicesCapabilities() {
  const { t } = useLanguage();

  return (
    <section className="pb-16 md:pb-section-gap px-4 md:px-margin-desktop max-w-container-max mx-auto text-start">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
        {t.servicesPage.capabilities.map((cap, index) => (
          <div key={index} className="border-t-4 border-[#F87B1B] pt-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="material-symbols-outlined text-primary text-4xl">{cap.icon}</span>
              <span className="font-display text-lg font-semibold text-primary/50">0{index + 1}</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold uppercase text-primary leading-none mb-3">{cap.title}</h3>
            <p className="text-base md:text-lg text-secondary leading-relaxed">{cap.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
