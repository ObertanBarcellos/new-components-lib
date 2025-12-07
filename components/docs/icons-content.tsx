"use client"

import * as React from "react"
import * as LucideIcons from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Search, Copy, Check } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"
import { toast } from "sonner"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import type { Locale } from "@/lib/i18n"

interface IconItem {
  name: string
  component: React.ComponentType<{ className?: string }>
}

// Função para mapear locale para language do Pagination
function mapLocaleToPaginationLanguage(locale: Locale): "en" | "pt" | "es" | "fr" | "de" | "it" {
  const map: Record<Locale, "en" | "pt" | "es" | "fr" | "de" | "it"> = {
    "pt-BR": "pt",
    es: "es",
    en: "en",
  }
  return map[locale] || "en"
}

const ICONS_PER_PAGE = 24

export function IconsContent() {
  const { t, locale } = useTranslations()
  const [searchQuery, setSearchQuery] = React.useState("")
  const [copiedIcon, setCopiedIcon] = React.useState<string | null>(null)
  const [currentPage, setCurrentPage] = React.useState(1)

  // Filtrar e processar ícones válidos
  const icons = React.useMemo(() => {
    const iconList: IconItem[] = []
    const excludedKeys = new Set([
      "createLucideIcon",
      "Icon",
      "default",
      "lucideReact",
    ])
    
    Object.keys(LucideIcons).forEach((key) => {
      // Excluir tipos TypeScript, utilitários e componentes não-ícones
      if (
        excludedKeys.has(key) ||
        key.startsWith("create") ||
        key === "Icon" ||
        key.endsWith("Icon") || // Excluir versões com sufixo Icon (duplicatas)
        key[0] !== key[0].toUpperCase() // Apenas componentes que começam com maiúscula
      ) {
        return
      }

      const IconComponent = (LucideIcons as any)[key]
      
      // Verificar se existe e é um objeto ou função (componente React)
      if (!IconComponent) {
        return
      }

      // Adicionar à lista - assumimos que se passou pelos filtros, é um ícone válido
      iconList.push({
        name: key,
        component: IconComponent as React.ComponentType<{ className?: string }>,
      })
    })

    // Ordenar alfabeticamente
    return iconList.sort((a, b) => a.name.localeCompare(b.name))
  }, [])

  // Filtrar ícones baseado na busca
  const filteredIcons = React.useMemo(() => {
    if (!searchQuery.trim()) {
      return icons
    }

    const query = searchQuery.toLowerCase().trim()
    return icons.filter((icon) =>
      icon.name.toLowerCase().includes(query)
    )
  }, [icons, searchQuery])

  // Resetar para página 1 quando a busca mudar
  React.useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery])

  // Calcular paginação
  const totalPages = Math.ceil(filteredIcons.length / ICONS_PER_PAGE)
  const startIndex = (currentPage - 1) * ICONS_PER_PAGE
  const endIndex = startIndex + ICONS_PER_PAGE
  const paginatedIcons = filteredIcons.slice(startIndex, endIndex)

  // Função para gerar números de página a mostrar
  const getPageNumbers = () => {
    const pages: (number | "ellipsis")[] = []
    const maxVisible = 7 // Máximo de números de página visíveis

    if (totalPages <= maxVisible) {
      // Mostrar todas as páginas se forem poucas
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Lógica para mostrar páginas com ellipsis
      if (currentPage <= 4) {
        // No início
        for (let i = 1; i <= 5; i++) {
          pages.push(i)
        }
        pages.push("ellipsis")
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 3) {
        // No final
        pages.push(1)
        pages.push("ellipsis")
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i)
        }
      } else {
        // No meio
        pages.push(1)
        pages.push("ellipsis")
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i)
        }
        pages.push("ellipsis")
        pages.push(totalPages)
      }
    }

    return pages
  }

  const handleCopy = async (iconName: string) => {
    const importCode = `import { ${iconName} } from "lucide-react"`
    
    try {
      await navigator.clipboard.writeText(importCode)
      setCopiedIcon(iconName)
      toast.success(t("icons.copied"), {
        description: importCode,
      })
      setTimeout(() => setCopiedIcon(null), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
      toast.error("Failed to copy code")
    }
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{t("icons.title")}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          {t("icons.description")}
        </p>
      </div>

      <div className="relative">
        <Input
          type="text"
          placeholder={t("icons.searchPlaceholder")}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          startIcon={<Search className="h-4 w-4" />}
          className="max-w-md"
        />
      </div>

      {filteredIcons.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">{t("icons.noResults")}</p>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {filteredIcons.length} {filteredIcons.length === 1 ? t("icons.icon") : t("icons.iconsPlural")}
              {filteredIcons.length > ICONS_PER_PAGE && (
                <span className="ml-2">
                  ({startIndex + 1}-{Math.min(endIndex, filteredIcons.length)} de {filteredIcons.length})
                </span>
              )}
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {paginatedIcons.map(({ name, component: IconComponent }) => (
              <Card
                key={name}
                hover
                interactive
                className="p-4 flex flex-col items-center justify-center gap-3 cursor-pointer group relative"
                onClick={() => handleCopy(name)}
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-muted/50 group-hover:bg-muted transition-colors">
                  <IconComponent className="h-6 w-6 text-foreground" />
                </div>
                <div className="text-center w-full">
                  <p className="text-xs font-medium text-foreground truncate" title={name}>
                    {name}
                  </p>
                </div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {copiedIcon === name ? (
                    <Check className="h-4 w-4 text-primary" />
                  ) : (
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
              </Card>
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination language={mapLocaleToPaginationLanguage(locale)}>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      if (currentPage > 1) {
                        setCurrentPage(currentPage - 1)
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    }}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>

                {getPageNumbers().map((page, index) => {
                  if (page === "ellipsis") {
                    return (
                      <PaginationItem key={`ellipsis-${index}`}>
                        <PaginationEllipsis />
                      </PaginationItem>
                    )
                  }

                  return (
                    <PaginationItem key={page}>
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault()
                          setCurrentPage(page)
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }}
                        isActive={currentPage === page}
                        className="cursor-pointer"
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  )
                })}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      if (currentPage < totalPages) {
                        setCurrentPage(currentPage + 1)
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    }}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </>
      )}
    </div>
  )
}

