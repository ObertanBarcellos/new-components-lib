"use client"

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
import * as Components from "@/components/ui"
import { Heart, Loader2 } from "lucide-react"
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

function renderComponent(componentId: string, props: Record<string, any>, t: (key: string) => string, customChildren?: React.ReactNode): React.ReactNode {
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
    
    // Aplica todas as props e renderiza com texto apropriado
    // Se tiver children customizado (passado como parâmetro), usa ele
    // Senão, se tiver children nas props, usa ele
    // Caso contrário, usa tradução de "Botão"
    const children = customChildren !== undefined ? customChildren : (props.children || t("common.button"))
    return <Component {...props}>{children}</Component>
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

interface ComponentPageContentProps {
  component: ComponentMetadata
}

export function ComponentPageContent({ component }: ComponentPageContentProps) {
  const { t } = useTranslations()

  return (
    <div className="space-y-8">
      <Breadcrumb>
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
          <h1 className="text-4xl font-bold tracking-tight">{component.name}</h1>
          <Badge variant="secondary">{component.category}</Badge>
        </div>
        <p className="text-xl text-muted-foreground">{component.description}</p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">{t("common.overview")}</TabsTrigger>
          <TabsTrigger value="playground">{t("common.playground")}</TabsTrigger>
          <TabsTrigger value="props">{t("common.props")}</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {component.examples.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">{t("common.examples")}</h2>
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
                    {example.components ? (
                      <div className="flex flex-wrap gap-2 items-center">
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
                                ))}
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
                          return (
                            <div key={compIndex}>
                              {renderComponent(component.name, { ...comp.props, children: translatedChildren }, t)}
                            </div>
                          )
                        })}
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
                        return renderComponent(component.name, translatedProps, t)
                      })()
                    )}
                  </ComponentPreview>
                  <CodeBlock code={example.code} language="tsx" />
                  </div>
                )
              })}
            </div>
          )}

          {component.variants && component.variants.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">{t("common.variants")}</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {component.variants.map((variant) => (
                  <Card key={variant.value}>
                    <CardHeader>
                      <CardTitle className="text-base">{variant.name}</CardTitle>
                      {variant.description && (
                        <CardDescription>{variant.description}</CardDescription>
                      )}
                    </CardHeader>
                    <CardContent>
                      {renderComponent(component.name, { variant: variant.value, size: "default" }, t)}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {component.sizes && component.sizes.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">{t("common.sizes")}</h2>
              <div className="flex flex-wrap gap-4 items-center">
                {component.sizes.map((size) => (
                  <div key={size.value} className="space-y-2">
                    <p className="text-sm font-medium">{size.name}</p>
                    {renderComponent(component.name, { variant: "default", size: size.value }, t)}
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
          <Card>
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
    </div>
  )
}

