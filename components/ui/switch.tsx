"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

export interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  customColor?: string
  customCheckedColor?: string
  customUncheckedColor?: string
  size?: "sm" | "default" | "lg"
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, customColor, customCheckedColor, customUncheckedColor, size = "default", ...props }, ref) => {
  const colorStyles = React.useMemo(() => {
    const styles: React.CSSProperties = {}
    // Se customColor for fornecido, usa para ambos os estados
    if (customColor) {
      styles['--switch-checked-color'] = customColor
      styles['--switch-unchecked-color'] = customColor
    } else {
      // Caso contrário, usa as cores específicas se fornecidas
      if (customCheckedColor) {
        styles['--switch-checked-color'] = customCheckedColor
      }
      if (customUncheckedColor) {
        styles['--switch-unchecked-color'] = customUncheckedColor
      }
    }
    return styles
  }, [customColor, customCheckedColor, customUncheckedColor])

  const sizeClasses = {
    sm: {
      root: "h-5 w-9",
      thumb: "h-4 w-4",
      translate: "data-[state=checked]:translate-x-4",
    },
    default: {
      root: "h-6 w-11",
      thumb: "h-5 w-5",
      translate: "data-[state=checked]:translate-x-5",
    },
    lg: {
      root: "h-7 w-14",
      thumb: "h-6 w-6",
      translate: "data-[state=checked]:translate-x-7",
    },
  }

  const currentSize = sizeClasses[size]

  return (
    <SwitchPrimitives.Root
      style={colorStyles}
      className={cn(
        // Base styles
        "peer inline-flex shrink-0 cursor-pointer items-center rounded-full",
        "border-2 border-transparent",
        "transition-all duration-300 ease-in-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:cursor-not-allowed disabled:opacity-50",
        
        // Size
        currentSize.root,
        
        // Estados de cor
        "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input/80",
        "hover:data-[state=checked]:bg-primary/90 hover:data-[state=unchecked]:bg-input",
        "active:scale-95",
        
        // Cores personalizadas
        (customColor || customCheckedColor) && "data-[state=checked]:bg-[--switch-checked-color] hover:data-[state=checked]:bg-[--switch-checked-color]/90",
        (customColor || customUncheckedColor) && "data-[state=unchecked]:bg-[--switch-unchecked-color] hover:data-[state=unchecked]:bg-[--switch-unchecked-color]",
        
        className
      )}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          // Base styles
          "pointer-events-none block rounded-full bg-background",
          "ring-0 transition-all duration-300 ease-in-out",
          "data-[state=unchecked]:translate-x-0.5",
          
          // Size
          currentSize.thumb,
          currentSize.translate,
          
          // Sombras e efeitos
          "shadow-md data-[state=checked]:shadow-lg",
          "data-[state=checked]:ring-2 data-[state=checked]:ring-primary/20",
        )}
      />
    </SwitchPrimitives.Root>
  )
})
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
