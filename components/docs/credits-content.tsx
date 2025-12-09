"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"
import {
  getAllCredits,
  getCreditsByCategory,
  getCreditCategories,
  type CreditCategory,
} from "@/lib/docs/credits"
import { fadeInUp, revealOnScroll } from "@/lib/gsap-animations"

export function CreditsContent() {
  const { t } = useTranslations()
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const categories = getCreditCategories()
  const allCredits = getAllCredits()

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      // Animar título e descrição
      if (titleRef.current) {
        fadeInUp(titleRef.current, 0.2)
      }
      if (descriptionRef.current) {
        fadeInUp(descriptionRef.current, 0.4)
      }

      // Animar seções de categorias
      categories.forEach((category) => {
        const sectionRef = containerRef.current?.querySelector(
          `[data-category="${category}"]`
        ) as HTMLElement
        if (sectionRef) {
          revealOnScroll(sectionRef, "up")

          // Animar cards dentro de cada seção
          const cardsRef = sectionRef.querySelectorAll("[data-credit-card]")
          if (cardsRef && cardsRef.length > 0) {
            gsap.fromTo(
              cardsRef,
              {
                opacity: 0,
                y: 30,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.05,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: sectionRef,
                  start: "top 80%",
                  end: "bottom 20%",
                  toggleActions: "play none none reverse",
                },
              }
            )
          }
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [categories])

  const getCategoryLabel = (category: CreditCategory): string => {
    const categoryMap: Record<CreditCategory, string> = {
      "UI Libraries": t("credits.categories.uiLibraries"),
      Styling: t("credits.categories.styling"),
      Animations: t("credits.categories.animations"),
      "Build Tools": t("credits.categories.buildTools"),
      Testing: t("credits.categories.testing"),
      Utilities: t("credits.categories.utilities"),
      "Core Technologies": t("credits.categories.coreTechnologies"),
    }
    return categoryMap[category] || category
  }

  return (
    <div ref={containerRef} className="space-y-16">
      {/* Header Section */}
      <div className="space-y-4">
        <h1
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
        >
          {t("credits.title")}
        </h1>
        <p ref={descriptionRef} className="text-xl text-muted-foreground max-w-2xl">
          {t("credits.description")}
        </p>
      </div>

      {/* Credits by Category */}
      {categories.map((category) => {
        const categoryCredits = getCreditsByCategory(category)
        if (categoryCredits.length === 0) return null

        return (
          <section
            key={category}
            data-category={category}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight">
              {getCategoryLabel(category)}
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {categoryCredits.map((credit) => (
                <Card
                  key={credit.name}
                  data-credit-card
                  hover
                  className="group transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {credit.name}
                        </CardTitle>
                        <Badge variant="secondary" className="mt-2">
                          {credit.version}
                        </Badge>
                      </div>
                      <Link
                        href={credit.docsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${t("credits.viewDocs")} ${credit.name}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {credit.description}
                    </CardDescription>
                    <Link
                      href={credit.docsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center text-sm text-primary hover:underline"
                    >
                      {t("credits.viewDocs")}
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )
      })}

      {/* Summary Section */}
      <div className="mt-16 p-6 rounded-lg border bg-muted/50">
        <h3 className="text-xl font-semibold mb-4">{t("credits.summary.title")}</h3>
        <p className="text-muted-foreground">
          {t("credits.summary.description").replace("{count}", allCredits.length.toString())}
        </p>
      </div>
    </div>
  )
}

