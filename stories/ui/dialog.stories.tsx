import type { Meta, StoryObj } from '@storybook/react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const meta = {
  title: 'UI/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    customBorderColor: {
      control: 'color',
    },
    customBgColor: {
      control: 'color',
    },
    customOverlayColor: {
      control: 'color',
    },
  },
  args: {
    customBorderColor: '#2c09b9',
    customBgColor: undefined,
    customOverlayColor: undefined,
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    customBorderColor: '#2c09b9',
  },
  render: (args) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent 
        customBorderColor={args.customBorderColor}
        customBgColor={args.customBgColor}
        customOverlayColor={args.customOverlayColor}
      >
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit" variant="default">Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const Simple: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Open Simple Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Simple Dialog</DialogTitle>
          <DialogDescription>
            This is a simple dialog with minimal content.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  ),
};


