"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ContactActions } from "@/components/ContactActions";

export function ProductSidebar() {
  // `locale` was used by the commented-out Request a Quote arrow (RTL flip).
  const { t } = useLanguage();

  return (
    <aside className="space-y-8 text-start">
      {/* Request Quote CTA */}
      <div className="bg-white rounded-2xl border border-outline-variant/40 p-6 md:p-8 shadow-md md:sticky md:top-28">
        <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
          {t.scrapDetail.sidebar.secure.title}
        </h2>
        <p className="text-sm md:text-base text-secondary mb-6 leading-relaxed">
          {t.scrapDetail.sidebar.secure.desc}
        </p>
        {/*
          -- Request a Quote Button (temporarily replaced by WhatsApp / Call) --
          Needs: import Link from "next/link"; and `locale` from useLanguage().

        <Link href="/request-a-quote" className="block w-full">
          <span className="w-full bg-[#F87B1B] text-[#11224E] py-3.5 px-5 rounded-xl font-extrabold text-sm md:text-base hover:bg-[#11224E] hover:text-white transition-all duration-200 flex items-center justify-between gap-3 group shadow-md hover:shadow-xl border border-[#F87B1B] cursor-pointer">
            <span className="text-start leading-snug font-bold">
              {t.scrapDetail.sidebar.secure.btn}
            </span>
            <span className="w-8 h-8 rounded-lg bg-[#11224E]/10 text-[#11224E] group-hover:bg-white/20 group-hover:text-white transition-colors flex items-center justify-center flex-shrink-0">
              <span
                className={`material-symbols-outlined text-lg transition-transform group-hover:translate-x-0.5 ${
                  locale === "ar" ? "rotate-180 group-hover:-translate-x-0.5" : ""
                }`}
              >
                arrow_forward
              </span>
            </span>
          </span>
        </Link>
        */}
        <ContactActions variant="onLight" size="md" fullWidth showNumber />
        <div className="mt-6 space-y-3 pt-2 border-t border-outline-variant/20">
          <div className="flex items-center gap-3 text-xs md:text-sm text-secondary">
            <span
              className="material-symbols-outlined text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
            <span>{t.scrapDetail.sidebar.secure.bullets[0]}</span>
          </div>
          <div className="flex items-center gap-3 text-xs md:text-sm text-secondary">
            <span
              className="material-symbols-outlined text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              public
            </span>
            <span>{t.scrapDetail.sidebar.secure.bullets[1]}</span>
          </div>
        </div>
      </div>

      {/* Industrial Applications */}
      <div className="bg-surface-container-low rounded-2xl p-6 md:p-8 border border-outline-variant/30">
        <h2 className="text-lg md:text-xl font-bold text-primary mb-6">
          {t.scrapDetail.sidebar.apps.title}
        </h2>
        <ul className="space-y-4">
          {t.scrapDetail.sidebar.apps.items.map((app, index) => (
            <li key={index} className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined">{app.icon}</span>
              </div>
              <span className="font-bold text-on-surface text-sm md:text-base">
                {app.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* International Supply */}
      <div className="bg-white rounded-2xl p-6 md:p-8 border border-outline-variant/30 text-center flex flex-col items-center">
        <span className="material-symbols-outlined text-4xl md:text-5xl text-primary mb-4">
          public
        </span>
        <h2 className="text-lg md:text-xl font-bold text-primary mb-2">
          {t.scrapDetail.sidebar.supply.title}
        </h2>
        <p className="text-xs md:text-sm text-secondary leading-relaxed">
          {t.scrapDetail.sidebar.supply.desc}
        </p>
      </div>
    </aside>
  );
}
