"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { locales, localeNames, type Locale, setLocale } from "@/lib/i18n"
import { useTranslations } from "@/hooks/use-translations"

const localeFlags: Record<Locale, string> = {
  "pt-BR": "🇧🇷",
  "es": "🇪🇸",
  "en": "🇺🇸",
}

export function LanguageSwitcher() {
  const router = useRouter()
  const { locale } = useTranslations()

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale)
    // Force a full page reload to apply the new locale
    window.location.reload()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Change language">
          <span className="text-lg">{localeFlags[locale]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => handleLocaleChange(loc)}
            className={locale === loc ? "bg-accent" : ""}
          >
            <span className="mr-2 text-lg">{localeFlags[loc]}</span>
            {localeNames[loc]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

