"use client"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Registrar o plugin ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Configuração padrão do ScrollTrigger
export const scrollTriggerDefaults = {
  start: "top 80%",
  end: "bottom 20%",
  toggleActions: "play none none reverse",
}

// Animação de fade-in com slide-up
export const fadeInUp = (element: gsap.TweenTarget, delay = 0) => {
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 60,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay,
      ease: "power3.out",
    }
  )
}

// Animação de fade-in simples
export const fadeIn = (element: gsap.TweenTarget, delay = 0) => {
  return gsap.fromTo(
    element,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.8,
      delay,
      ease: "power2.out",
    }
  )
}

// Animação de scale com fade
export const scaleIn = (element: gsap.TweenTarget, delay = 0) => {
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      scale: 0.8,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      delay,
      ease: "back.out(1.7)",
    }
  )
}

// Animação stagger para lista de elementos
export const staggerFadeInUp = (
  elements: gsap.TweenTarget,
  staggerDelay = 0.1
) => {
  return gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: staggerDelay,
      ease: "power3.out",
    }
  )
}

// Reveal animation com ScrollTrigger
export const revealOnScroll = (
  element: gsap.TweenTarget,
  direction: "up" | "down" | "left" | "right" = "up"
) => {
  const directions = {
    up: { y: 60 },
    down: { y: -60 },
    left: { x: 60 },
    right: { x: -60 },
  }

  return gsap.fromTo(
    element,
    {
      opacity: 0,
      ...directions[direction],
    },
    {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element as Element,
        ...scrollTriggerDefaults,
      },
    }
  )
}

// Parallax effect
export const parallax = (
  element: gsap.TweenTarget,
  speed: number = 0.5
) => {
  return gsap.to(element, {
    yPercent: -50 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element as Element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  })
}

// Counter animation
export const animateCounter = (
  element: HTMLElement,
  targetValue: number,
  duration: number = 2
) => {
  const obj = { value: 0 }
  return gsap.to(obj, {
    value: targetValue,
    duration,
    ease: "power2.out",
    onUpdate: () => {
      if (element) {
        element.textContent = Math.floor(obj.value).toString()
      }
    },
  })
}

// Hover scale animation
export const hoverScale = (element: gsap.TweenTarget) => {
  return gsap.to(element, {
    scale: 1.05,
    duration: 0.3,
    ease: "power2.out",
    paused: true,
  })
}

// Animação de overlay (fade in/out)
export const animateOverlay = (element: gsap.TweenTarget, isOpen: boolean) => {
  if (isOpen) {
    return gsap.fromTo(
      element,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
      }
    )
  } else {
    return gsap.to(element, {
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
    })
  }
}

// Animação de modal/dialog (fade + zoom + slide)
export const animateModal = (
  element: gsap.TweenTarget,
  isOpen: boolean,
  side?: "top" | "bottom" | "left" | "right"
) => {
  const slideDirections = {
    top: { y: -20, x: 0 },
    bottom: { y: 20, x: 0 },
    left: { x: -20, y: 0 },
    right: { x: 20, y: 0 },
  }

  const slide = side ? slideDirections[side] : { x: 0, y: 0 }

  if (isOpen) {
    return gsap.fromTo(
      element,
      {
        opacity: 0,
        scale: 0.95,
        ...slide,
      },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "power3.out",
      }
    )
  } else {
    return gsap.to(element, {
      opacity: 0,
      scale: 0.95,
      ...slide,
      duration: 0.2,
      ease: "power2.in",
    })
  }
}

// Animação de popover/dropdown/tooltip (fade + zoom + slide direcional)
export const animatePopover = (
  element: gsap.TweenTarget,
  isOpen: boolean,
  side: "top" | "bottom" | "left" | "right" = "bottom"
) => {
  const slideDirections = {
    top: { y: -8, x: 0 },
    bottom: { y: 8, x: 0 },
    left: { x: -8, y: 0 },
    right: { x: 8, y: 0 },
  }

  const slide = slideDirections[side]

  if (isOpen) {
    return gsap.fromTo(
      element,
      {
        opacity: 0,
        scale: 0.95,
        ...slide,
      },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        duration: 0.2,
        ease: "power2.out",
      }
    )
  } else {
    return gsap.to(element, {
      opacity: 0,
      scale: 0.95,
      ...slide,
      duration: 0.15,
      ease: "power2.in",
    })
  }
}

// Animação de accordion (height expand/collapse)
export const animateAccordion = (
  element: gsap.TweenTarget,
  isOpen: boolean
) => {
  if (isOpen) {
    gsap.set(element, { height: "auto" })
    const height = (element as HTMLElement).offsetHeight
    gsap.set(element, { height: 0 })
    return gsap.to(element, {
      height: height,
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    })
  } else {
    return gsap.to(element, {
      height: 0,
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
    })
  }
}

// Animação de sidebar (slide in/out)
export const animateSidebar = (
  element: gsap.TweenTarget,
  isOpen: boolean,
  side: "left" | "right" = "left"
) => {
  const direction = side === "left" ? -1 : 1

  if (isOpen) {
    return gsap.fromTo(
      element,
      {
        x: direction * (element as HTMLElement).offsetWidth,
      },
      {
        x: 0,
        duration: 0.3,
        ease: "power3.out",
      }
    )
  } else {
    return gsap.to(element, {
      x: direction * (element as HTMLElement).offsetWidth,
      duration: 0.25,
      ease: "power2.in",
    })
  }
}

// Animação de check/indicator (zoom in)
export const animateCheck = (element: gsap.TweenTarget, isVisible: boolean) => {
  if (isVisible) {
    return gsap.fromTo(
      element,
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.2,
        ease: "back.out(1.7)",
      }
    )
  } else {
    return gsap.to(element, {
      opacity: 0,
      scale: 0.8,
      duration: 0.15,
      ease: "power2.in",
    })
  }
}

