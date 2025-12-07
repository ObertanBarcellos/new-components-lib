import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react';
import { Toaster as Toaster$1 } from 'sonner';
export { toast } from 'sonner';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as vaul from 'vaul';
import { Drawer as Drawer$1 } from 'vaul';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { DayPicker, DateRange } from 'react-day-picker';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { ClassValue } from 'clsx';
import { ThemeProvider as ThemeProvider$1 } from 'next-themes';

declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "success" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    loading?: boolean;
    customColor?: string;
    customHoverColor?: string;
}
declare const Button: React.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;

interface IconButtonProps extends Omit<ButtonProps, "size"> {
    size?: "sm" | "default" | "lg";
    "aria-label": string;
}
declare const IconButton: React.ForwardRefExoticComponent<Omit<IconButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;

interface InputProps extends React.ComponentProps<"input"> {
    error?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    customBorderColor?: string;
    customFocusColor?: string;
}
declare const Input: React.ForwardRefExoticComponent<Omit<InputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;

interface TextareaProps extends React.ComponentProps<"textarea"> {
    error?: boolean;
    customBorderColor?: string;
    customFocusColor?: string;
}
declare const Textarea: React.ForwardRefExoticComponent<Omit<TextareaProps, "ref"> & React.RefAttributes<HTMLTextAreaElement>>;

declare const Select: React.FC<SelectPrimitive.SelectProps>;
declare const SelectGroup: React.ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const SelectValue: React.ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & React.RefAttributes<HTMLSpanElement>>;
interface SelectTriggerProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {
    customBorderColor?: string;
    customFocusColor?: string;
}
declare const SelectTrigger: React.ForwardRefExoticComponent<SelectTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const SelectScrollUpButton: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollUpButtonProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SelectScrollDownButton: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollDownButtonProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SelectContent: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SelectLabel: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SelectItem: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SelectSeparator: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
    customColor?: string;
    customCheckedColor?: string;
}
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLButtonElement>>;

interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
    customColor?: string;
    customCheckedColor?: string;
    customUncheckedColor?: string;
    size?: "sm" | "default" | "lg";
}
declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLButtonElement>>;

interface FormFieldProps {
    label?: string;
    error?: string | boolean;
    description?: string;
    required?: boolean;
    children: React.ReactNode;
    className?: string;
    htmlFor?: string;
}
declare const FormField: React.ForwardRefExoticComponent<FormFieldProps & React.RefAttributes<HTMLDivElement>>;

interface FileUploadFile {
    file: File;
    id: string;
    preview?: string;
    progress?: number;
    status?: "pending" | "uploading" | "success" | "error";
}
interface FileUploadProps {
    value?: FileUploadFile[];
    onValueChange?: (files: FileUploadFile[]) => void;
    accept?: string;
    maxSize?: number;
    maxFiles?: number;
    multiple?: boolean;
    disabled?: boolean;
    className?: string;
    onUpload?: (files: File[]) => Promise<void> | void;
}
declare const FileUpload: React.ForwardRefExoticComponent<FileUploadProps & React.RefAttributes<HTMLDivElement>>;

declare const ratingVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface RatingProps extends VariantProps<typeof ratingVariants> {
    value?: number;
    defaultValue?: number;
    max?: number;
    onValueChange?: (value: number) => void;
    readOnly?: boolean;
    disabled?: boolean;
    allowHalf?: boolean;
    icon?: React.ComponentType<{
        className?: string;
    }>;
    emptyIcon?: React.ComponentType<{
        className?: string;
    }>;
    filledColor?: string;
    emptyColor?: string;
    className?: string;
}
declare const Rating: React.ForwardRefExoticComponent<RatingProps & React.RefAttributes<HTMLDivElement>>;

interface RichTextEditorProps {
    value?: string;
    defaultValue?: string;
    onChange?: (html: string) => void;
    placeholder?: string;
    editable?: boolean;
    className?: string;
    showToolbar?: boolean;
    toolbarClassName?: string;
    contentClassName?: string;
    minHeight?: string;
    maxHeight?: string;
}
declare const RichTextEditor: React.ForwardRefExoticComponent<RichTextEditorProps & React.RefAttributes<HTMLDivElement>>;

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hover?: boolean;
    interactive?: boolean;
    customBorderColor?: string;
    customBgColor?: string;
    customTextColor?: string;
}
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
    orientation?: "horizontal" | "vertical";
    customColor?: string;
}
declare const Divider: React.ForwardRefExoticComponent<DividerProps & React.RefAttributes<HTMLHRElement>>;

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    customColor?: string;
}
declare function Skeleton({ className, customColor, ...props }: SkeletonProps): react_jsx_runtime.JSX.Element;

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: "sm" | "default" | "lg";
    customColor?: string;
}
declare const Spinner: React.ForwardRefExoticComponent<SpinnerProps & React.RefAttributes<HTMLDivElement>>;

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
    customColor?: string;
    customBgColor?: string;
}
declare const Progress: React.ForwardRefExoticComponent<ProgressProps & React.RefAttributes<HTMLDivElement>>;

