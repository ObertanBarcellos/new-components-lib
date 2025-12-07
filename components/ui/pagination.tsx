"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { ButtonProps, buttonVariants } from "@/components/ui/button"

export interface PaginationContextValue {
  customColor?: string
  showPrevious?: boolean
  showNext?: boolean
  language?: "en" | "pt" | "es" | "fr" | "de" | "it"
}

const PaginationContext = React.createContext<PaginationContextValue>({
  showPrevious: true,
  showNext: true,
  language: "en",
})

const translations = {
  en: { previous: "Previous", next: "Next" },
  pt: { previous: "Anterior", next: "Próximo" },
  es: { previous: "Anterior", next: "Siguiente" },
  fr: { previous: "Précédent", next: "Suivant" },
  de: { previous: "Zurück", next: "Weiter" },
  it: { previous: "Precedente", next: "Successivo" },
}

export interface PaginationProps extends React.ComponentProps<"nav"> {
  customColor?: string
  showPrevious?: boolean
  showNext?: boolean
  language?: PaginationContextValue["language"]
}

const Pagination = ({ 
  className, 
  customColor,
  showPrevious = true,
  showNext = true,
  language = "en",
  ...props 
}: PaginationProps) => {
  const contextValue = React.useMemo(() => ({
    customColor,
    showPrevious,
    showNext,
    language,
  }), [customColor, showPrevious, showNext, language])

  return (
    <PaginationContext.Provider value={contextValue}>
      <nav
        role="navigation"
        aria-label="pagination"
        className={cn("mx-auto flex w-full justify-center", className)}
        {...props}
      />
    </PaginationContext.Provider>
  )
}
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => {
  const { customColor } = React.useContext(PaginationContext)
  
  const linkStyle = React.useMemo(() => {
    if (!customColor) return {}
    
    if (isActive) {
      // Cor completa para o selecionado
      return {
        backgroundColor: customColor,
        borderColor: customColor,
        color: "#ffffff",
      } as React.CSSProperties
    } else {
      // Cor com opacidade para os não selecionados
      return {
        color: customColor,
        borderColor: `${customColor}40`,
        '--pagination-hover-bg': `${customColor}15`,
      } as React.CSSProperties & { '--pagination-hover-bg'?: string }
    }
  }, [customColor, isActive])

  return (
    <a
      aria-current={isActive ? "page" : undefined}
      style={linkStyle}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        customColor && isActive && "hover:opacity-90",
        customColor && !isActive && "[&:hover]:bg-[var(--pagination-hover-bg)]",
        className
      )}
      {...props}
    />
  )
}
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => {
  const { showPrevious, language = "en" } = React.useContext(PaginationContext)
  
  if (showPrevious === false) return null

  const text = translations[language]?.previous || translations.en.previous

  return (
    <PaginationLink
      aria-label={`Go to previous page - ${text}`}
      size="default"
      className={cn("gap-1 pl-2.5", className)}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
      <span>{text}</span>
    </PaginationLink>
  )
}
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => {
  const { showNext, language = "en" } = React.useContext(PaginationContext)
  
  if (showNext === false) return null

  const text = translations[language]?.next || translations.en.next

  return (
    <PaginationLink
      aria-label={`Go to next page - ${text}`}
      size="default"
      className={cn("gap-1 pr-2.5", className)}
      {...props}
    >
      <span>{text}</span>
      <ChevronRight className="h-4 w-4" />
    </PaginationLink>
  )
}
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
