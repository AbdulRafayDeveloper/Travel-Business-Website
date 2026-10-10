"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export function FAQList() {
  const { t } = useLanguage();
  // Item 1 (index 0) expanded by default
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-16 md:py-section-gap px-4 md:px-margin-desktop bg-surface">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {t.faqPage.items.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-[16px] p-6 shadow-sm transition-all duration-300 ${
                  isActive
                    ? "border-primary bg-white"
                    : "border-outline-variant bg-white hover:border-primary/30"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center text-left group cursor-pointer focus:outline-none"
                >
                  <span className="text-base md:text-lg font-bold text-primary text-start pe-4">
                    {item.q}
                  </span>
                  <span
                    className={`material-symbols-outlined text-primary text-2xl transition-transform duration-300 ${
                      isActive ? "rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                <div
                  className="transition-all duration-300 ease-out overflow-hidden"
                  style={{
                    maxHeight: isActive ? "500px" : "0px",
                    paddingTop: isActive ? "16px" : "0px",
                  }}
                >
                  <p className="text-sm md:text-base text-secondary leading-relaxed text-start">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
