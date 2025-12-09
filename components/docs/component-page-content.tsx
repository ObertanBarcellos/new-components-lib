"use client"

import * as React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { CodeBlock } from "@/components/docs/code-block"
import { PropsTable } from "@/components/docs/props-table"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PlaygroundWrapper } from "@/components/docs/playground-wrapper"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Badge } from "@/components/ui/badge"
import { useTranslations } from "@/hooks/use-translations"
import type { ComponentMetadata } from "@/lib/docs/components"
import { fadeIn, fadeInUp, revealOnScroll, staggerFadeInUp } from "@/lib/gsap-animations"
import * as Components from "@/components/ui"
import { Heart, Loader2, Slash } from "lucide-react"
import * as LucideIcons from "lucide-react"

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
  DropdownMenuCheckboxItem: Components.DropdownMenuCheckboxItem,
  DropdownMenuRadioItem: Components.DropdownMenuRadioItem,
  DropdownMenuLabel: Components.DropdownMenuLabel,
  DropdownMenuSeparator: Components.DropdownMenuSeparator,
  DropdownMenuShortcut: Components.DropdownMenuShortcut,
  DropdownMenuSub: Components.DropdownMenuSub,
  DropdownMenuSubTrigger: Components.DropdownMenuSubTrigger,
  DropdownMenuSubContent: Components.DropdownMenuSubContent,
  DropdownMenuGroup: Components.DropdownMenuGroup,
  DropdownMenuRadioGroup: Components.DropdownMenuRadioGroup,
  Breadcrumb: Components.Breadcrumb,
  BreadcrumbList: Components.BreadcrumbList,
  BreadcrumbItem: Components.BreadcrumbItem,
  BreadcrumbLink: Components.BreadcrumbLink,
  BreadcrumbPage: Components.BreadcrumbPage,
  BreadcrumbSeparator: Components.BreadcrumbSeparator,
  BreadcrumbEllipsis: Components.BreadcrumbEllipsis,
  Pagination: Components.Pagination,
  PaginationContent: Components.PaginationContent,
  PaginationItem: Components.PaginationItem,
  PaginationLink: Components.PaginationLink,
  PaginationPrevious: Components.PaginationPrevious,
  PaginationNext: Components.PaginationNext,
  PaginationEllipsis: Components.PaginationEllipsis,
  Calendar: Components.Calendar,
  DatePicker: Components.DatePicker,
  Divider: Components.Divider,
  Drawer: Components.Drawer,
  DrawerTrigger: Components.DrawerTrigger,
  DrawerContent: Components.DrawerContent,
  DrawerHeader: Components.DrawerHeader,
  DrawerFooter: Components.DrawerFooter,
  DrawerTitle: Components.DrawerTitle,
  DrawerDescription: Components.DrawerDescription,
  DrawerClose: Components.DrawerClose,
  Modal: Components.Modal,
  ModalTrigger: Components.ModalTrigger,
  ModalContent: Components.ModalContent,
  ModalHeader: Components.ModalHeader,
  ModalFooter: Components.ModalFooter,
  ModalTitle: Components.ModalTitle,
  ModalDescription: Components.ModalDescription,
  ModalClose: Components.ModalClose,
  ColorPicker: Components.ColorPicker,
  FormField: Components.FormField,
  Rating: Components.Rating,
  Accordion: Components.Accordion,
  AccordionItem: Components.AccordionItem,
  AccordionTrigger: Components.AccordionTrigger,
  AccordionContent: Components.AccordionContent,
  FileUpload: Components.FileUpload,
  Sidebar: Components.Sidebar,
  SidebarTrigger: Components.SidebarTrigger,
  SidebarClose: Components.SidebarClose,
  SidebarContent: Components.SidebarContent,
  SidebarHeader: Components.SidebarHeader,
  SidebarFooter: Components.SidebarFooter,
  Carousel: Components.Carousel,
  CarouselContent: Components.CarouselContent,
  CarouselItem: Components.CarouselItem,
  CarouselPrevious: Components.CarouselPrevious,
  CarouselNext: Components.CarouselNext,
  CarouselDots: Components.CarouselDots,
  CommandPalette: Components.CommandPalette,
  RichTextEditor: Components.RichTextEditor,
}

// Função para mapear locale para language do Pagination
function mapLocaleToPaginationLanguage(locale: string): "en" | "pt" | "es" | "fr" | "de" | "it" {
  const localeMap: Record<string, "en" | "pt" | "es" | "fr" | "de" | "it"> = {
    "pt-BR": "pt",
    "es": "es",
    "en": "en",
  }
  return localeMap[locale] || "en"
}

// Função para converter nome do componente para ID do componentMap
function getComponentId(componentName: string): string {
  // Remove espaços e converte para formato do componentMap
  const nameMap: Record<string, string> = {
    "Dropdown Menu": "DropdownMenu",
    "Breadcrumb": "Breadcrumb",
    "Pagination": "Pagination",
    "Popover": "Popover",
    "Tabs": "Tabs",
    "Button": "Button",
    "Input": "Input",
    "Card": "Card",
    "Select": "Select",
    "Dialog": "Dialog",
    "Tooltip": "Tooltip",
    "Divider": "Divider",
    "Badge": "Badge",
    "Skeleton": "Skeleton",
    "Progress": "Progress",
    "Drawer": "Drawer",
    "Modal": "Modal",
    "Calendar": "Calendar",
    "Date Picker": "DatePicker",
    "Avatar": "Avatar",
    "ColorPicker": "ColorPicker",
    "FormField": "FormField",
    "Rating": "Rating",
    "Accordion": "Accordion",
    "File Upload": "FileUpload",
    "FileUpload": "FileUpload",
    "Sidebar": "Sidebar",
    "Carousel": "Carousel",
    "Command Palette": "CommandPalette",
    "CommandPalette": "CommandPalette",
    "Rich Text Editor": "RichTextEditor",
    "RichTextEditor": "RichTextEditor",
  }
  return nameMap[componentName] || componentName.replace(/\s+/g, "")
}

