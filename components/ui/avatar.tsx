"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn, getContrastTextColor } from "@/lib/utils"

export interface AvatarProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  customRingColor?: string
}

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, customRingColor, ...props }, ref) => {
  const colorStyles = React.useMemo(() => {
    const styles: React.CSSProperties & Record<string, string> = {}
    if (customRingColor) {
      styles['--avatar-ring-color'] = customRingColor
    }
    return styles
  }, [customRingColor])

  return (
    <AvatarPrimitive.Root
      ref={ref}
      style={colorStyles}
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full transition-all duration-200 hover:ring-2 hover:ring-ring hover:ring-offset-2",
        customRingColor && "hover:ring-[--avatar-ring-color]",
        className
      )}
      {...props}
    />
  )
})
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full object-cover transition-opacity duration-200", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

export interface AvatarFallbackProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> {
  customBgColor?: string
}

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  AvatarFallbackProps
>(({ className, customBgColor, ...props }, ref) => {
  const colorStyles = React.useMemo(() => {
    const styles: React.CSSProperties = {}
    if (customBgColor) {
      styles.backgroundColor = customBgColor
      // Calcula automaticamente a cor do texto baseado na cor de fundo
      styles.color = getContrastTextColor(customBgColor)
    }
    return styles
  }, [customBgColor])

  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      style={colorStyles}
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-muted",
        className
      )}
      {...props}
    />
  )
})
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
