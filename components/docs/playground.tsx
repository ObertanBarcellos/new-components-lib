"use client"

import * as React from "react"
import { ComponentMetadata, PropDefinition } from "@/lib/docs/components"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "./code-block"
import { ComponentPreview } from "./component-preview"
import { cn } from "@/lib/utils"
import { useTranslations } from "@/hooks/use-translations"

interface PlaygroundProps {
  component: ComponentMetadata
  renderComponent: (props: Record<string, any>) => React.ReactNode
}

export function Playground({ component, renderComponent }: PlaygroundProps) {
  const { t } = useTranslations()
  const [props, setProps] = React.useState<Record<string, any>>({})
  const [showCode, setShowCode] = React.useState(false)

  const updateProp = (name: string, value: any) => {
    setProps((prev) => ({ ...prev, [name]: value }))
  }

  const removeProp = (name: string) => {
    setProps((prev) => {
      const next = { ...prev }
      delete next[name]
      return next
    })
  }

  const generateCode = () => {
    const propsString = Object.entries(props)
      .filter(([_, value]) => value !== undefined && value !== null && value !== "")
      .map(([key, value]) => {
        if (key === "className") {
          // className sempre usa chaves para permitir múltiplas classes
          return `className="${value}"`
        }
        if (typeof value === "string") {
          return `${key}="${value}"`
        }
        if (typeof value === "boolean") {
          return value ? key : `{false}`
        }
        return `${key}={${JSON.stringify(value)}}`
      })
      .join(" ")

    return `<${component.name}${propsString ? ` ${propsString}` : ""} />`
  }

  const renderPropControl = (prop: PropDefinition) => {
    const value = props[prop.name] ?? prop.default?.replace(/'/g, "")

    if (prop.type.includes("boolean")) {
      return (
        <div key={prop.name} className="flex items-center justify-between">
          <label htmlFor={prop.name} className="text-sm font-medium">
            {prop.name}
          </label>
          <Switch
            id={prop.name}
            checked={value === "true" || value === true}
            onCheckedChange={(checked) => updateProp(prop.name, checked)}
          />
        </div>
      )
    }

    if (prop.type.includes("|")) {
      const options = prop.type
        .split("|")
        .map((o) => o.trim().replace(/'/g, ""))
        .filter((o) => o && !o.includes("ReactNode") && !o.includes("string"))

      if (options.length > 0) {
        return (
          <div key={prop.name} className="space-y-2">
            <label htmlFor={prop.name} className="text-sm font-medium block">
              {prop.name}
            </label>
            <Select
              value={value}
              onValueChange={(val) => updateProp(prop.name, val)}
            >
              <SelectTrigger id={prop.name}>
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )
      }
    }

    if (prop.type.includes("string") || prop.type.includes("number")) {
      return (
        <div key={prop.name} className="space-y-2">
          <label htmlFor={prop.name} className="text-sm font-medium block">
            {prop.name}
          </label>
          <Input
            id={prop.name}
            type={prop.type.includes("number") ? "number" : "text"}
            value={value || ""}
            onChange={(e) => {
              const val = prop.type.includes("number")
                ? Number(e.target.value)
                : e.target.value
              if (val) {
                updateProp(prop.name, val)
              } else {
                removeProp(prop.name)
              }
            }}
            placeholder={prop.default || t("common.typeValue")}
          />
        </div>
      )
    }

    return null
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="preview" className="w-full">
        <TabsList>
          <TabsTrigger value="preview">{t("common.preview")}</TabsTrigger>
          <TabsTrigger value="code">{t("common.code")}</TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>{t("common.controls")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {component.props
                .filter((p) => {
                  // Permite className para Skeleton, mas filtra para outros componentes
                  if (p.name === "className") {
                    return component.name === "Skeleton"
                  }
                  return !p.name.includes("children")
                })
                .map(renderPropControl)}
            </CardContent>
          </Card>

          <ComponentPreview title={t("common.preview")}>
            {renderComponent(props)}
          </ComponentPreview>
        </TabsContent>

        <TabsContent value="code">
          <CodeBlock code={generateCode()} language="tsx" />
        </TabsContent>
      </Tabs>
    </div>
  )
}

