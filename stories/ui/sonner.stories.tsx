import type { Meta, StoryObj } from '@storybook/react';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

const meta = {
  title: 'UI/Sonner',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <>
      <Toaster />
      <div className="flex flex-col gap-4">
        <Button
          onClick={() => toast('Event has been created')}
        >
          Show Toast
        </Button>
        <Button
          onClick={() => toast.success('Event has been created')}
        >
          Success Toast
        </Button>
        <Button
          onClick={() => toast.error('Event creation failed')}
        >
          Error Toast
        </Button>
        <Button
          onClick={() => toast.info('New update available')}
        >
          Info Toast
        </Button>
        <Button
          onClick={() => toast.warning('Please check your input')}
        >
          Warning Toast
        </Button>
        <Button
          onClick={() => toast.loading('Loading...')}
        >
          Loading Toast
        </Button>
      </div>
    </>
  ),
};

export const WithAction: Story = {
  render: () => (
    <>
      <Toaster />
      <Button
        onClick={() =>
          toast('Event has been created', {
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        Toast with Action
      </Button>
    </>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <>
      <Toaster />
      <Button
        onClick={() =>
          toast('Event created', {
            description: 'Your event has been successfully created and saved.',
          })
        }
      >
        Toast with Description
      </Button>
    </>
  ),
};


