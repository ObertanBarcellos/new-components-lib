"use client"

import * as React from "react"
import { useEffect, useRef } from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { gsap } from "gsap"
import { animatePopover } from "@/lib/gsap-animations"

import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

export interface TooltipContentProps extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
  customColor?: string
}

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(({ className, sideOffset = 4, customColor, ...props }, ref) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const combinedRef = (ref || contentRef) as React.RefObject<HTMLDivElement>

  const colorStyles = React.useMemo(() => {
    if (!customColor) return {}
    return {
      backgroundColor: customColor,
      borderColor: customColor,
      color: "#ffffff",
    } as React.CSSProperties
  }, [customColor])

  useEffect(() => {
    const element = combinedRef.current
    if (!element) return

    const observer = new MutationObserver(() => {
      const isOpen = element.getAttribute("data-state") === "open"
      const side = (element.getAttribute("data-side") || "bottom") as "top" | "bottom" | "left" | "right"
      animatePopover(element, isOpen, side)
    })

    observer.observe(element, {
      attributes: true,
      attributeFilter: ["data-state", "data-side"],
    })

    // Animar estado inicial
    const isOpen = element.getAttribute("data-state") === "open"
    if (isOpen) {
      const side = (element.getAttribute("data-side") || "bottom") as "top" | "bottom" | "left" | "right"
      gsap.set(element, { opacity: 0, scale: 0.95 })
      animatePopover(element, true, side)
    }

    return () => observer.disconnect()
  }, [combinedRef])

  return (
    <TooltipPrimitive.Content
      ref={combinedRef}
      sideOffset={sideOffset}
      style={colorStyles}
      className={cn(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-lg origin-[--radix-tooltip-content-transform-origin]",
        className
      )}
      {...props}
    />
  )
})
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
