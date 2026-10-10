"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { contactNumber } from "@/constants/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

type ContactActionsVariant = "onDark" | "onLight";
type ContactActionsSize = "sm" | "md" | "lg";
type ContactActionsAlign = "start" | "center" | "end";
type ContactActionsChannels = "both" | "call";

interface ContactActionsProps {
  /** "onDark" for navy/blue sections, "onLight" for white/light sections */
  variant?: ContactActionsVariant;
  size?: ContactActionsSize;
  /** Stack the two buttons and stretch them to the container width */
  fullWidth?: boolean;
  /** Horizontal alignment of the button group (ignored when fullWidth) */
  align?: ContactActionsAlign;
  /** Which buttons to render; "call" hides the WhatsApp button */
  channels?: ContactActionsChannels;
  /** Show the phone number under the buttons */
  showNumber?: boolean;
  className?: string;
}

const sizeClasses: Record<ContactActionsSize, string> = {
  sm: "px-4 py-2.5 text-sm gap-2",
  md: "px-6 py-3.5 text-sm md:text-base gap-2.5",
  lg: "px-4 py-3 gap-2 text-base sm:px-6 sm:py-3.5 sm:gap-2.5 md:px-8 md:py-4 md:gap-3 md:text-lg",
};

const callVariantClasses: Record<ContactActionsVariant, string> = {
  onDark: "bg-[#F87B1B] text-[#11224E] hover:bg-white border-[#F87B1B] hover:border-white",
  onLight: "bg-primary text-white hover:bg-primary-container border-primary",
};

const alignClasses: Record<ContactActionsAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
};

const justifyClasses: Record<ContactActionsAlign, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
};

const numberVariantClasses: Record<ContactActionsVariant, string> = {
  onDark: "text-white/90",
  onLight: "text-secondary",
};

/**
 * WhatsApp + Call buttons. Used everywhere a "Request a Quote" action used to be,
 * so visitors can reach the trading desk directly on the phone.
 */
export function ContactActions({
  variant = "onDark",
  size = "md",
  fullWidth = false,
  align = "start",
  channels = "both",
  showNumber = false,
  className = "",
}: ContactActionsProps) {
  const { t } = useLanguage();
  const labels = t.contactActions;

  const base =
    "inline-flex items-center justify-center font-extrabold rounded-md border shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap";
  const width = fullWidth ? "w-full" : "";

  return (
    <div className={`flex flex-col gap-3 ${fullWidth ? "" : alignClasses[align]} ${className}`}>
      <div className={`flex ${fullWidth ? "flex-col" : `flex-wrap ${justifyClasses[align]}`} gap-3 ${width}`}>
        {channels === "both" && (
        <a
          href={contactNumber.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${labels.whatsapp}: ${contactNumber.display}`}
          className={`${base} ${sizeClasses[size]} ${width} bg-[#25D366] text-white border-[#25D366] hover:bg-[#1DB954] hover:border-[#1DB954]`}
        >
          <WhatsAppIcon className={size === "sm" ? "w-4 h-4" : "w-5 h-5"} />
          <span>{labels.whatsapp}</span>
        </a>
        )}
        <a
          href={contactNumber.telUrl}
          aria-label={`${labels.call}: ${contactNumber.display}`}
          className={`${base} ${sizeClasses[size]} ${width} ${callVariantClasses[variant]}`}
        >
          <span
            className={`material-symbols-outlined ${size === "sm" ? "text-base" : "text-xl"}`}
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            call
          </span>
          <span>{labels.call}</span>
        </a>
      </div>
      {showNumber && (
        <a
          href={contactNumber.telUrl}
          dir="ltr"
          className={`text-sm font-bold tracking-wide hover:underline ${numberVariantClasses[variant]}`}
        >
          {labels.whatsappCall}: {contactNumber.display}
        </a>
      )}
    </div>
  );
}
