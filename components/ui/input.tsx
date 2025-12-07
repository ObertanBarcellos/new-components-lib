import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.ComponentProps<"input"> {
  error?: boolean
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  customBorderColor?: string
  customFocusColor?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, startIcon, endIcon, customBorderColor, customFocusColor, ...props }, ref) => {
    const hasIcons = startIcon || endIcon

    const colorStyles = React.useMemo(() => {
      const styles: React.CSSProperties & Record<string, string> = {}
      if (customBorderColor && !error) {
        styles['--input-border-color'] = customBorderColor
      }
      if (customFocusColor && !error) {
        styles['--input-focus-color'] = customFocusColor
      }
      return styles
    }, [customBorderColor, customFocusColor, error])

    return (
      <div className="relative w-full">
        {startIcon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/70 pointer-events-none z-10">
            {startIcon}
          </div>
        )}
        <input
          type={type}
          style={colorStyles}
          className={cn(
            "flex h-10 w-full rounded-lg border-2 transition-all duration-300 ease-in-out",
            "bg-background px-4 py-2.5 text-base",
            "ring-offset-background shadow-sm",
            "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
            "placeholder:text-muted-foreground/70",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2",
            "focus-visible:border-ring focus-visible:shadow-md focus-visible:scale-[1.01]",
            "hover:shadow-md hover:border-ring/50",
            "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-sm",
            "md:text-sm",
            hasIcons && startIcon && "pl-10",
            hasIcons && endIcon && "pr-10",
            customBorderColor && !error && "border-[--input-border-color] hover:border-[--input-border-color] hover:shadow-[--input-border-color]/10",
            customFocusColor && !error && "focus-visible:border-[--input-focus-color] focus-visible:ring-[--input-focus-color]/30 focus-visible:shadow-[--input-focus-color]/20",
            error
              ? "border-destructive focus-visible:ring-destructive/30 dark:focus-visible:ring-destructive/50 shadow-destructive/10"
              : !customBorderColor && "border-input/60 hover:border-input",
            className
          )}
          ref={ref}
          aria-invalid={error}
          {...props}
        />
        {endIcon && (
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/70 pointer-events-none z-10">
            {endIcon}
          </div>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
