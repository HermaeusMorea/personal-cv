"use client";

import { Languages } from "lucide-react";
import { languageLabels, siteContent } from "@/lib/i18n/content";
import type { Language } from "@/lib/i18n/content";
import { useLanguage } from "@/components/i18n/language-provider";

const languages: Language[] = ["en", "zh"];

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      aria-label={t(siteContent.nav.languageToggleLabel)}
      className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1"
    >
      <Languages className="ml-2 h-4 w-4 text-sky-200" aria-hidden="true" />
      {languages.map((item) => (
        <button
          key={item}
          type="button"
          aria-pressed={language === item}
          onClick={() => setLanguage(item)}
          className={
            language === item
              ? "rounded-full bg-white px-2.5 py-1.5 text-xs font-semibold text-ink-950 transition sm:px-3"
              : "rounded-full px-2.5 py-1.5 text-xs font-medium text-slate-300 transition hover:bg-white/10 hover:text-white sm:px-3"
          }
        >
          {languageLabels[item]}
        </button>
      ))}
    </div>
  );
}
