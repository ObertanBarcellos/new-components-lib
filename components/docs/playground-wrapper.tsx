"use client"

import * as React from "react"
import { ComponentMetadata } from "@/lib/docs/components"
import { Playground } from "./playground"
import * as Components from "@/components/ui"
import { Heart } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"

// Importar todos os componentes dinamicamente
const componentMap: Record<string, any> = {
  Button: Components.Button,
  Input: Components.Input,
  Card: Components.Card,
  CardHeader: Components.CardHeader,
  CardTitle: Components.CardTitle,
  CardDescription: Components.CardDescription,
  CardContent: Components.CardContent,
  Badge: Components.Badge,
  Checkbox: Components.Checkbox,
  Switch: Components.Switch,
  Textarea: Components.Textarea,
  Select: Components.Select,
  SelectTrigger: Components.SelectTrigger,
  SelectValue: Components.SelectValue,
  SelectContent: Components.SelectContent,
  SelectItem: Components.SelectItem,
  Dialog: Components.Dialog,
  DialogTrigger: Components.DialogTrigger,
  DialogContent: Components.DialogContent,
  DialogHeader: Components.DialogHeader,
  DialogTitle: Components.DialogTitle,
  Tabs: Components.Tabs,
  TabsList: Components.TabsList,
  TabsTrigger: Components.TabsTrigger,
  TabsContent: Components.TabsContent,
  Progress: Components.Progress,
  Spinner: Components.Spinner,
  Skeleton: Components.Skeleton,
  Avatar: Components.Avatar,
  AvatarImage: Components.AvatarImage,
  AvatarFallback: Components.AvatarFallback,
  Tooltip: Components.Tooltip,
  TooltipTrigger: Components.TooltipTrigger,
  TooltipContent: Components.TooltipContent,
  TooltipProvider: Components.TooltipProvider,
  Popover: Components.Popover,
  PopoverTrigger: Components.PopoverTrigger,
  PopoverContent: Components.PopoverContent,
  DropdownMenu: Components.DropdownMenu,
  DropdownMenuTrigger: Components.DropdownMenuTrigger,
  DropdownMenuContent: Components.DropdownMenuContent,
  DropdownMenuItem: Components.DropdownMenuItem,
  Breadcrumb: Components.Breadcrumb,
  BreadcrumbList: Components.BreadcrumbList,
  BreadcrumbItem: Components.BreadcrumbItem,
  BreadcrumbLink: Components.BreadcrumbLink,
  Pagination: Components.Pagination,
  PaginationContent: Components.PaginationContent,
  PaginationItem: Components.PaginationItem,
  PaginationLink: Components.PaginationLink,
  Calendar: Components.Calendar,
  DatePicker: Components.DatePicker,
  Divider: Components.Divider,
  Drawer: Components.Drawer,
  DrawerTrigger: Components.DrawerTrigger,
  DrawerContent: Components.DrawerContent,
  Modal: Components.Modal,
  ModalTrigger: Components.ModalTrigger,
  ModalContent: Components.ModalContent,
}

function renderComponent(componentId: string, props: Record<string, any>, t: (key: string) => string): React.ReactNode {
  const Component = componentMap[componentId]
  if (!Component) {
    return <div>{t("common.componentNotFound")}</div>
  }

  // Renderizações específicas para componentes complexos
  if (componentId === "Button") {
    const isIconButton = props.size === "icon" || props.size === "icon-sm" || props.size === "icon-lg"
    
    // Se for botão de ícone, renderiza apenas com ícone
    if (isIconButton) {
      return <Component {...props}><Heart /></Component>
    }
    
    // Caso contrário, renderiza com texto, mas permite customização via props.children se fornecido
    return <Component {...props}>{props.children || t("common.button")}</Component>
  }
  if (componentId === "Input") {
    return <Component {...props} placeholder={t("common.typeSomething")} />
  }
  if (componentId === "Card") {
    return (
      <Component {...props}>
        <Components.CardHeader>
          <Components.CardTitle>{t("common.title")}</Components.CardTitle>
          <Components.CardDescription>{t("common.description")}</Components.CardDescription>
        </Components.CardHeader>
        <Components.CardContent>{t("common.cardContent")}</Components.CardContent>
      </Component>
    )
  }
  if (componentId === "Select") {
    return (
      <Component {...props}>
        <Components.SelectTrigger>
          <Components.SelectValue placeholder={t("common.select")} />
        </Components.SelectTrigger>
        <Components.SelectContent>
          <Components.SelectItem value="1">{t("common.option")} 1</Components.SelectItem>
          <Components.SelectItem value="2">{t("common.option")} 2</Components.SelectItem>
        </Components.SelectContent>
      </Component>
    )
  }
  if (componentId === "Dialog") {
    return (
      <Component {...props}>
        <Components.DialogTrigger>{t("common.open")}</Components.DialogTrigger>
        <Components.DialogContent>
          <Components.DialogHeader>
            <Components.DialogTitle>{t("common.title")}</Components.DialogTitle>
          </Components.DialogHeader>
          {t("common.dialogContent")}
        </Components.DialogContent>
      </Component>
    )
  }
  if (componentId === "Tabs") {
    return (
      <Component {...props} defaultValue="tab1">
        <Components.TabsList>
          <Components.TabsTrigger value="tab1">{t("common.tab")} 1</Components.TabsTrigger>
          <Components.TabsTrigger value="tab2">{t("common.tab")} 2</Components.TabsTrigger>
        </Components.TabsList>
        <Components.TabsContent value="tab1">{t("common.content")} 1</Components.TabsContent>
        <Components.TabsContent value="tab2">{t("common.content")} 2</Components.TabsContent>
      </Component>
    )
  }

  return <Component {...props} />
}

interface PlaygroundWrapperProps {
  component: ComponentMetadata
}

export function PlaygroundWrapper({ component }: PlaygroundWrapperProps) {
  const { t } = useTranslations()
  
  return (
    <Playground
      component={component}
      renderComponent={(props) => renderComponent(component.name, props, t)}
    />
  )
}

