"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CircularProgress } from "@/components/ui/circular-progress"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "@/components/ui/date-picker"
import { revealOnScroll } from "@/lib/gsap-animations"

export function ComponentsShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const [date, setDate] = useState<Date>()

  useEffect(() => {
    const ctx = gsap.context(() => {
      revealOnScroll(titleRef.current, "up")
      
      // Animar cards do grid com stagger
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
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
              trigger: gridRef.current,
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

  const components = [
    {
      name: "Button",
      component: (
        <div className="flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      ),
    },
    {
      name: "Progress",
      component: (
        <div className="space-y-4 w-full">
          <Progress value={33} />
          <Progress value={66} />
          <Progress value={100} />
          <div className="flex gap-4 justify-center">
            <CircularProgress value={25} size="lg" />
            <CircularProgress value={50} size="lg" />
            <CircularProgress value={75} size="lg" />
          </div>
        </div>
      ),
    },
    {
      name: "Dialog",
      component: (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Abrir Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog de Exemplo</DialogTitle>
              <DialogDescription>
                Este é um exemplo de dialog interativo com overlay e animações.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p className="text-sm text-muted-foreground">
                Componente complexo com portal, overlay e gestão de estado.
              </p>
            </div>
          </DialogContent>
        </Dialog>
      ),
    },
    {
      name: "Tabs",
      component: (
        <Tabs defaultValue="tab1" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="mt-4">
            <p className="text-sm">Conteúdo da primeira aba</p>
          </TabsContent>
          <TabsContent value="tab2" className="mt-4">
            <p className="text-sm">Conteúdo da segunda aba</p>
          </TabsContent>
          <TabsContent value="tab3" className="mt-4">
            <p className="text-sm">Conteúdo da terceira aba</p>
          </TabsContent>
        </Tabs>
      ),
    },
    {
      name: "Accordion",
      component: (
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Item 1</AccordionTrigger>
            <AccordionContent>
              Conteúdo expansível do primeiro item com animações suaves.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Item 2</AccordionTrigger>
            <AccordionContent>
              Conteúdo expansível do segundo item.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ),
    },
    {
      name: "Carousel",
      component: (
        <Carousel className="w-full max-w-xs mx-auto">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ),
    },
    {
      name: "Select",
      component: (
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecione uma opção" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Opção 1</SelectItem>
            <SelectItem value="option2">Opção 2</SelectItem>
            <SelectItem value="option3">Opção 3</SelectItem>
            <SelectItem value="option4">Opção 4</SelectItem>
          </SelectContent>
        </Select>
      ),
    },
    {
      name: "DatePicker",
      component: (
        <DatePicker
          date={date}
          onSelect={setDate}
          placeholder="Selecione uma data"
        />
      ),
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Componentes Incríveis
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Explore nossa coleção de componentes cuidadosamente projetados e prontos para uso.
        </p>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {components.map((item, index) => (
            <Card
              key={index}
              hover
              interactive
              className="group transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-lg">{item.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center min-h-[180px]">
                {item.component}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
