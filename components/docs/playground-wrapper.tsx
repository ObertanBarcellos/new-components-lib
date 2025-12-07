"use client"

import * as React from "react"
import { ComponentMetadata } from "@/lib/docs/components"
import { Playground } from "./playground"
import * as Components from "@/components/ui"
import { Heart } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"
import type { Locale } from "@/lib/i18n"

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
  }
  return nameMap[componentName] || componentName.replace(/\s+/g, "")
}

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
}

function renderComponent(componentId: string, props: Record<string, any>, t: (key: string) => string): React.ReactNode {
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
    
    // Caso contrário, renderiza com texto, mas permite customização via props.children se fornecido
    return <Component {...props}>{props.children || t("common.button")}</Component>
  }
  if (checkId === "Input") {
    return <Component {...props} placeholder={t("common.typeSomething")} />
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
    const badgeText = props.children || "Badge"
    return <Component {...props}>{badgeText}</Component>
  }
  if (checkId === "Skeleton") {
    // Skeleton precisa de className para ter tamanho visível
    const skeletonClassName = props.className || "h-4 w-full"
    return <Component {...props} className={skeletonClassName} />
  }
  if (checkId === "Progress") {
    // Progress precisa de um value para ser visível
    const progressValue = props.value !== undefined ? props.value : 50
    return <Component {...props} value={progressValue} />
  }
  if (checkId === "Pagination") {
    const customColor = props.customColor
    // No playground, o language já vem mapeado do PlaygroundWrapper
    const language = props.language || "en"
    
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
  if (checkId === "Breadcrumb") {
    const customColor = props.customColor
    
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

  if (checkId === "ColorPicker") {
    // ColorPicker precisa de estado para funcionar corretamente
    const ColorPickerWithState = () => {
      const [color, setColor] = React.useState(props.value || "#000000")
      return <Component {...props} value={color} onChange={setColor} />
    }
    return <ColorPickerWithState />
  }

  return <Component {...props} />
}

interface PlaygroundWrapperProps {
  component: ComponentMetadata
}

export function PlaygroundWrapper({ component }: PlaygroundWrapperProps) {
  const { t, locale } = useTranslations()
  
  // Função para mapear locale para language do Pagination no playground
  const getPaginationLanguage = (props: Record<string, any>): "en" | "pt" | "es" | "fr" | "de" | "it" => {
    if (props.language) return props.language
    return mapLocaleToPaginationLanguage(locale)
  }
  
  return (
    <Playground
      component={component}
      renderComponent={(props) => {
        // Para Pagination, usa o locale do header se não tiver language especificado
        if (component.name === "Pagination" && !props.language) {
          return renderComponent(component.name, { ...props, language: getPaginationLanguage(props) }, t)
        }
        return renderComponent(component.name, props, t)
      }}
    />
  )
}

