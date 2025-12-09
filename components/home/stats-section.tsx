"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Card, CardContent } from "@/components/ui/card"
import { revealOnScroll, animateCounter, parallax } from "@/lib/gsap-animations"

const stats = [
  { label: "Componentes", value: 50, suffix: "+" },
  { label: "Variantes", value: 200, suffix: "+" },
  { label: "Acessibilidade", value: 100, suffix: "%" },
  { label: "TypeScript", value: 100, suffix: "%" },
]

export function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      revealOnScroll(titleRef.current, "up")
      
      // Parallax no background
      if (backgroundRef.current) {
        parallax(backgroundRef.current, 0.3)
      }

      // Animar cards e contadores
      if (cardsRef.current) {
        const cards = Array.from(cardsRef.current.children) as HTMLElement[]
        
        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 30,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: index * 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
                onEnter: () => {
                  // Animar contador quando o card entra na viewport
                  const valueElement = card.querySelector("[data-value]") as HTMLElement
                  if (valueElement) {
                    const value = parseInt(valueElement.getAttribute("data-value") || "0")
                    if (value > 0) {
                      animateCounter(valueElement, value, 1.5)
                    }
                  }
                },
              },
            }
          )
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-20 px-4 overflow-hidden">
      {/* Background com parallax */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 dark:from-primary/20 dark:via-accent/20 dark:to-primary/20"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Números que Impressionam
        </h2>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <Card
              key={index}
              hover
              className="text-center transition-all duration-300"
            >
              <CardContent className="pt-6">
                <div className="text-5xl md:text-6xl font-bold mb-2 text-primary">
                  <span data-value={stat.value}>0</span>
                  {stat.suffix}
                </div>
                <div className="text-lg text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

