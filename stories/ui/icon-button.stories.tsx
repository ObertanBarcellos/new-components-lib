import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from '@/components/ui/icon-button';
import { Heart, Download, Settings, Trash2 } from 'lucide-react';

const meta = {
  title: 'UI/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    'aria-label': 'Like',
    children: <Heart className="h-4 w-4" />,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    'aria-label': 'Download',
    children: <Download className="h-3 w-3" />,
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    'aria-label': 'Settings',
    children: <Settings className="h-5 w-5" />,
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    'aria-label': 'Delete',
    children: <Trash2 className="h-4 w-4" />,
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    'aria-label': 'Download',
    children: <Download className="h-4 w-4" />,
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    'aria-label': 'Settings',
    children: <Settings className="h-4 w-4" />,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    'aria-label': 'Disabled',
    children: <Heart className="h-4 w-4" />,
  },
};


