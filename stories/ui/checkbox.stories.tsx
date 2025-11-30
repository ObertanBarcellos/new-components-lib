import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';

const meta = {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
    customColor: {
      control: 'color',
    },
    customCheckedColor: {
      control: 'color',
    },
  },
  args: {
    customColor: '#2c09b9',
    customCheckedColor: '#2c09b9',
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    customColor: '#2c09b9',
    customCheckedColor: '#2c09b9',
  },
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return (
      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          checked={checked}
          onCheckedChange={setChecked}
          customColor={args.customColor}
          customCheckedColor={args.customCheckedColor}
        />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
    );
  },
};

export const Checked: Story = {
  render: () => (
    <Checkbox checked={true} />
  ),
};

export const Unchecked: Story = {
  render: () => (
    <Checkbox checked={false} />
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled-unchecked" disabled />
        <label htmlFor="disabled-unchecked">Disabled unchecked</label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled-checked" disabled checked />
        <label htmlFor="disabled-checked">Disabled checked</label>
      </div>
    </div>
  ),
};


