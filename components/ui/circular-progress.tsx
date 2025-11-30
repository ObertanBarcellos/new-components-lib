import * as React from "react"
import { cn } from "@/lib/utils"

export interface CircularProgressProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
  max?: number
  size?: "sm" | "default" | "lg"
  showLabel?: boolean
  customColor?: string
}

const CircularProgress = React.forwardRef<
  HTMLDivElement,
  CircularProgressProps
>(
  (
    {
      className,
      value = 0,
      max = 100,
      size = "default",
      showLabel = false,
      customColor,
      ...props
    },
    ref
  ) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100)
    const circumference = 2 * Math.PI * 45 // radius = 45
    const strokeDasharray = circumference
    const strokeDashoffset = circumference - (percentage / 100) * circumference

    const sizes = {
      sm: "h-12 w-12",
      default: "h-16 w-16",
      lg: "h-24 w-24",
    }

    const strokeWidths = {
      sm: 3,
      default: 4,
      lg: 5,
    }

    const strokeColor = customColor || "currentColor"

    return (
      <div
        ref={ref}
        className={cn("relative inline-flex items-center justify-center", sizes[size], className)}
        {...props}
      >
        <svg
          className="transform -rotate-90"
          viewBox="0 0 100 100"
          style={{ width: "100%", height: "100%" }}
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke={strokeColor}
            strokeWidth={strokeWidths[size]}
            className="opacity-20"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke={strokeColor}
            strokeWidth={strokeWidths[size]}
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-300"
          />
        </svg>
        {showLabel && (
          <span className="absolute text-sm font-medium">
            {Math.round(percentage)}%
          </span>
        )}
      </div>
    )
  }
)
CircularProgress.displayName = "CircularProgress"

export { CircularProgress }

