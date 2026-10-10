"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { siteImages } from "@/constants/images";

export function AboutGallery() {
  const { t } = useLanguage();

  const galleryImages = siteImages.aboutGallery;

  // Double the images array to support infinite loop styling
  const loopImages = [...galleryImages, ...galleryImages];
  const loopAlts = [...t.about.gallery.bgAlts, ...t.about.gallery.bgAlts];

  return (
    <section className="py-12 overflow-hidden bg-surface">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-infinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .scrolling-wrapper {
          display: flex;
          gap: 16px;
          animation: scroll-infinite 45s linear infinite;
        }
        [dir="rtl"] .scrolling-wrapper {
          animation: scroll-infinite 45s linear infinite reverse;
        }
      `}} />
      <div className="scrolling-wrapper">
        {loopImages.map((src, index) => (
          <div
            key={index}
            className="min-w-[300px] h-[200px] rounded-xl overflow-hidden shadow-sm relative flex-shrink-0"
          >
            <Image
              src={src}
              alt={loopAlts[index]}
              fill
              sizes="300px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
