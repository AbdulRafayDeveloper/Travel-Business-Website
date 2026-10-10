"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function IndustriesOverview() {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-16 px-4 md:px-margin-desktop max-w-container-max mx-auto text-start">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <div className="lg:col-span-8 space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold text-primary leading-tight">
            {t.industriesPage.overview.title}
          </h2>
          <p className="text-base md:text-lg text-secondary leading-relaxed">
            {t.industriesPage.overview.p}
          </p>
        </div>
      </div>
    </section>
  );
}
