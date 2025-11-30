import type { Meta, StoryObj } from '@storybook/react';
import { KeyboardKey } from '@/components/ui/keyboard-key';

const meta = {
  title: 'UI/KeyboardKey',
  component: KeyboardKey,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    keys: {
      control: 'text',
    },
    customColor: {
      control: 'color',
    },
  },
  args: {
    keys: 'Ctrl',
    customColor: '#2c09b9',
  },
} satisfies Meta<typeof KeyboardKey>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleKey: Story = {
  args: {
    keys: 'Ctrl',
    customColor: '#2c09b9',
  },
};

export const MultipleKeys: Story = {
  args: {
    keys: ['Ctrl', 'K'],
  },
};

export const WithChildren: Story = {
  render: () => <KeyboardKey>Esc</KeyboardKey>,
};

export const CommonShortcuts: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span>Copy:</span>
        <KeyboardKey keys={['Ctrl', 'C']} />
      </div>
      <div className="flex items-center gap-2">
        <span>Paste:</span>
        <KeyboardKey keys={['Ctrl', 'V']} />
      </div>
      <div className="flex items-center gap-2">
        <span>Undo:</span>
        <KeyboardKey keys={['Ctrl', 'Z']} />
      </div>
      <div className="flex items-center gap-2">
        <span>Save:</span>
        <KeyboardKey keys={['Ctrl', 'S']} />
      </div>
    </div>
  ),
};


