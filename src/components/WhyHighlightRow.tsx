"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function WhyHighlightRow() {
  const { t } = useLanguage();
  const highlights = t.whyChooseUsPage.highlights;

  return (
    <section className="py-16 md:py-24 px-4 md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        {/* On mobile: 2-col grid. On tablet: 3-col. On desktop: 5-col single row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="bg-[#EEF2F7] p-6 md:p-8 rounded-[20px] border border-outline-variant/30 flex flex-col justify-between min-h-[192px] md:min-h-[240px] hover:-translate-y-2 transition-all duration-300 cursor-default text-start"
            >
              <span className="material-symbols-outlined text-primary text-[36px] md:text-[42px]">
                {item.icon}
              </span>
              <h3 className="text-sm md:text-base font-bold text-primary leading-snug mt-auto">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
