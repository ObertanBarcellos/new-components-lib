import type { Meta, StoryObj } from '@storybook/react';
import { CircularProgress } from '@/components/ui/circular-progress';

const meta = {
  title: 'UI/CircularProgress',
  component: CircularProgress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
      default: 'default',
    },
    showLabel: {
      control: 'boolean',
    },
    customColor: {
      control: 'color',
    },
  },
  args: {
    value: 45,
    size: 'default',
    customColor: '#2c09b9',
  },
} satisfies Meta<typeof CircularProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 45,
    size: 'default',
    customColor: '#2c09b9',
  },
};

export const Empty: Story = {
  args: {
    value: 0,
  },
};

export const Half: Story = {
  args: {
    value: 50,
  },
};

export const Full: Story = {
  args: {
    value: 100,
  },
};

export const WithLabel: Story = {
  args: {
    value: 75,
    showLabel: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <CircularProgress value={33} size="sm" />
      <CircularProgress value={50} size="default" />
      <CircularProgress value={75} size="lg" />
    </div>
  ),
};

export const Examples: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <CircularProgress value={25} showLabel />
        <div>
          <div className="font-medium">Loading...</div>
          <div className="text-sm text-muted-foreground">25% complete</div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <CircularProgress value={60} showLabel />
        <div>
          <div className="font-medium">Processing</div>
          <div className="text-sm text-muted-foreground">60% complete</div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <CircularProgress value={100} showLabel />
        <div>
          <div className="font-medium">Complete</div>
          <div className="text-sm text-muted-foreground">100% complete</div>
        </div>
      </div>
    </div>
  ),
};


