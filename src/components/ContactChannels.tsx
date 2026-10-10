"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { contactNumber, siteConfig } from "@/constants/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

type ChannelKey = "phone" | "whatsapp" | "email";

interface Channel {
  key: ChannelKey;
  label: string;
  hint: string;
  value: string;
  href: string;
  external: boolean;
  icon: React.ReactNode;
  accent: string;
}

const COPIED_RESET_MS = 2000;

/**
 * Direct contact channels for the Contact page: Call, WhatsApp and Email.
 * Each row opens the channel on tap and has a one-click copy button.
 */
export function ContactChannels() {
  const { t } = useLanguage();
  const c = t.contact.channels;
  const [copied, setCopied] = useState<ChannelKey | null>(null);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(null), COPIED_RESET_MS);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const handleCopy = async (key: ChannelKey, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
    } catch {
      setCopied(null);
    }
  };

  const channels: Channel[] = [
    {
      key: "phone",
      label: c.phone,
      hint: c.phoneHint,
      value: contactNumber.display,
      href: contactNumber.telUrl,
      external: false,
      icon: (
        <span
          className="material-symbols-outlined text-3xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          call
        </span>
      ),
      accent: "bg-[#11224E] text-white",
    },
    {
      key: "whatsapp",
      label: c.whatsapp,
      hint: c.whatsappHint,
      value: contactNumber.display,
      href: contactNumber.whatsappUrl,
      external: true,
      icon: <WhatsAppIcon className="w-8 h-8" />,
      accent: "bg-[#25D366] text-white",
    },
    {
      key: "email",
      label: c.email,
      hint: c.emailHint,
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
      external: false,
      icon: (
        <span
          className="material-symbols-outlined text-3xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          mail
        </span>
      ),
      accent: "bg-[#F87B1B] text-[#11224E]",
    },
  ];

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#dce2f7] shadow-md text-start">
      <h2 className="text-2xl md:text-3xl font-bold text-[#11224E] mb-2">{c.title}</h2>
      <p className="text-sm md:text-base text-secondary leading-relaxed mb-8">{c.subtitle}</p>

      <ul className="space-y-4">
        {channels.map((ch) => {
          const isCopied = copied === ch.key;
          return (
            <li
              key={ch.key}
              className="rounded-2xl border border-outline-variant/60 bg-surface-container-lowest hover:border-[#11224E]/40 hover:shadow-lg transition-all overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 md:p-5">
                <a
                  href={ch.href}
                  target={ch.external ? "_blank" : undefined}
                  rel={ch.external ? "noopener noreferrer" : undefined}
                  aria-label={`${ch.label}: ${ch.value}`}
                  className="flex items-center gap-4 flex-1 min-w-0 group cursor-pointer"
                >
                  <span
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform ${ch.accent}`}
                  >
                    {ch.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-bold uppercase tracking-wider text-[#11224E]/70 mb-0.5">
                      {ch.label}
                    </span>
                    <span
                      dir="ltr"
                      className={`block font-extrabold text-[#11224E] break-words [overflow-wrap:anywhere] group-hover:underline ${
                        ch.value.length > 16 ? "text-sm sm:text-base md:text-lg" : "text-base sm:text-lg md:text-xl"
                      }`}
                    >
                      {ch.value}
                    </span>
                    <span className="block text-xs text-secondary mt-0.5">{ch.hint}</span>
                  </span>
                </a>

                <div className="flex gap-2 sm:flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => handleCopy(ch.key, ch.value)}
                    aria-live="polite"
                    className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-bold border transition-all cursor-pointer ${
                      isCopied
                        ? "bg-[#1DB954] text-white border-[#1DB954]"
                        : "bg-white text-[#11224E] border-[#11224E]/30 hover:bg-[#11224E] hover:text-white"
                    }`}
                  >
                    <span className="material-symbols-outlined text-base">
                      {isCopied ? "check" : "content_copy"}
                    </span>
                    {isCopied ? c.copied : c.copy}
                  </button>
                  <a
                    href={ch.href}
                    target={ch.external ? "_blank" : undefined}
                    rel={ch.external ? "noopener noreferrer" : undefined}
                    aria-label={`${c.open} ${ch.label}`}
                    className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:scale-[1.03] active:scale-95 transition-all cursor-pointer ${ch.accent}`}
                  >
                    <span className="material-symbols-outlined text-base">open_in_new</span>
                    {c.open}
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <p className="mt-6 text-xs md:text-sm text-secondary flex items-center gap-2">
        <span className="material-symbols-outlined text-base text-[#1DB954]">schedule</span>
        {c.responseNote}
      </p>
    </div>
  );
}
