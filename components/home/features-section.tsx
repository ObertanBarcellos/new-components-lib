"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { revealOnScroll } from "@/lib/gsap-animations"
import { Accessibility, Code, Palette, Zap, Shield, Heart } from "lucide-react"

const features = [
  {
    icon: Accessibility,
    title: "Totalmente Acessível",
    description: "Construído com Radix UI, seguindo as melhores práticas de acessibilidade WCAG.",
  },
  {
    icon: Code,
    title: "TypeScript First",
    description: "Tipagem completa e IntelliSense para uma experiência de desenvolvimento superior.",
  },
  {
    icon: Palette,
    title: "Customizável",
    description: "Fácil de personalizar com Tailwind CSS e variantes usando CVA.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Otimizado para performance com tree-shaking e bundle size reduzido.",
  },
  {
    icon: Shield,
    title: "Bem Testado",
    description: "Componentes testados e validados para garantir qualidade e confiabilidade.",
  },
  {
    icon: Heart,
    title: "Open Source",
    description: "Código aberto, mantido com cuidado e aberto para contribuições da comunidade.",
  },
]

export function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      revealOnScroll(titleRef.current, "up")
      
      // Animar cards com stagger
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
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
              trigger: cardsRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Por que escolher vyse-ui?
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Uma biblioteca de componentes moderna e completa para suas aplicações React.
        </p>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                hover
                interactive
                className="group transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

