import * as React from "react"
import { Button, ButtonProps } from "./button"
import { cn } from "@/lib/utils"

export interface IconButtonProps extends Omit<ButtonProps, "size"> {
  size?: "sm" | "default" | "lg"
  "aria-label": string
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, size = "default", children, ...props }, ref) => {
    const iconSizes = {
      sm: "h-8 w-8",
      default: "h-10 w-10",
      lg: "h-12 w-12",
    }

    return (
      <Button
        ref={ref}
        size="icon"
        className={cn(iconSizes[size], className)}
        {...props}
      >
        {children}
      </Button>
    )
  }
)
IconButton.displayName = "IconButton"

export { IconButton }

