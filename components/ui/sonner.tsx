"use client"

import * as React from "react"
import {
  CircleCheck,
  Info,
  LoaderCircle,
  OctagonX,
  TriangleAlert,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

export interface ToasterProps extends React.ComponentProps<typeof Sonner> {
  customColor?: string
  customBorderColor?: string
}

const Toaster = ({ customColor, customBorderColor, ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  const toastClassNames = React.useMemo(() => {
    const baseToast = "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg"
    const customToast = customColor || customBorderColor
      ? `${baseToast} ${customColor ? `group-[.toaster]:bg-[${customColor}]` : ''} ${customBorderColor ? `group-[.toaster]:border-[${customBorderColor}]` : ''}`
      : baseToast

    return {
      toast: customToast,
      description: "group-[.toast]:text-muted-foreground",
      actionButton: customColor
        ? `group-[.toast]:bg-[${customColor}] group-[.toast]:text-white`
        : "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
      cancelButton:
        "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
    }
  }, [customColor, customBorderColor])

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CircleCheck className="h-4 w-4" />,
        info: <Info className="h-4 w-4" />,
        warning: <TriangleAlert className="h-4 w-4" />,
        error: <OctagonX className="h-4 w-4" />,
        loading: <LoaderCircle className="h-4 w-4 animate-spin" />,
      }}
      toastOptions={{
        classNames: toastClassNames,
      }}
      {...props}
    />
  )
}

export { Toaster }
