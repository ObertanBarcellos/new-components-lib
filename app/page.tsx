"use client"

import { HeroSection } from "@/components/home/hero-section"
import { FeaturesSection } from "@/components/home/features-section"
import { ComponentsShowcase } from "@/components/home/components-showcase"
import { StatsSection } from "@/components/home/stats-section"
import { CTASection } from "@/components/home/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <ComponentsShowcase />
      <StatsSection />
      <CTASection />
    </main>
  )
}
