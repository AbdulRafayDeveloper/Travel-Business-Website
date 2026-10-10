"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function ProductProcessing() {
  const { t } = useLanguage();

  return (
    <section className="bg-primary text-on-primary rounded-2xl p-8 md:p-10 overflow-hidden relative text-start shadow-md">
      <div className="relative z-10">
        <h2 className="text-xl md:text-2xl font-bold mb-8">
          {t.scrapDetail.processing.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.scrapDetail.processing.items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-on-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl text-tertiary-fixed-dim">
                  {item.icon}
                </span>
              </div>
              <h3 className="font-bold text-base md:text-lg">{item.title}</h3>
              <p className="text-xs md:text-sm opacity-95 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-10 -right-10 opacity-10 pointer-events-none select-none">
        <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'FILL' 1" }}>
          factory
        </span>
      </div>
    </section>
  );
}
