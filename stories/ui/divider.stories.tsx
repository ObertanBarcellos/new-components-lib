import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '@/components/ui/divider';

const meta = {
  title: 'UI/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      default: 'horizontal',
    },
    customColor: {
      control: 'color',
    },
  },
  args: {
    orientation: 'horizontal',
    customColor: '#2c09b9',
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    customColor: '#2c09b9',
  },
  render: (args) => (
    <div className="w-[300px] space-y-4">
      <div>Content above</div>
      <Divider {...args} />
      <div>Content below</div>
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: () => (
    <div className="flex h-[100px] items-center gap-4">
      <div>Left</div>
      <Divider orientation="vertical" />
      <div>Right</div>
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div className="w-[300px]">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Divider />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
    </div>
  ),
};


