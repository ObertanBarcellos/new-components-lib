import * as React from "react"
import { cn } from "@/lib/utils"

export interface KeyboardKeyProps extends React.HTMLAttributes<HTMLElement> {
  keys?: string | string[]
  customColor?: string
}

const KeyboardKey = React.forwardRef<HTMLElement, KeyboardKeyProps>(
  ({ className, keys, children, customColor, ...props }, ref) => {
    const keysArray = keys
      ? Array.isArray(keys)
        ? keys
        : [keys]
      : children
      ? [children]
      : []

    if (keysArray.length === 0) {
      return null
    }

    const colorStyles = React.useMemo(() => {
      if (!customColor) return {}
      return {
        backgroundColor: `${customColor}15`,
        borderColor: `${customColor}40`,
        color: customColor,
      } as React.CSSProperties
    }, [customColor])

    return (
      <kbd
        ref={ref}
        style={colorStyles}
        className={cn(
          "pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100",
          className
        )}
        {...props}
      >
        {keysArray.map((key, index) => (
          <React.Fragment key={index}>
            {index > 0 && <span className="text-muted-foreground/50">+</span>}
            <span>{key}</span>
          </React.Fragment>
        ))}
      </kbd>
    )
  }
)
KeyboardKey.displayName = "KeyboardKey"

export { KeyboardKey }

