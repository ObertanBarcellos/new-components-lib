import type { Meta, StoryObj } from '@storybook/react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '@/components/ui/breadcrumb';

const meta = {
  title: 'UI/Breadcrumb',
  component: Breadcrumb,
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
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    customColor: '#2c09b9',
  },
  render: (args) => (
    <Breadcrumb customColor={args.customColor}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" customColor={args.customColor}>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator customColor={args.customColor} />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components" customColor={args.customColor}>Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator customColor={args.customColor} />
        <BreadcrumbItem>
          <BreadcrumbPage customColor={args.customColor}>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

export const WithEllipsis: Story = {
  args: {
    customColor: '#2c09b9',
  },
  render: (args) => (
    <Breadcrumb customColor={args.customColor}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" customColor={args.customColor}>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator customColor={args.customColor} />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator customColor={args.customColor} />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components" customColor={args.customColor}>Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator customColor={args.customColor} />
        <BreadcrumbItem>
          <BreadcrumbPage customColor={args.customColor}>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

export const LongPath: Story = {
  args: {
    customColor: '#2c09b9',
  },
  render: (args) => (
    <Breadcrumb customColor={args.customColor}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" customColor={args.customColor}>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator customColor={args.customColor} />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs" customColor={args.customColor}>Docs</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator customColor={args.customColor} />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs/components" customColor={args.customColor}>Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator customColor={args.customColor} />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs/components/ui" customColor={args.customColor}>UI</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator customColor={args.customColor} />
        <BreadcrumbItem>
          <BreadcrumbPage customColor={args.customColor}>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};


