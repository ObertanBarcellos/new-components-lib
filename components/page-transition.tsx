"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { gsap } from "gsap"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [displayChildren, setDisplayChildren] = useState(children)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const previousPathnameRef = useRef<string>(pathname)
  const isFirstRender = useRef<boolean>(true)

  useEffect(() => {
    // Não anima na primeira renderização
    if (isFirstRender.current) {
      isFirstRender.current = false
      previousPathnameRef.current = pathname
      return
    }

    // Só anima se a rota realmente mudou
    if (previousPathnameRef.current === pathname) {
      return
    }

    const startTransition = () => {
      setIsTransitioning(true)
      const container = containerRef.current

      if (!container) return

      // Timeline principal - efeito de flip page 3D suave
      const tl = gsap.timeline({
        onComplete: () => {
          setIsTransitioning(false)
          // Garantir que tudo volte ao normal
          gsap.set(container, {
            rotationY: 0,
            rotationX: 0,
            z: 0,
            scale: 1,
            opacity: 1,
            filter: "blur(0px) brightness(1)",
            transformPerspective: 1000,
            transformOrigin: "center center",
          })
        },
      })

      // Fase 1: Página atual faz flip suave para fora (0-350ms)
      tl.to(container, {
        rotationY: -85,
        scale: 0.9,
        opacity: 0,
        z: -150,
        filter: "blur(8px) brightness(0.8)",
        transformPerspective: 1500,
        transformOrigin: "left center",
        duration: 0.35,
        ease: "power2.in",
      })

      // Mudar conteúdo no meio do flip (quando está quase de lado)
      tl.call(() => {
        setDisplayChildren(children)
        previousPathnameRef.current = pathname
      }, undefined, "-=0.05")

      // Fase 2: Nova página entra com flip suave (350-750ms)
      tl.fromTo(
        container,
        {
          rotationY: 85,
          scale: 0.9,
          opacity: 0,
          z: -150,
          filter: "blur(8px) brightness(0.8)",
          transformOrigin: "right center",
        },
        {
          rotationY: 0,
          scale: 1,
          opacity: 1,
          z: 0,
          filter: "blur(0px) brightness(1)",
          transformOrigin: "center center",
          duration: 0.4,
          ease: "power3.out",
        },
        "-=0.25"
      )
    }

    startTransition()
  }, [pathname, children])

  return (
    <div
      className="relative w-full h-full"
      style={{
        perspective: "1200px",
        perspectiveOrigin: "50% 50%",
        overflowX: "hidden",
      }}
    >
      <div
        ref={containerRef}
        className={`page-transition-container w-full h-full ${isTransitioning ? "overflow-hidden" : ""}`}
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          transformOrigin: "center center",
          overflowX: "hidden",
        }}
      >
        {displayChildren}
      </div>
    </div>
  )
}
