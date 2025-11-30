import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
    customColor?: string
  }
>(({ customColor, ...props }, ref) => {
  const colorStyles = React.useMemo(() => {
    if (!customColor) return {}
    return {
      '--breadcrumb-color': customColor,
    } as React.CSSProperties
  }, [customColor])

  return <nav ref={ref} aria-label="breadcrumb" style={colorStyles} {...props} />
})
Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      className
    )}
    {...props}
  />
))
BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />
))
BreadcrumbItem.displayName = "BreadcrumbItem"

export interface BreadcrumbLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  asChild?: boolean
  customColor?: string
}

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  BreadcrumbLinkProps
>(({ asChild, className, customColor, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  const colorStyles = React.useMemo(() => {
    if (!customColor) return {}
    // Cor esmaecida (60% de opacidade) para o estado normal
    return {
      color: `${customColor}99`, // 99 em hex = ~60% de opacidade
      '--breadcrumb-hover-color': customColor,
    } as React.CSSProperties
  }, [customColor])

  return (
    <Comp
      ref={ref}
      style={colorStyles}
      className={cn(
        "transition-colors",
        customColor && "hover:text-[--breadcrumb-hover-color]",
        className
      )}
      {...props}
    />
  )
})
BreadcrumbLink.displayName = "BreadcrumbLink"

export interface BreadcrumbPageProps extends React.ComponentPropsWithoutRef<"span"> {
  customColor?: string
}

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  BreadcrumbPageProps
>(({ className, customColor, ...props }, ref) => {
  const colorStyles = React.useMemo(() => {
    if (!customColor) return {}
    // Cor completa para o último item
    return {
      color: customColor,
    } as React.CSSProperties
  }, [customColor])

  return (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      style={colorStyles}
      className={cn("font-bold text-foreground", className)}
      {...props}
    />
  )
})
BreadcrumbPage.displayName = "BreadcrumbPage"

export interface BreadcrumbSeparatorProps extends React.ComponentProps<"li"> {
  customColor?: string
}

const BreadcrumbSeparator = ({
  children,
  className,
  customColor,
  ...props
}: BreadcrumbSeparatorProps) => {
  const colorStyles = React.useMemo(() => {
    if (!customColor) return {}
    return {
      color: `${customColor}80`,
    } as React.CSSProperties
  }, [customColor])

  return (
    <li
      role="presentation"
      aria-hidden="true"
      style={colorStyles}
      className={cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  )
}
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
