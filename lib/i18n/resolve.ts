import type { Language } from "@/lib/i18n/content";
import type { LocalizedText } from "@/lib/types";

export function resolveLocalizedText(value: LocalizedText, language: Language) {
  return typeof value === "string" ? value : value[language];
}
