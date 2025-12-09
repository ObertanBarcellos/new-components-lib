"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { revealOnScroll, scaleIn } from "@/lib/gsap-animations"
import { ArrowRight, BookOpen } from "lucide-react"

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      revealOnScroll(titleRef.current, "up")
      revealOnScroll(descriptionRef.current, "up")
      scaleIn(buttonRef.current, 0.3)
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 dark:from-primary/20 dark:via-background dark:to-accent/20" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div ref={contentRef} className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 mb-6">
          <BookOpen className="w-8 h-8 text-primary" />
        </div>

        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Pronto para começar?
        </h2>

        <p
          ref={descriptionRef}
          className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Explore nossa documentação completa e comece a construir interfaces incríveis hoje mesmo.
        </p>

        <div ref={buttonRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/docs">
            <Button size="lg" className="text-base px-8">
              Ver Documentação
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="/docs/button">
            <Button variant="outline" size="lg" className="text-base px-8">
              Explorar Componentes
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

