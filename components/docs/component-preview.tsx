"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

interface ComponentPreviewProps {
  children: React.ReactNode
  className?: string
  title?: string
}

export function ComponentPreview({ children, className, title }: ComponentPreviewProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {title && (
        <h3 className="text-lg font-semibold">{title}</h3>
      )}
      <Card className="p-6">
        <CardContent className="p-0 flex items-center justify-center min-h-[200px]">
          {children}
        </CardContent>
      </Card>
    </div>
  )
}

