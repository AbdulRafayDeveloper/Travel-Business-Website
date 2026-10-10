"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function FAQCta() {
  const { t } = useLanguage();

  return (
    <section className="bg-primary-container py-16 px-4 md:px-margin-desktop text-center text-white">
      <div className="max-w-container-max mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          {t.faqPage.cta.title}
        </h2>
        <p className="text-sm md:text-base opacity-90 max-w-2xl mx-auto leading-relaxed">
          {t.faqPage.cta.desc}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Link href="/contact">
            <button className="w-full sm:w-auto bg-tertiary-fixed-dim text-primary px-8 py-4 rounded-xl font-bold text-sm shadow-md hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 cursor-pointer">
              <span className="material-symbols-outlined text-lg">mail</span>
              {t.faqPage.cta.btnContact}
            </button>
          </Link>
          <Link href="/products/aluminum-scrap">
            <button className="w-full sm:w-auto border border-white text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-white/10 transition-colors cursor-pointer">
              {t.faqPage.cta.btnSpecs}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
