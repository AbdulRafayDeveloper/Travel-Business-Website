"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function CompanyStatistics() {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-16 bg-[#EEF2F7] px-4 md:px-margin-desktop">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4">
        {t.statistics.items.map((item, index) => (
          <div
            key={index}
            className={`p-8 md:p-10 text-center border-outline-variant/30 ${
              index < 3 ? "stat-card-divider" : ""
            }`}
          >
            <div className="text-3xl md:text-4xl font-bold text-primary">
              {item.value}
            </div>
            <div className="text-xs md:text-sm font-bold text-secondary mt-2 uppercase tracking-wider">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
