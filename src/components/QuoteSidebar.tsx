"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function QuoteSidebar() {
  const { t } = useLanguage();
  const s = t.quotePage.sidebar;

  const contactRows = [
    { icon: "location_on", label: s.hq, value: s.hqVal },
    { icon: "call", label: s.phone, value: s.phoneVal },
    { icon: "mail", label: s.email, value: s.emailVal },
    { icon: "schedule", label: s.hours, value: s.hoursVal },
  ];

  return (
    <aside className="w-full lg:w-1/3 space-y-6">
      {/* Contact Info Card */}
      <div className="bg-primary text-white rounded-2xl p-8 shadow-xl">
        <h2 className="text-xl font-bold mb-6">{s.title}</h2>
        <div className="space-y-6">
          {contactRows.map((row, i) => (
            <div key={i} className="flex gap-4 items-start">
              <span className="material-symbols-outlined text-[#F87B1B] mt-0.5 shrink-0">{row.icon}</span>
              <div>
                <p className="font-bold text-sm">{row.label}</p>
                <p className="text-xs opacity-95 mt-0.5">{row.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-white border border-outline-variant/30 rounded-2xl p-8 shadow-sm">
        <h3 className="text-xs font-bold text-secondary uppercase tracking-widest mb-6">{s.whyTitle}</h3>
        <div className="space-y-6">
          {s.badges.map((badge, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined">{badge.icon}</span>
              </div>
              <div>
                <p className="font-bold text-primary text-sm">{badge.title}</p>
                <p className="text-xs text-secondary">{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LME Spot Price Widget */}
      <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/20">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-bold text-primary">{s.lmeTitle}</span>
          <span className="flex items-center text-green-600 font-bold text-sm">
            <span className="material-symbols-outlined text-[18px]">arrow_drop_up</span>
            $2,542.50
          </span>
        </div>
        <div className="h-2 bg-outline-variant/30 rounded-full overflow-hidden">
          <div className="h-full bg-primary w-2/3 rounded-full" />
        </div>
        <p className="text-[10px] text-secondary mt-3 uppercase tracking-tighter">{s.liveLabel}</p>
      </div>
    </aside>
  );
}
