"use client";

import React, { useState, useEffect, useMemo, ReactNode } from "react";
import { Locale, translations } from "@/constants/translations";
import { LanguageContext } from "@/context/LanguageContext";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.lang = locale;
      document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    }
  }, [locale]);

  const contextValue = useMemo(() => {
    return {
      locale,
      setLocale,
      t: translations[locale],
    };
  }, [locale]);

  return (
    <LanguageContext.Provider value={contextValue}>
      <div dir={locale === "ar" ? "rtl" : "ltr"} lang={locale} className="min-h-screen">
        {children}
      </div>
    </LanguageContext.Provider>
  );
}
