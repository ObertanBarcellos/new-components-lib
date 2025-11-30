import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/button';
import { Heart, Download } from 'lucide-react';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'success'],
      default: 'default',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon', 'icon-sm', 'icon-lg'],
      default: 'default',
    },
    disabled: {
      control: 'boolean',
    },
    customColor: {
      control: 'color',
    },
    loading: {
      control: 'boolean',
    },
  },
  args: {
    variant: 'default',
    size: 'default',
    customColor: '#2c09b9',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    customColor: '#2c09b9',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large',
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Heart className="mr-2 h-4 w-4" />
        Like
      </>
    ),
  },
};

export const IconOnly: Story = {
  args: {
    size: 'icon',
    children: <Download className="h-4 w-4" />,
    'aria-label': 'Download',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
};


