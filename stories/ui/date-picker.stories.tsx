import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '@/components/ui/date-picker';
import * as React from 'react';

const meta = {
  title: 'UI/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>();
    return (
      <DatePicker
        date={date}
        onSelect={setDate}
        placeholder="Pick a date"
      />
    );
  },
};

export const WithInitialDate: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
      <DatePicker
        date={date}
        onSelect={setDate}
        placeholder="Pick a date"
      />
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <DatePicker
      disabled
      placeholder="Disabled date picker"
    />
  ),
};

export const CustomPlaceholder: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>();
    return (
      <DatePicker
        date={date}
        onSelect={setDate}
        placeholder="Select your birth date"
      />
    );
  },
};