interface CircularProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    value?: number;
    max?: number;
    size?: "sm" | "default" | "lg";
    showLabel?: boolean;
    customColor?: string;
}
declare const CircularProgress: React.ForwardRefExoticComponent<CircularProgressProps & React.RefAttributes<HTMLDivElement>>;

declare const Accordion: React.ForwardRefExoticComponent<(AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) & React.RefAttributes<HTMLDivElement>>;
declare const AccordionItem: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const AccordionTrigger: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const AccordionContent: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

interface SidebarProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    side?: "left" | "right";
    variant?: "sidebar" | "overlay";
    children: React.ReactNode;
    className?: string;
    trigger?: React.ReactNode;
    showCloseButton?: boolean;
}
declare const Sidebar: React.ForwardRefExoticComponent<SidebarProps & React.RefAttributes<HTMLDivElement>>;
declare const SidebarTrigger: React.ForwardRefExoticComponent<Omit<Omit<ButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const SidebarClose: React.ForwardRefExoticComponent<Omit<Omit<ButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const SidebarContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const SidebarHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const SidebarFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];
type CarouselProps = {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin;
    orientation?: "horizontal" | "vertical";
    setApi?: (api: CarouselApi) => void;
};
declare const Carousel: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & CarouselProps & React.RefAttributes<HTMLDivElement>>;
declare const CarouselContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CarouselItem: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CarouselPrevious: React.ForwardRefExoticComponent<Omit<Omit<ButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const CarouselNext: React.ForwardRefExoticComponent<Omit<Omit<ButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const CarouselDots: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

interface ToasterProps extends React.ComponentProps<typeof Toaster$1> {
    customColor?: string;
    customBorderColor?: string;
}
declare const Toaster: ({ customColor, customBorderColor, ...props }: ToasterProps) => react_jsx_runtime.JSX.Element;

declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "success" | "warning" | "info" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
    customColor?: string;
    customTextColor?: string;
}
declare function Badge({ className, variant, customColor, customTextColor, ...props }: BadgeProps): react_jsx_runtime.JSX.Element;

