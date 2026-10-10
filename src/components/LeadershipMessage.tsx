"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

/** Director's message as an editorial pull quote (no box). */
export function LeadershipMessage() {
  const { t } = useLanguage();
  const l = t.homePage.leadership;

  return (
    <section className="py-16 md:py-section-gap px-4 md:px-margin-desktop bg-paper">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-3 text-start">
          <p className="font-display text-lg md:text-xl font-semibold uppercase tracking-[0.2em] text-[#F87B1B] mb-3">{l.tag}</p>
          <h2 className="display-title text-3xl md:text-4xl text-primary">{l.title}</h2>
          <div className="mt-8 flex items-center gap-4">
            <span className="w-16 h-16 rounded-full bg-primary text-[#F87B1B] flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                person
              </span>
            </span>
            <div>
              <p className="font-display text-2xl font-bold uppercase text-primary leading-none">{l.name}</p>
              <p className="text-base text-secondary mt-1">{l.role}</p>
            </div>
          </div>
        </div>
        <blockquote className="lg:col-span-9 relative text-start ps-10 md:ps-16">
          <span className="absolute -top-6 start-0 font-display text-[7rem] md:text-[9rem] leading-none text-[#F87B1B] select-none" aria-hidden="true">
            &ldquo;
          </span>
          <p className="font-display text-3xl md:text-5xl font-semibold leading-tight text-primary">{l.quote}</p>
        </blockquote>
      </div>
    </section>
  );
}
