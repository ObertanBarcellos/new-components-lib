"use client"

import * as React from "react"
import { X, PanelLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import * as DialogPrimitive from "@radix-ui/react-dialog"

export interface SidebarProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  side?: "left" | "right"
  variant?: "sidebar" | "overlay"
  children: React.ReactNode
  className?: string
  trigger?: React.ReactNode
  showCloseButton?: boolean
}

const SidebarContext = React.createContext<{
  open: boolean
  setOpen: (open: boolean) => void
}>({
  open: false,
  setOpen: () => {},
})

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  (
    {
      open: controlledOpen,
      onOpenChange,
      side = "left",
      variant = "sidebar",
      children,
      className,
      trigger,
      showCloseButton = true,
      ...props
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = React.useState(false)
    const isControlled = controlledOpen !== undefined
    const open = isControlled ? controlledOpen : internalOpen

    const setOpen = React.useCallback(
      (newOpen: boolean) => {
        if (!isControlled) {
          setInternalOpen(newOpen)
        }
        onOpenChange?.(newOpen)
      },
      [isControlled, onOpenChange]
    )

    const content = (
      <div
        ref={ref}
        className={cn(
          "fixed inset-y-0 z-50 flex flex-col bg-background border-r border-border shadow-lg transition-transform duration-300 ease-in-out",
          side === "left" ? "left-0" : "right-0",
          variant === "overlay" && "w-80",
          variant === "sidebar" && "w-64",
          className
        )}
        {...props}
      >
        {showCloseButton && (
          <div className="flex items-center justify-end p-4 border-b">
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => setOpen(false)}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}
        <div className="flex-1 overflow-y-auto p-4">{children}</div>
      </div>
    )

    if (variant === "overlay") {
      return (
        <SidebarContext.Provider value={{ open, setOpen }}>
          {trigger && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(true)}
              className="lg:hidden"
            >
              <PanelLeft className="h-5 w-5" />
            </Button>
          )}
          <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
            <DialogPrimitive.Portal>
              <DialogPrimitive.Overlay className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
              <DialogPrimitive.Content
                className={cn(
                  "fixed inset-y-0 z-50 flex flex-col bg-background border-r border-border shadow-lg transition-transform duration-300 ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
                  side === "left" ? "left-0" : "right-0 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
                  "w-80"
                )}
              >
                <DialogPrimitive.Title className="sr-only">Sidebar</DialogPrimitive.Title>
                {showCloseButton && (
                  <div className="flex items-center justify-end p-4 border-b">
                    <DialogPrimitive.Close asChild>
                      <Button variant="ghost" size="icon-sm" className="h-8 w-8">
                        <X className="h-4 w-4" />
                      </Button>
                    </DialogPrimitive.Close>
                  </div>
                )}
                <div className="flex-1 overflow-y-auto p-4">{children}</div>
              </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
          </DialogPrimitive.Root>
        </SidebarContext.Provider>
      )
    }

    return (
      <SidebarContext.Provider value={{ open, setOpen }}>
        <div className="relative">
          {trigger && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(!open)}
              className="lg:hidden"
            >
              <PanelLeft className="h-5 w-5" />
            </Button>
          )}
          <aside
            className={cn(
              "flex flex-col bg-background border-r border-border shadow-lg transition-transform duration-300 ease-in-out",
              "fixed inset-y-0 z-50",
              side === "left" ? "left-0" : "right-0",
              open ? "translate-x-0" : side === "left" ? "-translate-x-full" : "translate-x-full",
              "w-64 lg:translate-x-0 lg:static lg:shadow-none",
              className
            )}
          >
            {content}
          </aside>
        </div>
      </SidebarContext.Provider>
    )
  }
)
Sidebar.displayName = "Sidebar"

const SidebarTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, ...props }, ref) => {
  const { setOpen } = React.useContext(SidebarContext)
  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      onClick={() => setOpen(true)}
      className={className}
      {...props}
    >
      <PanelLeft className="h-5 w-5" />
    </Button>
  )
})
SidebarTrigger.displayName = "SidebarTrigger"

const SidebarClose = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, ...props }, ref) => {
  const { setOpen } = React.useContext(SidebarContext)
  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon-sm"
      onClick={() => setOpen(false)}
      className={className}
      {...props}
    >
      <X className="h-4 w-4" />
    </Button>
  )
})
SidebarClose.displayName = "SidebarClose"

const SidebarContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex-1 overflow-y-auto p-4", className)} {...props} />
  )
)
SidebarContent.displayName = "SidebarContent"

const SidebarHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-4 border-b", className)} {...props} />
  )
)
SidebarHeader.displayName = "SidebarHeader"

const SidebarFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-4 border-t", className)} {...props} />
  )
)
SidebarFooter.displayName = "SidebarFooter"

export { Sidebar, SidebarTrigger, SidebarClose, SidebarContent, SidebarHeader, SidebarFooter }

