"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

export interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  customColor?: string
  customBgColor?: string
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, customColor, customBgColor, ...props }, ref) => {
  const indicatorStyle = React.useMemo(() => {
    const styles: React.CSSProperties = {
      transform: `translateX(-${100 - (value || 0)}%)`,
    }
    if (customColor) {
      styles.backgroundColor = customColor
    }
    return styles
  }, [value, customColor])

  const rootStyle = React.useMemo(() => {
    const styles: React.CSSProperties = {}
    if (customBgColor) {
      styles.backgroundColor = customBgColor
    }
    return styles
  }, [customBgColor])

  return (
    <ProgressPrimitive.Root
      ref={ref}
      style={rootStyle}
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-full bg-secondary transition-all duration-300",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          "h-full w-full flex-1 bg-primary transition-all duration-300 ease-in-out",
          !customColor && "bg-primary"
        )}
        style={indicatorStyle}
      />
    </ProgressPrimitive.Root>
  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
