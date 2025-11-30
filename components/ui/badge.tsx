import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn, getContrastTextColor } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80 shadow-sm",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground hover:bg-accent",
        success: "border-transparent bg-green-600 text-white hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800",
        warning: "border-transparent bg-yellow-600 text-white hover:bg-yellow-700 dark:bg-yellow-700 dark:hover:bg-yellow-800",
        info: "border-transparent bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  customColor?: string
  customTextColor?: string
}

function Badge({ className, variant, customColor, customTextColor, ...props }: BadgeProps) {
  const colorStyles = React.useMemo(() => {
    const styles: React.CSSProperties = {}
    if (customColor && variant === "default") {
      styles.backgroundColor = customColor
      styles.borderColor = customColor
      // Se não foi especificada uma cor de texto, calcula automaticamente
      if (!customTextColor) {
        styles.color = getContrastTextColor(customColor)
      } else {
        styles.color = customTextColor
      }
    } else if (customTextColor && variant === "default") {
      styles.color = customTextColor
    }
    return styles
  }, [customColor, customTextColor, variant])

  return (
    <div 
      style={colorStyles}
      className={cn(badgeVariants({ variant }), className)} 
      {...props} 
    />
  )
}

export { Badge, badgeVariants }
