import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from '@/components/ui/progress';

const meta = {
  title: 'UI/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    customColor: {
      control: 'color',
    },
    customBgColor: {
      control: 'color',
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 33,
    customColor: undefined,
    customBgColor: undefined,
  },
};

export const Empty: Story = {
  args: {
    value: 0,
    customColor: undefined,
    customBgColor: undefined,
  },
};

export const Half: Story = {
  args: {
    value: 50,
    customColor: undefined,
    customBgColor: undefined,
  },
};

export const Full: Story = {
  args: {
    value: 100,
    customColor: undefined,
    customBgColor: undefined,
  },
};

export const CustomColor: Story = {
  args: {
    value: 75,
    customColor: "#10b981",
    customBgColor: undefined,
  },
};

export const CustomColors: Story = {
  args: {
    value: 60,
    customColor: "#3b82f6",
    customBgColor: "#e0e7ff",
  },
};

export const Examples: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <div>
        <div className="mb-2 text-sm">Loading (33%)</div>
        <Progress value={33} />
      </div>
      <div>
        <div className="mb-2 text-sm">Halfway (50%)</div>
        <Progress value={50} />
      </div>
      <div>
        <div className="mb-2 text-sm">Almost done (80%)</div>
        <Progress value={80} />
      </div>
      <div>
        <div className="mb-2 text-sm">Complete (100%)</div>
        <Progress value={100} />
      </div>
    </div>
  ),
};


