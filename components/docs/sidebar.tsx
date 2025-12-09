"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { categories, getComponentsByCategory } from "@/lib/docs/components"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslations } from "@/hooks/use-translations"

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const { t } = useTranslations()
  const [openCategories, setOpenCategories] = React.useState<Set<string>>(
    new Set(categories)
  )

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) => {
      const next = new Set(prev)
      if (next.has(category)) {
        next.delete(category)
      } else {
        next.add(category)
      }
      return next
    })
  }

  return (
    <aside
      className={cn(
        "fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 border-r border-border bg-background overflow-y-auto",
        className
      )}
    >
      <nav className="p-4 space-y-2">
        <Link
          href="/docs"
          className={cn(
            "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
            pathname === "/docs"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          )}
        >
          {t("common.overview")}
        </Link>
        <Link
          href="/docs/icons"
          className={cn(
            "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
            pathname === "/docs/icons"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          )}
        >
          {t("common.icons")}
        </Link>
        <Link
          href="/docs/credits"
          className={cn(
            "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
            pathname === "/docs/credits"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          )}
        >
          {t("common.credits")}
        </Link>

        {categories.map((category) => {
          const categoryComponents = getComponentsByCategory(category)
          const isOpen = openCategories.has(category)

          return (
            <div key={category} className="space-y-1">
              <Button
                variant="ghost"
                className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold h-auto"
                onClick={() => toggleCategory(category)}
              >
                <span>
                  {(() => {
                    const categoryKey = `categories.${category}` as const
                    return t(categoryKey) !== categoryKey ? t(categoryKey) : category
                  })()}
                </span>
                <ChevronRight
                  className={cn(
                    "h-4 w-4 transition-transform",
                    isOpen && "rotate-90"
                  )}
                />
              </Button>
              {isOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  {categoryComponents.map((component) => {
                    const isActive = pathname === `/docs/${component.id}`
                    return (
                      <Link
                        key={component.id}
                        href={`/docs/${component.id}`}
                        className={cn(
                          "flex items-center px-3 py-1.5 text-sm rounded-md transition-colors",
                          isActive
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        )}
                      >
                        {component.name}
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </nav>
    </aside>
  )
}

