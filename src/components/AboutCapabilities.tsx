"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function AboutCapabilities() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-section-gap bg-primary text-on-primary">
      <div className="px-4 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          {/* Left Side: Capabilities list */}
          <div className="text-start">
            <h2 className="display-title text-4xl md:text-6xl mb-8">
              {t.about.capabilities.title}
            </h2>
            <ul className="space-y-8">
              {t.about.capabilities.items.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim text-2xl mt-1">
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="font-display text-2xl md:text-3xl font-bold uppercase leading-none mb-2">
                      {item.title}
                    </h4>
                    <p className="text-base md:text-lg text-white/90 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: compliance list on a rule */}
          <ol className="mt-12 lg:mt-0 text-start border-t border-white/20">
            {t.about.capabilities.cards.map((card, index) => (
              <li key={index} className="flex items-start gap-5 py-6 border-b border-white/20">
                <span className="material-symbols-outlined text-[#F87B1B] text-4xl flex-shrink-0">{card.icon}</span>
                <div>
                  <h4 className="font-display text-2xl md:text-3xl font-bold uppercase leading-none mb-2">{card.title}</h4>
                  <p className="text-base md:text-lg text-white/90 leading-relaxed">{card.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
