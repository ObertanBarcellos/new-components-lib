export interface CreditItem {
  name: string
  version: string
  category: string
  docsUrl: string
  description: string
}

export const creditCategories = [
  "UI Libraries",
  "Styling",
  "Animations",
  "Build Tools",
  "Testing",
  "Utilities",
  "Core Technologies",
] as const

export type CreditCategory = (typeof creditCategories)[number]

export const credits: CreditItem[] = [
  // UI Libraries
  {
    name: "Radix UI",
    version: "^1.2.12",
    category: "UI Libraries",
    docsUrl: "https://www.radix-ui.com/",
    description: "Biblioteca de componentes primitivos acessíveis e não estilizados para React",
  },
  {
    name: "TipTap",
    version: "^3.13.0",
    category: "UI Libraries",
    docsUrl: "https://tiptap.dev/",
    description: "Editor de texto rico extensível e sem dependências para React",
  },
  {
    name: "Lucide React",
    version: "^0.555.0",
    category: "UI Libraries",
    docsUrl: "https://lucide.dev/",
    description: "Biblioteca de ícones moderna e bonita para React",
  },
  {
    name: "CMDK",
    version: "^1.1.1",
    category: "UI Libraries",
    docsUrl: "https://cmdk.paco.me/",
    description: "Componente de paleta de comandos para React",
  },
  {
    name: "Vaul",
    version: "^1.1.2",
    category: "UI Libraries",
    docsUrl: "https://vaul.emilkowal.ski/",
    description: "Componente de drawer acessível para React",
  },
  {
    name: "Embla Carousel",
    version: "^8.6.0",
    category: "UI Libraries",
    docsUrl: "https://www.embla-carousel.com/",
    description: "Biblioteca de carrossel leve e extensível para React",
  },
  {
    name: "React Day Picker",
    version: "^9.11.3",
    category: "UI Libraries",
    docsUrl: "https://react-day-picker.js.org/",
    description: "Componente de calendário flexível e customizável para React",
  },
  {
    name: "Sonner",
    version: "^2.0.7",
    category: "UI Libraries",
    docsUrl: "https://sonner.emilkowal.ski/",
    description: "Biblioteca de notificações toast elegante para React",
  },
  {
    name: "Shiki",
    version: "^3.19.0",
    category: "UI Libraries",
    docsUrl: "https://shiki.matsu.io/",
    description: "Syntax highlighter baseado em TextMate para código",
  },
  {
    name: "Fuse.js",
    version: "^7.1.0",
    category: "UI Libraries",
    docsUrl: "https://fusejs.io/",
    description: "Biblioteca de busca difusa leve e poderosa",
  },
  // Styling
  {
    name: "Tailwind CSS",
    version: "^4",
    category: "Styling",
    docsUrl: "https://tailwindcss.com/docs",
    description: "Framework CSS utility-first para desenvolvimento rápido",
  },
  {
    name: "Tailwind Animate",
    version: "^1.0.7",
    category: "Styling",
    docsUrl: "https://github.com/jamiebuilds/tailwindcss-animate",
    description: "Plugin de animações para Tailwind CSS",
  },
  // Animations
  {
    name: "GSAP",
    version: "^3.14.1",
    category: "Animations",
    docsUrl: "https://gsap.com/docs/",
    description: "Biblioteca de animações JavaScript de alto desempenho",
  },
  // Build Tools
  {
    name: "Next.js",
    version: "16.0.7",
    category: "Build Tools",
    docsUrl: "https://nextjs.org/docs",
    description: "Framework React para produção com renderização otimizada",
  },
  {
    name: "TypeScript",
    version: "^5",
    category: "Build Tools",
    docsUrl: "https://www.typescriptlang.org/docs/",
    description: "Superset tipado do JavaScript que compila para JavaScript",
  },
  {
    name: "TSUP",
    version: "^8.5.1",
    category: "Build Tools",
    docsUrl: "https://tsup.egoist.dev/",
    description: "Bundler TypeScript baseado em esbuild",
  },
  {
    name: "Vite",
    version: "^7.2.4",
    category: "Build Tools",
    docsUrl: "https://vitejs.dev/",
    description: "Ferramenta de build rápida para desenvolvimento frontend",
  },
  {
    name: "ESLint",
    version: "^9",
    category: "Build Tools",
    docsUrl: "https://eslint.org/docs/latest/",
    description: "Ferramenta de linting para JavaScript e TypeScript",
  },
  {
    name: "Storybook",
    version: "^10.1.2",
    category: "Build Tools",
    docsUrl: "https://storybook.js.org/docs",
    description: "Ferramenta para desenvolvimento e documentação de componentes",
  },
  // Testing
  {
    name: "Vitest",
    version: "^4.0.14",
    category: "Testing",
    docsUrl: "https://vitest.dev/",
    description: "Framework de testes rápido baseado em Vite",
  },
  {
    name: "Playwright",
    version: "^1.57.0",
    category: "Testing",
    docsUrl: "https://playwright.dev/",
    description: "Ferramenta de automação de testes end-to-end",
  },
  // Utilities
  {
    name: "date-fns",
    version: "^4.1.0",
    category: "Utilities",
    docsUrl: "https://date-fns.org/",
    description: "Biblioteca de funções utilitárias para manipulação de datas",
  },
  {
    name: "clsx",
    version: "^2.1.1",
    category: "Utilities",
    docsUrl: "https://github.com/lukeed/clsx",
    description: "Utilitário para construir strings de className condicionalmente",
  },
  {
    name: "tailwind-merge",
    version: "^3.4.0",
    category: "Utilities",
    docsUrl: "https://github.com/dcastil/tailwind-merge",
    description: "Utilitário para mesclar classes Tailwind CSS sem conflitos",
  },
  {
    name: "class-variance-authority",
    version: "^0.7.1",
    category: "Utilities",
    docsUrl: "https://cva.style/",
    description: "Utilitário para criar variantes de componentes com TypeScript",
  },
  // Core Technologies
  {
    name: "React",
    version: "19.2.1",
    category: "Core Technologies",
    docsUrl: "https://react.dev/",
    description: "Biblioteca JavaScript para construção de interfaces de usuário",
  },
  {
    name: "React DOM",
    version: "19.2.1",
    category: "Core Technologies",
    docsUrl: "https://react.dev/",
    description: "Renderizador React para web e navegadores",
  },
  {
    name: "next-themes",
    version: "^0.4.6",
    category: "Core Technologies",
    docsUrl: "https://github.com/pacocoursey/next-themes",
    description: "Sistema de temas perfeito para Next.js com suporte a dark mode",
  },
]

export function getCreditsByCategory(category: CreditCategory): CreditItem[] {
  return credits.filter((credit) => credit.category === category)
}

export function getAllCredits(): CreditItem[] {
  return credits
}

export function getCreditCategories(): readonly CreditCategory[] {
  return creditCategories
}

