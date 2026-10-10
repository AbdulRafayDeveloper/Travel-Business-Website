"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ContactActions } from "@/components/ContactActions";

export function ProductsCta() {
  const { t } = useLanguage();

  return (
    <section className="bg-primary py-16 px-4 md:px-margin-desktop text-white text-start">
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-start space-y-2">
          <h2 className="text-2xl md:text-4xl font-bold text-on-primary">
            {t.productsPage.cta.title}
          </h2>
          <p className="text-sm md:text-lg text-on-primary/90">
            {t.productsPage.cta.desc}
          </p>
        </div>
        {/*
          -- Request a Quote Button (temporarily replaced by WhatsApp / Call) --
          Needs: import Link from "next/link";

        <Link href="/contact">
          <button className="bg-tertiary-fixed-dim text-primary px-10 py-4 rounded-xl font-bold text-sm shadow-xl hover:scale-105 transition-transform whitespace-nowrap cursor-pointer">
            {t.productsPage.cta.btn}
          </button>
        </Link>
        */}
        <ContactActions variant="onDark" size="md" showNumber align="center" className="md:items-end" />
      </div>
    </section>
  );
}
