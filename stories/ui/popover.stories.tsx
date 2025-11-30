import type { Meta, StoryObj } from '@storybook/react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';

const meta = {
  title: 'UI/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    customColor: {
      control: 'color',
    },
    customBorderColor: {
      control: 'color',
    },
  },
  args: {
    customColor: '#2c09b9',
    customBorderColor: '#2c09b9',
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    customColor: '#2c09b9',
    customBorderColor: '#2c09b9',
  },
  render: (args) => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="default">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent customColor={args.customColor} customBorderColor={args.customBorderColor}>
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Dimensions</h4>
          <p className="text-sm text-muted-foreground">
            Set the dimensions for the layer.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open form popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="width">Width</label>
              <input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8 rounded border border-input bg-background px-2 text-sm"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="height">Height</label>
              <input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8 rounded border border-input bg-background px-2 text-sm"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};


