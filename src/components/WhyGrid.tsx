"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function WhyGrid() {
  const { t } = useLanguage();
  const w = t.whyChooseUsPage;

  return (
    <section className="py-16 md:py-24 px-4 md:px-margin-desktop max-w-container-max mx-auto">
      {/* Section header */}
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-4xl font-bold text-primary mb-5">
          {w.advantage.title}
        </h2>
        <div className="w-20 h-1.5 bg-[#F87B1B] mx-auto rounded-full" />
      </div>

      {/* 3-col grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {w.advantage.items.map((item, i) => (
          <div
            key={i}
            className="group bg-white p-8 md:p-10 rounded-[20px] border border-outline-variant/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-start"
          >
            {/* Icon box */}
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-primary text-[30px]">
                {item.icon}
              </span>
            </div>
            <h3 className="text-lg font-bold text-primary mb-3">
              {item.title}
            </h3>
            <p className="text-sm text-secondary leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
