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
        props: { placeholder: "Digite algo..." },
      },
      {
        title: "Com ícones",
        code: `import { Input } from "@/components/ui/input"
import { Search, Mail, Lock, Eye } from "lucide-react"

<Input startIcon={<Search />} placeholder="Buscar..." />
<Input endIcon={<Mail />} placeholder="Email" />
<Input startIcon={<Lock />} endIcon={<Eye />} placeholder="Senha" />`,
        components: [
          { props: { startIcon: "Search", placeholder: "Buscar..." } },
          { props: { endIcon: "Mail", placeholder: "Email" } },
          { props: { startIcon: "Lock", endIcon: "Eye", placeholder: "Senha" } },
        ],
      },
      {
        title: "Com erro",
        code: `import { Input } from "@/components/ui/input"

<Input error placeholder="Campo obrigatório" />`,
        props: { error: true, placeholder: "Campo obrigatório" },
      },
      {
        title: "Desabilitado",
        code: `import { Input } from "@/components/ui/input"

<Input disabled placeholder="Campo desabilitado" />`,
        props: { disabled: true, placeholder: "Campo desabilitado" },
      },
      {
        title: "Tipos diferentes",
        code: `import { Input } from "@/components/ui/input"
import { Mail, Lock } from "lucide-react"

<Input type="email" startIcon={<Mail />} placeholder="seu@email.com" />
<Input type="password" startIcon={<Lock />} placeholder="Senha" />
<Input type="number" placeholder="Idade" />`,
        components: [
          { props: { type: "email", startIcon: "Mail", placeholder: "seu@email.com" } },
          { props: { type: "password", startIcon: "Lock", placeholder: "Senha" } },
          { props: { type: "number", placeholder: "Idade" } },
        ],
      },
      {
        title: "Cores personalizadas",
        code: `import { Input } from "@/components/ui/input"

<Input 
  customBorderColor="#2c09b9" 
  customFocusColor="#2c09b9" 
  placeholder="Input personalizado" 
/>`,
        props: { customBorderColor: "#2c09b9", customFocusColor: "#2c09b9", placeholder: "Input personalizado" },
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
        props: {},
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
        props: { hover: true },
      },
      {
        title: "Com interactive",
        code: `import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

<Card interactive>
  <CardHeader>
    <CardTitle>Card Interativo</CardTitle>
  </CardHeader>
  <CardContent>
    Clique e passe o mouse sobre mim
  </CardContent>
</Card>`,
        props: { interactive: true },
      },
      {
        title: "Com footer",
        code: `import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
    <CardDescription>Descrição</CardDescription>
  </CardHeader>
  <CardContent>
    Conteúdo do card
  </CardContent>
  <CardFooter>
    <Button>Ação</Button>
  </CardFooter>
</Card>`,
        props: {},
      },
      {
        title: "Com cores personalizadas",
        code: `import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

<Card 
  customBorderColor="#2c09b9" 
  customBgColor="#f0f0ff" 
  customTextColor="#2c09b9"
>
  <CardHeader>
    <CardTitle>Card Personalizado</CardTitle>
  </CardHeader>
  <CardContent>
    Card com cores customizadas
  </CardContent>
</Card>`,
        props: { customBorderColor: "#2c09b9", customBgColor: "#f0f0ff", customTextColor: "#2c09b9" },
      },
      {
        title: "Variações diferentes",
        code: `import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Básico</CardTitle>
  </CardHeader>
  <CardContent>Conteúdo</CardContent>
</Card>
<Card hover>
  <CardHeader>
    <CardTitle>Com Hover</CardTitle>
  </CardHeader>
  <CardContent>Passe o mouse</CardContent>
</Card>
<Card interactive>
  <CardHeader>
    <CardTitle>Interativo</CardTitle>
  </CardHeader>
  <CardContent>Clique e passe o mouse</CardContent>
</Card>`,
        components: [
          { props: {} },
          { props: { hover: true } },
          { props: { interactive: true } },
        ],
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
        type: "'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning' | 'info'",
        default: "'default'",
        description: "Variante visual do badge",
      },
      {
        name: "customColor",
        type: "string",
        description: "Cor personalizada do fundo (apenas para variant default)",
      },
      {
        name: "customTextColor",
        type: "string",
        description: "Cor personalizada do texto (apenas para variant default)",
      },
    ],
    variants: [
      { name: "Default", value: "default", description: "Badge padrão" },
      { name: "Secondary", value: "secondary", description: "Badge secundário" },
      { name: "Destructive", value: "destructive", description: "Para erros ou ações destrutivas" },
      { name: "Outline", value: "outline", description: "Badge com borda" },
      { name: "Success", value: "success", description: "Para sucesso" },
      { name: "Warning", value: "warning", description: "Para avisos" },
      { name: "Info", value: "info", description: "Para informações" },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { Badge } from "@/components/ui/badge"

<Badge>Novo</Badge>`,
        props: { children: "Novo" },
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
      {
        name: "customColor",
        type: "string",
        description: "Cor personalizada da borda",
      },
      {
        name: "customCheckedColor",
        type: "string",
        description: "Cor personalizada quando marcado",
      },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { Checkbox } from "@/components/ui/checkbox"

<Checkbox />`,
        props: {},
      },
      {
        title: "Marcado",
        code: `import { Checkbox } from "@/components/ui/checkbox"

<Checkbox checked />`,
        props: { checked: true },
      },
      {
        title: "Desabilitado",
        code: `import { Checkbox } from "@/components/ui/checkbox"

<Checkbox disabled />`,
        props: { disabled: true },
      },
      {
        title: "Desabilitado e marcado",
        code: `import { Checkbox } from "@/components/ui/checkbox"

<Checkbox checked disabled />`,
        props: { checked: true, disabled: true },
      },
      {
        title: "Com cores personalizadas",
        code: `import { Checkbox } from "@/components/ui/checkbox"

<Checkbox 
  customColor="#2c09b9" 
  customCheckedColor="#2c09b9" 
/>`,
        props: { customColor: "#2c09b9", customCheckedColor: "#2c09b9" },
      },
      {
        title: "Estados diferentes",
        code: `import { Checkbox } from "@/components/ui/checkbox"

<Checkbox />
<Checkbox checked />
<Checkbox disabled />
<Checkbox checked disabled />`,
        components: [
          { props: {} },
          { props: { checked: true } },
          { props: { disabled: true } },
          { props: { checked: true, disabled: true } },
        ],
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
      {
        name: "size",
        type: "'sm' | 'default' | 'lg'",
        default: "'default'",
        description: "Tamanho do switch",
      },
      {
        name: "customColor",
        type: "string",
        description: "Cor personalizada para ambos os estados",
      },
      {
        name: "customCheckedColor",
        type: "string",
        description: "Cor personalizada quando marcado",
      },
      {
        name: "customUncheckedColor",
        type: "string",
        description: "Cor personalizada quando desmarcado",
      },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { Switch } from "@/components/ui/switch"

<Switch />`,
        props: {},
      },
      {
        title: "Marcado",
        code: `import { Switch } from "@/components/ui/switch"

<Switch checked />`,
        props: { checked: true },
      },
      {
        title: "Desabilitado",
        code: `import { Switch } from "@/components/ui/switch"

<Switch disabled />`,
        props: { disabled: true },
      },
      {
        title: "Desabilitado e marcado",
        code: `import { Switch } from "@/components/ui/switch"

<Switch checked disabled />`,
        props: { checked: true, disabled: true },
      },
      {
        title: "Tamanhos diferentes",
        code: `import { Switch } from "@/components/ui/switch"

<Switch size="sm" />
<Switch size="default" />
<Switch size="lg" />`,
        components: [
          { props: { size: "sm" } },
          { props: { size: "default" } },
          { props: { size: "lg" } },
        ],
      },
      {
        title: "Estados diferentes",
        code: `import { Switch } from "@/components/ui/switch"

<Switch />
<Switch checked />
<Switch disabled />
<Switch checked disabled />`,
        components: [
          { props: {} },
          { props: { checked: true } },
          { props: { disabled: true } },
          { props: { checked: true, disabled: true } },
        ],
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
      {
        name: "customColor",
        type: "string",
        description: "Cor personalizada (para TabsList e TabsTrigger)",
      },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Aba 1</TabsTrigger>
    <TabsTrigger value="tab2">Aba 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    <div className="space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  </TabsContent>
  <TabsContent value="tab2">
    <div className="space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  </TabsContent>
</Tabs>`,
        props: { defaultValue: "tab1" },
      },
      {
        title: "Com múltiplas abas",
        code: `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"

<Tabs defaultValue="perfil">
  <TabsList>
    <TabsTrigger value="perfil">Perfil</TabsTrigger>
    <TabsTrigger value="configuracoes">Configurações</TabsTrigger>
    <TabsTrigger value="historico">Histórico</TabsTrigger>
  </TabsList>
  <TabsContent value="perfil">
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-16 w-16 rounded-full" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
      <Skeleton className="h-20 w-full rounded-lg" />
    </div>
  </TabsContent>
  <TabsContent value="configuracoes">
    <div className="space-y-3">
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-3/4" />
    </div>
  </TabsContent>
  <TabsContent value="historico">
    <div className="space-y-2">
      <Skeleton className="h-12 w-full rounded-lg" />
      <Skeleton className="h-12 w-full rounded-lg" />
      <Skeleton className="h-12 w-full rounded-lg" />
    </div>
  </TabsContent>
</Tabs>`,
        props: { defaultValue: "perfil" },
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
      {
        name: "customColor",
        type: "string",
        description: "Cor personalizada da barra de progresso",
      },
      {
        name: "customBgColor",
        type: "string",
        description: "Cor personalizada do fundo",
      },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { Progress } from "@/components/ui/progress"

<Progress value={50} />`,
        props: { value: 50 },
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
      {
        name: "customColor",
        type: "string",
        description: "Cor personalizada do skeleton",
      },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { Skeleton } from "@/components/ui/skeleton"

<Skeleton className="h-4 w-full" />`,
        props: { className: "h-4 w-full" },
      },
      {
        title: "Card de perfil",
        description: "Simulação de um card de perfil com skeleton",
        code: `import { Skeleton } from "@/components/ui/skeleton"

<div className="flex items-center space-x-4">
  <Skeleton className="h-16 w-16 rounded-full" />
  <div className="space-y-2 flex-1">
    <Skeleton className="h-4 w-3/4" />
    <Skeleton className="h-4 w-1/2" />
  </div>
</div>`,
        props: {},
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
        name: "customRingColor",
        type: "string",
        description: "Cor personalizada do ring no hover",
      },
      {
        name: "src",
        type: "string",
        description: "URL da imagem (AvatarImage)",
      },
      {
        name: "alt",
        type: "string",
        description: "Texto alternativo (AvatarImage)",
      },
      {
        name: "customBgColor",
        type: "string",
        description: "Cor personalizada do fundo do fallback (AvatarFallback)",
      },
      {
        name: "className",
        type: "string",
        description: "Classes CSS adicionais",
      },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`,
        props: {},
      },
      {
        title: "Apenas fallback",
        code: `import { Avatar, AvatarFallback } from "@/components/ui/avatar"

