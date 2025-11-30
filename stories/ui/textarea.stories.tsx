import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@/components/ui/textarea';

const meta = {
  title: 'UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    rows: {
      control: 'number',
    },
    customBorderColor: {
      control: 'color',
    },
    customFocusColor: {
      control: 'color',
    },
  },
  args: {
    placeholder: 'Type your message here...',
    customBorderColor: '#2c09b9',
    customFocusColor: '#2c09b9',
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Type your message here...',
    customBorderColor: '#2c09b9',
    customFocusColor: '#2c09b9',
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: 'This is a pre-filled textarea with some content.',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled textarea',
  },
};

export const CustomRows: Story = {
  args: {
    rows: 10,
    placeholder: 'Large textarea with 10 rows',
  },
};


