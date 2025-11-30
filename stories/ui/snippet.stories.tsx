import type { Meta, StoryObj } from '@storybook/react';
import { Snippet } from '@/components/ui/snippet';

const meta = {
  title: 'UI/Snippet',
  component: Snippet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
    },
    showCopyButton: {
      control: 'boolean',
    },
    customColor: {
      control: 'color',
    },
    customBorderColor: {
      control: 'color',
    },
  },
  args: {
    text: 'npm install @radix-ui/react-dialog',
    customColor: '#2c09b9',
    customBorderColor: '#2c09b9',
  },
} satisfies Meta<typeof Snippet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'npm install @radix-ui/react-dialog',
    customColor: '#2c09b9',
    customBorderColor: '#2c09b9',
  },
};

export const LongCode: Story = {
  args: {
    text: 'const example = "This is a longer code snippet that demonstrates how the component handles multiple lines of code";',
  },
};

export const WithoutCopyButton: Story = {
  args: {
    text: 'npm install @radix-ui/react-dialog',
    showCopyButton: false,
  },
};

export const JSONExample: Story = {
  args: {
    text: JSON.stringify({ name: 'John', age: 30, city: 'New York' }, null, 2),
  },
};

export const CommandExample: Story = {
  args: {
    text: 'git clone https://github.com/user/repo.git',
  },
};


