# Guia: Como Publicar uma Biblioteca de Ícones no NPM

## Opções de Publicação

Existem várias formas de publicar ícones no npm. Escolha a que melhor se adequa ao seu caso:

### 1. **Componentes React (Recomendado para React)**
Pacote com componentes React para cada ícone (similar ao `lucide-react`)

### 2. **Fonte Web (Web Font)**
Arquivos de fonte (woff2, woff, ttf) com classes CSS

### 3. **SVG Icons**
Coleção de SVGs exportados como módulos

### 4. **Híbrido**
Combinação das abordagens acima

---

## Opção 1: Componentes React (Mais Popular)

### Estrutura do Projeto

```
meu-pacote-icones/
├── package.json
├── tsconfig.json
├── README.md
├── src/
│   ├── index.ts          # Exportações principais
│   ├── icons/
│   │   ├── Icon1.tsx
│   │   ├── Icon2.tsx
│   │   └── index.ts
│   └── types.ts
└── dist/                 # Arquivos compilados
```

### package.json Exemplo

```json
{
  "name": "@seu-usuario/nome-dos-icones",
  "version": "1.0.0",
  "description": "Biblioteca de ícones React customizada",
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist",
    "README.md"
  ],
  "scripts": {
    "build": "tsup src/index.ts --format cjs,esm --dts",
    "prepublishOnly": "npm run build"
  },
  "keywords": [
    "icons",
    "react",
    "svg",
    "components"
  ],
  "author": "Seu Nome",
  "license": "MIT",
  "peerDependencies": {
    "react": ">=16.8.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "react": "^18.0.0",
    "tsup": "^8.0.0",
    "typescript": "^5.0.0"
  }
}
```

### Exemplo de Ícone (src/icons/Heart.tsx)

```tsx
import * as React from "react"

export interface HeartProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string
  color?: string
}

export const Heart = React.forwardRef<SVGSVGElement, HeartProps>(
  ({ size = 24, color = "currentColor", ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    )
  }
)

Heart.displayName = "Heart"
```

### src/index.ts

```tsx
export * from "./icons"
export type { IconProps } from "./types"
```

### src/icons/index.ts

```tsx
export { Heart } from "./Heart"
export { Star } from "./Star"
// ... outros ícones
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["ES2020", "DOM"],
    "jsx": "react",
    "declaration": true,
    "declarationMap": true,
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### Instalar tsup (build tool)

```bash
pnpm add -D tsup
```

---

## Opção 2: Fonte Web

### Estrutura

```
meu-pacote-icones/
├── package.json
├── fonts/
│   ├── icones.woff2
│   ├── icones.woff
│   └── icones.ttf
├── styles/
│   └── icones.css
└── README.md
```

### package.json

```json
{
  "name": "@seu-usuario/nome-dos-icones",
  "version": "1.0.0",
  "main": "styles/icones.css",
  "files": [
    "fonts",
    "styles"
  ]
}
```

### styles/icones.css

```css
@font-face {
  font-family: 'MeusIcones';
  src: url('../fonts/icones.woff2') format('woff2'),
       url('../fonts/icones.woff') format('woff'),
       url('../fonts/icones.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.icone {
  font-family: 'MeusIcones';
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
}

.icone-heart:before { content: "\e001"; }
.icone-star:before { content: "\e002"; }
```

---

## Passos para Publicar no NPM

### 1. Criar Conta no NPM

```bash
npm login
# ou
npm adduser
```

### 2. Verificar Nome do Pacote

Verifique se o nome está disponível:
```bash
npm search nome-do-seu-pacote
```

### 3. Build do Projeto

```bash
npm run build
# ou
pnpm build
```

### 4. Testar Localmente

```bash
# Em outro projeto
npm link
# ou
pnpm link --global
```

### 5. Publicar

```bash
npm publish
# Para escopo público
npm publish --access public
```

### 6. Versões Futuras

```bash
npm version patch  # 1.0.0 -> 1.0.1
npm version minor  # 1.0.0 -> 1.1.0
npm version major  # 1.0.0 -> 2.0.0
npm publish
```

---

## Exemplo Completo: Setup Inicial

### 1. Criar estrutura básica

```bash
mkdir meu-pacote-icones
cd meu-pacote-icones
npm init -y
```

### 2. Instalar dependências

```bash
pnpm add -D typescript @types/react react tsup
```

### 3. Criar estrutura de pastas

```bash
mkdir -p src/icons
touch src/index.ts src/icons/index.ts
```

### 4. Configurar scripts no package.json

```json
{
  "scripts": {
    "build": "tsup src/index.ts --format cjs,esm --dts --external react",
    "prepublishOnly": "npm run build"
  }
}
```

### 5. Criar .npmignore

```
node_modules
src
tsconfig.json
*.log
.DS_Store
```

---

## Dicas Importantes

### 1. **Tree Shaking**
Exporte ícones individualmente para permitir tree shaking:

```tsx
// ✅ Bom
export { Heart } from "./Heart"
export { Star } from "./Star"

// ❌ Evite
export * from "./icons"
```

### 2. **TypeScript**
Sempre inclua tipos TypeScript (`.d.ts`)

### 3. **README.md**
Inclua exemplos de uso:

```markdown
## Instalação

\`\`\`bash
npm install @seu-usuario/nome-dos-icones
\`\`\`

## Uso

\`\`\`tsx
import { Heart, Star } from '@seu-usuario/nome-dos-icones'

function App() {
  return (
    <div>
      <Heart size={24} color="red" />
      <Star size={32} />
    </div>
  )
}
\`\`\`
```

### 4. **Versionamento Semântico**
Use [Semantic Versioning](https://semver.org/):
- `1.0.0` - Versão inicial
- `1.0.1` - Bug fix
- `1.1.0` - Nova feature (backward compatible)
- `2.0.0` - Breaking changes

### 5. **Licença**
Escolha uma licença (MIT é comum para ícones)

---

## Exemplo Prático: Criar Pacote Agora

Quer que eu crie a estrutura completa para você? Posso:

1. ✅ Criar estrutura de pastas
2. ✅ Configurar package.json
3. ✅ Criar exemplo de ícone
4. ✅ Configurar build com tsup
5. ✅ Criar README.md com exemplos

Diga-me:
- Qual o nome do seu pacote?
- Quantos ícones você tem?
- Prefere componentes React ou fonte web?

