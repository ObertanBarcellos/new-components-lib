export interface PropDefinition {
  name: string
  type: string
  default?: string
  description: string
  required?: boolean
}

export interface CodeExample {
  title: string
  description?: string
  code: string
  props?: Record<string, any>
  components?: Array<{ props?: Record<string, any>; children?: string; icon?: string }>
}

export interface Variant {
  name: string
  value: string
  description?: string
}

export interface ComponentMetadata {
  id: string
  name: string
  description: string
  category: string
  props: PropDefinition[]
  examples: CodeExample[]
  variants?: Variant[]
  sizes?: Variant[]
  importPath: string
  docsUrl?: string
}

export const components: ComponentMetadata[] = [
  {
    id: "button",
    name: "Button",
    description: "Botão versátil com múltiplas variantes, tamanhos e suporte a estados de loading.",
    category: "Formulários",
    importPath: "@/components/ui/button",
    props: [
      {
        name: "variant",
        type: "'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'success'",
        default: "'default'",
        description: "Variante visual do botão",
      },
      {
        name: "size",
        type: "'default' | 'sm' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg'",
        default: "'default'",
        description: "Tamanho do botão",
      },
      {
        name: "asChild",
        type: "boolean",
        default: "false",
        description: "Renderiza como child element ao invés de button",
      },
      {
        name: "loading",
        type: "boolean",
        default: "false",
        description: "Mostra estado de carregamento",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Desabilita o botão",
      },
      {
        name: "customColor",
        type: "string",
        description: "Cor personalizada para variante default",
      },
      {
        name: "customHoverColor",
        type: "string",
        description: "Cor personalizada para hover",
      },
    ],
    variants: [
      { name: "Default", value: "default", description: "Botão padrão com cor primária" },
      { name: "Destructive", value: "destructive", description: "Para ações destrutivas" },
      { name: "Outline", value: "outline", description: "Botão com borda" },
      { name: "Secondary", value: "secondary", description: "Botão secundário" },
      { name: "Ghost", value: "ghost", description: "Botão sem fundo" },
      { name: "Link", value: "link", description: "Estilo de link" },
      { name: "Success", value: "success", description: "Botão de sucesso" },
    ],
    sizes: [
      { name: "Small", value: "sm" },
      { name: "Default", value: "default" },
      { name: "Large", value: "lg" },
      { name: "Icon", value: "icon" },
      { name: "Icon Small", value: "icon-sm" },
      { name: "Icon Large", value: "icon-lg" },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { Button } from "@/components/ui/button"

<Button>Clique aqui</Button>`,
        props: {},
      },
      {
        title: "Com loading",
        code: `import { Button } from "@/components/ui/button"

<Button loading>Carregando...</Button>`,
        props: { loading: true },
      },
      {
        title: "Com ícone",
        code: `import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

<Button>
  <Heart className="h-4 w-4" />
  Curtir
</Button>`,
        components: [
          { props: {}, children: "Curtir", icon: "Heart" },
        ],
      },
    ],
  },
  {
    id: "input",
    name: "Input",
    description: "Campo de entrada de texto com suporte a ícones, estados de erro e cores personalizadas.",
    category: "Formulários",
    importPath: "@/components/ui/input",
    props: [
      {
        name: "type",
        type: "string",
        default: "'text'",
        description: "Tipo do input (text, email, password, etc.)",
      },
      {
        name: "error",
        type: "boolean",
        default: "false",
        description: "Mostra estado de erro",
      },
      {
        name: "startIcon",
        type: "ReactNode",
        description: "Ícone no início do input",
      },
      {
        name: "endIcon",
        type: "ReactNode",
        description: "Ícone no final do input",
      },
      {
        name: "customBorderColor",
        type: "string",
        description: "Cor personalizada da borda",
      },
      {
        name: "customFocusColor",
        type: "string",
        description: "Cor personalizada no foco",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Desabilita o input",
      },
      {
        name: "placeholder",
        type: "string",
        description: "Texto placeholder",
      },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { Input } from "@/components/ui/input"

<Input placeholder="Digite algo..." />`,
      },
      {
        title: "Com ícones",
        code: `import { Input } from "@/components/ui/input"
import { Search, Mail } from "lucide-react"

<Input startIcon={<Search />} placeholder="Buscar..." />
<Input endIcon={<Mail />} placeholder="Email" />`,
      },
      {
        title: "Com erro",
        code: `import { Input } from "@/components/ui/input"

<Input error placeholder="Campo obrigatório" />`,
      },
    ],
  },
  {
    id: "card",
    name: "Card",
    description: "Componente de card versátil para exibir conteúdo agrupado com suporte a hover e cores personalizadas.",
    category: "Layout",
    importPath: "@/components/ui/card",
    props: [
      {
        name: "hover",
        type: "boolean",
        default: "false",
        description: "Adiciona efeito hover",
      },
      {
        name: "interactive",
        type: "boolean",
        default: "false",
        description: "Torna o card interativo com animações",
      },
      {
        name: "customBorderColor",
        type: "string",
        description: "Cor personalizada da borda",
      },
      {
        name: "customBgColor",
        type: "string",
        description: "Cor personalizada do fundo",
      },
      {
        name: "customTextColor",
        type: "string",
        description: "Cor personalizada do texto",
      },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
    <CardDescription>Descrição</CardDescription>
  </CardHeader>
  <CardContent>
    Conteúdo do card
  </CardContent>
</Card>`,
      },
      {
        title: "Com hover",
        code: `import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

<Card hover>
  <CardHeader>
    <CardTitle>Card Interativo</CardTitle>
  </CardHeader>
  <CardContent>
    Passe o mouse sobre mim
  </CardContent>
</Card>`,
      },
    ],
  },
  {
    id: "badge",
    name: "Badge",
    description: "Etiqueta para destacar informações, status ou categorias.",
    category: "Feedback",
    importPath: "@/components/ui/badge",
    props: [
      {
        name: "variant",
        type: "'default' | 'secondary' | 'destructive' | 'outline'",
        default: "'default'",
        description: "Variante visual do badge",
      },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { Badge } from "@/components/ui/badge"

<Badge>Novo</Badge>`,
      },
    ],
  },
  {
    id: "checkbox",
    name: "Checkbox",
    description: "Caixa de seleção com animações suaves.",
    category: "Formulários",
    importPath: "@/components/ui/checkbox",
    props: [
      {
        name: "checked",
        type: "boolean",
        description: "Estado checked",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Desabilita o checkbox",
      },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { Checkbox } from "@/components/ui/checkbox"

<Checkbox />`,
      },
    ],
  },
  {
    id: "switch",
    name: "Switch",
    description: "Interruptor para alternar entre estados on/off.",
    category: "Formulários",
    importPath: "@/components/ui/switch",
    props: [
      {
        name: "checked",
        type: "boolean",
        description: "Estado checked",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Desabilita o switch",
      },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { Switch } from "@/components/ui/switch"

<Switch />`,
      },
    ],
  },
  {
    id: "textarea",
    name: "Textarea",
    description: "Área de texto multilinha com redimensionamento.",
    category: "Formulários",
    importPath: "@/components/ui/textarea",
    props: [
      {
        name: "rows",
        type: "number",
        default: "4",
        description: "Número de linhas",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Desabilita o textarea",
      },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { Textarea } from "@/components/ui/textarea"

<Textarea placeholder="Digite sua mensagem..." />`,
      },
    ],
  },
  {
    id: "select",
    name: "Select",
    description: "Seleção dropdown customizável e acessível.",
    category: "Formulários",
    importPath: "@/components/ui/select",
    props: [
      {
        name: "value",
        type: "string",
        description: "Valor selecionado",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Desabilita o select",
      },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Selecione..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Opção 1</SelectItem>
    <SelectItem value="2">Opção 2</SelectItem>
  </SelectContent>
</Select>`,
      },
    ],
  },
  {
    id: "dialog",
    name: "Dialog",
    description: "Modal dialog acessível para exibir conteúdo em overlay.",
    category: "Overlay",
    importPath: "@/components/ui/dialog",
    props: [
      {
        name: "open",
        type: "boolean",
        description: "Controla se o dialog está aberto",
      },
      {
        name: "onOpenChange",
        type: "(open: boolean) => void",
        description: "Callback quando o estado muda",
      },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

<Dialog>
  <DialogTrigger>Abrir</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Título</DialogTitle>
    </DialogHeader>
    Conteúdo do dialog
  </DialogContent>
</Dialog>`,
      },
    ],
  },
  {
    id: "tabs",
    name: "Tabs",
    description: "Sistema de abas para organizar conteúdo.",
    category: "Navegação",
    importPath: "@/components/ui/tabs",
    props: [
      {
        name: "defaultValue",
        type: "string",
        description: "Valor padrão da aba ativa",
      },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Aba 1</TabsTrigger>
    <TabsTrigger value="tab2">Aba 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Conteúdo 1</TabsContent>
  <TabsContent value="tab2">Conteúdo 2</TabsContent>
</Tabs>`,
      },
    ],
  },
  {
    id: "progress",
    name: "Progress",
    description: "Barra de progresso linear.",
    category: "Feedback",
    importPath: "@/components/ui/progress",
    props: [
      {
        name: "value",
        type: "number",
        description: "Valor do progresso (0-100)",
      },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { Progress } from "@/components/ui/progress"

<Progress value={50} />`,
      },
    ],
  },
  {
    id: "spinner",
    name: "Spinner",
    description: "Indicador de carregamento animado.",
    category: "Feedback",
    importPath: "@/components/ui/spinner",
    props: [
      {
        name: "size",
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description: "Tamanho do spinner",
      },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { Spinner } from "@/components/ui/spinner"

<Spinner />`,
      },
    ],
  },
  {
    id: "skeleton",
    name: "Skeleton",
    description: "Placeholder animado para conteúdo carregando.",
    category: "Feedback",
    importPath: "@/components/ui/skeleton",
    props: [
      {
        name: "className",
        type: "string",
        description: "Classes CSS adicionais",
      },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { Skeleton } from "@/components/ui/skeleton"

<Skeleton className="h-4 w-full" />`,
      },
    ],
  },
  {
    id: "avatar",
    name: "Avatar",
    description: "Componente de avatar com fallback para imagens.",
    category: "Especiais",
    importPath: "@/components/ui/avatar",
    props: [
      {
        name: "src",
        type: "string",
        description: "URL da imagem",
      },
      {
        name: "alt",
        type: "string",
        description: "Texto alternativo",
      },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

<Avatar>
  <AvatarImage src="/avatar.jpg" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`,
      },
    ],
  },
  {
    id: "tooltip",
    name: "Tooltip",
    description: "Tooltip acessível para exibir informações adicionais.",
    category: "Overlay",
    importPath: "@/components/ui/tooltip",
    props: [
      {
        name: "content",
        type: "string",
        description: "Conteúdo do tooltip",
      },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover me</TooltipTrigger>
    <TooltipContent>
      <p>Informação útil</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`,
      },
    ],
  },
  {
    id: "popover",
    name: "Popover",
    description: "Popover flutuante para conteúdo adicional.",
    category: "Overlay",
    importPath: "@/components/ui/popover",
    props: [
      {
        name: "open",
        type: "boolean",
        description: "Controla se está aberto",
      },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"

<Popover>
  <PopoverTrigger>Abrir</PopoverTrigger>
  <PopoverContent>Conteúdo</PopoverContent>
</Popover>`,
      },
    ],
  },
  {
    id: "dropdown-menu",
    name: "Dropdown Menu",
    description: "Menu dropdown acessível e customizável.",
    category: "Overlay",
    importPath: "@/components/ui/dropdown-menu",
    props: [
      {
        name: "open",
        type: "boolean",
        description: "Controla se está aberto",
      },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"

<DropdownMenu>
  <DropdownMenuTrigger>Abrir</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Item 1</DropdownMenuItem>
    <DropdownMenuItem>Item 2</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
      },
    ],
  },
  {
    id: "breadcrumb",
    name: "Breadcrumb",
    description: "Navegação hierárquica com suporte a cores customizáveis.",
    category: "Navegação",
    importPath: "@/components/ui/breadcrumb",
    props: [],
    examples: [
      {
        title: "Básico",
        code: `import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb"

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
      },
    ],
  },
  {
    id: "pagination",
    name: "Pagination",
    description: "Componente de paginação com suporte a múltiplos idiomas.",
    category: "Navegação",
    importPath: "@/components/ui/pagination",
    props: [],
    examples: [
      {
        title: "Básico",
        code: `import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination"

<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationLink href="/?page=1">1</PaginationLink>
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
      },
    ],
  },
  {
    id: "calendar",
    name: "Calendar",
    description: "Calendário acessível para seleção de datas.",
    category: "Date",
    importPath: "@/components/ui/calendar",
    props: [
      {
        name: "mode",
        type: "'single' | 'range' | 'multiple'",
        default: "'single'",
        description: "Modo de seleção",
      },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { Calendar } from "@/components/ui/calendar"

<Calendar />`,
      },
    ],
  },
  {
    id: "date-picker",
    name: "Date Picker",
    description: "Seletor de data com calendário integrado.",
    category: "Date",
    importPath: "@/components/ui/date-picker",
    props: [
      {
        name: "value",
        type: "Date",
        description: "Data selecionada",
      },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { DatePicker } from "@/components/ui/date-picker"

<DatePicker />`,
      },
    ],
  },
  {
    id: "divider",
    name: "Divider",
    description: "Separador visual para dividir conteúdo.",
    category: "Layout",
    importPath: "@/components/ui/divider",
    props: [
      {
        name: "orientation",
        type: "'horizontal' | 'vertical'",
        default: "'horizontal'",
        description: "Orientação do divisor",
      },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { Divider } from "@/components/ui/divider"

<Divider />`,
      },
    ],
  },
  {
    id: "drawer",
    name: "Drawer",
    description: "Gaveta lateral para conteúdo adicional.",
    category: "Overlay",
    importPath: "@/components/ui/drawer",
    props: [
      {
        name: "open",
        type: "boolean",
        description: "Controla se está aberto",
      },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer"

<Drawer>
  <DrawerTrigger>Abrir</DrawerTrigger>
  <DrawerContent>Conteúdo</DrawerContent>
</Drawer>`,
      },
    ],
  },
  {
    id: "modal",
    name: "Modal",
    description: "Modal customizável para diálogos.",
    category: "Overlay",
    importPath: "@/components/ui/modal",
    props: [
      {
        name: "open",
        type: "boolean",
        description: "Controla se está aberto",
      },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { Modal, ModalTrigger, ModalContent } from "@/components/ui/modal"

<Modal>
  <ModalTrigger>Abrir</ModalTrigger>
  <ModalContent>Conteúdo</ModalContent>
</Modal>`,
      },
    ],
  },
]

export const categories = [
  "Formulários",
  "Layout",
  "Feedback",
  "Navegação",
  "Overlay",
  "Date",
  "Especiais",
] as const

export function getComponentById(id: string): ComponentMetadata | undefined {
  return components.find((c) => c.id === id)
}

export function getComponentsByCategory(category: string): ComponentMetadata[] {
  return components.filter((c) => c.category === category)
}

export function getAllComponents(): ComponentMetadata[] {
  return components
}

