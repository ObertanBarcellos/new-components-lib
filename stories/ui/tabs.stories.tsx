import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const meta = {
  title: 'UI/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    customColor: {
      control: 'color',
    },
  },
  args: {
    customColor: '#2c09b9',
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    customColor: '#2c09b9',
  },
  render: (args) => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList customColor={args.customColor}>
        <TabsTrigger value="account" customColor={args.customColor}>Account</TabsTrigger>
        <TabsTrigger value="password" customColor={args.customColor}>Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">
        Change your password here.
      </TabsContent>
    </Tabs>
  ),
};

export const ThreeTabs: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        Overview content goes here.
      </TabsContent>
      <TabsContent value="analytics">
        Analytics content goes here.
      </TabsContent>
      <TabsContent value="reports">
        Reports content goes here.
      </TabsContent>
    </Tabs>
  ),
};


