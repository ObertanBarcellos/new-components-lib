import type { Meta, StoryObj } from '@storybook/react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';

const meta = {
  title: 'UI/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    customColor: {
      control: 'color',
    },
  },
  args: {
    customColor: '#2c09b9',
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    customColor: '#2c09b9',
  },
  render: (args) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="default">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent customColor={args.customColor}>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <span className="text-lg">ℹ️</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This is an information tooltip</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};


