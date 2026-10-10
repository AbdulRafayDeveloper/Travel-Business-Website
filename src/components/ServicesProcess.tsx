"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function ServicesProcess() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 px-4 md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
      <div className="text-center mb-16 space-y-2">
        <h2 className="text-2xl md:text-4xl font-bold text-primary">
          {t.servicesPage.process.title}
        </h2>
        <p className="text-sm md:text-base text-secondary">
          {t.servicesPage.process.subtitle}
        </p>
      </div>

      <div className="relative">
        {/* Desktop Connector Line */}
        <div className="absolute top-8 start-8 end-8 h-0.5 bg-outline-variant/30 hidden md:block z-0"></div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-4 relative z-10">
          {t.servicesPage.process.steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center w-full md:w-1/5 space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold shadow-md relative">
                {step.num}
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-primary uppercase tracking-wider">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-secondary px-4 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
