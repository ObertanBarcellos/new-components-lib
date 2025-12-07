"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"
import { getComponentsByCategory } from "@/lib/docs/components"
import type { ComponentMetadata } from "@/lib/docs/components"

interface DocsHomeContentProps {
  components: ComponentMetadata[]
  categories: readonly string[]
}

export function DocsHomeContent({ components, categories }: DocsHomeContentProps) {
  const { t } = useTranslations()

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{t("home.title")}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          {t("home.description")}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const categoryComponents = getComponentsByCategory(category)
          const categoryKey = `categories.${category}` as const
          const translatedCategory = t(categoryKey) !== categoryKey ? t(categoryKey) : category
          return (
            <Card key={category} hover interactive>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{translatedCategory}</CardTitle>
                  <Badge variant="secondary">{categoryComponents.length}</Badge>
                </div>
                <CardDescription>
                  {categoryComponents.length}{" "}
                  {categoryComponents.length !== 1 ? t("common.componentsPlural") : t("common.components")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categoryComponents.slice(0, 5).map((component) => (
                    <Link
                      key={component.id}
                      href={`/docs/${component.id}`}
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {component.name}
                    </Link>
                  ))}
                  {categoryComponents.length > 5 && (
                    <Link
                      href={`/docs?category=${category.toLowerCase()}`}
                      className="block text-sm text-primary hover:underline"
                    >
                      {t("common.seeAll")} ({categoryComponents.length})
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">{t("common.popularComponents")}</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {components.slice(0, 6).map((component) => (
            <Link key={component.id} href={`/docs/${component.id}`}>
              <Card hover className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{component.name}</CardTitle>
                  <CardDescription>{component.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t("common.gettingStarted")}</CardTitle>
          <CardDescription>
            {t("home.gettingStartedDescription")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-muted p-4 font-mono text-sm">
            <div className="text-muted-foreground">{t("common.installDependencies")}</div>
            <div>pnpm install</div>
          </div>
          <div className="rounded-lg bg-muted p-4 font-mono text-sm">
            <div className="text-muted-foreground">{t("common.importComponent")}</div>
            <div>import {"{"} Button {"}"} from &quot;@/components/ui/button&quot;</div>
          </div>
          <Link href="/docs/button">
            <Button>
              {t("common.viewDocumentation")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}

