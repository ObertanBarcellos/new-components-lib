import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '@/components/ui/spinner';

const meta = {
  title: 'UI/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
    },
    customColor: {
      control: 'color',
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    customColor: undefined,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    customColor: undefined,
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    customColor: undefined,
  },
};

export const CustomColor: Story = {
  args: {
    customColor: "#3b82f6",
    size: 'default',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner size="sm" />
      <Spinner size="default" />
      <Spinner size="lg" />
    </div>
  ),
};


