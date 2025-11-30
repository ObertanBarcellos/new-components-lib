import type { Meta, StoryObj } from '@storybook/react';
import { DateInput } from '@/components/ui/date-input';
import * as React from 'react';

const meta = {
  title: 'UI/DateInput',
  component: DateInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    showCalendar: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof DateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>();
    return (
      <DateInput
        value={date}
        onChange={setDate}
        showCalendar={true}
      />
    );
  },
};

export const WithoutCalendar: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>();
    return (
      <DateInput
        value={date}
        onChange={setDate}
        showCalendar={false}
      />
    );
  },
};

export const WithInitialValue: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
      <DateInput
        value={date}
        onChange={setDate}
      />
    );
  },
};


