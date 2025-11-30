# Burnify Frontend

Frontend do projeto Burnify construído com Next.js, React e TypeScript, utilizando uma biblioteca completa de componentes UI customizáveis.

## 🚀 Tecnologias

- **Next.js 15** - Framework React para produção
- **React 19** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utility-first
- **Radix UI** - Componentes headless acessíveis
- **Storybook** - Desenvolvimento e documentação de componentes
- **class-variance-authority** - Gerenciamento de variantes de componentes

## 📦 Instalação

```bash
# Instalar dependências
pnpm install

# Executar servidor de desenvolvimento
pnpm dev

# Executar Storybook
pnpm storybook

# Build para produção
pnpm build
```

## 🎨 Componentes UI

Este projeto inclui uma biblioteca completa de componentes UI profissionais e customizáveis. Todos os componentes suportam cores personalizadas através da prop `customColor` (padrão: `#2c09b9`).

### Componentes Disponíveis

#### Formulários
- **Button** - Botões com variantes (default, destructive, outline, secondary, ghost, link, success)
- **Input** - Campo de entrada com suporte a ícones e estados de erro
- **Textarea** - Área de texto com redimensionamento
- **Select** - Seleção dropdown customizável
- **Checkbox** - Caixa de seleção com animações
- **Switch** - Interruptor com tamanhos variáveis
- **DatePicker** - Seletor de data com calendário
- **DateInput** - Input de data com calendário integrado
- **DateRangePicker** - Seletor de intervalo de datas

#### Navegação
- **Breadcrumb** - Navegação hierárquica com cores customizáveis
- **Pagination** - Paginação com suporte a múltiplos idiomas
- **Tabs** - Abas com conteúdo organizado

#### Feedback
- **Progress** - Barra de progresso linear
- **CircularProgress** - Indicador de progresso circular
- **Spinner** - Indicador de carregamento
- **Skeleton** - Placeholder de conteúdo
- **Badge** - Etiquetas com múltiplas variantes
- **Alert** - Alertas e notificações

#### Overlay
- **Dialog** - Modal dialog
- **Drawer** - Drawer lateral
- **Popover** - Popover flutuante
- **Tooltip** - Dica de ferramenta
- **DropdownMenu** - Menu dropdown

#### Dados
- **Table** - Tabela de dados
- **Card** - Card com hover e interatividade
- **Calendar** - Calendário completo com seleção de datas
- **Avatar** - Avatar de usuário

#### Outros
- **Divider** - Divisor visual
- **Snippet** - Bloco de código
- **KeyboardKey** - Tecla de teclado
- **ScrollShadow** - Sombra de rolagem
- **Sonner** - Sistema de notificações toast

## 🎨 Customização de Cores

Todos os componentes suportam personalização de cores através de props específicas:

### Exemplos

```tsx
// Button com cor customizada
<Button customColor="#3b82f6">
  Clique aqui
</Button>

// Input com cores de borda e focus
<Input 
  customBorderColor="#10b981"
  customFocusColor="#10b981"
/>

// Card com cores customizadas
<Card 
  customBgColor="#f3f4f6"
  customBorderColor="#e5e7eb"
/>

// Calendar com cores primárias e de destaque
<Calendar 
  primaryColor="#2c09b9"
  accentColor="#6366f1"
/>

// Badge com cor customizada
<Badge customColor="#8b5cf6">
  Novo
</Badge>
```

### Cor Padrão

Todos os componentes têm a cor padrão `#2c09b9` aplicada quando `customColor` não é especificado.

### Cálculo Automático de Contraste

Os componentes calculam automaticamente a cor do texto baseado na cor de fundo para garantir legibilidade:

- Cores claras → Texto preto/escuro
- Cores escuras → Texto branco

## 📚 Storybook

O projeto inclui Storybook para desenvolvimento e documentação de componentes:

```bash
pnpm storybook
```

Acesse `http://localhost:6006` para visualizar todos os componentes e suas variantes.

### Controles Interativos

Todos os stories incluem controles interativos para:
- Alterar cores customizadas em tempo real
- Testar diferentes variantes
- Ajustar tamanhos e propriedades
- Visualizar estados (hover, focus, disabled, etc.)

## 🎯 Características Principais

### ✨ Design Profissional
- Layout moderno e limpo
- Animações suaves e transições refinadas
- Sombras e bordas elegantes
- Hierarquia visual clara

### ♿ Acessibilidade
- Componentes baseados em Radix UI
- Suporte completo a teclado
- ARIA labels e roles apropriados
- Contraste de cores WCAG-compliant

### 🎨 Customização
- Cores personalizáveis em todos os componentes
- Variantes flexíveis
- Tamanhos configuráveis
- Suporte a temas claro/escuro

### 📱 Responsivo
- Design mobile-first
- Componentes adaptáveis
- Breakpoints otimizados

## 📁 Estrutura do Projeto

```
burnify-front/
├── app/                    # App Router do Next.js
├── components/
│   └── ui/                 # Componentes UI
├── lib/
│   └── utils.ts           # Utilitários (cn, getContrastTextColor, etc.)
├── stories/
│   └── ui/                # Stories do Storybook
└── public/                # Arquivos estáticos
```

## 🛠️ Utilitários

### `cn()`
Função helper para combinar classes Tailwind CSS:

```tsx
import { cn } from "@/lib/utils"

<div className={cn("base-class", condition && "conditional-class")} />
```

### `getContrastTextColor()`
Calcula a cor do texto ideal baseado na cor de fundo:

```tsx
import { getContrastTextColor } from "@/lib/utils"

const textColor = getContrastTextColor("#3b82f6") // Retorna "#ffffff" ou "#000000"
```

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev              # Inicia servidor de desenvolvimento
pnpm build            # Build para produção
pnpm start            # Inicia servidor de produção

# Storybook
pnpm storybook        # Inicia Storybook
pnpm build-storybook  # Build do Storybook

# Qualidade de Código
pnpm lint             # Executa ESLint
pnpm type-check       # Verifica tipos TypeScript
```

## 📝 Convenções

### Variantes Padrão
- Todos os componentes com variantes usam `variant="default"` como padrão
- Tamanhos padrão são `size="default"` quando aplicável

### Cores Customizadas
- Prop padrão: `customColor` (quando aplicável)
- Cores específicas: `customBorderColor`, `customFocusColor`, `customBgColor`, etc.
- Cor padrão do sistema: `#2c09b9`

## 🤝 Contribuindo

1. Crie uma branch para sua feature
2. Faça suas alterações
3. Adicione stories no Storybook se necessário
4. Teste em diferentes tamanhos de tela
5. Certifique-se de que a acessibilidade está mantida
6. Abra um Pull Request

## 📄 Licença

Este projeto é privado e proprietário.

## 🔗 Links Úteis

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [Storybook](https://storybook.js.org)
