"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { fadeInUp, staggerFadeInUp } from "@/lib/gsap-animations"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const badgesRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animar título
      fadeInUp(titleRef.current, 0.2)
      // Animar descrição
      fadeInUp(descriptionRef.current, 0.4)
      // Animar badges com stagger
      staggerFadeInUp(badgesRef.current?.children || [], 0.1)
      // Animar botões
      fadeInUp(buttonsRef.current, 0.6)
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 dark:from-primary/10 dark:via-background dark:to-accent/10" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div ref={badgesRef} className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <Badge variant="secondary" className="text-sm px-3 py-1">
            <Sparkles className="w-3 h-3 mr-1" />
            Moderno & Acessível
          </Badge>
          <Badge variant="outline" className="text-sm px-3 py-1">
            TypeScript
          </Badge>
          <Badge variant="outline" className="text-sm px-3 py-1">
            Radix UI
          </Badge>
          <Badge variant="outline" className="text-sm px-3 py-1">
            Tailwind CSS
          </Badge>
        </div>

        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight"
        >
          vyse-ui
        </h1>

        <p
          ref={descriptionRef}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Uma biblioteca completa de componentes React moderna, acessível e
          construída com as melhores práticas da indústria.
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/docs">
            <Button size="lg" className="text-base px-8">
              Começar Agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="/docs/button">
            <Button variant="outline" size="lg" className="text-base px-8">
              Ver Componentes
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