function renderComponent(componentId: string, props: Record<string, any>, t: (key: string) => string, customChildren?: React.ReactNode, locale?: string): React.ReactNode {
  // Se componentId tiver espaço, converte para formato correto
  const normalizedId = componentId.includes(" ") ? getComponentId(componentId) : componentId
  const Component = componentMap[normalizedId]
  if (!Component) {
    return <div>{t("common.componentNotFound")}</div>
  }
  
  // Usa normalizedId para as verificações
  const checkId = normalizedId

  // Renderizações específicas para componentes complexos
  if (checkId === "Button") {
    const isIconButton = props.size === "icon" || props.size === "icon-sm" || props.size === "icon-lg"
    
    // Se for botão de ícone, renderiza apenas com ícone
    if (isIconButton) {
      return <Component {...props}><Heart /></Component>
    }
    
    // Aplica todas as props e renderiza com texto apropriado
    // Se tiver children customizado (passado como parâmetro), usa ele
    // Senão, se tiver children nas props, usa ele
    // Caso contrário, usa tradução de "Botão"
    const children = customChildren !== undefined ? customChildren : (props.children || t("common.button"))
    return <Component {...props}>{children}</Component>
  }
  if (checkId === "Input") {
    // Suporta ícones do lucide-react através de strings
    let processedProps = { ...props }
    
    // Se startIcon ou endIcon são strings (nomes de ícones), converte para componentes
    if (typeof props.startIcon === "string") {
      const StartIconComponent = (LucideIcons as any)[props.startIcon]
      if (StartIconComponent) {
        processedProps.startIcon = <StartIconComponent className="h-4 w-4" />
      } else {
        // Se o ícone não for encontrado, remove a prop
        delete processedProps.startIcon
      }
    }
    
    if (typeof props.endIcon === "string") {
      const EndIconComponent = (LucideIcons as any)[props.endIcon]
      if (EndIconComponent) {
        processedProps.endIcon = <EndIconComponent className="h-4 w-4" />
      } else {
        // Se o ícone não for encontrado, remove a prop
        delete processedProps.endIcon
      }
    }
    
    // Se não tiver placeholder definido, usa o padrão traduzido
    if (!processedProps.placeholder) {
      processedProps.placeholder = t("common.typeSomething")
    }
    
    return <Component {...processedProps} />
  }
  if (checkId === "Card") {
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
  if (checkId === "Select") {
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
  if (checkId === "Dialog") {
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
  if (checkId === "Popover") {
    const customColor = props.customColor
    const customBorderColor = props.customBorderColor
    const variant = props.variant
    
    // Renderização com cor personalizada
    if (customColor || customBorderColor) {
      return (
        <Component {...props}>
          <Components.PopoverTrigger asChild>
            <Components.Button variant="outline">Abrir</Components.Button>
          </Components.PopoverTrigger>
          <Components.PopoverContent customColor={customColor} customBorderColor={customBorderColor}>
            <div className="space-y-2">
              <h4 className="font-medium leading-none text-white">Título</h4>
              <p className="text-sm text-white/80">
                Conteúdo com cor personalizada.
              </p>
            </div>
          </Components.PopoverContent>
        </Component>
      )
    }
    
    // Renderização com conteúdo elaborado
    if (variant === "elaborated") {
      return (
        <Component {...props}>
          <Components.PopoverTrigger asChild>
            <Components.Button variant="outline">Abrir Popover</Components.Button>
          </Components.PopoverTrigger>
          <Components.PopoverContent className="w-80">
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Configurações</h4>
                <p className="text-sm text-muted-foreground">
                  Gerencie suas preferências aqui.
                </p>
              </div>
              <div className="space-y-2">
                <Components.Button className="w-full">Salvar</Components.Button>
                <Components.Button variant="outline" className="w-full">Cancelar</Components.Button>
              </div>
            </div>
          </Components.PopoverContent>
        </Component>
      )
    }
    
    // Renderização básica (padrão)
    return (
      <Component {...props}>
        <Components.PopoverTrigger>Abrir</Components.PopoverTrigger>
        <Components.PopoverContent>
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Título</h4>
            <p className="text-sm text-muted-foreground">
              Conteúdo do popover aqui.
            </p>
          </div>
        </Components.PopoverContent>
      </Component>
    )
  }
  if (checkId === "DropdownMenu") {
    const customColor = props.customColor
    const customBorderColor = props.customBorderColor
    const variant = props.variant
    const align = props.align
    const side = props.side
    const sideOffset = props.sideOffset
    
    // Props para o DropdownMenuContent
    const contentProps: Record<string, any> = {}
    if (customColor) contentProps.customColor = customColor
    if (customBorderColor) contentProps.customBorderColor = customBorderColor
    if (align) contentProps.align = align
    if (side) contentProps.side = side
    if (sideOffset !== undefined) contentProps.sideOffset = sideOffset
    
    // Renderização com cor personalizada
    if (customColor || customBorderColor) {
      return (
        <Component {...props}>
          <Components.DropdownMenuTrigger asChild>
            <Components.Button variant="outline">Abrir Menu</Components.Button>
          </Components.DropdownMenuTrigger>
          <Components.DropdownMenuContent {...contentProps}>
            <Components.DropdownMenuItem customColor={customColor}>Perfil</Components.DropdownMenuItem>
            <Components.DropdownMenuItem customColor={customColor}>Configurações</Components.DropdownMenuItem>
            <Components.DropdownMenuItem customColor={customColor}>Sair</Components.DropdownMenuItem>
          </Components.DropdownMenuContent>
        </Component>
      )
    }
    
    // Renderização com separadores e labels
    if (variant === "withSeparators") {
      return (
        <Component {...props}>
          <Components.DropdownMenuTrigger asChild>
            <Components.Button variant="outline">Abrir Menu</Components.Button>
          </Components.DropdownMenuTrigger>
          <Components.DropdownMenuContent {...contentProps}>
            <Components.DropdownMenuLabel>Minha Conta</Components.DropdownMenuLabel>
            <Components.DropdownMenuSeparator />
            <Components.DropdownMenuItem>Perfil</Components.DropdownMenuItem>
            <Components.DropdownMenuItem>Configurações</Components.DropdownMenuItem>
            <Components.DropdownMenuSeparator />
            <Components.DropdownMenuItem>Sair</Components.DropdownMenuItem>
          </Components.DropdownMenuContent>
        </Component>
      )
    }
    
    // Renderização com shortcuts
    if (variant === "withShortcuts") {
      return (
        <Component {...props}>
          <Components.DropdownMenuTrigger asChild>
            <Components.Button variant="outline">Ações</Components.Button>
          </Components.DropdownMenuTrigger>
          <Components.DropdownMenuContent {...contentProps}>
            <Components.DropdownMenuItem>
              Copiar
              <Components.DropdownMenuShortcut>⌘C</Components.DropdownMenuShortcut>
            </Components.DropdownMenuItem>
            <Components.DropdownMenuItem>
              Colar
              <Components.DropdownMenuShortcut>⌘V</Components.DropdownMenuShortcut>
            </Components.DropdownMenuItem>
            <Components.DropdownMenuItem>
              Recortar
              <Components.DropdownMenuShortcut>⌘X</Components.DropdownMenuShortcut>
            </Components.DropdownMenuItem>
          </Components.DropdownMenuContent>
        </Component>
      )
    }
    
    // Renderização com checkbox items
    if (variant === "withCheckboxes") {
      return (
        <Component {...props}>
          <Components.DropdownMenuTrigger asChild>
            <Components.Button variant="outline">Visualização</Components.Button>
          </Components.DropdownMenuTrigger>
          <Components.DropdownMenuContent {...contentProps}>
            <Components.DropdownMenuLabel>Exibir</Components.DropdownMenuLabel>
            <Components.DropdownMenuSeparator />
            <Components.DropdownMenuCheckboxItem checked>
              Mostrar barra de status
            </Components.DropdownMenuCheckboxItem>
            <Components.DropdownMenuCheckboxItem>
              Mostrar linha de atividade
            </Components.DropdownMenuCheckboxItem>
            <Components.DropdownMenuCheckboxItem checked>
              Mostrar painel lateral
            </Components.DropdownMenuCheckboxItem>
          </Components.DropdownMenuContent>
        </Component>
      )
    }
    
    // Renderização com submenu
    if (variant === "withSubmenu") {
      return (
        <Component {...props}>
          <Components.DropdownMenuTrigger asChild>
            <Components.Button variant="outline">Mais opções</Components.Button>
          </Components.DropdownMenuTrigger>
          <Components.DropdownMenuContent {...contentProps}>
            <Components.DropdownMenuItem>Novo arquivo</Components.DropdownMenuItem>
            <Components.DropdownMenuItem>Novo projeto</Components.DropdownMenuItem>
            <Components.DropdownMenuSeparator />
            <Components.DropdownMenuSub>
              <Components.DropdownMenuSubTrigger>Compartilhar</Components.DropdownMenuSubTrigger>
              <Components.DropdownMenuSubContent>
                <Components.DropdownMenuItem>Email</Components.DropdownMenuItem>
                <Components.DropdownMenuItem>Mensagem</Components.DropdownMenuItem>
                <Components.DropdownMenuItem>Link</Components.DropdownMenuItem>
              </Components.DropdownMenuSubContent>
            </Components.DropdownMenuSub>
          </Components.DropdownMenuContent>
        </Component>
      )
    }
    
    // Renderização básica (padrão)
    return (
      <Component {...props}>
        <Components.DropdownMenuTrigger asChild>
          <Components.Button variant="outline">Abrir Menu</Components.Button>
        </Components.DropdownMenuTrigger>
        <Components.DropdownMenuContent {...contentProps}>
          <Components.DropdownMenuItem>Perfil</Components.DropdownMenuItem>
          <Components.DropdownMenuItem>Configurações</Components.DropdownMenuItem>
          <Components.DropdownMenuItem>Sair</Components.DropdownMenuItem>
        </Components.DropdownMenuContent>
      </Component>
    )
  }
  if (checkId === "Drawer") {
    const customColor = props.customColor
    const customBorderColor = props.customBorderColor
    const variant = props.variant
    const shouldScaleBackground = props.shouldScaleBackground !== undefined ? props.shouldScaleBackground : true
    
    // Renderização com cor personalizada
    if (customColor || customBorderColor) {
      return (
        <Component {...props} shouldScaleBackground={shouldScaleBackground}>
          <Components.DrawerTrigger asChild>
            <Components.Button variant="outline">Abrir Drawer</Components.Button>
          </Components.DrawerTrigger>
          <Components.DrawerContent customColor={customColor} customBorderColor={customBorderColor}>
            <Components.DrawerHeader>
              <Components.DrawerTitle className="text-white">Título</Components.DrawerTitle>
              <Components.DrawerDescription className="text-white/80">
                Conteúdo com cor personalizada.
              </Components.DrawerDescription>
            </Components.DrawerHeader>
            <Components.DrawerFooter>
              <Components.Button className="bg-white text-[#2c09b9] hover:bg-white/90">Confirmar</Components.Button>
              <Components.Button variant="outline" className="border-white text-white hover:bg-white/10">Cancelar</Components.Button>
            </Components.DrawerFooter>
          </Components.DrawerContent>
        </Component>
      )
    }
    
    // Renderização com conteúdo elaborado
    if (variant === "elaborated") {
      return (
        <Component {...props} shouldScaleBackground={shouldScaleBackground}>
          <Components.DrawerTrigger asChild>
            <Components.Button variant="outline">Abrir Drawer</Components.Button>
          </Components.DrawerTrigger>
          <Components.DrawerContent>
            <Components.DrawerHeader>
              <Components.DrawerTitle>Configurações</Components.DrawerTitle>
              <Components.DrawerDescription>
                Gerencie suas preferências aqui.
              </Components.DrawerDescription>
            </Components.DrawerHeader>
            <div className="p-4 space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Nome</label>
                <Components.Input placeholder="Digite seu nome" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Components.Input type="email" placeholder="Digite seu email" />
              </div>
            </div>
            <Components.DrawerFooter>
              <Components.Button>Salvar</Components.Button>
              <Components.Button variant="outline">Cancelar</Components.Button>
            </Components.DrawerFooter>
          </Components.DrawerContent>
        </Component>
      )
    }
    
    // Renderização básica (padrão)
    return (
      <Component {...props} shouldScaleBackground={shouldScaleBackground}>
        <Components.DrawerTrigger asChild>
          <Components.Button variant="outline">Abrir Drawer</Components.Button>
        </Components.DrawerTrigger>
        <Components.DrawerContent>
          <Components.DrawerHeader>
            <Components.DrawerTitle>Você tem certeza?</Components.DrawerTitle>
            <Components.DrawerDescription>
              Esta ação não pode ser desfeita.
            </Components.DrawerDescription>
          </Components.DrawerHeader>
          <Components.DrawerFooter>
            <Components.Button>Confirmar</Components.Button>
            <Components.Button variant="outline">Cancelar</Components.Button>
          </Components.DrawerFooter>
        </Components.DrawerContent>
      </Component>
    )
  }
  if (checkId === "Modal") {
    const customBgColor = props.customBgColor
    const customBorderColor = props.customBorderColor
    const customOverlayColor = props.customOverlayColor
    const variant = props.variant
    
    // Renderização com cor personalizada
    if (customBgColor || customBorderColor || customOverlayColor) {
      return (
        <Component {...props}>
          <Components.ModalTrigger asChild>
            <Components.Button variant="outline">Abrir Modal</Components.Button>
          </Components.ModalTrigger>
          <Components.ModalContent customBgColor={customBgColor} customBorderColor={customBorderColor} customOverlayColor={customOverlayColor}>
            <Components.ModalHeader>
              <Components.ModalTitle className="text-white">Título</Components.ModalTitle>
              <Components.ModalDescription className="text-white/80">
                Conteúdo com cor personalizada.
              </Components.ModalDescription>
            </Components.ModalHeader>
            <Components.ModalFooter>
              <Components.Button className="bg-white text-[#2c09b9] hover:bg-white/90">Confirmar</Components.Button>
              <Components.Button variant="outline" className="border-white text-white hover:bg-white/10">Cancelar</Components.Button>
            </Components.ModalFooter>
          </Components.ModalContent>
        </Component>
      )
    }
    
    // Renderização com conteúdo elaborado
    if (variant === "elaborated") {
      return (
        <Component {...props}>
          <Components.ModalTrigger asChild>
            <Components.Button variant="outline">Abrir Modal</Components.Button>
          </Components.ModalTrigger>
          <Components.ModalContent>
            <Components.ModalHeader>
              <Components.ModalTitle>Editar Perfil</Components.ModalTitle>
              <Components.ModalDescription>
                Faça alterações no seu perfil aqui. Clique em salvar quando terminar.
              </Components.ModalDescription>
            </Components.ModalHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Nome</label>
                <Components.Input placeholder="Digite seu nome" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Components.Input type="email" placeholder="Digite seu email" />
              </div>
            </div>
            <Components.ModalFooter>
              <Components.Button>Salvar alterações</Components.Button>
              <Components.Button variant="outline">Cancelar</Components.Button>
            </Components.ModalFooter>
          </Components.ModalContent>
        </Component>
      )
    }
    
    // Renderização básica (padrão)
    return (
      <Component {...props}>
        <Components.ModalTrigger asChild>
          <Components.Button variant="outline">Abrir Modal</Components.Button>
        </Components.ModalTrigger>
        <Components.ModalContent>
          <Components.ModalHeader>
            <Components.ModalTitle>Você tem certeza?</Components.ModalTitle>
            <Components.ModalDescription>
              Esta ação não pode ser desfeita. Isso irá excluir permanentemente sua conta.
            </Components.ModalDescription>
          </Components.ModalHeader>
          <Components.ModalFooter>
            <Components.Button variant="destructive">Excluir</Components.Button>
            <Components.Button variant="outline">Cancelar</Components.Button>
          </Components.ModalFooter>
        </Components.ModalContent>
      </Component>
    )
  }
  if (checkId === "Avatar") {
    const customRingColor = props.customRingColor
    const variant = props.variant
    
    // Renderização com tamanhos diferentes
    if (variant === "sizes") {
      return (
        <div className="flex items-center gap-4">
          <Component className="h-8 w-8">
            <Components.AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <Components.AvatarFallback className="text-xs">SM</Components.AvatarFallback>
          </Component>
          <Component>
            <Components.AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <Components.AvatarFallback>MD</Components.AvatarFallback>
          </Component>
          <Component className="h-16 w-16">
            <Components.AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <Components.AvatarFallback className="text-lg">LG</Components.AvatarFallback>
          </Component>
        </div>
      )
    }
    
    // Renderização com múltiplos avatares
    if (variant === "multiple") {
      return (
        <div className="flex -space-x-2">
          <Component>
            <Components.AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <Components.AvatarFallback>CN</Components.AvatarFallback>
          </Component>
          <Component>
            <Components.AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
            <Components.AvatarFallback>VC</Components.AvatarFallback>
          </Component>
          <Component>
            <Components.AvatarFallback>+3</Components.AvatarFallback>
          </Component>
        </div>
      )
    }
    
    // Renderização com cor personalizada no ring
    if (customRingColor) {
      return (
        <Component customRingColor={customRingColor}>
          <Components.AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <Components.AvatarFallback>CN</Components.AvatarFallback>
        </Component>
      )
    }
    
    // Renderização padrão
    return (
      <Component {...props}>
        <Components.AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <Components.AvatarFallback>CN</Components.AvatarFallback>
      </Component>
    )
  }
  if (checkId === "Tabs") {
    const defaultValue = props.defaultValue || "tab1"
    // Se for o exemplo básico, usa conteúdo simples com skeletons
    if (defaultValue === "tab1") {
      return (
        <Component {...props} defaultValue={defaultValue}>
          <Components.TabsList>
            <Components.TabsTrigger value="tab1">Aba 1</Components.TabsTrigger>
            <Components.TabsTrigger value="tab2">Aba 2</Components.TabsTrigger>
          </Components.TabsList>
          <Components.TabsContent value="tab1">
            <div className="space-y-2">
              <Components.Skeleton className="h-4 w-full" />
              <Components.Skeleton className="h-4 w-3/4" />
              <Components.Skeleton className="h-4 w-1/2" />
            </div>
          </Components.TabsContent>
          <Components.TabsContent value="tab2">
            <div className="space-y-2">
              <Components.Skeleton className="h-4 w-full" />
              <Components.Skeleton className="h-4 w-5/6" />
            </div>
          </Components.TabsContent>
        </Component>
      )
    }
    // Se for o exemplo com múltiplas abas, usa conteúdo mais elaborado
    if (defaultValue === "perfil") {
      return (
        <Component {...props} defaultValue={defaultValue}>
          <Components.TabsList>
            <Components.TabsTrigger value="perfil">Perfil</Components.TabsTrigger>
            <Components.TabsTrigger value="configuracoes">Configurações</Components.TabsTrigger>
            <Components.TabsTrigger value="historico">Histórico</Components.TabsTrigger>
          </Components.TabsList>
          <Components.TabsContent value="perfil">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Components.Skeleton className="h-16 w-16 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Components.Skeleton className="h-4 w-3/4" />
                  <Components.Skeleton className="h-4 w-1/2" />
                </div>
              </div>
              <Components.Skeleton className="h-20 w-full rounded-lg" />
            </div>
          </Components.TabsContent>
          <Components.TabsContent value="configuracoes">
            <div className="space-y-3">
              <Components.Skeleton className="h-10 w-full" />
              <Components.Skeleton className="h-10 w-full" />
              <Components.Skeleton className="h-10 w-3/4" />
            </div>
          </Components.TabsContent>
          <Components.TabsContent value="historico">
            <div className="space-y-2">
              <Components.Skeleton className="h-12 w-full rounded-lg" />
              <Components.Skeleton className="h-12 w-full rounded-lg" />
              <Components.Skeleton className="h-12 w-full rounded-lg" />
            </div>
          </Components.TabsContent>
        </Component>
      )
    }
    // Fallback padrão
    return (
      <Component {...props} defaultValue={defaultValue}>
        <Components.TabsList>
          <Components.TabsTrigger value="tab1">{t("common.tab")} 1</Components.TabsTrigger>
          <Components.TabsTrigger value="tab2">{t("common.tab")} 2</Components.TabsTrigger>
        </Components.TabsList>
        <Components.TabsContent value="tab1">{t("common.content")} 1</Components.TabsContent>
        <Components.TabsContent value="tab2">{t("common.content")} 2</Components.TabsContent>
      </Component>
    )
  }
  if (checkId === "Tooltip") {
    return (
      <Components.TooltipProvider>
        <Components.Tooltip {...props}>
          <Components.TooltipTrigger asChild>
            <Components.Button variant="default">{t("common.hoverMe")}</Components.Button>
          </Components.TooltipTrigger>
          <Components.TooltipContent>
            <p>{t("common.tooltipContent")}</p>
          </Components.TooltipContent>
        </Components.Tooltip>
      </Components.TooltipProvider>
    )
  }
  if (checkId === "Divider") {
    // Se for vertical, precisa estar dentro de um container flex
    if (props.orientation === "vertical") {
      return (
        <div className="flex items-center gap-4 h-20">
          <span>Esquerda</span>
          <Component {...props} />
          <span>Direita</span>
        </div>
      )
    }
    // Para horizontal, adiciona um container com conteúdo para melhor visualização
    return (
      <div className="w-full space-y-4">
        <div>Conteúdo acima</div>
        <Component {...props} />
        <div>Conteúdo abaixo</div>
      </div>
    )
  }
  if (checkId === "Badge") {
    // Badge precisa de children para mostrar o texto
    const badgeText = customChildren || props.children || "Badge"
    return <Component {...props}>{badgeText}</Component>
  }
  if (checkId === "Skeleton") {
    // Skeleton precisa de className para ter tamanho visível
    const skeletonClassName = props.className || "h-4 w-full"
    return <Component {...props} className={skeletonClassName} />
  }
  if (checkId === "Progress") {
    // Progress precisa de um value para ser visível
    const progressValue = props.value !== undefined && props.value !== null ? Number(props.value) : 50
    // Se não tiver customColor e for o exemplo básico (apenas value 50, sem outras props customizadas), usa cor branca
    const hasOnlyValue = Object.keys(props).filter(k => k !== 'value').length === 0
    const isBasic = !props.customColor && !props.customBgColor && progressValue === 50 && hasOnlyValue
    const progressProps = isBasic 
      ? { ...props, value: progressValue, customColor: "#ffffff" }
      : { ...props, value: progressValue }
    return <Component {...progressProps} />
  }
  if (checkId === "Breadcrumb") {
    const customColor = props.customColor
    const variant = props.variant
    
    // Renderização com cor personalizada
    if (customColor) {
      return (
        <Component {...props} customColor={customColor}>
          <Components.BreadcrumbList>
            <Components.BreadcrumbItem>
              <Components.BreadcrumbLink href="/" customColor={customColor}>Home</Components.BreadcrumbLink>
            </Components.BreadcrumbItem>
            <Components.BreadcrumbSeparator customColor={customColor} />
            <Components.BreadcrumbItem>
              <Components.BreadcrumbLink href="/docs" customColor={customColor}>Documentação</Components.BreadcrumbLink>
            </Components.BreadcrumbItem>
            <Components.BreadcrumbSeparator customColor={customColor} />
            <Components.BreadcrumbItem>
              <Components.BreadcrumbPage customColor={customColor}>Componentes</Components.BreadcrumbPage>
            </Components.BreadcrumbItem>
          </Components.BreadcrumbList>
        </Component>
      )
    }
    
    // Renderização com múltiplos níveis
    if (variant === "multiple") {
      return (
        <Component {...props}>
          <Components.BreadcrumbList>
            <Components.BreadcrumbItem>
              <Components.BreadcrumbLink href="/">Home</Components.BreadcrumbLink>
            </Components.BreadcrumbItem>
            <Components.BreadcrumbSeparator />
            <Components.BreadcrumbItem>
              <Components.BreadcrumbLink href="/produtos">Produtos</Components.BreadcrumbLink>
            </Components.BreadcrumbItem>
            <Components.BreadcrumbSeparator />
            <Components.BreadcrumbItem>
              <Components.BreadcrumbLink href="/produtos/eletronicos">Eletrônicos</Components.BreadcrumbLink>
            </Components.BreadcrumbItem>
            <Components.BreadcrumbSeparator />
            <Components.BreadcrumbItem>
              <Components.BreadcrumbPage>Smartphones</Components.BreadcrumbPage>
            </Components.BreadcrumbItem>
          </Components.BreadcrumbList>
        </Component>
      )
    }
    
    // Renderização com separador customizado
    if (variant === "customSeparator") {
      return (
        <Component {...props}>
          <Components.BreadcrumbList>
            <Components.BreadcrumbItem>
              <Components.BreadcrumbLink href="/">Home</Components.BreadcrumbLink>
            </Components.BreadcrumbItem>
            <Components.BreadcrumbSeparator>
              <Slash />
            </Components.BreadcrumbSeparator>
            <Components.BreadcrumbItem>
              <Components.BreadcrumbLink href="/docs">Documentação</Components.BreadcrumbLink>
            </Components.BreadcrumbItem>
            <Components.BreadcrumbSeparator>
              <Slash />
            </Components.BreadcrumbSeparator>
            <Components.BreadcrumbItem>
              <Components.BreadcrumbPage>Componentes</Components.BreadcrumbPage>
            </Components.BreadcrumbItem>
          </Components.BreadcrumbList>
        </Component>
      )
    }
    
    // Renderização com ellipsis
    if (variant === "ellipsis") {
      return (
        <Component {...props}>
          <Components.BreadcrumbList>
            <Components.BreadcrumbItem>
              <Components.BreadcrumbLink href="/">Home</Components.BreadcrumbLink>
            </Components.BreadcrumbItem>
            <Components.BreadcrumbSeparator />
            <Components.BreadcrumbItem>
              <Components.BreadcrumbEllipsis />
            </Components.BreadcrumbItem>
            <Components.BreadcrumbSeparator />
            <Components.BreadcrumbItem>
              <Components.BreadcrumbLink href="/docs/componentes">Componentes</Components.BreadcrumbLink>
            </Components.BreadcrumbItem>
            <Components.BreadcrumbSeparator />
            <Components.BreadcrumbItem>
              <Components.BreadcrumbPage>Breadcrumb</Components.BreadcrumbPage>
            </Components.BreadcrumbItem>
          </Components.BreadcrumbList>
        </Component>
      )
    }
    
    // Renderização básica com 3 níveis (padrão)
    return (
      <Component {...props}>
        <Components.BreadcrumbList>
          <Components.BreadcrumbItem>
            <Components.BreadcrumbLink href="/">Home</Components.BreadcrumbLink>
          </Components.BreadcrumbItem>
          <Components.BreadcrumbSeparator />
          <Components.BreadcrumbItem>
            <Components.BreadcrumbLink href="/docs">Documentação</Components.BreadcrumbLink>
          </Components.BreadcrumbItem>
          <Components.BreadcrumbSeparator />
          <Components.BreadcrumbItem>
            <Components.BreadcrumbPage>Componentes</Components.BreadcrumbPage>
          </Components.BreadcrumbItem>
        </Components.BreadcrumbList>
      </Component>
    )
  }
  if (checkId === "Pagination") {
    const customColor = props.customColor
    // Usa o locale do header se não tiver language especificado nas props
    const language = props.language || (locale ? mapLocaleToPaginationLanguage(locale) : "en")
    const variant = props.variant
    
    // Renderização com cor personalizada
    if (customColor) {
      return (
        <Component {...props} customColor={customColor} language={language}>
          <Components.PaginationContent>
            <Components.PaginationItem>
              <Components.PaginationPrevious href="/?page=1" />
            </Components.PaginationItem>
            <Components.PaginationItem>
              <Components.PaginationLink href="/?page=1">1</Components.PaginationLink>
            </Components.PaginationItem>
            <Components.PaginationItem>
              <Components.PaginationLink href="/?page=2" isActive>2</Components.PaginationLink>
            </Components.PaginationItem>
            <Components.PaginationItem>
              <Components.PaginationLink href="/?page=3">3</Components.PaginationLink>
            </Components.PaginationItem>
            <Components.PaginationItem>
              <Components.PaginationNext href="/?page=3" />
            </Components.PaginationItem>
          </Components.PaginationContent>
        </Component>
      )
    }
    
    // Renderização com botões Previous/Next
    if (variant === "withButtons") {
      return (
        <Component {...props} language={language}>
          <Components.PaginationContent>
            <Components.PaginationItem>
              <Components.PaginationPrevious href="/?page=1" />
            </Components.PaginationItem>
            <Components.PaginationItem>
              <Components.PaginationLink href="/?page=1">1</Components.PaginationLink>
            </Components.PaginationItem>
            <Components.PaginationItem>
              <Components.PaginationLink href="/?page=2" isActive>2</Components.PaginationLink>
            </Components.PaginationItem>
            <Components.PaginationItem>
              <Components.PaginationLink href="/?page=3">3</Components.PaginationLink>
            </Components.PaginationItem>
            <Components.PaginationItem>
              <Components.PaginationNext href="/?page=3" />
            </Components.PaginationItem>
          </Components.PaginationContent>
        </Component>
      )
    }
    
    // Renderização com múltiplas páginas
    if (variant === "multiple") {
      return (
        <Component {...props} language={language}>
          <Components.PaginationContent>
            <Components.PaginationItem>
              <Components.PaginationPrevious href="/?page=4" />
            </Components.PaginationItem>
            <Components.PaginationItem>
              <Components.PaginationLink href="/?page=1">1</Components.PaginationLink>
            </Components.PaginationItem>
            <Components.PaginationItem>
              <Components.PaginationLink href="/?page=2">2</Components.PaginationLink>
            </Components.PaginationItem>
            <Components.PaginationItem>
              <Components.PaginationLink href="/?page=3">3</Components.PaginationLink>
            </Components.PaginationItem>
            <Components.PaginationItem>
              <Components.PaginationLink href="/?page=4" isActive>4</Components.PaginationLink>
            </Components.PaginationItem>
            <Components.PaginationItem>
              <Components.PaginationLink href="/?page=5">5</Components.PaginationLink>
            </Components.PaginationItem>
            <Components.PaginationItem>
              <Components.PaginationLink href="/?page=6">6</Components.PaginationLink>
            </Components.PaginationItem>
            <Components.PaginationItem>
              <Components.PaginationNext href="/?page=5" />
            </Components.PaginationItem>
          </Components.PaginationContent>
        </Component>
      )
    }
    
    // Renderização com ellipsis
    if (variant === "ellipsis") {
      return (
        <Component {...props} language={language}>
          <Components.PaginationContent>
            <Components.PaginationItem>
              <Components.PaginationPrevious href="/?page=5" />
            </Components.PaginationItem>
            <Components.PaginationItem>
              <Components.PaginationLink href="/?page=1">1</Components.PaginationLink>
            </Components.PaginationItem>
            <Components.PaginationItem>
              <Components.PaginationEllipsis />
            </Components.PaginationItem>
            <Components.PaginationItem>
              <Components.PaginationLink href="/?page=4">4</Components.PaginationLink>
            </Components.PaginationItem>
            <Components.PaginationItem>
              <Components.PaginationLink href="/?page=5" isActive>5</Components.PaginationLink>
            </Components.PaginationItem>
            <Components.PaginationItem>
              <Components.PaginationLink href="/?page=6">6</Components.PaginationLink>
            </Components.PaginationItem>
            <Components.PaginationItem>
              <Components.PaginationEllipsis />
            </Components.PaginationItem>
            <Components.PaginationItem>
              <Components.PaginationLink href="/?page=10">10</Components.PaginationLink>
            </Components.PaginationItem>
            <Components.PaginationItem>
              <Components.PaginationNext href="/?page=6" />
            </Components.PaginationItem>
          </Components.PaginationContent>
        </Component>
      )
    }
    
    // Renderização básica com 3 páginas (padrão)
    return (
      <Component {...props} language={language}>
        <Components.PaginationContent>
          <Components.PaginationItem>
            <Components.PaginationLink href="/?page=1" isActive>1</Components.PaginationLink>
          </Components.PaginationItem>
          <Components.PaginationItem>
            <Components.PaginationLink href="/?page=2">2</Components.PaginationLink>
          </Components.PaginationItem>
          <Components.PaginationItem>
            <Components.PaginationLink href="/?page=3">3</Components.PaginationLink>
          </Components.PaginationItem>
        </Components.PaginationContent>
      </Component>
    )
  }

  if (checkId === "ColorPicker") {
    // ColorPicker precisa de estado para funcionar corretamente
    const ColorPickerWithState = () => {
      const [color, setColor] = React.useState(props.value || "#000000")
      return <Component {...props} value={color} onChange={setColor} />
    }
    return <ColorPickerWithState />
  }
  if (checkId === "FormField") {
    return (
      <Component {...props}>
        <Components.Input placeholder={t("common.typeSomething")} />
      </Component>
    )
  }
  if (checkId === "Rating") {
    const RatingWithState = () => {
      const [value, setValue] = React.useState(props.defaultValue || props.value || 0)
      return <Component {...props} value={value} onValueChange={setValue} />
    }
    return <RatingWithState />
  }
  if (checkId === "Accordion") {
    const type = props.type || "single"
    const collapsible = props.collapsible !== undefined ? props.collapsible : true
    return (
      <Component {...props} type={type} collapsible={collapsible}>
        <Components.AccordionItem value="item-1">
          <Components.AccordionTrigger>Item 1</Components.AccordionTrigger>
          <Components.AccordionContent>Conteúdo do item 1</Components.AccordionContent>
        </Components.AccordionItem>
        <Components.AccordionItem value="item-2">
          <Components.AccordionTrigger>Item 2</Components.AccordionTrigger>
          <Components.AccordionContent>Conteúdo do item 2</Components.AccordionContent>
        </Components.AccordionItem>
      </Component>
    )
  }
  if (checkId === "FileUpload") {
    const FileUploadWithState = () => {
      const [files, setFiles] = React.useState<Components.FileUploadFile[]>([])
      return <Component {...props} value={files} onValueChange={setFiles} />
    }
    return <FileUploadWithState />
  }
  if (checkId === "Sidebar") {
    const SidebarWithState = () => {
      const [open, setOpen] = React.useState(props.open !== undefined ? props.open : true)
      const variant = props.variant || "sidebar"
      
      if (variant === "overlay") {
        return (
          <div className="space-y-4">
            <Components.Button onClick={() => setOpen(true)}>Abrir Sidebar</Components.Button>
            <Component {...props} open={open} onOpenChange={setOpen} variant={variant}>
              <Components.SidebarHeader>
                <h2 className="text-lg font-semibold">Menu</h2>
              </Components.SidebarHeader>
              <Components.SidebarContent>
                <p>Conteúdo da sidebar</p>
              </Components.SidebarContent>
            </Component>
          </div>
        )
      }
      
      // Para exemplos, renderizar como um container simples sem fixed positioning
      return (
        <div className="relative border rounded-lg overflow-hidden bg-background" style={{ minHeight: "300px", width: "100%", maxWidth: "400px" }}>
          <div className="flex flex-col h-full w-64 border-r border-border">
            <Components.SidebarHeader>
              <h2 className="text-lg font-semibold">Menu</h2>
            </Components.SidebarHeader>
            <Components.SidebarContent>
              <nav className="space-y-2">
                <a href="#" className="block px-3 py-2 rounded-md hover:bg-accent">Item 1</a>
                <a href="#" className="block px-3 py-2 rounded-md hover:bg-accent">Item 2</a>
                <a href="#" className="block px-3 py-2 rounded-md hover:bg-accent">Item 3</a>
              </nav>
            </Components.SidebarContent>
            <Components.SidebarFooter>
              <p className="text-sm text-muted-foreground">Rodapé</p>
            </Components.SidebarFooter>
          </div>
        </div>
      )
    }
    return <SidebarWithState />
  }
  if (checkId === "Carousel") {
    return (
      <Component {...props}>
        <Components.CarouselContent>
          <Components.CarouselItem>
            <div className="flex items-center justify-center h-48 bg-muted rounded-lg">Item 1</div>
          </Components.CarouselItem>
          <Components.CarouselItem>
            <div className="flex items-center justify-center h-48 bg-muted rounded-lg">Item 2</div>
          </Components.CarouselItem>
          <Components.CarouselItem>
            <div className="flex items-center justify-center h-48 bg-muted rounded-lg">Item 3</div>
          </Components.CarouselItem>
        </Components.CarouselContent>
        <Components.CarouselPrevious />
        <Components.CarouselNext />
      </Component>
    )
  }
  if (checkId === "CommandPalette") {
    const commands = props.commands || [
      { id: "1", label: "Criar documento", onSelect: () => {} },
      { id: "2", label: "Abrir arquivo", onSelect: () => {} },
    ]
    const CommandPaletteWithState = () => {
      const [open, setOpen] = React.useState(props.open || false)
      return <Component {...props} open={open} onOpenChange={setOpen} commands={commands} />
    }
    return <CommandPaletteWithState />
  }
  if (checkId === "RichTextEditor") {
    const RichTextEditorWithState = () => {
      const [value, setValue] = React.useState(props.value || props.defaultValue || "")
      return <Component {...props} value={value} onChange={setValue} />
    }
    return <RichTextEditorWithState />
  }

  return <Component {...props} />
}

interface ComponentPageContentProps {
  component: ComponentMetadata
}

export function ComponentPageContent({ component }: ComponentPageContentProps) {
  const { t, locale } = useTranslations()
  const [isMounted, setIsMounted] = React.useState(false)

  // Refs para animações
  const containerRef = useRef<HTMLDivElement>(null)
  const breadcrumbRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const tabsListRef = useRef<HTMLDivElement>(null)
  const examplesTitleRef = useRef<HTMLHeadingElement>(null)
  const examplesContainerRef = useRef<HTMLDivElement>(null)
  const variantsTitleRef = useRef<HTMLHeadingElement>(null)
  const variantsGridRef = useRef<HTMLDivElement>(null)
  const sizesTitleRef = useRef<HTMLHeadingElement>(null)
  const sizesContainerRef = useRef<HTMLDivElement>(null)
  const propsCardRef = useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  // Animações GSAP
  useEffect(() => {
    if (!isMounted) return

    const ctx = gsap.context(() => {
      // Animações ao carregar (seção inicial)
      if (breadcrumbRef.current) {
        fadeIn(breadcrumbRef.current, 0)
      }
      if (titleRef.current) {
        fadeInUp(titleRef.current, 0.1)
      }
      if (badgeRef.current) {
        fadeInUp(badgeRef.current, 0.15)
      }
      if (descriptionRef.current) {
        fadeInUp(descriptionRef.current, 0.2)
      }

      // Animações reveal on scroll para tabs
      if (tabsListRef.current) {
        revealOnScroll(tabsListRef.current, "up")
      }

      // Animações para seção de exemplos
      if (examplesTitleRef.current) {
        revealOnScroll(examplesTitleRef.current, "up")
      }
      if (examplesContainerRef.current && examplesContainerRef.current.children.length > 0) {
        gsap.fromTo(
          examplesContainerRef.current.children,
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
              trigger: examplesContainerRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }

      // Animações para seção de variantes
      if (variantsTitleRef.current) {
        revealOnScroll(variantsTitleRef.current, "up")
      }
      if (variantsGridRef.current && variantsGridRef.current.children.length > 0) {
        gsap.fromTo(
          variantsGridRef.current.children,
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
              trigger: variantsGridRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }

      // Animações para seção de sizes
      if (sizesTitleRef.current) {
        revealOnScroll(sizesTitleRef.current, "up")
      }
      if (sizesContainerRef.current && sizesContainerRef.current.children.length > 0) {
        gsap.fromTo(
          sizesContainerRef.current.children,
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
              trigger: sizesContainerRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }

      // Animações para props table
      if (propsCardRef.current) {
        revealOnScroll(propsCardRef.current, "up")
      }
    }, containerRef)

    return () => ctx.revert()
  }, [isMounted, component])

  return (
    <div ref={containerRef} className="space-y-8">
      <Breadcrumb ref={breadcrumbRef}>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs">{t("common.documentation")}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{component.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <h1 ref={titleRef} className="text-4xl font-bold tracking-tight">{component.name}</h1>
          <div ref={badgeRef}>
            <Badge variant="secondary">{component.category}</Badge>
          </div>
        </div>
        <p ref={descriptionRef} className="text-xl text-muted-foreground">{component.description}</p>
      </div>

      {isMounted ? (
        <Tabs defaultValue="overview" className="w-full">
        <TabsList ref={tabsListRef}>
          <TabsTrigger value="overview">{t("common.overview")}</TabsTrigger>
          <TabsTrigger value="playground">{t("common.playground")}</TabsTrigger>
          <TabsTrigger value="props">{t("common.props")}</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {component.examples.length > 0 && (
            <div className="space-y-4">
              <h2 ref={examplesTitleRef} className="text-2xl font-semibold">{t("common.examples")}</h2>
              <div ref={examplesContainerRef} className="space-y-6">
              {component.examples.map((example, index) => {
                // Traduz títulos dos exemplos do botão
                let translatedTitle = example.title
                if (component.name === "Button") {
                  if (example.title === "Básico" || example.title === "Basic" || example.title === "Básico") {
                    translatedTitle = t("button.examples.basic")
                  } else if (example.title === "Com loading" || example.title === "With loading" || example.title === "Con carga") {
                    translatedTitle = t("button.examples.withLoading")
                  } else if (example.title === "Com ícone" || example.title === "With icon" || example.title === "Con icono") {
                    translatedTitle = t("button.examples.withIcon")
                  }
                }
                
                return (
                  <div key={index} className="space-y-2">
                    <h3 className="text-lg font-medium">{translatedTitle}</h3>
                    {example.description && (
                      <p className="text-sm text-muted-foreground">{example.description}</p>
                    )}
                  <ComponentPreview>
                    {example.title === "Card de perfil" && component.name === "Skeleton" ? (
                      // Renderização especial para Card de perfil
                      <div className="flex items-center space-x-4 w-full max-w-md">
                        <Components.Skeleton className="h-16 w-16 rounded-full" />
                        <div className="space-y-2 flex-1">
                          <Components.Skeleton className="h-4 w-3/4" />
                          <Components.Skeleton className="h-4 w-1/2" />
                        </div>
                      </div>
                    ) : example.title === "Com diferentes posições" && component.name === "Popover" ? (
                      // Renderização especial para Popover com diferentes posições
                      <div className="flex flex-wrap gap-4">
                        {["top", "right", "bottom", "left"].map((side) => (
                          <Components.Popover key={side}>
                            <Components.PopoverTrigger asChild>
                              <Components.Button variant="outline">
                                {side === "top" ? "Top" : side === "right" ? "Right" : side === "bottom" ? "Bottom" : "Left"}
                              </Components.Button>
                            </Components.PopoverTrigger>
                            <Components.PopoverContent side={side as "top" | "right" | "bottom" | "left"}>
                              <p className="text-sm">
                                {side === "top" ? "Popover no topo" : side === "right" ? "Popover à direita" : side === "bottom" ? "Popover embaixo" : "Popover à esquerda"}
                              </p>
                            </Components.PopoverContent>
                          </Components.Popover>
                        ))}
                      </div>
                    ) : example.components ? (
                      <div className={`flex flex-wrap gap-4 ${component.name === "Input" || component.name === "Progress" || component.name === "Skeleton" ? "flex-col items-stretch" : "items-center"}`}>
                        {component.name === "Avatar" && example.components.length > 0 ? (
                          // Renderização especial para Avatar com componentes filhos
                          (() => {
                            const avatarComp = example.components[0]
                            const avatarProps = avatarComp?.props || {}
                            const hasImage = example.components.some(c => c.id === "AvatarImage")
                            const fallbackComp = example.components.find(c => c.id === "AvatarFallback")
                            const fallbackProps = fallbackComp?.props || {}
                            const fallbackChildren = fallbackComp?.children || "CN"
                            
                            return (
                              <Components.Avatar {...avatarProps}>
                                {hasImage && (
                                  <Components.AvatarImage 
                                    src={example.components.find(c => c.id === "AvatarImage")?.props?.src || "https://github.com/shadcn.png"} 
                                    alt={example.components.find(c => c.id === "AvatarImage")?.props?.alt || "@shadcn"} 
                                  />
                                )}
                                <Components.AvatarFallback {...fallbackProps}>
                                  {fallbackChildren}
                                </Components.AvatarFallback>
                              </Components.Avatar>
                            )
                          })()
                        ) : (
                          <>
                            {example.components.map((comp, compIndex) => {
                          // Se tiver ícone especificado, renderiza com ícone
                          if (comp.icon && component.name === "Button") {
                            const IconComponent = (LucideIcons as any)[comp.icon] || Heart
                            // Traduz texto do botão se necessário
                            let translatedChildren = comp.children
                            if (comp.children === "Curtir" || comp.children === "Like" || comp.children === "Me gusta") {
                              translatedChildren = t("button.like")
                            }
                            return (
                              <div key={compIndex}>
                                {renderComponent(component.name, { ...comp.props }, t, (
                                  <>
                                    <IconComponent className="h-4 w-4" />
                                    {translatedChildren}
                                  </>
                                ), locale)}
                              </div>
                            )
                          }
                          // Traduz texto do botão se necessário
                          let translatedChildren = comp.children
                          if (component.name === "Button") {
                            if (comp.children === "Clique aqui" || comp.children === "Click here" || comp.children === "Haz clic aquí") {
                              translatedChildren = t("button.clickHere")
                            } else if (comp.children === "Carregando..." || comp.children === "Loading..." || comp.children === "Cargando...") {
                              translatedChildren = t("button.loading")
                            } else if (comp.children === "Curtir" || comp.children === "Like" || comp.children === "Me gusta") {
                              translatedChildren = t("button.like")
                            }
                          }
                          // Se for Badge e tiver children, passa como customChildren
                          if (component.name === "Badge" && comp.children) {
                            return (
                              <div key={compIndex}>
                                {renderComponent(component.name, { ...comp.props }, t, comp.children, locale)}
                              </div>
                            )
                          }
                          // Se for Progress, adiciona largura completa (sem children)
                          if (component.name === "Progress") {
                            // Garante que o value seja um número
                            const progressProps = {
                              ...comp.props,
                              value: comp.props?.value !== undefined ? Number(comp.props?.value) : 50
                            }
                            return (
                              <div key={compIndex} className="w-full max-w-md space-y-2">
                                {renderComponent(component.name, progressProps, t, undefined, locale)}
                              </div>
                            )
                          }
                          // Se for Skeleton, adiciona largura completa
                          if (component.name === "Skeleton") {
                            return (
                              <div key={compIndex} className="w-full max-w-md">
                                {renderComponent(component.name, { ...comp.props }, t, undefined, locale)}
                              </div>
                            )
                          }
                          return (
                            <div key={compIndex} className={component.name === "Input" ? "w-full max-w-md" : ""}>
                              {renderComponent(component.name, { ...comp.props, children: translatedChildren }, t, undefined, locale)}
                            </div>
                          )
                            })
                          }
                          </>
                        )}
                      </div>
                    ) : (
                      (() => {
                        // Traduz textos dos exemplos do botão
                        let translatedProps = { ...example.props }
                        if (component.name === "Button") {
                          if (example.props?.loading) {
                            translatedProps.children = t("button.loading")
                          } else if (!example.props?.children) {
                            translatedProps.children = t("button.clickHere")
                          }
                        }
                        // Se for Badge e não tiver children, adiciona texto padrão
                        if (component.name === "Badge" && !translatedProps.children) {
                          translatedProps.children = "Novo"
                        }
                        // Renderização especial para Avatar quando não tem components
                        if (component.name === "Avatar") {
                          const variant = translatedProps.variant
                          // Se for exemplo "Apenas fallback" ou "Com cor personalizada no fallback"
                          if (variant === "fallback-only") {
                            const customBgColor = translatedProps.customBgColor
                            return (
                              <Components.Avatar>
                                <Components.AvatarFallback customBgColor={customBgColor}>
                                  {customBgColor ? "JD" : "JD"}
                                </Components.AvatarFallback>
                              </Components.Avatar>
                            )
                          }
                        }
                        return (
                          <div className={component.name === "Input" || component.name === "Progress" || component.name === "Skeleton" ? "w-full max-w-md" : ""}>
                            {renderComponent(component.name, translatedProps, t, undefined, locale)}
                          </div>
                        )
                      })()
                    )}
                  </ComponentPreview>
                  <CodeBlock code={example.code} language="tsx" />
                  </div>
                )
              })}
              </div>
            </div>
          )}

          {component.variants && component.variants.length > 0 && (
            <div className="space-y-4">
              <h2 ref={variantsTitleRef} className="text-2xl font-semibold">{t("common.variants")}</h2>
              <div ref={variantsGridRef} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {component.variants.map((variant) => (
                  <Card key={variant.value}>
                    <CardHeader>
                      <CardTitle className="text-base">{variant.name}</CardTitle>
                      {variant.description && (
                        <CardDescription>{variant.description}</CardDescription>
                      )}
                    </CardHeader>
                    <CardContent>
                      {renderComponent(component.name, { variant: variant.value, size: "default" }, t, undefined, locale)}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {component.sizes && component.sizes.length > 0 && (
            <div className="space-y-4">
              <h2 ref={sizesTitleRef} className="text-2xl font-semibold">{t("common.sizes")}</h2>
              <div ref={sizesContainerRef} className="flex flex-wrap gap-4 items-center">
                {component.sizes.map((size) => (
                  <div key={size.value} className="space-y-2">
                    <p className="text-sm font-medium">{size.name}</p>
                    {renderComponent(component.name, { variant: "default", size: size.value }, t, undefined, locale)}
                  </div>
                ))}
              </div>
            </div>
          )}
        </TabsContent>

        <TabsContent value="playground">
          <PlaygroundWrapper component={component} />
        </TabsContent>

        <TabsContent value="props">
          <Card ref={propsCardRef}>
            <CardHeader>
              <CardTitle>{t("common.props")}</CardTitle>
              <CardDescription>
                {t("common.allPropsAvailable")} {component.name}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PropsTable props={component.props} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      ) : (
        <div className="w-full">
          <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background text-foreground shadow-sm">
              {t("common.overview")}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

