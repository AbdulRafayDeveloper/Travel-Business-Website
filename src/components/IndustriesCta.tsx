"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ContactActions } from "@/components/ContactActions";

export function IndustriesCta() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-primary relative overflow-hidden text-center text-white">
      {/* Background Texture Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>
      <div className="relative z-10 px-4 md:px-margin-desktop max-w-container-max mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-on-primary">
          {t.industriesPage.cta.title}
        </h2>
        <p className="text-sm md:text-base text-on-primary/90 max-w-2xl mx-auto leading-relaxed">
          {t.industriesPage.cta.desc}
        </p>
        <div className="pt-4 flex justify-center">
          {/*
            -- Request a Quote Button (temporarily replaced by WhatsApp / Call) --
            Needs: import Link from "next/link";

          <Link href="/contact">
            <button className="bg-tertiary-fixed-dim text-primary px-10 py-5 rounded-xl font-bold text-sm hover:scale-105 transition-transform shadow-lg cursor-pointer">
              {t.industriesPage.cta.btn}
            </button>
          </Link>
          */}
          <ContactActions variant="onDark" size="lg" showNumber align="center" />
        </div>
      </div>
    </section>
  );
}
