"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/constants/site";

export function ContactMap() {
  const { t } = useLanguage();
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.contact.address)}`;

  return (
    <div className="relative w-full h-[320px] rounded-[20px] overflow-hidden border border-outline-variant/30 group">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKV-n-DT4n-p2xmwPYjGkBIkDN5L2JveA-5shJZUzXYOfYpN6voZXXTA3bMYga5_m4u8jrkgwAWSZc1-Gl6aRPAP6oZZj8-NMw17w6k_vM-e6d0HOXXheSl7t0ReuXnyR79H21aNrrVyI1RZQo8Wjaflay8ThaqswoB8ux0aq6E3NzqCBjQHrDV_FzrrTgVebiifo2Pz2pYMxLhC2By3523yRmThdNi7pmyKKF36QKuXx7iALHdQ07"
          alt={t.contact.map.bgAlt}
          fill
          sizes="(max-w-1024px) 100vw, 500px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
      </div>

      {/* Floating maps indicator */}
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-sm rounded-xl flex justify-between items-center shadow-lg border border-outline-variant/30 cursor-pointer z-10 hover:opacity-90 transition-opacity"
      >
        <div className="text-start">
          <p className="font-bold text-primary text-sm md:text-base">
            {t.contact.map.title}
          </p>
          <p className="text-[11px] md:text-[12px] text-on-surface-variant">
            {t.contact.map.btn}
          </p>
        </div>
        <span className="material-symbols-outlined text-primary text-xl">
          open_in_new
        </span>
      </a>
    </div>
  );
}
