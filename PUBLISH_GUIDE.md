# Guia de Publicação no NPM

Este guia explica como publicar a biblioteca `burnify-ui` no npm.

## 📋 Pré-requisitos

1. Ter uma conta no npm (crie em https://www.npmjs.com/signup)
2. Estar logado no npm via CLI:
   ```bash
   npm login
   ```

## 🔧 Configuração Inicial

### 1. Atualizar informações do pacote

Edite o `package.json` e atualize:
- `name`: Nome único do seu pacote (ex: `@seu-usuario/burnify-ui`)
- `version`: Versão inicial (ex: `0.1.0`)
- `author`: Seu nome/email
- `repository.url`: URL do seu repositório Git
- `description`: Descrição clara da biblioteca

### 2. Verificar nome disponível

Antes de publicar, verifique se o nome está disponível:
```bash
npm view burnify-ui
```

Se retornar um erro 404, o nome está disponível.

## 🏗️ Build da Biblioteca

Antes de publicar, compile a biblioteca:

```bash
pnpm install
pnpm build:lib
```

Isso criará a pasta `dist/` com os arquivos compilados.

## 📦 Publicação

### Publicação Inicial

```bash
npm publish --access public
```

Se o nome do pacote começar com `@seu-usuario/`, você precisa usar `--access public`.

### Atualizações Futuras

1. Atualize a versão no `package.json` seguindo [Semantic Versioning](https://semver.org/):
   - `0.1.0` → `0.1.1` (patch - correções)
   - `0.1.0` → `0.2.0` (minor - novas features)
   - `0.1.0` → `1.0.0` (major - breaking changes)

2. Publique novamente:
   ```bash
   npm publish
   ```

### Publicação com Tag

Para publicar versões beta/alpha:
```bash
npm publish --tag beta
```

## 📝 Estrutura do Pacote Publicado

O pacote publicado conterá:
- `dist/` - Código compilado (JS, ESM, tipos TypeScript)
- `dist/styles.css` - Estilos CSS da biblioteca
- `README.md` - Documentação
- `package.json` - Metadados do pacote

## 🚀 Como Usar Após Publicação

### Instalação

```bash
npm install burnify-ui
# ou
pnpm add burnify-ui
# ou
yarn add burnify-ui
```

### Uso

```tsx
// Importar componentes
import { Button, Input, Card } from "burnify-ui"

// Importar estilos (importante!)
import "burnify-ui/styles"

// Usar componentes
function App() {
  return (
    <div>
      <Button>Clique aqui</Button>
      <Input placeholder="Digite algo..." />
    </div>
  )
}
```

## ⚠️ Importante

1. **Estilos CSS**: Os usuários precisam importar os estilos CSS:
   ```tsx
   import "burnify-ui/styles"
   ```

2. **Dependências**: Certifique-se de que todas as dependências estão listadas corretamente no `package.json`:
   - `dependencies`: Dependências necessárias em runtime
   - `peerDependencies`: Dependências que o usuário deve fornecer (React, React-DOM)

3. **Tailwind CSS**: Os usuários precisam configurar Tailwind CSS em seus projetos para os estilos funcionarem corretamente.

## 🔍 Verificação

Após publicar, verifique se o pacote está disponível:
```bash
npm view burnify-ui
```

## 📚 Recursos Adicionais

- [Documentação oficial do npm](https://docs.npmjs.com/)
- [Semantic Versioning](https://semver.org/)
- [Como publicar pacotes npm](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)

