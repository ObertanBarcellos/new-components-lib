"use client"

import * as React from "react"
import { useEffect, useRef } from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { gsap } from "gsap"
import { animateOverlay, animateModal } from "@/lib/gsap-animations"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

export interface DialogOverlayProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> {
  customOverlayColor?: string
}

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  DialogOverlayProps
>(({ className, customOverlayColor, ...props }, ref) => {
  const overlayRef = useRef<HTMLDivElement>(null)
  const internalRef = React.useRef<HTMLDivElement>(null)
  const combinedRef = (ref || overlayRef) as React.RefObject<HTMLDivElement>

  const colorStyles = React.useMemo(() => {
    const styles: React.CSSProperties = {}
    if (customOverlayColor) {
      styles.backgroundColor = customOverlayColor
    }
    return styles
  }, [customOverlayColor])

  useEffect(() => {
    const element = combinedRef.current
    if (!element) return

    const observer = new MutationObserver(() => {
      const isOpen = element.getAttribute("data-state") === "open"
      animateOverlay(element, isOpen)
    })

    observer.observe(element, {
      attributes: true,
      attributeFilter: ["data-state"],
    })

    // Animar estado inicial
    const isOpen = element.getAttribute("data-state") === "open"
    if (isOpen) {
      gsap.set(element, { opacity: 0 })
      animateOverlay(element, true)
    }

    return () => observer.disconnect()
  }, [combinedRef])

  return (
    <DialogPrimitive.Overlay
      ref={combinedRef}
      style={colorStyles}
      className={cn(
        "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm",
        className
      )}
      {...props}
    />
  )
})
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

export interface DialogContentProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  customBorderColor?: string
  customBgColor?: string
  customOverlayColor?: string
}

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(({ className, children, customBorderColor, customBgColor, customOverlayColor, ...props }, ref) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const internalRef = React.useRef<HTMLDivElement>(null)
  const combinedRef = (ref || contentRef) as React.RefObject<HTMLDivElement>

  const colorStyles = React.useMemo(() => {
    const styles: React.CSSProperties = {}
    if (customBorderColor) {
      styles.borderColor = customBorderColor
    }
    if (customBgColor) {
      styles.backgroundColor = customBgColor
    }
    return styles
  }, [customBorderColor, customBgColor])

  useEffect(() => {
    const element = combinedRef.current
    if (!element) return

    const observer = new MutationObserver(() => {
      const isOpen = element.getAttribute("data-state") === "open"
      animateModal(element, isOpen)
    })

    observer.observe(element, {
      attributes: true,
      attributeFilter: ["data-state"],
    })

    // Animar estado inicial
    const isOpen = element.getAttribute("data-state") === "open"
    if (isOpen) {
      gsap.set(element, { opacity: 0, scale: 0.95 })
      animateModal(element, true)
    }

    return () => observer.disconnect()
  }, [combinedRef])

  return (
    <DialogPortal>
      <DialogOverlay customOverlayColor={customOverlayColor} />
      <DialogPrimitive.Content
        ref={combinedRef}
        style={colorStyles}
        className={cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-xl sm:rounded-lg",
          className
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-all duration-200 hover:opacity-100 hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  )
})
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
