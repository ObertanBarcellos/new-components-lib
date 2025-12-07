import type { Locale } from "./i18n"
import ptBR from "@/messages/pt-BR.json"
import es from "@/messages/es.json"
import en from "@/messages/en.json"

const translations = {
  "pt-BR": ptBR,
  es,
  en,
} as const

export type TranslationKey = keyof typeof ptBR | `${keyof typeof ptBR}.${string}`

export function getTranslations(locale: Locale) {
  return translations[locale]
}

export function t(locale: Locale, key: string): string {
  const keys = key.split(".")
  let value: any = translations[locale]

  for (const k of keys) {
    value = value?.[k]
    if (value === undefined) {
      // Fallback to pt-BR if key not found
      value = translations["pt-BR"]
      for (const fallbackKey of keys) {
        value = value?.[fallbackKey]
      }
      break
    }
  }

  return typeof value === "string" ? value : key
}

