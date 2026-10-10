"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function WhyCapabilities() {
  const { t } = useLanguage();
  const caps = t.whyChooseUsPage.capabilities;

  return (
    <section className="py-16 md:py-24 bg-[#f1f3ff] px-4 md:px-margin-desktop">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 md:gap-x-24 gap-y-12 md:gap-y-16">
        {caps.map((cap, i) => (
          <div key={i} className="flex gap-5 items-start text-start">
            {/* White icon box */}
            <div className="shrink-0 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-primary text-[28px]">
                {cap.icon}
              </span>
            </div>
            <div>
              <h3 className="text-base md:text-lg font-bold text-primary mb-2">
                {cap.title}
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                {cap.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
