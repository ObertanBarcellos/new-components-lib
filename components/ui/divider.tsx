import * as React from "react"
import { cn } from "@/lib/utils"

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: "horizontal" | "vertical"
  customColor?: string
}

const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({ className, orientation = "horizontal", customColor, ...props }, ref) => {
    const colorStyles = React.useMemo(() => {
      if (!customColor) return {}
      return {
        borderColor: customColor,
        backgroundColor: customColor,
      } as React.CSSProperties
    }, [customColor])

    if (orientation === "vertical") {
      return (
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          style={colorStyles}
          className={cn(
            "inline-block h-full w-px bg-border",
            className
          )}
          role="separator"
          aria-orientation="vertical"
          {...(props as React.HTMLAttributes<HTMLDivElement>)}
        />
      )
    }

    return (
      <hr
        ref={ref}
        style={colorStyles}
        className={cn("border-0 border-t border-border", className)}
        role="separator"
        aria-orientation="horizontal"
        {...props}
      />
    )
  }
)
Divider.displayName = "Divider"

export { Divider }

