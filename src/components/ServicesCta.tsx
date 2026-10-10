"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ContactActions } from "@/components/ContactActions";

export function ServicesCta() {
  const { t } = useLanguage();

  return (
    <section className="py-16 px-4 md:px-margin-desktop">
      <div className="bg-primary p-12 md:p-20 rounded-[40px] text-center relative overflow-hidden max-w-container-max mx-auto text-white">
        {/* Decorative bubbles */}
        <div className="absolute top-0 end-0 w-64 h-64 bg-white/5 rounded-full -me-32 -mt-32 pointer-events-none"></div>
        <div className="absolute bottom-0 start-0 w-96 h-96 bg-white/5 rounded-full -ms-48 -mb-48 pointer-events-none"></div>

        <div className="relative z-10 space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold max-w-2xl mx-auto leading-tight">
            {t.servicesPage.cta.title}
          </h2>
          <p className="text-sm md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            {t.servicesPage.cta.desc}
          </p>
          <div className="pt-6 flex justify-center">
            {/*
              -- Request a Quote Button (temporarily replaced by WhatsApp / Call) --
              Needs: import Link from "next/link";

            <Link href="/contact">
              <button className="bg-tertiary-fixed-dim text-primary text-base md:text-lg px-10 py-5 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg cursor-pointer">
                {t.servicesPage.cta.btn}
              </button>
            </Link>
            */}
            <ContactActions variant="onDark" size="lg" showNumber align="center" />
          </div>
        </div>
      </div>
    </section>
  );
}
