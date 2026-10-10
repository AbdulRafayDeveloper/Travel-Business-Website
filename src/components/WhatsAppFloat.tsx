"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { contactNumber } from "@/constants/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

/** Floating icon-only WhatsApp button fixed to the bottom-end corner on every page. */
export function WhatsAppFloat() {
  const { t } = useLanguage();

  return (
    <a
      href={contactNumber.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${t.contactActions.whatsapp}: ${contactNumber.display}`}
      title={`${t.contactActions.whatsapp}: ${contactNumber.display}`}
      className="fixed bottom-5 end-5 md:bottom-6 md:end-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl border-2 border-white/80 hover:bg-[#1DB954] hover:scale-105 active:scale-95 transition-all cursor-pointer"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}
