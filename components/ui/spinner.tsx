import * as React from "react"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "default" | "lg"
  customColor?: string
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = "default", customColor, ...props }, ref) => {
    const sizes = {
      sm: "h-4 w-4",
      default: "h-6 w-6",
      lg: "h-8 w-8",
    }

    const colorStyles = React.useMemo(() => {
      const styles: React.CSSProperties = {}
      if (customColor) {
        styles.color = customColor
      }
      return styles
    }, [customColor])

    return (
      <div
        ref={ref}
        className={cn("inline-flex items-center justify-center", className)}
        {...props}
      >
        <Loader2 
          className={cn("animate-spin", sizes[size])}
          style={colorStyles}
        />
      </div>
    )
  }
)
Spinner.displayName = "Spinner"

export { Spinner }

