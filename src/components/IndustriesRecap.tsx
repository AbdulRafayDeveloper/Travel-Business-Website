"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function IndustriesRecap() {
  const { t } = useLanguage();

  return (
    <section className="bg-surface-container-low py-12 border-y border-outline-variant/30 px-4 md:px-margin-desktop">
      <div className="max-w-container-max mx-auto flex flex-wrap justify-center lg:justify-between items-center gap-8">
        {t.industriesPage.recap.map((item, index) => (
          <div key={index} className="flex items-center gap-4 text-start min-w-[200px]">
            <span className="material-symbols-outlined text-primary text-3xl">
              {item.icon}
            </span>
            <div>
              <p className="font-bold text-primary text-xs md:text-sm">
                {item.title}
              </p>
              <p className="text-secondary text-xs">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
