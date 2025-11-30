"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn, getContrastTextColor } from "@/lib/utils"

export interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  customColor?: string
  customCheckedColor?: string
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, customColor, customCheckedColor, ...props }, ref) => {
  const colorStyles = React.useMemo(() => {
    const styles: React.CSSProperties = {}
    if (customColor) {
      styles['--checkbox-color'] = customColor
    }
    if (customCheckedColor) {
      styles['--checkbox-checked-color'] = customCheckedColor
      // Calcula automaticamente a cor do texto baseado na cor de fundo quando marcado
      styles['--checkbox-checked-text-color'] = getContrastTextColor(customCheckedColor)
    }
    return styles
  }, [customColor, customCheckedColor])

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      style={colorStyles}
      className={cn(
        "grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground hover:border-primary/80",
        customColor && "border-[--checkbox-color] hover:border-[--checkbox-color]/80",
        customCheckedColor && "data-[state=checked]:bg-[--checkbox-checked-color] data-[state=checked]:text-[--checkbox-checked-text-color]",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn("grid place-content-center text-current animate-in fade-in-0 zoom-in-95")}
      >
        <Check className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
})
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
