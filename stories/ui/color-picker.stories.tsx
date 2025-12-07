import type { Meta, StoryObj } from '@storybook/react';
import { ColorPicker } from '@/components/ui/color-picker';
import { useState } from 'react';

const meta = {
  title: 'UI/ColorPicker',
  component: ColorPicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'color',
    },
    format: {
      control: 'select',
      options: ['hex', 'rgb', 'rgba'],
    },
    showAlpha: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    value: '#2c09b9',
    format: 'hex',
    showAlpha: false,
    size: 'md',
    disabled: false,
  },
} satisfies Meta<typeof ColorPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '#2c09b9',
  },
  render: (args) => {
    const [color, setColor] = useState(args.value || '#2c09b9');
    return (
      <div className="space-y-4">
        <ColorPicker {...args} value={color} onChange={setColor} />
        <div className="text-sm text-muted-foreground">
          Cor selecionada: {color}
        </div>
      </div>
    );
  },
};

export const WithAlpha: Story = {
  args: {
    value: '#2c09b9',
    showAlpha: true,
    format: 'rgba',
  },
  render: (args) => {
    const [color, setColor] = useState(args.value || 'rgba(44, 9, 185, 0.5)');
    return (
      <div className="space-y-4">
        <ColorPicker {...args} value={color} onChange={setColor} />
        <div className="text-sm text-muted-foreground">
          Cor selecionada: {color}
        </div>
      </div>
    );
  },
};

export const HexFormat: Story = {
  args: {
    value: '#ff0000',
    format: 'hex',
  },
  render: (args) => {
    const [color, setColor] = useState(args.value || '#ff0000');
    return (
      <div className="space-y-4">
        <ColorPicker {...args} value={color} onChange={setColor} />
        <div className="text-sm text-muted-foreground">
          Cor selecionada: {color}
        </div>
      </div>
    );
  },
};

export const RgbFormat: Story = {
  args: {
    value: 'rgb(44, 9, 185)',
    format: 'rgb',
  },
  render: (args) => {
    const [color, setColor] = useState(args.value || 'rgb(44, 9, 185)');
    return (
      <div className="space-y-4">
        <ColorPicker {...args} value={color} onChange={setColor} />
        <div className="text-sm text-muted-foreground">
          Cor selecionada: {color}
        </div>
      </div>
    );
  },
};

export const RgbaFormat: Story = {
  args: {
    value: 'rgba(44, 9, 185, 0.7)',
    format: 'rgba',
    showAlpha: true,
  },
  render: (args) => {
    const [color, setColor] = useState(args.value || 'rgba(44, 9, 185, 0.7)');
    return (
      <div className="space-y-4">
        <ColorPicker {...args} value={color} onChange={setColor} />
        <div className="text-sm text-muted-foreground">
          Cor selecionada: {color}
        </div>
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    value: '#2c09b9',
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    value: '#2c09b9',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    value: '#2c09b9',
    size: 'lg',
  },
};

export const MultipleColors: Story = {
  render: () => {
    const [color1, setColor1] = useState('#ff0000');
    const [color2, setColor2] = useState('#00ff00');
    const [color3, setColor3] = useState('#0000ff');
    
    return (
      <div className="flex gap-4 items-center">
        <ColorPicker value={color1} onChange={setColor1} />
        <ColorPicker value={color2} onChange={setColor2} />
        <ColorPicker value={color3} onChange={setColor3} />
      </div>
    );
  },
};

