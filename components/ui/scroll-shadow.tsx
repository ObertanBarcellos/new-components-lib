"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ScrollShadowProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "vertical" | "horizontal" | "both"
  showTop?: boolean
  showBottom?: boolean
  showLeft?: boolean
  showRight?: boolean
  shadowColor?: string
  shadowSize?: "sm" | "default" | "lg"
}

const ScrollShadow = React.forwardRef<HTMLDivElement, ScrollShadowProps>(
  (
    {
      className,
      orientation = "vertical",
      showTop = true,
      showBottom = true,
      showLeft = false,
      showRight = false,
      shadowColor,
      shadowSize = "default",
      children,
      ...props
    },
    ref
  ) => {
    const [showTopShadow, setShowTopShadow] = React.useState(false)
    const [showBottomShadow, setShowBottomShadow] = React.useState(false)
    const [showLeftShadow, setShowLeftShadow] = React.useState(false)
    const [showRightShadow, setShowRightShadow] = React.useState(false)
    const scrollRef = React.useRef<HTMLDivElement>(null)

    const shadowSizes = {
      sm: "h-6",
      default: "h-12",
      lg: "h-16",
    }

    const shadowWidths = {
      sm: "w-6",
      default: "w-12",
      lg: "w-16",
    }

    const checkScroll = React.useCallback(() => {
      const element = scrollRef.current
      if (!element) return

      const { scrollTop, scrollHeight, clientHeight, scrollLeft, scrollWidth, clientWidth } =
        element

      if (orientation === "vertical" || orientation === "both") {
        setShowTopShadow(showTop && scrollTop > 0)
        setShowBottomShadow(
          showBottom && scrollTop < scrollHeight - clientHeight - 1
        )
      }

      if (orientation === "horizontal" || orientation === "both") {
        setShowLeftShadow(showLeft && scrollLeft > 0)
        setShowRightShadow(
          showRight && scrollLeft < scrollWidth - clientWidth - 1
        )
      }
    }, [orientation, showTop, showBottom, showLeft, showRight])

    React.useEffect(() => {
      const element = scrollRef.current
      if (!element) return

      checkScroll()
      element.addEventListener("scroll", checkScroll)
      window.addEventListener("resize", checkScroll)

      return () => {
        element.removeEventListener("scroll", checkScroll)
        window.removeEventListener("resize", checkScroll)
      }
    }, [checkScroll])

    const getGradientStyle = (direction: 'top' | 'bottom' | 'left' | 'right') => {
      if (shadowColor) {
        const gradients = {
          top: `linear-gradient(to bottom, ${shadowColor} 0%, ${shadowColor}80 50%, transparent 100%)`,
          bottom: `linear-gradient(to top, ${shadowColor} 0%, ${shadowColor}80 50%, transparent 100%)`,
          left: `linear-gradient(to right, ${shadowColor} 0%, ${shadowColor}80 50%, transparent 100%)`,
          right: `linear-gradient(to left, ${shadowColor} 0%, ${shadowColor}80 50%, transparent 100%)`,
        }
        return { background: gradients[direction] }
      }
      return {}
    }

    const shadowClasses = shadowColor 
      ? ""
      : "bg-gradient-to-b from-background via-background/95 to-transparent"

    return (
      <div className={cn("relative", className)} {...props}>
        {(orientation === "vertical" || orientation === "both") && (
          <>
            <div
              className={cn(
                "pointer-events-none absolute inset-x-0 top-0 z-20 transition-opacity duration-300",
                shadowSizes[shadowSize],
                !shadowColor && shadowClasses,
                showTopShadow ? "opacity-100" : "opacity-0"
              )}
              style={getGradientStyle('top')}
            />
            <div
              className={cn(
                "pointer-events-none absolute inset-x-0 bottom-0 z-20 transition-opacity duration-300",
                shadowSizes[shadowSize],
                !shadowColor && "bg-gradient-to-t from-background via-background/95 to-transparent",
                showBottomShadow ? "opacity-100" : "opacity-0"
              )}
              style={getGradientStyle('bottom')}
            />
          </>
        )}
        {(orientation === "horizontal" || orientation === "both") && (
          <>
            <div
              className={cn(
                "pointer-events-none absolute inset-y-0 left-0 z-20 transition-opacity duration-300",
                shadowWidths[shadowSize],
                !shadowColor && "bg-gradient-to-r from-background via-background/95 to-transparent",
                showLeftShadow ? "opacity-100" : "opacity-0"
              )}
              style={getGradientStyle('left')}
            />
            <div
              className={cn(
                "pointer-events-none absolute inset-y-0 right-0 z-20 transition-opacity duration-300",
                shadowWidths[shadowSize],
                !shadowColor && "bg-gradient-to-l from-background via-background/95 to-transparent",
                showRightShadow ? "opacity-100" : "opacity-0"
              )}
              style={getGradientStyle('right')}
            />
          </>
        )}
        <div
          ref={(node) => {
            scrollRef.current = node
            if (typeof ref === "function") {
              ref(node)
            } else if (ref) {
              ref.current = node
            }
          }}
          className={cn(
            "overflow-auto",
            orientation === "vertical" && "overflow-x-hidden",
            orientation === "horizontal" && "overflow-y-hidden"
          )}
        >
          {children}
        </div>
      </div>
    )
  }
)
ScrollShadow.displayName = "ScrollShadow"

export { ScrollShadow }