<Avatar>
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`,
        props: { variant: "fallback-only" },
      },
      {
        title: "Com cor personalizada no ring",
        code: `import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

<Avatar customRingColor="#2c09b9">
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`,
        props: { customRingColor: "#2c09b9" },
      },
      {
        title: "Com cor personalizada no fallback",
        code: `import { Avatar, AvatarFallback } from "@/components/ui/avatar"

<Avatar>
  <AvatarFallback customBgColor="#2c09b9">JD</AvatarFallback>
</Avatar>`,
        props: { variant: "fallback-only", customBgColor: "#2c09b9" },
      },
      {
        title: "Tamanhos diferentes",
        code: `import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

<div className="flex items-center gap-4">
  <Avatar className="h-8 w-8">
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback className="text-xs">SM</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>MD</AvatarFallback>
  </Avatar>
  <Avatar className="h-16 w-16">
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback className="text-lg">LG</AvatarFallback>
  </Avatar>
</div>`,
        props: { variant: "sizes" },
      },
      {
        title: "Múltiplos avatares",
        code: `import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

<div className="flex -space-x-2">
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
    <AvatarFallback>VC</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>+3</AvatarFallback>
  </Avatar>
</div>`,
        props: { variant: "multiple" },
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
      {
        name: "customColor",
        type: "string",
        description: "Cor personalizada do fundo do popover",
      },
      {
        name: "customBorderColor",
        type: "string",
        description: "Cor personalizada da borda do popover",
      },
      {
        name: "align",
        type: "'start' | 'center' | 'end'",
        description: "Alinhamento do popover em relação ao trigger",
      },
      {
        name: "side",
        type: "'top' | 'right' | 'bottom' | 'left'",
        description: "Lado onde o popover aparece",
      },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"

<Popover>
  <PopoverTrigger>Abrir</PopoverTrigger>
  <PopoverContent>
    <div className="space-y-2">
      <h4 className="font-medium leading-none">Título</h4>
      <p className="text-sm text-muted-foreground">
        Conteúdo do popover aqui.
      </p>
    </div>
  </PopoverContent>
</Popover>`,
        props: {},
      },
      {
        title: "Com conteúdo elaborado",
        code: `import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Abrir Popover</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="space-y-4">
      <div className="space-y-2">
        <h4 className="font-medium leading-none">Configurações</h4>
        <p className="text-sm text-muted-foreground">
          Gerencie suas preferências aqui.
        </p>
      </div>
      <div className="space-y-2">
        <Button className="w-full">Salvar</Button>
        <Button variant="outline" className="w-full">Cancelar</Button>
      </div>
    </div>
  </PopoverContent>
</Popover>`,
        props: { variant: "elaborated" },
      },
      {
        title: "Com diferentes posições",
        code: `import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

<div className="flex flex-wrap gap-4">
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Top</Button>
    </PopoverTrigger>
    <PopoverContent side="top">
      <p className="text-sm">Popover no topo</p>
    </PopoverContent>
  </Popover>
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Right</Button>
    </PopoverTrigger>
    <PopoverContent side="right">
      <p className="text-sm">Popover à direita</p>
    </PopoverContent>
  </Popover>
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Bottom</Button>
    </PopoverTrigger>
    <PopoverContent side="bottom">
      <p className="text-sm">Popover embaixo</p>
    </PopoverContent>
  </Popover>
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Left</Button>
    </PopoverTrigger>
    <PopoverContent side="left">
      <p className="text-sm">Popover à esquerda</p>
    </PopoverContent>
  </Popover>
</div>`,
        props: { variant: "positions" },
      },
      {
        title: "Com cor personalizada",
        code: `import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Abrir</Button>
  </PopoverTrigger>
  <PopoverContent customColor="#2c09b9" customBorderColor="#2c09b9">
    <div className="space-y-2">
      <h4 className="font-medium leading-none text-white">Título</h4>
      <p className="text-sm text-white/80">
        Conteúdo com cor personalizada.
      </p>
    </div>
  </PopoverContent>
</Popover>`,
        props: { customColor: "#2c09b9", customBorderColor: "#2c09b9" },
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
      {
        name: "customColor",
        type: "string",
        description: "Cor personalizada do fundo do menu",
      },
      {
        name: "customBorderColor",
        type: "string",
        description: "Cor personalizada da borda do menu",
      },
      {
        name: "align",
        type: "'start' | 'center' | 'end'",
        description: "Alinhamento do menu em relação ao trigger",
      },
      {
        name: "side",
        type: "'top' | 'right' | 'bottom' | 'left'",
        description: "Lado onde o menu aparece",
      },
      {
        name: "sideOffset",
        type: "number",
        description: "Distância do menu em relação ao trigger",
        default: "4",
      },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Abrir Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Perfil</DropdownMenuItem>
    <DropdownMenuItem>Configurações</DropdownMenuItem>
    <DropdownMenuItem>Sair</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
        props: {},
      },
      {
        title: "Com separadores e labels",
        code: `import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Abrir Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Perfil</DropdownMenuItem>
    <DropdownMenuItem>Configurações</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Sair</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
        props: { variant: "withSeparators" },
      },
      {
        title: "Com shortcuts",
        code: `import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuShortcut } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Ações</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>
      Copiar
      <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem>
      Colar
      <DropdownMenuShortcut>⌘V</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem>
      Recortar
      <DropdownMenuShortcut>⌘X</DropdownMenuShortcut>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
        props: { variant: "withShortcuts" },
      },
      {
        title: "Com checkbox items",
        code: `import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuCheckboxItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Visualização</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Exibir</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuCheckboxItem checked>
      Mostrar barra de status
    </DropdownMenuCheckboxItem>
    <DropdownMenuCheckboxItem>
      Mostrar linha de atividade
    </DropdownMenuCheckboxItem>
    <DropdownMenuCheckboxItem checked>
      Mostrar painel lateral
    </DropdownMenuCheckboxItem>
  </DropdownMenuContent>
</DropdownMenu>`,
        props: { variant: "withCheckboxes" },
      },
      {
        title: "Com submenu",
        code: `import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Mais opções</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Novo arquivo</DropdownMenuItem>
    <DropdownMenuItem>Novo projeto</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>Compartilhar</DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        <DropdownMenuItem>Email</DropdownMenuItem>
        <DropdownMenuItem>Mensagem</DropdownMenuItem>
        <DropdownMenuItem>Link</DropdownMenuItem>
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  </DropdownMenuContent>
</DropdownMenu>`,
        props: { variant: "withSubmenu" },
      },
      {
        title: "Com cor personalizada",
        code: `import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Abrir Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent customColor="#2c09b9" customBorderColor="#2c09b9">
    <DropdownMenuItem customColor="#2c09b9">Perfil</DropdownMenuItem>
    <DropdownMenuItem customColor="#2c09b9">Configurações</DropdownMenuItem>
    <DropdownMenuItem customColor="#2c09b9">Sair</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
        props: { customColor: "#2c09b9", customBorderColor: "#2c09b9" },
      },
    ],
  },
  {
    id: "breadcrumb",
    name: "Breadcrumb",
    description: "Navegação hierárquica com suporte a cores customizáveis.",
    category: "Navegação",
    importPath: "@/components/ui/breadcrumb",
    props: [
      {
        name: "customColor",
        type: "string",
        description: "Cor personalizada para os links e separadores",
      },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/docs">Documentação</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Componentes</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
        props: {},
      },
      {
        title: "Com múltiplos níveis",
        code: `import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/produtos">Produtos</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/produtos/eletronicos">Eletrônicos</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Smartphones</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
        props: { variant: "multiple" },
      },
      {
        title: "Com separador customizado",
        code: `import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Slash } from "lucide-react"

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>
      <Slash />
    </BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbLink href="/docs">Documentação</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>
      <Slash />
    </BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbPage>Componentes</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
        props: { variant: "customSeparator" },
      },
      {
        title: "Com ellipsis",
        code: `import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage, BreadcrumbEllipsis } from "@/components/ui/breadcrumb"

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbEllipsis />
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/docs/componentes">Componentes</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
        props: { variant: "ellipsis" },
      },
      {
        title: "Com cor personalizada",
        code: `import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"

<Breadcrumb customColor="#2c09b9">
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/" customColor="#2c09b9">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator customColor="#2c09b9" />
    <BreadcrumbItem>
      <BreadcrumbLink href="/docs" customColor="#2c09b9">Documentação</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator customColor="#2c09b9" />
    <BreadcrumbItem>
      <BreadcrumbPage customColor="#2c09b9">Componentes</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
        props: { customColor: "#2c09b9" },
      },
    ],
  },
  {
    id: "pagination",
    name: "Pagination",
    description: "Componente de paginação com suporte a múltiplos idiomas.",
    category: "Navegação",
    importPath: "@/components/ui/pagination",
    props: [
      {
        name: "customColor",
        type: "string",
        description: "Cor personalizada para os links e botões",
      },
      {
        name: "showPrevious",
        type: "boolean",
        description: "Mostrar botão anterior",
      },
      {
        name: "showNext",
        type: "boolean",
        description: "Mostrar botão próximo",
      },
      {
        name: "language",
        type: "'en' | 'pt' | 'es' | 'fr' | 'de' | 'it'",
        description: "Idioma para os botões Previous/Next",
      },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination"

<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationLink href="/?page=1" isActive>1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/?page=2">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/?page=3">3</PaginationLink>
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
        props: {},
      },
      {
        title: "Com botões Previous/Next",
        code: `import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext } from "@/components/ui/pagination"

