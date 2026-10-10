"use client";

import { createContext, useContext } from "react";
import { Locale, translations } from "@/constants/translations";

type TranslationsType = typeof translations.en;

interface LanguageContextProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationsType;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
