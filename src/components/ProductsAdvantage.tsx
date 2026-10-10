"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function ProductsAdvantage() {
  const { t } = useLanguage();

  return (
    <section className="bg-surface-container-low py-16 px-4 md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold text-primary">
            {t.productsPage.advantage.title}
          </h2>
          <p className="text-sm md:text-base text-secondary max-w-xl mx-auto">
            {t.productsPage.advantage.desc}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {t.productsPage.advantage.items.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-outline-variant/30 text-center flex flex-col items-center shadow-sm"
            >
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined text-[32px]">{item.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
