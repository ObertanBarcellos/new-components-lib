import * as React from "react"

import { cn, getContrastTextColor } from "@/lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  interactive?: boolean
  customBorderColor?: string
  customBgColor?: string
  customTextColor?: string
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, interactive = false, customBorderColor, customBgColor, customTextColor, ...props }, ref) => {
    const colorStyles = React.useMemo(() => {
      const styles: React.CSSProperties = {}
      if (customBorderColor) {
        styles.borderColor = customBorderColor
      }
      if (customBgColor) {
        styles.backgroundColor = customBgColor
        // Se não foi especificada uma cor de texto, calcula automaticamente
        if (!customTextColor) {
          styles.color = getContrastTextColor(customBgColor)
        } else {
          styles.color = customTextColor
        }
      } else if (customTextColor) {
        styles.color = customTextColor
      }
      return styles
    }, [customBorderColor, customBgColor, customTextColor])

    return (
      <div
        ref={ref}
        style={colorStyles}
        className={cn(
          "rounded-xl border-2 bg-card text-card-foreground shadow-md",
          "transition-all duration-300 ease-in-out",
          hover && "hover:shadow-lg hover:border-accent/60 hover:scale-[1.01]",
          interactive && "cursor-pointer hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]",
          className
        )}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground leading-relaxed", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center p-6 pt-0 gap-2",
      className
    )}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
