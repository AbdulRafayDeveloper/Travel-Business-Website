"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ContactActions } from "@/components/ContactActions";

export interface InquiryBannerProps {
  isAboutPage?: boolean;
}

/** Full-bleed closing band with the direct contact actions. */
export function InquiryBanner({ isAboutPage = false }: InquiryBannerProps) {
  const { t } = useLanguage();

  return (
    <section className="bg-primary border-t-8 border-[#F87B1B]">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop py-16 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 text-start">
          <h2 className="display-title text-4xl md:text-6xl text-white">{t.inquiry.title}</h2>
          <p className="text-lg md:text-xl text-white/90 mt-5 max-w-2xl leading-relaxed">
            {isAboutPage ? t.inquiry.subtitleAbout : t.inquiry.subtitle}
          </p>
        </div>
        <div className="lg:col-span-5 lg:justify-self-end">
          {/*
            -- Request a Quote Button (temporarily replaced by WhatsApp / Call) --

          <button className="bg-tertiary-fixed-dim text-on-tertiary-fixed font-bold px-10 py-5 rounded-xl hover:scale-105 transition-transform shadow-lg cursor-pointer">
            {t.inquiry.cta}
          </button>
          */}
          <ContactActions variant="onDark" size="lg" showNumber />
        </div>
      </div>
    </section>
  );
}
