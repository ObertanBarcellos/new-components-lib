export type Locale = "pt-BR" | "es" | "en"

export const locales: Locale[] = ["pt-BR", "es", "en"]
export const defaultLocale: Locale = "pt-BR"

export const localeNames: Record<Locale, string> = {
  "pt-BR": "Português",
  "es": "Español",
  "en": "English",
}

export function setLocale(locale: Locale) {
  if (typeof document !== "undefined") {
    document.cookie = `locale=${locale}; path=/; max-age=31536000`
  }
}