declare const Breadcrumb: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & {
    separator?: React.ReactNode;
    customColor?: string;
} & React.RefAttributes<HTMLElement>>;
declare const BreadcrumbList: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, "ref"> & React.RefAttributes<HTMLOListElement>>;
declare const BreadcrumbItem: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React.RefAttributes<HTMLLIElement>>;
interface BreadcrumbLinkProps extends React.ComponentPropsWithoutRef<"a"> {
    asChild?: boolean;
    customColor?: string;
}
declare const BreadcrumbLink: React.ForwardRefExoticComponent<BreadcrumbLinkProps & React.RefAttributes<HTMLAnchorElement>>;
interface BreadcrumbPageProps extends React.ComponentPropsWithoutRef<"span"> {
    customColor?: string;
}
declare const BreadcrumbPage: React.ForwardRefExoticComponent<BreadcrumbPageProps & React.RefAttributes<HTMLSpanElement>>;
interface BreadcrumbSeparatorProps extends React.ComponentProps<"li"> {
    customColor?: string;
}
declare const BreadcrumbSeparator: {
    ({ children, className, customColor, ...props }: BreadcrumbSeparatorProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const BreadcrumbEllipsis: {
    ({ className, ...props }: React.ComponentProps<"span">): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface PaginationContextValue {
    customColor?: string;
    showPrevious?: boolean;
    showNext?: boolean;
    language?: "en" | "pt" | "es" | "fr" | "de" | "it";
}
interface PaginationProps extends React.ComponentProps<"nav"> {
    customColor?: string;
    showPrevious?: boolean;
    showNext?: boolean;
    language?: PaginationContextValue["language"];
}
declare const Pagination: {
    ({ className, customColor, showPrevious, showNext, language, ...props }: PaginationProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const PaginationContent: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & React.RefAttributes<HTMLUListElement>>;
declare const PaginationItem: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React.RefAttributes<HTMLLIElement>>;
type PaginationLinkProps = {
    isActive?: boolean;
} & Pick<ButtonProps, "size"> & React.ComponentProps<"a">;
declare const PaginationLink: {
    ({ className, isActive, size, ...props }: PaginationLinkProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const PaginationPrevious: {
    ({ className, ...props }: React.ComponentProps<typeof PaginationLink>): react_jsx_runtime.JSX.Element | null;
    displayName: string;
};
declare const PaginationNext: {
    ({ className, ...props }: React.ComponentProps<typeof PaginationLink>): react_jsx_runtime.JSX.Element | null;
    displayName: string;
};
declare const PaginationEllipsis: {
    ({ className, ...props }: React.ComponentProps<"span">): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const Tabs: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
interface TabsListProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {
    customColor?: string;
}
declare const TabsList: React.ForwardRefExoticComponent<TabsListProps & React.RefAttributes<HTMLDivElement>>;
interface TabsTriggerProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
    customColor?: string;
}
declare const TabsTrigger: React.ForwardRefExoticComponent<TabsTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const TabsContent: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

interface CommandPaletteCommand {
    id: string;
    label: string;
    keywords?: string[];
    icon?: React.ReactNode;
    onSelect?: () => void;
    group?: string;
}
interface CommandPaletteProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    commands?: CommandPaletteCommand[];
    placeholder?: string;
    emptyMessage?: string;
    className?: string;
    trigger?: React.ReactNode;
    onCommandSelect?: (command: CommandPaletteCommand) => void;
}
declare const CommandPalette: React.ForwardRefExoticComponent<CommandPaletteProps & React.RefAttributes<HTMLDivElement>>;

declare const Dialog: React.FC<DialogPrimitive.DialogProps>;
declare const DialogTrigger: React.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const DialogPortal: React.FC<DialogPrimitive.DialogPortalProps>;
declare const DialogClose: React.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
interface DialogOverlayProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> {
    customOverlayColor?: string;
}
declare const DialogOverlay: React.ForwardRefExoticComponent<DialogOverlayProps & React.RefAttributes<HTMLDivElement>>;
interface DialogContentProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
    customBorderColor?: string;
    customBgColor?: string;
    customOverlayColor?: string;
}
declare const DialogContent: React.ForwardRefExoticComponent<DialogContentProps & React.RefAttributes<HTMLDivElement>>;
declare const DialogHeader: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogFooter: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogTitle: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
declare const DialogDescription: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;

declare const Drawer: {
    ({ shouldScaleBackground, ...props }: React.ComponentProps<typeof Drawer$1.Root>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DrawerTrigger: React.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const DrawerPortal: typeof vaul.Portal;
declare const DrawerClose: React.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
interface DrawerOverlayProps extends React.ComponentPropsWithoutRef<typeof Drawer$1.Overlay> {
    customColor?: string;
}
declare const DrawerOverlay: React.ForwardRefExoticComponent<DrawerOverlayProps & React.RefAttributes<HTMLDivElement>>;
interface DrawerContentProps extends React.ComponentPropsWithoutRef<typeof Drawer$1.Content> {
    customColor?: string;
    customBorderColor?: string;
}
declare const DrawerContent: React.ForwardRefExoticComponent<DrawerContentProps & React.RefAttributes<HTMLDivElement>>;
declare const DrawerHeader: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DrawerFooter: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DrawerTitle: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
declare const DrawerDescription: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;

declare const Popover: React.FC<PopoverPrimitive.PopoverProps>;
declare const PopoverTrigger: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>>;
interface PopoverContentProps extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {
    customColor?: string;
    customBorderColor?: string;
}
declare const PopoverContent: React.ForwardRefExoticComponent<PopoverContentProps & React.RefAttributes<HTMLDivElement>>;

declare const TooltipProvider: React.FC<TooltipPrimitive.TooltipProviderProps>;
declare const Tooltip: React.FC<TooltipPrimitive.TooltipProps>;
declare const TooltipTrigger: React.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & React.RefAttributes<HTMLButtonElement>>;
interface TooltipContentProps extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
    customColor?: string;
}
declare const TooltipContent: React.ForwardRefExoticComponent<TooltipContentProps & React.RefAttributes<HTMLDivElement>>;

declare const DropdownMenu: React.FC<DropdownMenuPrimitive.DropdownMenuProps>;
declare const DropdownMenuTrigger: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const DropdownMenuGroup: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuPortal: React.FC<DropdownMenuPrimitive.DropdownMenuPortalProps>;
declare const DropdownMenuSub: React.FC<DropdownMenuPrimitive.DropdownMenuSubProps>;
declare const DropdownMenuRadioGroup: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubTrigger: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubTriggerProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubContent: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
interface DropdownMenuContentProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> {
    customColor?: string;
    customBorderColor?: string;
}
declare const DropdownMenuContent: React.ForwardRefExoticComponent<DropdownMenuContentProps & React.RefAttributes<HTMLDivElement>>;
interface DropdownMenuItemProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> {
    inset?: boolean;
    customColor?: string;
}
declare const DropdownMenuItem: React.ForwardRefExoticComponent<DropdownMenuItemProps & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuCheckboxItem: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuCheckboxItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuRadioItem: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuRadioItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuLabel: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSeparator: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuShortcut: {
    ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type CalendarProps = React.ComponentProps<typeof DayPicker> & {
    buttonVariant?: React.ComponentProps<typeof Button>["variant"];
    primaryColor?: string;
    accentColor?: string;
    fixedWidth?: string | number;
    fixedHeight?: string | number;
};
declare function Calendar({ className, classNames, showOutsideDays, captionLayout, buttonVariant, primaryColor, accentColor, fixedWidth, fixedHeight, formatters, components, ...props }: CalendarProps): react_jsx_runtime.JSX.Element;

interface DatePickerProps {
    date?: Date;
    onSelect?: (date: Date | undefined) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    primaryColor?: string;
    accentColor?: string;
}
declare function DatePicker({ date, onSelect, placeholder, disabled, className, primaryColor, accentColor, }: DatePickerProps): react_jsx_runtime.JSX.Element;

interface DateRangePickerProps {
    dateRange?: DateRange;
    onSelect?: (range: DateRange | undefined) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    primaryColor?: string;
    accentColor?: string;
}
declare function DateRangePicker({ dateRange, onSelect, placeholder, disabled, className, primaryColor, accentColor, }: DateRangePickerProps): react_jsx_runtime.JSX.Element;

interface DateInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
    value?: Date;
    onChange?: (date: Date | undefined) => void;
    showCalendar?: boolean;
    primaryColor?: string;
    accentColor?: string;
    customBorderColor?: string;
    customFocusColor?: string;
}
declare const DateInput: React.ForwardRefExoticComponent<DateInputProps & React.RefAttributes<HTMLInputElement>>;

interface AvatarProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
    customRingColor?: string;
}
declare const Avatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLSpanElement>>;
declare const AvatarImage: React.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarImageProps & React.RefAttributes<HTMLImageElement>, "ref"> & React.RefAttributes<HTMLImageElement>>;
interface AvatarFallbackProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> {
    customBgColor?: string;
}
declare const AvatarFallback: React.ForwardRefExoticComponent<AvatarFallbackProps & React.RefAttributes<HTMLSpanElement>>;

interface KeyboardKeyProps extends React.HTMLAttributes<HTMLElement> {
    keys?: string | string[];
    customColor?: string;
}
declare const KeyboardKey: React.ForwardRefExoticComponent<KeyboardKeyProps & React.RefAttributes<HTMLElement>>;

interface ScrollShadowProps extends React.HTMLAttributes<HTMLDivElement> {
    orientation?: "vertical" | "horizontal" | "both";
    showTop?: boolean;
    showBottom?: boolean;
    showLeft?: boolean;
    showRight?: boolean;
    shadowColor?: string;
    shadowSize?: "sm" | "default" | "lg";
}
declare const ScrollShadow: React.ForwardRefExoticComponent<ScrollShadowProps & React.RefAttributes<HTMLDivElement>>;

interface SnippetProps extends React.HTMLAttributes<HTMLPreElement> {
    text: string;
    showCopyButton?: boolean;
    copyText?: string;
    onCopy?: () => void;
    customColor?: string;
    customBorderColor?: string;
}
declare const Snippet: React.ForwardRefExoticComponent<SnippetProps & React.RefAttributes<HTMLPreElement>>;

interface ColorPickerProps {
    value?: string;
    onChange?: (color: string) => void;
    format?: "hex" | "rgb" | "rgba";
    showAlpha?: boolean;
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    className?: string;
}
declare const ColorPicker: React.ForwardRefExoticComponent<ColorPickerProps & React.RefAttributes<HTMLButtonElement>>;

declare function cn(...inputs: ClassValue[]): string;
/**
 * Determina se uma cor é clara ou escura baseado na luminância
 * @param color - Cor em qualquer formato (hex, rgb, hsl, nome CSS)
 * @param threshold - Limiar para determinar claro/escuro (padrão: 0.5)
 * @returns true se a cor for clara, false se for escura
 */
declare function isLightColor(color: string, threshold?: number): boolean;
/**
 * Retorna a cor de texto apropriada (preto ou branco) baseado na cor de fundo
 * @param backgroundColor - Cor de fundo em qualquer formato
 * @param lightText - Cor para usar quando o fundo é escuro (padrão: "#ffffff")
 * @param darkText - Cor para usar quando o fundo é claro (padrão: "#000000")
 * @returns Cor de texto apropriada
 */
declare function getContrastTextColor(backgroundColor: string, lightText?: string, darkText?: string): string;
/**
 * Converte uma cor hexadecimal para valores RGB
 * @param hex - Cor em formato hexadecimal (#fff, #ffffff, ou fff, ffffff)
 * @returns Objeto com valores r, g, b ou null se inválido
 */
declare function hexToRgb(hex: string): {
    r: number;
    g: number;
    b: number;
} | null;
/**
 * Converte valores RGB para hexadecimal
 * @param r - Valor de vermelho (0-255)
 * @param g - Valor de verde (0-255)
 * @param b - Valor de azul (0-255)
 * @returns String hexadecimal no formato #RRGGBB
 */
declare function rgbToHex(r: number, g: number, b: number): string;
/**
 * Formata valores RGBA como string
 * @param r - Valor de vermelho (0-255)
 * @param g - Valor de verde (0-255)
 * @param b - Valor de azul (0-255)
 * @param a - Valor de opacidade (0-1)
 * @returns String no formato rgba(r, g, b, a)
 */
declare function rgbaToString(r: number, g: number, b: number, a?: number): string;
/**
 * Extrai valores RGBA de uma string de cor
 * @param color - Cor em formato hex, rgb ou rgba
 * @returns Objeto com valores r, g, b, a ou null se inválido
 */
declare function parseRgba(color: string): {
    r: number;
    g: number;
    b: number;
    a: number;
} | null;
/**
 * Converte RGB para HSL
 * @param r - Valor de vermelho (0-255)
 * @param g - Valor de verde (0-255)
 * @param b - Valor de azul (0-255)
 * @returns Objeto com valores h, s, l (0-360, 0-100, 0-100)
 */
declare function rgbToHsl(r: number, g: number, b: number): {
    h: number;
    s: number;
    l: number;
};
/**
 * Converte HSL para RGB
 * @param h - Matiz (0-360)
 * @param s - Saturação (0-100)
 * @param l - Luminosidade (0-100)
 * @returns Objeto com valores r, g, b (0-255)
 */
declare function hslToRgb(h: number, s: number, l: number): {
    r: number;
    g: number;
    b: number;
};

declare function ThemeProvider({ children, ...props }: React.ComponentProps<typeof ThemeProvider$1>): react_jsx_runtime.JSX.Element;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Avatar, AvatarFallback, AvatarImage, Badge, type BadgeProps, Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Button, type ButtonProps, Calendar, Card, CardContent, CardDescription, CardFooter, CardHeader, type CardProps, CardTitle, Carousel, type CarouselApi, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious, Checkbox, CircularProgress, type CircularProgressProps, ColorPicker, type ColorPickerProps, CommandPalette, type CommandPaletteCommand, type CommandPaletteProps, DateInput, type DateInputProps, DatePicker, type DatePickerProps, DateRangePicker, type DateRangePickerProps, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, Divider, type DividerProps, Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerPortal, DrawerTitle, DrawerTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, FileUpload, type FileUploadFile, type FileUploadProps, FormField, type FormFieldProps, IconButton, type IconButtonProps, Input, type InputProps, KeyboardKey, type KeyboardKeyProps, Dialog as Modal, DialogClose as ModalClose, DialogContent as ModalContent, DialogDescription as ModalDescription, DialogFooter as ModalFooter, DialogHeader as ModalHeader, DialogOverlay as ModalOverlay, DialogPortal as ModalPortal, DialogTitle as ModalTitle, DialogTrigger as ModalTrigger, Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, Popover, PopoverContent, PopoverTrigger, Progress, Rating, type RatingProps, RichTextEditor, type RichTextEditorProps, ScrollShadow, type ScrollShadowProps, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Sidebar, SidebarClose, SidebarContent, SidebarFooter, SidebarHeader, type SidebarProps, SidebarTrigger, Skeleton, Snippet, type SnippetProps, Spinner, type SpinnerProps, Switch, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, type TextareaProps, ThemeProvider, Toaster, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, badgeVariants, buttonVariants, cn, getContrastTextColor, hexToRgb, hslToRgb, isLightColor, parseRgba, ratingVariants, rgbToHex, rgbToHsl, rgbaToString };
