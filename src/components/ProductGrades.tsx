"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function ProductGrades() {
  const { locale, t } = useLanguage();

  return (
    <section className="text-start">
      <h2 className="text-xl md:text-2xl font-bold text-primary mb-8">
        {t.scrapDetail.grades.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {t.scrapDetail.grades.items.map((item, index) => (
          <div
            key={index}
            className="bento-hover bg-white p-6 rounded-2xl border border-outline-variant group flex flex-col justify-between"
          >
            <div>
              <span className="text-primary font-bold text-xs bg-primary-fixed/30 px-3 py-1 rounded-full mb-4 inline-block">
                {item.badge}
              </span>
              <h3 className="text-lg md:text-xl font-bold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                {item.desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-outline-variant/50 flex justify-between items-center">
              <span className="text-xs md:text-sm font-bold text-primary">
                {t.scrapDetail.grades.detailsLabel}
              </span>
              <span className={`material-symbols-outlined text-primary text-base transition-transform group-hover:translate-x-1 ${locale === "ar" ? "rotate-180 group-hover:-translate-x-1" : ""}`}>
                arrow_forward
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
