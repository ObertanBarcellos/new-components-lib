"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/docs/code-block"
import { Rocket, Package, Code, FileText } from "lucide-react"
import { fadeInUp, revealOnScroll } from "@/lib/gsap-animations"

export function GettingStartedSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      revealOnScroll(titleRef.current, "up")
      
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardRef.current,
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
    <section ref={sectionRef} className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
          >
            Comece Agora
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Instale e comece a usar os componentes em poucos minutos
          </p>
        </div>

        <Card ref={cardRef} className="relative overflow-hidden border-2">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 dark:from-primary/10 dark:via-background dark:to-accent/10" />
          
          <CardHeader className="relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                <Rocket className="w-5 h-5 text-primary" />
              </div>
              <CardTitle className="text-2xl">Instalação</CardTitle>
            </div>
            <CardDescription className="text-base">
              Escolha o gerenciador de pacotes de sua preferência
            </CardDescription>
          </CardHeader>
          
          <CardContent className="relative z-10 space-y-6">
            {/* Instalação */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Package className="w-4 h-4" />
                <span className="text-sm font-medium">Instalar dependências</span>
              </div>
              <Tabs defaultValue="npm" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="npm">npm</TabsTrigger>
                  <TabsTrigger value="pnpm">pnpm</TabsTrigger>
                  <TabsTrigger value="yarn">yarn</TabsTrigger>
                </TabsList>
                <TabsContent value="npm" className="mt-4">
                  <CodeBlock code="npm install vyse-ui" language="bash" />
                </TabsContent>
                <TabsContent value="pnpm" className="mt-4">
                  <CodeBlock code="pnpm add vyse-ui" language="bash" />
                </TabsContent>
                <TabsContent value="yarn" className="mt-4">
                  <CodeBlock code="yarn add vyse-ui" language="bash" />
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Importar Componentes */}
            <div className="space-y-4 pt-6 border-t border-border/50">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Code className="w-4 h-4" />
                <span className="text-sm font-medium">Importar componentes</span>
              </div>
              <CodeBlock 
                code={`import { Button, Input, Card } from 'vyse-ui'`}
                language="tsx"
              />
            </div>

            {/* Importar Estilos */}
            <div className="space-y-4 pt-6 border-t border-border/50">
              <div className="flex items-center gap-2 text-muted-foreground">
                <FileText className="w-4 h-4" />
                <span className="text-sm font-medium">Importar estilos (obrigatório)</span>
              </div>
              <CodeBlock 
                code={`import 'vyse-ui/styles'`}
                language="tsx"
              />
              <div className="rounded-lg bg-muted/50 dark:bg-muted/30 border border-border/50 p-3">
                <p className="text-sm text-muted-foreground">
                  ⚠️ <strong className="text-foreground">Importante:</strong> Não esqueça de importar os estilos CSS para que os componentes sejam exibidos corretamente!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

