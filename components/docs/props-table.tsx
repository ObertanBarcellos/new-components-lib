"use client"

import * as React from "react"
import { PropDefinition } from "@/lib/docs/components"
import { cn } from "@/lib/utils"

interface PropsTableProps {
  props: PropDefinition[]
  className?: string
}

export function PropsTable({ props, className }: PropsTableProps) {
  if (props.length === 0) {
    return (
      <div className={cn("text-sm text-muted-foreground py-4", className)}>
        Este componente não possui props customizadas.
      </div>
    )
  }

  return (
    <div className={cn("overflow-x-auto", className)}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-4 font-semibold text-sm">Prop</th>
            <th className="text-left py-3 px-4 font-semibold text-sm">Tipo</th>
            <th className="text-left py-3 px-4 font-semibold text-sm">Padrão</th>
            <th className="text-left py-3 px-4 font-semibold text-sm">Descrição</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop, index) => (
            <tr
              key={prop.name}
              className={cn(
                "border-b border-border/50",
                index % 2 === 0 && "bg-muted/30"
              )}
            >
              <td className="py-3 px-4">
                <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
                  {prop.name}
                </code>
                {prop.required && (
                  <span className="ml-2 text-xs text-destructive">*</span>
                )}
              </td>
              <td className="py-3 px-4">
                <code className="text-xs font-mono text-muted-foreground">
                  {prop.type}
                </code>
              </td>
              <td className="py-3 px-4">
                {prop.default ? (
                  <code className="text-xs font-mono text-muted-foreground">
                    {prop.default}
                  </code>
                ) : (
                  <span className="text-xs text-muted-foreground">—</span>
                )}
              </td>
              <td className="py-3 px-4 text-sm text-muted-foreground">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

