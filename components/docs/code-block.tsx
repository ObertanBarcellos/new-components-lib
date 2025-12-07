"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { codeToHtml } from "shiki"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  code: string
  language?: string
  className?: string
  title?: string
}

export function CodeBlock({ code, language = "tsx", className, title }: CodeBlockProps) {
  const { theme, resolvedTheme } = useTheme()
  const [copied, setCopied] = React.useState(false)
  const [html, setHtml] = React.useState<string>("")
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    if (!mounted) return

    async function highlight() {
      try {
        const currentTheme = resolvedTheme || theme || "light"
        const shikiTheme = currentTheme === "dark" ? "github-dark" : "github-light"
        
        const highlighted = await codeToHtml(code, {
          lang: language,
          theme: shikiTheme,
        })
        setHtml(highlighted)
      } catch (error) {
        console.error("Error highlighting code:", error)
        setHtml(`<pre class="p-4 rounded-lg bg-muted"><code class="text-sm">${code}</code></pre>`)
      }
    }
    highlight()
  }, [code, language, theme, resolvedTheme, mounted])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error("Failed to copy:", error)
    }
  }

  if (!mounted) {
    return (
      <div className={cn("relative group", className)}>
        {title && (
          <div className="px-4 py-2 bg-muted border-b border-border text-sm font-medium">
            {title}
          </div>
        )}
        <div className="relative">
          <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("relative group", className)}>
      {title && (
        <div className="px-4 py-2 bg-muted border-b border-border text-sm font-medium">
          {title}
        </div>
      )}
      <div className="relative">
        <div
          className={cn(
            "overflow-x-auto rounded-lg p-4 text-sm",
            resolvedTheme === "dark" ? "bg-[#0d1117]" : "bg-[#f6f8fa]"
          )}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={handleCopy}
          aria-label="Copiar código"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  )
}

