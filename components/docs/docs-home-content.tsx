"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket, Code, Package } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"
import { getComponentsByCategory } from "@/lib/docs/components"
import type { ComponentMetadata } from "@/lib/docs/components"
import { fadeInUp, staggerFadeInUp, revealOnScroll } from "@/lib/gsap-animations"

interface DocsHomeContentProps {
  components: ComponentMetadata[]
  categories: readonly string[]
}

export function DocsHomeContent({ components, categories }: DocsHomeContentProps) {
  const { t } = useTranslations()
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const gettingStartedRef = useRef<HTMLDivElement>(null)
  const categoriesRef = useRef<HTMLDivElement>(null)
  const popularRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animar título e descrição
      fadeInUp(titleRef.current, 0.2)
      fadeInUp(descriptionRef.current, 0.4)

      // Animar Getting Started
      if (gettingStartedRef.current) {
        gsap.fromTo(
          gettingStartedRef.current.children,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            delay: 0.6,
            ease: "power3.out",
          }
        )
      }

      // Animar cards de categorias
      if (categoriesRef.current) {
        gsap.fromTo(
          categoriesRef.current.children,
          {
            opacity: 0,
            scale: 0.9,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: categoriesRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }

      // Animar componentes populares
      if (popularRef.current) {
        gsap.fromTo(
          popularRef.current.children,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: popularRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="space-y-16 overflow-hidden">
      {/* Header Section */}
      <div className="space-y-4">
        <h1 ref={titleRef} className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
          {t("home.title")}
        </h1>
        <p ref={descriptionRef} className="text-xl text-muted-foreground max-w-2xl">
          {t("home.description")}
        </p>
      </div>

      {/* Getting Started Section */}
      <div ref={gettingStartedRef}>
        <Card className="relative overflow-hidden border-2">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 dark:from-primary/10 dark:via-background dark:to-accent/10" />
          
          <CardHeader className="relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                <Rocket className="w-5 h-5 text-primary" />
              </div>
              <CardTitle className="text-2xl">{t("common.gettingStarted")}</CardTitle>
            </div>
            <CardDescription className="text-base">
              {t("home.gettingStartedDescription")}
            </CardDescription>
          </CardHeader>
          <CardContent className="relative z-10 space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-muted/50 dark:bg-muted/30 border p-4 font-mono text-sm backdrop-blur-sm">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Package className="w-4 h-4" />
                  <span>{t("common.installDependencies")}</span>
                </div>
                <div className="text-foreground font-semibold">pnpm install</div>
              </div>
              <div className="rounded-lg bg-muted/50 dark:bg-muted/30 border p-4 font-mono text-sm backdrop-blur-sm">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Code className="w-4 h-4" />
                  <span>{t("common.importComponent")}</span>
                </div>
                <div className="text-foreground font-semibold">
                  import {"{"} Button {"}"} from &quot;@/components/ui/button&quot;
                </div>
              </div>
            </div>
            <Link href="/docs/button">
              <Button size="lg" className="w-full sm:w-auto">
                {t("common.viewDocumentation")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Categories Section */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Categorias</h2>
        <div ref={categoriesRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const categoryComponents = getComponentsByCategory(category)
            const categoryKey = `categories.${category}` as const
            const translatedCategory = t(categoryKey) !== categoryKey ? t(categoryKey) : category
            return (
              <Card key={category} hover interactive className="group transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{translatedCategory}</CardTitle>
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
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors group-hover:translate-x-1 duration-200"
                      >
                        {component.name}
                      </Link>
                    ))}
                    {categoryComponents.length > 5 && (
                      <Link
                        href={`/docs?category=${category.toLowerCase()}`}
                        className="block text-sm text-primary hover:underline font-medium"
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
      </div>

      {/* Popular Components Section */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">{t("common.popularComponents")}</h2>
        <div ref={popularRef} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {components.slice(0, 6).map((component) => (
            <Link key={component.id} href={`/docs/${component.id}`}>
              <Card hover className="h-full group transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {component.name}
                  </CardTitle>
                  <CardDescription>{component.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
