import type { Meta, StoryObj } from '@storybook/react';
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from '@/components/ui/modal';
import { Button } from '@/components/ui/button';

const meta = {
  title: 'UI/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button>Open Modal</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Modal Title</ModalTitle>
          <ModalDescription>
            This is a modal description. Modals are useful for displaying important information or collecting user input.
          </ModalDescription>
        </ModalHeader>
        <div className="p-4">
          <p>Modal content goes here.</p>
        </div>
        <ModalFooter>
          <Button>Confirm</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
};

export const Simple: Story = {
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button variant="outline">Open Simple Modal</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Simple Modal</ModalTitle>
          <ModalDescription>
            This is a simple modal with minimal content.
          </ModalDescription>
        </ModalHeader>
      </ModalContent>
    </Modal>
  ),
};


