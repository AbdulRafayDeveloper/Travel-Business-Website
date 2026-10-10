"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { contactNumber } from "@/constants/site";

export function ContactInfo() {
  const { t } = useLanguage();

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#dce2f7] text-start shadow-md flex flex-col justify-between h-fit">
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-[#11224E] mb-8 border-b border-gray-200 pb-4">
          {t.contact.info.title}
        </h3>
        <div className="space-y-8">
          {/* Address */}
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-[#11224E] text-[#F87B1B] flex items-center justify-center flex-shrink-0 font-bold">
              <span className="material-symbols-outlined text-xl">
                location_on
              </span>
            </div>
            <div>
              <p className="text-xs md:text-sm font-bold text-[#11224E] uppercase tracking-wider mb-1">
                {t.contact.info.addressLabel}
              </p>
              <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                {t.contact.info.addressVal}
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-[#11224E] text-[#F87B1B] flex items-center justify-center flex-shrink-0 font-bold">
              <span className="material-symbols-outlined text-xl">
                call
              </span>
            </div>
            <div>
              <p className="text-xs md:text-sm font-bold text-[#11224E] uppercase tracking-wider mb-1">
                {t.contact.info.phoneLabel}
              </p>
              <a href={contactNumber.telUrl} dir="ltr" className="block text-sm md:text-base text-gray-800 font-semibold hover:text-[#11224E] hover:underline">
                {t.contact.info.phoneVal}
              </a>
              <a
                href={contactNumber.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-2 text-xs md:text-sm font-bold text-[#128C7E] hover:underline"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                {t.contactActions.whatsappCall}
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-4 min-w-0">
            <div className="w-12 h-12 rounded-full bg-[#11224E] text-[#F87B1B] flex items-center justify-center flex-shrink-0 font-bold">
              <span className="material-symbols-outlined text-xl">
                mail
              </span>
            </div>
            <div>
              <p className="text-xs md:text-sm font-bold text-[#11224E] uppercase tracking-wider mb-1">
                {t.contact.info.emailLabel}
              </p>
              <p className="text-sm md:text-base text-[#1b3576] font-semibold hover:underline cursor-pointer break-all [overflow-wrap:anywhere]">
                {t.contact.info.emailVal}
              </p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-[#11224E] text-[#F87B1B] flex items-center justify-center flex-shrink-0 font-bold">
              <span className="material-symbols-outlined text-xl">
                schedule
              </span>
            </div>
            <div>
              <p className="text-xs md:text-sm font-bold text-[#11224E] uppercase tracking-wider mb-1">
                {t.contact.info.hoursLabel}
              </p>
              <p className="text-sm md:text-base text-gray-800">
                {t.contact.info.hoursVal}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-8 pt-8 border-t border-gray-200 flex gap-4">
        <a
          aria-label="LinkedIn"
          className="w-10 h-10 rounded-xl bg-[#11224E] text-white flex items-center justify-center hover:bg-[#F87B1B] hover:text-[#11224E] transition-all shadow-sm"
          href="#"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a
          aria-label="Twitter"
          className="w-10 h-10 rounded-xl bg-[#11224E] text-white flex items-center justify-center hover:bg-[#F87B1B] hover:text-[#11224E] transition-all shadow-sm"
          href="#"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
