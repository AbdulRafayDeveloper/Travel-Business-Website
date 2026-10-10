"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { contactNumber } from "@/constants/site";

export function ContactStrip() {
  const { t } = useLanguage();

  return (
    <section className="py-8 bg-surface-container-high border-y border-outline-variant/30">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 md:gap-8">
        <div className="flex items-center gap-3 text-start">
          <span className="material-symbols-outlined text-primary">
            location_on
          </span>
          <span className="text-sm font-bold text-on-surface">
            {t.contactStrip.address}
          </span>
        </div>
        <div className="flex items-center gap-3 text-start">
          <span className="material-symbols-outlined text-primary">
            call
          </span>
          <a href={contactNumber.telUrl} dir="ltr" className="text-sm font-bold text-on-surface hover:text-primary hover:underline">
            {t.contactStrip.phone}
          </a>
        </div>
        <div className="flex items-center gap-3 text-start">
          <span className="material-symbols-outlined text-primary">
            mail
          </span>
          <span className="text-sm font-bold text-on-surface">
            {t.contactStrip.email}
          </span>
        </div>
      </div>
    </section>
  );
}
