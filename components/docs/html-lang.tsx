"use client"

import { useEffect } from "react"
import { useTranslations } from "@/hooks/use-translations"

export function HtmlLang({ children }: { children: React.ReactNode }) {
  const { locale } = useTranslations()

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale
    }
  }, [locale])

  return <>{children}</>
}

