"use client"

import { HeroSection } from "@/components/home/hero-section"
import { GettingStartedSection } from "@/components/home/getting-started-section"
import { FeaturesSection } from "@/components/home/features-section"
import { ComponentsShowcase } from "@/components/home/components-showcase"
import { StatsSection } from "@/components/home/stats-section"
import { CTASection } from "@/components/home/cta-section"
import { LanguageSwitcher } from "@/components/docs/language-switcher"
import { Badge } from "@/components/ui/badge"

// Versão da biblioteca
const VERSION = "1.2.2"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header com botão de idioma e versão */}
      <header className="fixed top-0 right-0 z-50 p-6">
        <div className="flex items-center justify-end gap-3">
          <Badge variant="outline" className="text-xs font-medium">
            Version {VERSION}
          </Badge>
          <LanguageSwitcher />
        </div>
      </header>
      
      <HeroSection />
      <GettingStartedSection />
      <FeaturesSection />
      <ComponentsShowcase />
      <StatsSection />
      <CTASection />
    </main>
  )
}
