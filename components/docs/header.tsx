"use client"

import * as React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Search, Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { searchComponents, getSearchSuggestions } from "@/lib/docs/search"
import { ComponentMetadata } from "@/lib/docs/components"
import { useTranslations } from "@/hooks/use-translations"
import { LanguageSwitcher } from "./language-switcher"

interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps) {
  const { theme, setTheme } = useTheme()
  const { t, mounted: translationsMounted } = useTranslations()
  const [mounted, setMounted] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState("")
  const [searchResults, setSearchResults] = React.useState<ComponentMetadata[]>([])
  const [isSearchOpen, setIsSearchOpen] = React.useState(false)
  const searchInputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setIsSearchOpen(true)
        setTimeout(() => searchInputRef.current?.focus(), 0)
      }
      if (e.key === "Escape") {
        setIsSearchOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  React.useEffect(() => {
    if (searchQuery.trim()) {
      const results = getSearchSuggestions(searchQuery, 8)
      setSearchResults(results)
    } else {
      setSearchResults([])
    }
  }, [searchQuery])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/docs" className="flex items-center space-x-2">
          <span className="text-xl font-bold">vyse UI</span>
        </Link>

        <div className="flex items-center gap-4">
          {translationsMounted && (
            <Popover open={isSearchOpen} onOpenChange={setIsSearchOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="relative h-9 w-full sm:w-64 justify-start text-sm text-muted-foreground"
                >
                  <Search className="mr-2 h-4 w-4" />
                  {t("common.search")}
                  <kbd className="pointer-events-none absolute right-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                    <span className="text-xs">⌘</span>K
                  </kbd>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[400px] p-0" align="start">
                <div className="p-2">
                  <Input
                    ref={searchInputRef}
                    placeholder={t("common.search")}
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="h-9"
                  />
                </div>
                {searchResults.length > 0 && (
                  <div className="max-h-[300px] overflow-y-auto">
                    {searchResults.map((component) => (
                      <Link
                        key={component.id}
                        href={`/docs/${component.id}`}
                        onClick={() => {
                          setIsSearchOpen(false)
                          setSearchQuery("")
                        }}
                        className="flex flex-col gap-1 px-3 py-2 hover:bg-accent transition-colors"
                      >
                        <div className="font-medium text-sm">{component.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {component.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
                {searchQuery && searchResults.length === 0 && (
                  <div className="p-4 text-center text-sm text-muted-foreground">
                    {t("common.noResults")}
                  </div>
                )}
              </PopoverContent>
            </Popover>
          )}

          {translationsMounted && <LanguageSwitcher />}
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={translationsMounted ? t("common.toggleTheme") : "Toggle theme"}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          )}
          {translationsMounted && (
            <span className="text-sm text-muted-foreground">
              {t("common.version")} 1.1.1
            </span>
          )}
        </div>
      </div>
    </header>
  )
}