<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="/?page=1" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/?page=1">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/?page=2" isActive>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/?page=3">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="/?page=3" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
        props: { variant: "withButtons" },
      },
      {
        title: "Com múltiplas páginas",
        code: `import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext } from "@/components/ui/pagination"

<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="/?page=4" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/?page=1">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/?page=2">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/?page=3">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/?page=4" isActive>4</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/?page=5">5</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/?page=6">6</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="/?page=5" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
        props: { variant: "multiple" },
      },
      {
        title: "Com ellipsis",
        code: `import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis } from "@/components/ui/pagination"

<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="/?page=5" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/?page=1">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/?page=4">4</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/?page=5" isActive>5</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/?page=6">6</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/?page=10">10</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="/?page=6" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
        props: { variant: "ellipsis" },
      },
      {
        title: "Com cor personalizada",
        code: `import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext } from "@/components/ui/pagination"

<Pagination customColor="#2c09b9">
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="/?page=1" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/?page=1">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/?page=2" isActive>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/?page=3">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="/?page=3" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
        props: { customColor: "#2c09b9" },
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
      {
        name: "primaryColor",
        type: "string",
        description: "Cor primária do calendário (para datas selecionadas)",
      },
      {
        name: "accentColor",
        type: "string",
        description: "Cor de destaque do calendário (para range médio e hoje)",
      },
      {
        name: "buttonVariant",
        type: "'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'",
        default: "'ghost'",
        description: "Variante dos botões de navegação",
      },
      {
        name: "showOutsideDays",
        type: "boolean",
        default: "true",
        description: "Mostrar dias fora do mês atual",
      },
      {
        name: "fixedWidth",
        type: "string | number",
        description: "Largura fixa do calendário",
      },
      {
        name: "fixedHeight",
        type: "string | number",
        description: "Altura fixa do calendário",
      },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { Calendar } from "@/components/ui/calendar"

<Calendar />`,
        props: {},
      },
      {
        title: "Modo range",
        code: `import { Calendar } from "@/components/ui/calendar"

<Calendar mode="range" />`,
        props: { mode: "range" },
      },
      {
        title: "Modo múltiplo",
        code: `import { Calendar } from "@/components/ui/calendar"

<Calendar mode="multiple" />`,
        props: { mode: "multiple" },
      },
      {
        title: "Com cores personalizadas",
        code: `import { Calendar } from "@/components/ui/calendar"

<Calendar primaryColor="#2c09b9" accentColor="#8b5cf6" />`,
        props: { primaryColor: "#2c09b9", accentColor: "#8b5cf6" },
      },
      {
        title: "Sem dias externos",
        code: `import { Calendar } from "@/components/ui/calendar"

<Calendar showOutsideDays={false} />`,
        props: { showOutsideDays: false },
      },
      {
        title: "Com dimensões fixas",
        code: `import { Calendar } from "@/components/ui/calendar"

<Calendar fixedWidth={400} fixedHeight={400} />`,
        props: { fixedWidth: 400, fixedHeight: 400 },
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
        name: "date",
        type: "Date",
        description: "Data selecionada",
      },
      {
        name: "onSelect",
        type: "(date: Date | undefined) => void",
        description: "Callback quando uma data é selecionada",
      },
      {
        name: "placeholder",
        type: "string",
        default: "'Pick a date'",
        description: "Texto placeholder quando nenhuma data está selecionada",
      },
      {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "Desabilita o seletor de data",
      },
      {
        name: "primaryColor",
        type: "string",
        description: "Cor primária do calendário e botão",
      },
      {
        name: "accentColor",
        type: "string",
        description: "Cor de destaque do calendário",
      },
      {
        name: "className",
        type: "string",
        description: "Classes CSS adicionais",
      },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { DatePicker } from "@/components/ui/date-picker"

