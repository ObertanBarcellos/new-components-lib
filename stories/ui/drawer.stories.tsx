import type { Meta, StoryObj } from '@storybook/react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';

const meta = {
  title: 'UI/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    customColor: {
      control: 'color',
    },
    customBorderColor: {
      control: 'color',
    },
  },
  args: {
    customColor: '#2c09b9',
    customBorderColor: '#2c09b9',
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    customColor: '#2c09b9',
    customBorderColor: '#2c09b9',
  },
  render: (args) => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="default">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent 
        customColor={args.customColor}
        customBorderColor={args.customBorderColor}
      >
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p>Drawer content goes here.</p>
        </div>
        <DrawerFooter>
          <Button variant="default">Submit</Button>
          <DrawerClose asChild>
            <Button variant="default">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const Simple: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="default">Open Simple Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Simple Drawer</DrawerTitle>
          <DrawerDescription>
            This is a simple drawer with minimal content.
          </DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  ),
};


