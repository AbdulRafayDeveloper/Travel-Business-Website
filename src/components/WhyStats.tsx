"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function WhyStats() {
  const { t } = useLanguage();
  const stats = t.whyChooseUsPage.stats;

  return (
    <section className="bg-primary py-16">
      <div className="px-4 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-3xl md:text-5xl font-extrabold text-[#F87B1B]">{stat.value}</span>
              <span className="text-xs font-semibold text-white/90 uppercase tracking-widest mt-2">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
