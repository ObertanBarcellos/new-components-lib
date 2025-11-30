import type { Meta, StoryObj } from '@storybook/react';
import { ScrollShadow } from '@/components/ui/scroll-shadow';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const meta = {
  title: 'UI/ScrollShadow',
  component: ScrollShadow,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal', 'both'],
    },
    shadowSize: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
    },
  },
} satisfies Meta<typeof ScrollShadow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Lista de Itens</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollShadow orientation="vertical" className="h-64 rounded-md">
          <div className="space-y-3 pr-2">
            {Array.from({ length: 20 }).map((_, i) => (
              <div 
                key={i} 
                className="p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-border/50 hover:border-primary/50 transition-colors"
              >
                <div className="font-semibold text-sm">Item {i + 1}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Descrição do item {i + 1} com conteúdo adicional
                </div>
              </div>
            ))}
          </div>
        </ScrollShadow>
      </CardContent>
    </Card>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Cards Horizontais</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollShadow orientation="horizontal" className="rounded-md">
          <div className="flex gap-4 pb-2">
            {Array.from({ length: 15 }).map((_, i) => (
              <div 
                key={i} 
                className="flex-shrink-0 w-48 p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-border/50 hover:border-primary/50 transition-colors"
              >
                <div className="font-bold text-lg mb-2">Card {i + 1}</div>
                <div className="text-sm text-muted-foreground">
                  Conteúdo do card com informações importantes
                </div>
              </div>
            ))}
          </div>
        </ScrollShadow>
      </CardContent>
    </Card>
  ),
};

export const Both: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Tabela com Scroll</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollShadow orientation="both" className="h-64 rounded-md">
          <div className="space-y-2 pr-2 pb-2">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="flex gap-4 p-3 bg-muted/50 rounded-md border border-border/30">
                {Array.from({ length: 8 }).map((_, j) => (
                  <div key={j} className="flex-shrink-0 w-24 text-sm font-medium whitespace-nowrap">
                    {i + 1}-{j + 1}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </ScrollShadow>
      </CardContent>
    </Card>
  ),
};

export const CustomColor: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Com Cor Personalizada</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollShadow 
          orientation="vertical" 
          className="h-64 rounded-md"
          shadowColor="rgba(59, 130, 246, 0.3)"
        >
          <div className="space-y-3 pr-2">
            {Array.from({ length: 20 }).map((_, i) => (
              <div 
                key={i} 
                className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200/50 dark:border-blue-800/50"
              >
                <div className="font-semibold text-sm text-blue-900 dark:text-blue-100">
                  Item {i + 1}
                </div>
                <div className="text-xs text-blue-700 dark:text-blue-300 mt-1">
                  Com sombra azul personalizada
                </div>
              </div>
            ))}
          </div>
        </ScrollShadow>
      </CardContent>
    </Card>
  ),
};

export const ShadowSizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-semibold mb-2">Small Shadow</h3>
        <Card className="w-80">
          <CardContent className="pt-6">
            <ScrollShadow orientation="vertical" shadowSize="sm" className="h-48 rounded-md">
              <div className="space-y-2 pr-2">
                {Array.from({ length: 15 }).map((_, i) => (
                  <div key={i} className="p-3 bg-muted rounded-md">
                    Item {i + 1}
                  </div>
                ))}
              </div>
            </ScrollShadow>
          </CardContent>
        </Card>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Default Shadow</h3>
        <Card className="w-80">
          <CardContent className="pt-6">
            <ScrollShadow orientation="vertical" shadowSize="default" className="h-48 rounded-md">
              <div className="space-y-2 pr-2">
                {Array.from({ length: 15 }).map((_, i) => (
                  <div key={i} className="p-3 bg-muted rounded-md">
                    Item {i + 1}
                  </div>
                ))}
              </div>
            </ScrollShadow>
          </CardContent>
        </Card>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Large Shadow</h3>
        <Card className="w-80">
          <CardContent className="pt-6">
            <ScrollShadow orientation="vertical" shadowSize="lg" className="h-48 rounded-md">
              <div className="space-y-2 pr-2">
                {Array.from({ length: 15 }).map((_, i) => (
                  <div key={i} className="p-3 bg-muted rounded-md">
                    Item {i + 1}
                  </div>
                ))}
              </div>
            </ScrollShadow>
          </CardContent>
        </Card>
      </div>
    </div>
  ),
};


