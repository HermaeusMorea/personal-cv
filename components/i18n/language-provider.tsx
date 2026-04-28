"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Language } from "@/lib/i18n/content";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: <T>(value: Record<Language, T>) => T;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const storageKey = "portfolio-language";

function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return "en";
  }

  const saved = window.localStorage.getItem(storageKey);
  if (saved === "en" || saved === "zh") {
    return saved;
  }

  return window.navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    setLanguageState(getInitialLanguage());
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    window.localStorage.setItem(storageKey, language);
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage: setLanguageState,
      t: (localizedValue) => localizedValue[language],
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
