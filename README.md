# vyse-ui

> Uma biblioteca completa de componentes React moderna, acessível e construída com as melhores práticas da indústria.

[![npm version](https://img.shields.io/npm/v/vyse-ui.svg)](https://www.npmjs.com/package/vyse-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📚 Documentação

**Documentação completa:** [https://new-components-lib.vercel.app/](https://new-components-lib.vercel.app/)

## 🚀 Instalação

Escolha o gerenciador de pacotes de sua preferência:

**npm**
```bash
npm install vyse-ui
```

**pnpm**
```bash
pnpm add vyse-ui
```

**yarn**
```bash
yarn add vyse-ui
```

## 📦 Importação

### Importar Componentes

```tsx
import { Button, Input, Card, Dialog } from 'vyse-ui'
```

### Importar Estilos (Necessário)

```tsx
// Importar estilos CSS (obrigatório)
import 'vyse-ui/styles'
```

> **Importante:** Não esqueça de importar os estilos CSS para que os componentes sejam exibidos corretamente!

## ✨ Características

- 🎨 **Moderno & Acessível** - Construído com Radix UI, seguindo as melhores práticas de acessibilidade WCAG
- 📘 **TypeScript First** - Tipagem completa e IntelliSense para uma experiência de desenvolvimento superior
- 🎭 **Customizável** - Fácil de personalizar com Tailwind CSS e variantes usando CVA
- ⚡ **Performance** - Otimizado para performance com tree-shaking e bundle size reduzido
- ✅ **Bem Testado** - Componentes testados e validados para garantir qualidade e confiabilidade
- 🌐 **Open Source** - Código aberto, mantido com cuidado e aberto para contribuições da comunidade

## 🎨 Componentes Disponíveis

### Formulários
- **Button** - Botões com variantes (default, destructive, outline, secondary, ghost, link, success)
- **Input** - Campo de entrada com suporte a ícones e estados de erro
- **Textarea** - Área de texto com redimensionamento
- **Select** - Seleção dropdown customizável
- **Checkbox** - Caixa de seleção com animações
- **Switch** - Interruptor com tamanhos variáveis
- **DatePicker** - Seletor de data com calendário
- **DateInput** - Input de data com calendário integrado
- **DateRangePicker** - Seletor de intervalo de datas
- **FileUpload** - Upload de arquivos com preview
- **FormField** - Campo de formulário com label e mensagens de erro

### Navegação
- **Breadcrumb** - Navegação hierárquica com cores customizáveis
- **Pagination** - Paginação com suporte a múltiplos idiomas
- **Tabs** - Abas com conteúdo organizado
- **Sidebar** - Barra lateral navegável
- **CommandPalette** - Paleta de comandos para navegação rápida

### Feedback
- **Progress** - Barra de progresso linear
- **CircularProgress** - Indicador de progresso circular
- **Spinner** - Indicador de carregamento
- **Skeleton** - Placeholder de conteúdo
- **Badge** - Etiquetas com múltiplas variantes
- **Rating** - Sistema de avaliação com estrelas

### Overlay
- **Dialog** - Modal dialog
- **Drawer** - Drawer lateral
- **Popover** - Popover flutuante
- **Tooltip** - Dica de ferramenta
- **DropdownMenu** - Menu dropdown
- **Modal** - Modal customizável

### Dados
- **Card** - Card com hover e interatividade
- **Calendar** - Calendário completo com seleção de datas
- **Avatar** - Avatar de usuário
- **Carousel** - Carrossel de imagens/conteúdo
- **Table** - Tabela de dados (via Radix UI)

### Outros
- **Accordion** - Acordeão expansível
- **Divider** - Divisor visual
- **Snippet** - Bloco de código
- **KeyboardKey** - Tecla de teclado
- **ScrollShadow** - Sombra de rolagem
- **Sonner** - Sistema de notificações toast
- **RichTextEditor** - Editor de texto rico
- **ColorPicker** - Seletor de cores
- **IconButton** - Botão com ícone

## 💻 Uso Básico

```tsx
import { Button, Input, Card } from 'vyse-ui'
import 'vyse-ui/styles'

function App() {
  return (
    <div>
      <Button variant="default">Clique aqui</Button>
      <Input placeholder="Digite algo..." />
      <Card>
        <h2>Título do Card</h2>
        <p>Conteúdo do card</p>
      </Card>
    </div>
  )
}
```

## 🎨 Customização de Cores

Todos os componentes suportam personalização de cores através de props específicas:

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

// Badge com cor customizada
<Badge customColor="#8b5cf6">
  Novo
</Badge>
```

### Cor Padrão

Todos os componentes têm a cor padrão `#2c09b9` aplicada quando `customColor` não é especificado.

## 🛠️ Tecnologias

- **React 19** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utility-first
- **Radix UI** - Componentes headless acessíveis
- **class-variance-authority** - Gerenciamento de variantes de componentes

## 📋 Requisitos

- React 18+ ou 19+
- React DOM 18+ ou 19+

## 📖 Documentação Completa

Para exemplos detalhados, props, variantes e guias de uso, visite nossa documentação:

**[https://new-components-lib.vercel.app/](https://new-components-lib.vercel.app/)**

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👤 Autor

**Obertan**

- Email: obertanbarcellos@gmail.com
- GitHub: [@obertanbarcellos](https://github.com/obertanbarcellos)

## 🔗 Links Úteis

- [Documentação](https://new-components-lib.vercel.app/)
- [Repositório GitHub](https://github.com/obertanbarcellos/new-components-lib)
- [NPM Package](https://www.npmjs.com/package/vyse-ui)
- [Radix UI](https://www.radix-ui.com)
- [Tailwind CSS](https://tailwindcss.com)
