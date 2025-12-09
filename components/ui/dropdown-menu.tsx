"use client"

import * as React from "react"
import { useEffect, useRef } from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"
import { gsap } from "gsap"
import { animatePopover, animateCheck } from "@/lib/gsap-animations"

import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const combinedRef = (ref || contentRef) as React.RefObject<HTMLDivElement>

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

    const isOpen = element.getAttribute("data-state") === "open"
    if (isOpen) {
      const side = (element.getAttribute("data-side") || "bottom") as "top" | "bottom" | "left" | "right"
      gsap.set(element, { opacity: 0, scale: 0.95 })
      animatePopover(element, true, side)
    }

    return () => observer.disconnect()
  }, [combinedRef])

  return (
    <DropdownMenuPrimitive.SubContent
      ref={combinedRef}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg origin-[--radix-dropdown-menu-content-transform-origin]",
        className
      )}
      {...props}
    />
  )
})
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

export interface DropdownMenuContentProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> {
  customColor?: string
  customBorderColor?: string
}

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  DropdownMenuContentProps
>(({ className, sideOffset = 4, customColor, customBorderColor, ...props }, ref) => {
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

    const isOpen = element.getAttribute("data-state") === "open"
    if (isOpen) {
      const side = (element.getAttribute("data-side") || "bottom") as "top" | "bottom" | "left" | "right"
      gsap.set(element, { opacity: 0, scale: 0.95 })
      animatePopover(element, true, side)
    }

    return () => observer.disconnect()
  }, [combinedRef])

  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={combinedRef}
        sideOffset={sideOffset}
        style={colorStyles}
        className={cn(
          "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg origin-[--radix-dropdown-menu-content-transform-origin]",
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
})
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

export interface DropdownMenuItemProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> {
  inset?: boolean
  customColor?: string
}

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  DropdownMenuItemProps
>(({ className, inset, customColor, ...props }, ref) => {
  const colorStyles = React.useMemo(() => {
    if (!customColor) return {}
    return {
      '--dropdown-hover-color': `${customColor}20`,
    } as React.CSSProperties
  }, [customColor])

  return (
    <DropdownMenuPrimitive.Item
      ref={ref}
      style={colorStyles}
      className={cn(
        "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors duration-150 focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        customColor && "focus:bg-[--dropdown-hover-color]",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  )
})
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const CheckIndicator = () => {
  const checkRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const element = checkRef.current
    if (!element) return

    const parent = element.closest('[data-state]')
    if (!parent) return

    const observer = new MutationObserver(() => {
      const isVisible = parent.getAttribute("data-state") === "checked"
      animateCheck(element, isVisible)
    })

    observer.observe(parent, {
      attributes: true,
      attributeFilter: ["data-state"],
    })

    const isVisible = parent.getAttribute("data-state") === "checked"
    if (isVisible) {
      gsap.set(element, { opacity: 0, scale: 0.8 })
      animateCheck(element, true)
    }

    return () => observer.disconnect()
  }, [])

  return <Check ref={checkRef} className="h-4 w-4" />
}

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <CheckIndicator />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
