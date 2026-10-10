"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function IndustriesServed() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-section-gap px-4 md:px-margin-desktop max-w-container-max mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
        {t.industries.title}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {t.industries.items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-8 bg-white border border-outline-variant rounded-2xl shadow-sm premium-card hover:border-primary/40 text-center"
          >
            <span className="material-symbols-outlined text-4xl text-primary mb-4">
              {item.icon}
            </span>
            <span className="font-bold text-sm text-primary">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
