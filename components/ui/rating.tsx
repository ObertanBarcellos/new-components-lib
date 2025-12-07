import * as React from "react"
import { Star } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const ratingVariants = cva("", {
  variants: {
    size: {
      sm: "h-4 w-4",
      default: "h-5 w-5",
      lg: "h-6 w-6",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

export interface RatingProps extends VariantProps<typeof ratingVariants> {
  value?: number
  defaultValue?: number
  max?: number
  onValueChange?: (value: number) => void
  readOnly?: boolean
  disabled?: boolean
  allowHalf?: boolean
  icon?: React.ComponentType<{ className?: string }>
  emptyIcon?: React.ComponentType<{ className?: string }>
  filledColor?: string
  emptyColor?: string
  className?: string
}

const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  (
    {
      value: controlledValue,
      defaultValue,
      max = 5,
      onValueChange,
      readOnly = false,
      disabled = false,
      allowHalf = false,
      icon: Icon = Star,
      emptyIcon: EmptyIcon,
      filledColor,
      emptyColor,
      size,
      className,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue || 0)
    const [hoverValue, setHoverValue] = React.useState<number | null>(null)
    const isControlled = controlledValue !== undefined
    const currentValue = isControlled ? controlledValue : internalValue
    const displayValue = hoverValue !== null ? hoverValue : currentValue
    const isInteractive = !readOnly && !disabled && !!onValueChange

    const handleClick = (newValue: number) => {
      if (!isInteractive) return
      if (isControlled) {
        onValueChange?.(newValue)
      } else {
        setInternalValue(newValue)
        onValueChange?.(newValue)
      }
    }

    const handleMouseEnter = (newValue: number) => {
      if (!isInteractive) return
      setHoverValue(newValue)
    }

    const handleMouseLeave = () => {
      if (!isInteractive) return
      setHoverValue(null)
    }

    const filledStyles = React.useMemo(() => {
      const styles: React.CSSProperties = {}
      if (filledColor) {
        styles.color = filledColor
        styles.fill = filledColor
      }
      return styles
    }, [filledColor])

    const emptyStyles = React.useMemo(() => {
      const styles: React.CSSProperties = {}
      if (emptyColor) {
        styles.color = emptyColor
        styles.fill = emptyColor
      }
      return styles
    }, [emptyColor])

    const EmptyIconComponent = EmptyIcon || Icon

    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-1", className)}
        role={readOnly ? "img" : "radiogroup"}
        aria-label={`Rating: ${currentValue} out of ${max}`}
        aria-readonly={readOnly}
        aria-disabled={disabled}
        {...props}
      >
        {Array.from({ length: max }, (_, index) => {
          const starValue = index + 1
          const isFilled = displayValue >= starValue
          const isHalfFilled = allowHalf && displayValue >= starValue - 0.5 && displayValue < starValue

          return (
            <button
              key={index}
              type="button"
              disabled={disabled || readOnly}
              onClick={() => handleClick(starValue)}
              onMouseEnter={() => handleMouseEnter(starValue)}
              onMouseLeave={handleMouseLeave}
              className={cn(
                "relative inline-flex items-center justify-center transition-colors duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm",
                isInteractive && "cursor-pointer",
                (disabled || readOnly) && "cursor-default",
                ratingVariants({ size })
              )}
              aria-label={`Rate ${starValue} out of ${max}`}
              aria-checked={currentValue === starValue}
            >
              {isHalfFilled ? (
                <div className="relative w-full h-full overflow-hidden">
                  <EmptyIconComponent
                    className={cn("absolute inset-0", ratingVariants({ size }))}
                    style={emptyStyles}
                  />
                  <div className="absolute inset-0 w-1/2 overflow-hidden">
                    <Icon
                      className={cn(ratingVariants({ size }))}
                      style={filledStyles}
                      fill="currentColor"
                    />
                  </div>
                </div>
              ) : (
                <>
                  {isFilled ? (
                    <Icon
                      className={cn(ratingVariants({ size }))}
                      style={filledStyles}
                      fill="currentColor"
                    />
                  ) : (
                    <EmptyIconComponent className={cn(ratingVariants({ size }))} style={emptyStyles} />
                  )}
                </>
              )}
            </button>
          )
        })}
      </div>
    )
  }
)
Rating.displayName = "Rating"

export { Rating, ratingVariants }