<DatePicker />`,
        props: {},
      },
      {
        title: "Com placeholder customizado",
        code: `import { DatePicker } from "@/components/ui/date-picker"

<DatePicker placeholder="Selecione uma data" />`,
        props: { placeholder: "Selecione uma data" },
      },
      {
        title: "Desabilitado",
        code: `import { DatePicker } from "@/components/ui/date-picker"

<DatePicker disabled />`,
        props: { disabled: true },
      },
      {
        title: "Com cores personalizadas",
        code: `import { DatePicker } from "@/components/ui/date-picker"

<DatePicker primaryColor="#2c09b9" accentColor="#8b5cf6" />`,
        props: { primaryColor: "#2c09b9", accentColor: "#8b5cf6" },
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
      {
        name: "customColor",
        type: "string",
        description: "Cor personalizada do divisor",
      },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { Divider } from "@/components/ui/divider"

<Divider />`,
        props: {},
      },
      {
        title: "Vertical",
        code: `import { Divider } from "@/components/ui/divider"

<div className="flex items-center gap-4 h-20">
  <span>Esquerda</span>
  <Divider orientation="vertical" />
  <span>Direita</span>
</div>`,
        props: { orientation: "vertical" },
      },
      {
        title: "Orientações diferentes",
        code: `import { Divider } from "@/components/ui/divider"

<Divider />
<div className="flex items-center gap-4 h-20">
  <span>Esquerda</span>
  <Divider orientation="vertical" />
  <span>Direita</span>
</div>`,
        components: [
          { props: {} },
          { props: { orientation: "vertical" } },
        ],
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
      {
        name: "customColor",
        type: "string",
        description: "Cor personalizada do fundo do drawer",
      },
      {
        name: "customBorderColor",
        type: "string",
        description: "Cor personalizada da borda do drawer",
      },
      {
        name: "shouldScaleBackground",
        type: "boolean",
        description: "Se deve escalar o fundo quando aberto",
        default: "true",
      },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Abrir Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Você tem certeza?</DrawerTitle>
      <DrawerDescription>
        Esta ação não pode ser desfeita.
      </DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Confirmar</Button>
      <Button variant="outline">Cancelar</Button>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`,
        props: {},
      },
      {
        title: "Com conteúdo elaborado",
        code: `import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Abrir Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Configurações</DrawerTitle>
      <DrawerDescription>
        Gerencie suas preferências aqui.
      </DrawerDescription>
    </DrawerHeader>
    <div className="p-4 space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Nome</label>
        <Input placeholder="Digite seu nome" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Email</label>
        <Input type="email" placeholder="Digite seu email" />
      </div>
    </div>
    <DrawerFooter>
      <Button>Salvar</Button>
      <Button variant="outline">Cancelar</Button>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`,
        props: { variant: "elaborated" },
      },
      {
        title: "Com cor personalizada",
        code: `import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Abrir Drawer</Button>
  </DrawerTrigger>
  <DrawerContent customColor="#2c09b9" customBorderColor="#2c09b9">
    <DrawerHeader>
      <DrawerTitle className="text-white">Título</DrawerTitle>
      <DrawerDescription className="text-white/80">
        Conteúdo com cor personalizada.
      </DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button className="bg-white text-[#2c09b9] hover:bg-white/90">Confirmar</Button>
      <Button variant="outline" className="border-white text-white hover:bg-white/10">Cancelar</Button>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`,
        props: { customColor: "#2c09b9", customBorderColor: "#2c09b9" },
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
      {
        name: "customBgColor",
        type: "string",
        description: "Cor personalizada do fundo do modal",
      },
      {
        name: "customBorderColor",
        type: "string",
        description: "Cor personalizada da borda do modal",
      },
      {
        name: "customOverlayColor",
        type: "string",
        description: "Cor personalizada do overlay (fundo escuro)",
      },
    ],
    examples: [
      {
        title: "Básico",
        code: `import { Modal, ModalTrigger, ModalContent, ModalHeader, ModalTitle, ModalDescription, ModalFooter } from "@/components/ui/modal"
import { Button } from "@/components/ui/button"

<Modal>
  <ModalTrigger asChild>
    <Button variant="outline">Abrir Modal</Button>
  </ModalTrigger>
  <ModalContent>
    <ModalHeader>
      <ModalTitle>Você tem certeza?</ModalTitle>
      <ModalDescription>
        Esta ação não pode ser desfeita. Isso irá excluir permanentemente sua conta.
      </ModalDescription>
    </ModalHeader>
    <ModalFooter>
      <Button variant="destructive">Excluir</Button>
      <Button variant="outline">Cancelar</Button>
    </ModalFooter>
  </ModalContent>
</Modal>`,
        props: {},
      },
      {
        title: "Com conteúdo elaborado",
        code: `import { Modal, ModalTrigger, ModalContent, ModalHeader, ModalTitle, ModalDescription, ModalFooter } from "@/components/ui/modal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

<Modal>
  <ModalTrigger asChild>
    <Button variant="outline">Abrir Modal</Button>
  </ModalTrigger>
  <ModalContent>
    <ModalHeader>
      <ModalTitle>Editar Perfil</ModalTitle>
      <ModalDescription>
        Faça alterações no seu perfil aqui. Clique em salvar quando terminar.
      </ModalDescription>
    </ModalHeader>
    <div className="space-y-4 py-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Nome</label>
        <Input placeholder="Digite seu nome" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Email</label>
        <Input type="email" placeholder="Digite seu email" />
      </div>
    </div>
    <ModalFooter>
      <Button>Salvar alterações</Button>
      <Button variant="outline">Cancelar</Button>
    </ModalFooter>
  </ModalContent>
</Modal>`,
        props: { variant: "elaborated" },
      },
      {
        title: "Com cor personalizada",
        code: `import { Modal, ModalTrigger, ModalContent, ModalHeader, ModalTitle, ModalDescription, ModalFooter } from "@/components/ui/modal"
import { Button } from "@/components/ui/button"

<Modal>
  <ModalTrigger asChild>
    <Button variant="outline">Abrir Modal</Button>
  </ModalTrigger>
  <ModalContent customBgColor="#2c09b9" customBorderColor="#2c09b9" customOverlayColor="#2c09b9CC">
    <ModalHeader>
      <ModalTitle className="text-white">Título</ModalTitle>
      <ModalDescription className="text-white/80">
        Conteúdo com cor personalizada.
      </ModalDescription>
    </ModalHeader>
    <ModalFooter>
      <Button className="bg-white text-[#2c09b9] hover:bg-white/90">Confirmar</Button>
      <Button variant="outline" className="border-white text-white hover:bg-white/10">Cancelar</Button>
    </ModalFooter>
  </ModalContent>
</Modal>`,
        props: { customBgColor: "#2c09b9", customBorderColor: "#2c09b9", customOverlayColor: "#2c09b9CC" },
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

