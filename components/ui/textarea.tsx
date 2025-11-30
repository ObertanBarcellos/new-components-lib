import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps extends React.ComponentProps<"textarea"> {
  error?: boolean
  customBorderColor?: string
  customFocusColor?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, customBorderColor, customFocusColor, ...props }, ref) => {
    const colorStyles = React.useMemo(() => {
      const styles: React.CSSProperties = {}
      if (customBorderColor && !error) {
        styles['--textarea-border-color'] = customBorderColor
      }
      if (customFocusColor && !error) {
        styles['--textarea-focus-color'] = customFocusColor
      }
      return styles
    }, [customBorderColor, customFocusColor, error])

    return (
      <textarea
        style={colorStyles}
        className={cn(
          "flex min-h-[100px] w-full rounded-lg border-2 transition-all duration-300 ease-in-out",
          "bg-background px-4 py-3 text-base",
          "ring-offset-background shadow-sm",
          "placeholder:text-muted-foreground/70",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2",
          "focus-visible:border-ring focus-visible:shadow-md focus-visible:scale-[1.01]",
          "hover:shadow-md hover:border-ring/50",
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-sm",
          "md:text-sm",
          "resize-y",
          customBorderColor && !error && "border-[--textarea-border-color] hover:border-[--textarea-border-color] hover:shadow-[--textarea-border-color]/10",
          customFocusColor && !error && "focus-visible:border-[--textarea-focus-color] focus-visible:ring-[--textarea-focus-color]/30 focus-visible:shadow-[--textarea-focus-color]/20",
          error
            ? "border-destructive focus-visible:ring-destructive/30 dark:focus-visible:ring-destructive/50 shadow-destructive/10"
            : !customBorderColor && "border-input/60 hover:border-input",
          className
        )}
        ref={ref}
        aria-invalid={error}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
