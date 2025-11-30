import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@/components/ui/switch';
import { useState } from 'react';

const meta = {
  title: 'UI/Switch',
  component: Switch,
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
    customUncheckedColor: {
      control: 'color',
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    customColor: undefined,
    customCheckedColor: undefined,
    customUncheckedColor: undefined,
    size: 'default',
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked || false);
    return (
      <div className="flex items-center space-x-2">
        <Switch
          id="airplane-mode"
          checked={checked}
          onCheckedChange={setChecked}
          customColor={args.customColor}
          customCheckedColor={args.customCheckedColor}
          customUncheckedColor={args.customUncheckedColor}
          size={args.size}
          disabled={args.disabled}
        />
        <label
          htmlFor="airplane-mode"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Airplane Mode
        </label>
      </div>
    );
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    customColor: undefined,
    size: 'default',
  },
};

export const Unchecked: Story = {
  args: {
    checked: false,
    customColor: undefined,
    size: 'default',
  },
};

export const CustomColor: Story = {
  args: {
    checked: true,
    customColor: "#10b981",
    size: 'default',
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center space-x-2">
        <Switch id="disabled-off" disabled />
        <label htmlFor="disabled-off">Disabled off</label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="disabled-on" disabled checked />
        <label htmlFor="disabled-on">Disabled on</label>
      </div>
    </div>
  ),
};


