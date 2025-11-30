import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '@/components/ui/calendar';
import * as React from 'react';

const meta = {
  title: 'UI/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    primaryColor: {
      control: 'color',
    },
    accentColor: {
      control: 'color',
    },
    fixedWidth: {
      control: 'text',
    },
    fixedHeight: {
      control: 'text',
    },
  },
  args: {
    primaryColor: '#2c09b9',
    accentColor: '#2c09b9',
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    primaryColor: '#2c09b9',
    accentColor: '#2c09b9',
  },
  render: (args) => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        primaryColor={args.primaryColor}
        accentColor={args.accentColor}
        fixedWidth={args.fixedWidth}
        fixedHeight={args.fixedHeight}
      />
    );
  },
};

export const WithoutSelection: Story = {
  render: () => (
    <Calendar
      mode="single"
      className="rounded-md border"
    />
  ),
};

export const Range: Story = {
  render: () => {
    const [dateRange, setDateRange] = React.useState<{ from: Date; to?: Date } | undefined>();
    return (
      <Calendar
        mode="range"
        selected={dateRange}
        onSelect={setDateRange}
        numberOfMonths={2}
        className="rounded-md border"
      />
    );
  },
};

export const Multiple: Story = {
  render: () => {
    const [dates, setDates] = React.useState<Date[] | undefined>();
    return (
      <Calendar
        mode="multiple"
        selected={dates}
        onSelect={setDates}
        className="rounded-md border"
      />
    );
  },
};


