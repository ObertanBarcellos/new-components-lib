"use client"

import { useState, useEffect } from "react"
import { t } from "@/lib/translations"
import type { Locale } from "@/lib/i18n"
import { defaultLocale } from "@/lib/i18n"

function getCookieLocale(): Locale {
  if (typeof document === "undefined") return defaultLocale
  const cookies = document.cookie.split(";")
  const localeCookie = cookies.find((c) => c.trim().startsWith("locale="))
  if (localeCookie) {
    const locale = localeCookie.split("=")[1]?.trim() as Locale
    if (locale && ["pt-BR", "es", "en"].includes(locale)) {
      return locale
    }
  }
  return defaultLocale
}

export function useTranslations() {
  const [locale, setLocale] = useState<Locale>(defaultLocale)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setLocale(getCookieLocale())
  }, [])

  return {
    locale: mounted ? locale : defaultLocale,
    mounted,
    t: (key: string) => t(mounted ? locale : defaultLocale, key),
  }
}

