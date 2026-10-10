"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

/** Mission and vision as two ruled columns (no cards). */
export function AboutMissionVision() {
  const { t } = useLanguage();
  const mv = t.about.missionVision;
  const blocks = [
    { icon: "track_changes", title: mv.mission.title, desc: mv.mission.desc },
    { icon: "visibility", title: mv.vision.title, desc: mv.vision.desc },
  ];

  return (
    <section className="py-16 md:py-section-gap bg-paper border-y rule px-4 md:px-margin-desktop">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 md:divide-x rule gap-y-12">
        {blocks.map((b, i) => (
          <div key={i} className={`text-start ${i === 1 ? "md:ps-12" : "md:pe-12"}`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-[#F87B1B] text-4xl">{b.icon}</span>
              <span className="font-display text-lg font-semibold uppercase tracking-[0.2em] text-primary/60">0{i + 1}</span>
            </div>
            <h3 className="display-title text-4xl md:text-5xl text-primary mb-5">{b.title}</h3>
            <p className="text-lg md:text-xl text-on-surface leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
