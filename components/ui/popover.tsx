"use client"

import * as React from "react"
import { useEffect, useRef } from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import { gsap } from "gsap"
import { animatePopover } from "@/lib/gsap-animations"

import { cn } from "@/lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

export interface PopoverContentProps extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {
  customColor?: string
  customBorderColor?: string
}

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
>(({ className, align = "center", sideOffset = 4, customColor, customBorderColor, ...props }, ref) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const combinedRef = (ref || contentRef) as React.RefObject<HTMLDivElement>

  const colorStyles = React.useMemo(() => {
    const styles: React.CSSProperties = {}
    if (customColor) {
      styles.backgroundColor = customColor
    }
    if (customBorderColor) {
      styles.borderColor = customBorderColor
    }
    return styles
  }, [customColor, customBorderColor])

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
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={combinedRef}
        align={align}
        sideOffset={sideOffset}
        style={colorStyles}
        className={cn(
          "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-lg outline-none origin-[--radix-popover-content-transform-origin]",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
})
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }
