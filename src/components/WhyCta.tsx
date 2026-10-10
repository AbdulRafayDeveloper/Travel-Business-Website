"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ContactActions } from "@/components/ContactActions";

export function WhyCta() {
  const { t } = useLanguage();
  const cta = t.whyChooseUsPage.cta;

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background — primary-container is the deep blue from Figma */}
      <div className="absolute inset-0 bg-primary-container z-0" />
      {/* Geometric skew accent (top-right) */}
      <div className="absolute top-0 end-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-20 z-0 pointer-events-none" />

      <div className="relative z-10 px-4 md:px-margin-desktop max-w-container-max mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
          {cta.title}
        </h2>
        <p className="text-sm md:text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          {cta.desc}
        </p>
        {/*
          -- Request a Quote Button (temporarily replaced by WhatsApp / Call) --
          Needs: import Link from "next/link";

        <Link href="/request-a-quote">
          <button className="bg-[#F87B1B] text-primary px-10 py-5 rounded-xl text-base md:text-lg font-extrabold hover:bg-[#d6610b] transition-all transform hover:scale-105 active:scale-95 shadow-xl cursor-pointer">
            {cta.btn}
          </button>
        </Link>
        */}
        <ContactActions variant="onDark" size="lg" showNumber align="center" />
      </div>
    </section>
  );
}
