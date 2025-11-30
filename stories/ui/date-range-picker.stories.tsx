import type { Meta, StoryObj } from '@storybook/react';
import { DateRangePicker } from '@/components/ui/date-range-picker';
import * as React from 'react';
import { DateRange } from 'react-day-picker';

const meta = {
  title: 'UI/DateRangePicker',
  component: DateRangePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [dateRange, setDateRange] = React.useState<DateRange | undefined>();
    return (
      <DateRangePicker
        dateRange={dateRange}
        onSelect={setDateRange}
        placeholder="Pick a date range"
      />
    );
  },
};

export const WithInitialRange: Story = {
  render: () => {
    const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
      from: new Date(),
      to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });
    return (
      <DateRangePicker
        dateRange={dateRange}
        onSelect={setDateRange}
        placeholder="Pick a date range"
      />
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <DateRangePicker
      disabled
      placeholder="Disabled date range picker"
    />
  ),
};


