"use client"

import * as React from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface SnippetProps extends React.HTMLAttributes<HTMLPreElement> {
  text: string
  showCopyButton?: boolean
  copyText?: string
  onCopy?: () => void
  customColor?: string
  customBorderColor?: string
}

const Snippet = React.forwardRef<HTMLPreElement, SnippetProps>(
  (
    {
      className,
      text,
      showCopyButton = true,
      copyText = "Copy",
      onCopy,
      customColor,
      customBorderColor,
      ...props
    },
    ref
  ) => {
    const [copied, setCopied] = React.useState(false)

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        onCopy?.()
        setTimeout(() => setCopied(false), 2000)
      } catch (err) {
        console.error("Failed to copy text:", err)
      }
    }

    const colorStyles = React.useMemo(() => {
      const styles: React.CSSProperties = {}
      if (customColor) {
        styles.backgroundColor = `${customColor}15`
      }
      if (customBorderColor) {
        styles.borderColor = customBorderColor
      }
      return styles
    }, [customColor, customBorderColor])

    return (
      <div className="relative group">
        <pre
          ref={ref}
          style={colorStyles}
          className={cn(
            "relative overflow-x-auto rounded-md border bg-muted p-4 font-mono text-sm",
            className
          )}
          {...props}
        >
          <code>{text}</code>
        </pre>
        {showCopyButton && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={handleCopy}
            aria-label={copyText}
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        )}
      </div>
    )
  }
)
Snippet.displayName = "Snippet"

export { Snippet }

