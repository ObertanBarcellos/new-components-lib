import * as React20 from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { Check, Upload, File, Loader2, CheckCircle2, X, Star, Bold, Italic, Underline, Heading1, Heading2, Heading3, List, ListOrdered, Link as Link$1, Undo, Redo, PanelLeft, Search, Calendar as Calendar$1, Copy, ChevronDown, ChevronUp, ArrowLeft, ArrowRight, ChevronRight, Circle, ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon, LoaderCircle, OctagonX, TriangleAlert, Info, CircleCheck, MoreHorizontal, ChevronLeft } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as DialogPrimitive2 from '@radix-ui/react-dialog';
import useEmblaCarousel from 'embla-carousel-react';
import { useTheme, ThemeProvider as ThemeProvider$1 } from 'next-themes';
import { Toaster as Toaster$1 } from 'sonner';
export { toast } from 'sonner';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { Command } from 'cmdk';
import { Drawer as Drawer$1 } from 'vaul';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { getDefaultClassNames, DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function parseColor(color) {
  if (!color) return null;
  color = color.trim();
  if (color.startsWith("#")) {
    const hex = color.slice(1);
    if (hex.length === 3) {
      return {
        r: parseInt(hex[0] + hex[0], 16),
        g: parseInt(hex[1] + hex[1], 16),
        b: parseInt(hex[2] + hex[2], 16)
      };
    }
    if (hex.length === 6) {
      return {
        r: parseInt(hex.slice(0, 2), 16),
        g: parseInt(hex.slice(2, 4), 16),
        b: parseInt(hex.slice(4, 6), 16)
      };
    }
  }
  const rgbMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (rgbMatch) {
    return {
      r: parseInt(rgbMatch[1], 10),
      g: parseInt(rgbMatch[2], 10),
      b: parseInt(rgbMatch[3], 10)
    };
  }
  const hslMatch = color.match(/hsla?\((\d+),\s*(\d+)%,\s*(\d+)%/);
  if (hslMatch) {
    const h = parseInt(hslMatch[1], 10) / 360;
    const s = parseInt(hslMatch[2], 10) / 100;
    const l = parseInt(hslMatch[3], 10) / 100;
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(h * 6 % 2 - 1));
    const m = l - c / 2;
    let r = 0, g = 0, b = 0;
    if (h < 1 / 6) {
      r = c;
      g = x;
      b = 0;
    } else if (h < 2 / 6) {
      r = x;
      g = c;
      b = 0;
    } else if (h < 3 / 6) {
      r = 0;
      g = c;
      b = x;
    } else if (h < 4 / 6) {
      r = 0;
      g = x;
      b = c;
    } else if (h < 5 / 6) {
      r = x;
      g = 0;
      b = c;
    } else {
      r = c;
      g = 0;
      b = x;
    }
    return {
      r: Math.round((r + m) * 255),
      g: Math.round((g + m) * 255),
      b: Math.round((b + m) * 255)
    };
  }
  const namedColors = {
    black: { r: 0, g: 0, b: 0 },
    white: { r: 255, g: 255, b: 255 },
    red: { r: 255, g: 0, b: 0 },
    green: { r: 0, g: 128, b: 0 },
    blue: { r: 0, g: 0, b: 255 },
    yellow: { r: 255, g: 255, b: 0 },
    cyan: { r: 0, g: 255, b: 255 },
    magenta: { r: 255, g: 0, b: 255 },
    gray: { r: 128, g: 128, b: 128 },
    grey: { r: 128, g: 128, b: 128 }
  };
  if (namedColors[color.toLowerCase()]) {
    return namedColors[color.toLowerCase()];
  }
  return null;
}
function getLuminance(color) {
  const rgb = parseColor(color);
  if (!rgb) return 0.5;
  const [r, g, b] = [rgb.r / 255, rgb.g / 255, rgb.b / 255].map((val) => {
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function isLightColor(color, threshold = 0.5) {
  if (!color) return true;
  return getLuminance(color) > threshold;
}
function getContrastTextColor(backgroundColor, lightText = "#ffffff", darkText = "#000000") {
  if (!backgroundColor) return darkText;
  return isLightColor(backgroundColor) ? darkText : lightText;
}
function hexToRgb(hex) {
  return parseColor(hex);
}
function rgbToHex(r, g, b) {
  const toHex = (n) => {
    const hex = Math.round(Math.max(0, Math.min(255, n))).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
function rgbaToString(r, g, b, a = 1) {
  const clampedA = Math.max(0, Math.min(1, a));
  return `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${clampedA})`;
}
function parseRgba(color) {
  if (!color) return null;
  const trimmed = color.trim();
  if (trimmed.startsWith("#")) {
    const hex = trimmed.slice(1);
    let r = 0, g = 0, b = 0, a = 1;
    if (hex.length === 3) {
      r = parseInt(hex[0] + hex[0], 16);
      g = parseInt(hex[1] + hex[1], 16);
      b = parseInt(hex[2] + hex[2], 16);
    } else if (hex.length === 6) {
      r = parseInt(hex.slice(0, 2), 16);
      g = parseInt(hex.slice(2, 4), 16);
      b = parseInt(hex.slice(4, 6), 16);
    } else if (hex.length === 8) {
      r = parseInt(hex.slice(0, 2), 16);
      g = parseInt(hex.slice(2, 4), 16);
      b = parseInt(hex.slice(4, 6), 16);
      a = parseInt(hex.slice(6, 8), 16) / 255;
    } else {
      return null;
    }
    return { r, g, b, a };
  }
  const rgbaMatch = trimmed.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
  if (rgbaMatch) {
    return {
      r: parseInt(rgbaMatch[1], 10),
      g: parseInt(rgbaMatch[2], 10),
      b: parseInt(rgbaMatch[3], 10),
      a: rgbaMatch[4] ? parseFloat(rgbaMatch[4]) : 1
    };
  }
  const rgb = parseColor(trimmed);
  if (rgb) {
    return __spreadProps(__spreadValues({}, rgb), { a: 1 });
  }
  return null;
}
function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}
function hslToRgb(h, s, l) {
  h /= 360;
  s /= 100;
  l /= 100;
  let r = 0, g = 0, b = 0;
  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p2, q2, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p2 + (q2 - p2) * 6 * t;
      if (t < 1 / 2) return q2;
      if (t < 2 / 3) return p2 + (q2 - p2) * (2 / 3 - t) * 6;
      return p2;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
}
var buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 ease-in-out disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:ring-offset-2 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 shadow-sm hover:shadow-md",
        outline: "border-2 bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 hover:border-accent-foreground/20",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm hover:shadow",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        success: "bg-green-600 text-white hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 shadow-sm hover:shadow-md"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 text-xs",
        lg: "h-11 rounded-md px-6 has-[>svg]:px-4 text-base",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React20.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant, size, asChild = false, loading, disabled, children, customColor, customHoverColor } = _b, props = __objRest(_b, ["className", "variant", "size", "asChild", "loading", "disabled", "children", "customColor", "customHoverColor"]);
    const Comp = asChild ? Slot : "button";
    const isDisabled = disabled || loading;
    const colorStyles = React20.useMemo(() => {
      const styles = {};
      if (customColor && variant === "default") {
        styles.backgroundColor = customColor;
        styles.borderColor = customColor;
        styles.color = getContrastTextColor(customColor);
      }
      if (customHoverColor && variant === "default") {
        styles["--button-hover-color"] = customHoverColor;
      }
      return styles;
    }, [customColor, customHoverColor, variant]);
    return /* @__PURE__ */ jsxs(
      Comp,
      __spreadProps(__spreadValues({
        ref,
        "data-slot": "button",
        style: colorStyles,
        className: cn(
          buttonVariants({ variant, size }),
          customColor && variant === "default" && "[&:not(:disabled)]:hover:bg-[--button-hover-color]",
          className
        ),
        disabled: isDisabled
      }, props), {
        children: [
          loading && /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin", "aria-hidden": "true" }),
          children
        ]
      })
    );
  }
);
Button.displayName = "Button";
var IconButton = React20.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, size = "default", children } = _b, props = __objRest(_b, ["className", "size", "children"]);
    const iconSizes = {
      sm: "h-8 w-8",
      default: "h-10 w-10",
      lg: "h-12 w-12"
    };
    return /* @__PURE__ */ jsx(
      Button,
      __spreadProps(__spreadValues({
        ref,
        size: "icon",
        className: cn(iconSizes[size], className)
      }, props), {
        children
      })
    );
  }
);
IconButton.displayName = "IconButton";
var Input = React20.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, type, error, startIcon, endIcon, customBorderColor, customFocusColor } = _b, props = __objRest(_b, ["className", "type", "error", "startIcon", "endIcon", "customBorderColor", "customFocusColor"]);
    const hasIcons = startIcon || endIcon;
    const colorStyles = React20.useMemo(() => {
      const styles = {};
      if (customBorderColor && !error) {
        styles["--input-border-color"] = customBorderColor;
      }
      if (customFocusColor && !error) {
        styles["--input-focus-color"] = customFocusColor;
      }
      return styles;
    }, [customBorderColor, customFocusColor, error]);
    return /* @__PURE__ */ jsxs("div", { className: "relative w-full", children: [
      startIcon && /* @__PURE__ */ jsx("div", { className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/70 pointer-events-none z-10", children: startIcon }),
      /* @__PURE__ */ jsx(
        "input",
        __spreadValues({
          type,
          style: colorStyles,
          className: cn(
            "flex h-10 w-full rounded-lg border-2 transition-all duration-300 ease-in-out",
            "bg-background px-4 py-2.5 text-base",
            "ring-offset-background shadow-sm",
            "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
            "placeholder:text-muted-foreground/70",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2",
            "focus-visible:border-ring focus-visible:shadow-md focus-visible:scale-[1.01]",
            "hover:shadow-md hover:border-ring/50",
            "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-sm",
            "md:text-sm",
            hasIcons && startIcon && "pl-10",
            hasIcons && endIcon && "pr-10",
            customBorderColor && !error && "border-[--input-border-color] hover:border-[--input-border-color] hover:shadow-[--input-border-color]/10",
            customFocusColor && !error && "focus-visible:border-[--input-focus-color] focus-visible:ring-[--input-focus-color]/30 focus-visible:shadow-[--input-focus-color]/20",
            error ? "border-destructive focus-visible:ring-destructive/30 dark:focus-visible:ring-destructive/50 shadow-destructive/10" : !customBorderColor && "border-input/60 hover:border-input",
            className
          ),
          ref,
          "aria-invalid": error
        }, props)
      ),
      endIcon && /* @__PURE__ */ jsx("div", { className: "absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/70 pointer-events-none z-10", children: endIcon })
    ] });
  }
);
Input.displayName = "Input";
var Textarea = React20.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, error, customBorderColor, customFocusColor } = _b, props = __objRest(_b, ["className", "error", "customBorderColor", "customFocusColor"]);
    const colorStyles = React20.useMemo(() => {
      const styles = {};
      if (customBorderColor && !error) {
        styles["--textarea-border-color"] = customBorderColor;
      }
      if (customFocusColor && !error) {
        styles["--textarea-focus-color"] = customFocusColor;
      }
      return styles;
    }, [customBorderColor, customFocusColor, error]);
    return /* @__PURE__ */ jsx(
      "textarea",
      __spreadValues({
        style: colorStyles,
        className: cn(
          "flex min-h-[100px] w-full rounded-lg border-2 transition-all duration-300 ease-in-out",
          "bg-background px-4 py-3 text-base",
          "ring-offset-background shadow-sm",
          "placeholder:text-muted-foreground/70",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2",
          "focus-visible:border-ring focus-visible:shadow-md focus-visible:scale-[1.01]",
          "hover:shadow-md hover:border-ring/50",
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-sm",
          "md:text-sm",
          "resize-y",
          customBorderColor && !error && "border-[--textarea-border-color] hover:border-[--textarea-border-color] hover:shadow-[--textarea-border-color]/10",
          customFocusColor && !error && "focus-visible:border-[--textarea-focus-color] focus-visible:ring-[--textarea-focus-color]/30 focus-visible:shadow-[--textarea-focus-color]/20",
          error ? "border-destructive focus-visible:ring-destructive/30 dark:focus-visible:ring-destructive/50 shadow-destructive/10" : !customBorderColor && "border-input/60 hover:border-input",
          className
        ),
        ref,
        "aria-invalid": error
      }, props)
    );
  }
);
Textarea.displayName = "Textarea";
var Select = SelectPrimitive.Root;
var SelectGroup = SelectPrimitive.Group;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React20.forwardRef((_a, ref) => {
  var _b = _a, { className, children, customBorderColor, customFocusColor } = _b, props = __objRest(_b, ["className", "children", "customBorderColor", "customFocusColor"]);
  const colorStyles = React20.useMemo(() => {
    const styles = {};
    if (customBorderColor) {
      styles["--select-border-color"] = customBorderColor;
    }
    if (customFocusColor) {
      styles["--select-focus-color"] = customFocusColor;
    }
    return styles;
  }, [customBorderColor, customFocusColor]);
  return /* @__PURE__ */ jsxs(
    SelectPrimitive.Trigger,
    __spreadProps(__spreadValues({
      ref,
      style: colorStyles,
      className: cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background transition-all duration-200 data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:border-ring hover:border-input/80 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        customBorderColor && "border-[--select-border-color] hover:border-[--select-border-color]/80",
        customFocusColor && "focus:border-[--select-focus-color] focus:ring-[--select-focus-color]/20",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 opacity-50 transition-transform duration-200 data-[state=open]:rotate-180" }) })
      ]
    })
  );
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React20.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    SelectPrimitive.ScrollUpButton,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4" })
    })
  );
});
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React20.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    SelectPrimitive.ScrollDownButton,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
    })
  );
});
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React20.forwardRef((_a, ref) => {
  var _b = _a, { className, children, position = "popper" } = _b, props = __objRest(_b, ["className", "children", "position"]);
  return /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
    SelectPrimitive.Content,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position
    }, props), {
      children: [
        /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsx(
          SelectPrimitive.Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
            ),
            children
          }
        ),
        /* @__PURE__ */ jsx(SelectScrollDownButton, {})
      ]
    })
  ) });
});
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React20.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    SelectPrimitive.Label,
    __spreadValues({
      ref,
      className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)
    }, props)
  );
});
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React20.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxs(
    SelectPrimitive.Item,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors duration-150 focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 animate-in fade-in-0 zoom-in-95" }) }) }),
        /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
      ]
    })
  );
});
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React20.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    SelectPrimitive.Separator,
    __spreadValues({
      ref,
      className: cn("-mx-1 my-1 h-px bg-muted", className)
    }, props)
  );
});
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
var Checkbox = React20.forwardRef((_a, ref) => {
  var _b = _a, { className, customColor, customCheckedColor } = _b, props = __objRest(_b, ["className", "customColor", "customCheckedColor"]);
  const colorStyles = React20.useMemo(() => {
    const styles = {};
    if (customColor) {
      styles["--checkbox-color"] = customColor;
    }
    if (customCheckedColor) {
      styles["--checkbox-checked-color"] = customCheckedColor;
      styles["--checkbox-checked-text-color"] = getContrastTextColor(customCheckedColor);
    }
    return styles;
  }, [customColor, customCheckedColor]);
  return /* @__PURE__ */ jsx(
    CheckboxPrimitive.Root,
    __spreadProps(__spreadValues({
      ref,
      style: colorStyles,
      className: cn(
        "grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground hover:border-primary/80",
        customColor && "border-[--checkbox-color] hover:border-[--checkbox-color]/80",
        customCheckedColor && "data-[state=checked]:bg-[--checkbox-checked-color] data-[state=checked]:text-[--checkbox-checked-text-color]",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsx(
        CheckboxPrimitive.Indicator,
        {
          className: cn("grid place-content-center text-current animate-in fade-in-0 zoom-in-95"),
          children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" })
        }
      )
    })
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
var Switch = React20.forwardRef((_a, ref) => {
  var _b = _a, { className, customColor, customCheckedColor, customUncheckedColor, size = "default" } = _b, props = __objRest(_b, ["className", "customColor", "customCheckedColor", "customUncheckedColor", "size"]);
  const colorStyles = React20.useMemo(() => {
    const styles = {};
    if (customColor) {
      styles["--switch-checked-color"] = customColor;
      styles["--switch-unchecked-color"] = customColor;
    } else {
      if (customCheckedColor) {
        styles["--switch-checked-color"] = customCheckedColor;
      }
      if (customUncheckedColor) {
        styles["--switch-unchecked-color"] = customUncheckedColor;
      }
    }
    return styles;
  }, [customColor, customCheckedColor, customUncheckedColor]);
  const sizeClasses2 = {
    sm: {
      root: "h-5 w-9",
      thumb: "h-4 w-4",
      translate: "data-[state=checked]:translate-x-4"
    },
    default: {
      root: "h-6 w-11",
      thumb: "h-5 w-5",
      translate: "data-[state=checked]:translate-x-5"
    },
    lg: {
      root: "h-7 w-14",
      thumb: "h-6 w-6",
      translate: "data-[state=checked]:translate-x-7"
    }
  };
  const currentSize = sizeClasses2[size];
  return /* @__PURE__ */ jsx(
    SwitchPrimitives.Root,
    __spreadProps(__spreadValues({
      style: colorStyles,
      className: cn(
        // Base styles
        "peer inline-flex shrink-0 cursor-pointer items-center rounded-full",
        "border-2 border-transparent",
        "transition-all duration-300 ease-in-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:cursor-not-allowed disabled:opacity-50",
        // Size
        currentSize.root,
        // Estados de cor
        "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input/80",
        "hover:data-[state=checked]:bg-primary/90 hover:data-[state=unchecked]:bg-input",
        "active:scale-95",
        // Cores personalizadas
        (customColor || customCheckedColor) && "data-[state=checked]:bg-[--switch-checked-color] hover:data-[state=checked]:bg-[--switch-checked-color]/90",
        (customColor || customUncheckedColor) && "data-[state=unchecked]:bg-[--switch-unchecked-color] hover:data-[state=unchecked]:bg-[--switch-unchecked-color]",
        className
      )
    }, props), {
      ref,
      children: /* @__PURE__ */ jsx(
        SwitchPrimitives.Thumb,
        {
          className: cn(
            // Base styles
            "pointer-events-none block rounded-full bg-background",
            "ring-0 transition-all duration-300 ease-in-out",
            "data-[state=unchecked]:translate-x-0.5",
            // Size
            currentSize.thumb,
            currentSize.translate,
            // Sombras e efeitos
            "shadow-md data-[state=checked]:shadow-lg",
            "data-[state=checked]:ring-2 data-[state=checked]:ring-primary/20"
          )
        }
      )
    })
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName;
var FormField = React20.forwardRef(
  (_a, ref) => {
    var _b = _a, { label, error, description, required, children, className, htmlFor } = _b, props = __objRest(_b, ["label", "error", "description", "required", "children", "className", "htmlFor"]);
    const errorMessage = typeof error === "string" ? error : error ? "Este campo \xE9 obrigat\xF3rio" : void 0;
    const hasError = !!error;
    return /* @__PURE__ */ jsxs("div", __spreadProps(__spreadValues({ ref, className: cn("space-y-2", className) }, props), { children: [
      label && /* @__PURE__ */ jsxs(
        "label",
        {
          htmlFor,
          className: cn(
            "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            hasError && "text-destructive"
          ),
          children: [
            label,
            required && /* @__PURE__ */ jsx("span", { className: "text-destructive ml-1", children: "*" })
          ]
        }
      ),
      description && !hasError && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: description }),
      React20.isValidElement(children) ? React20.cloneElement(children, {
        error: hasError,
        id: htmlFor,
        "aria-describedby": description || errorMessage ? `${htmlFor || "field"}-description` : void 0,
        "aria-invalid": hasError
      }) : children,
      errorMessage && /* @__PURE__ */ jsx(
        "p",
        {
          id: htmlFor ? `${htmlFor}-error` : "field-error",
          className: "text-sm font-medium text-destructive",
          role: "alert",
          children: errorMessage
        }
      )
    ] }));
  }
);
FormField.displayName = "FormField";
var FileUpload = React20.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      value: controlledValue,
      onValueChange,
      accept,
      maxSize,
      maxFiles,
      multiple = false,
      disabled = false,
      className,
      onUpload
    } = _b, props = __objRest(_b, [
      "value",
      "onValueChange",
      "accept",
      "maxSize",
      "maxFiles",
      "multiple",
      "disabled",
      "className",
      "onUpload"
    ]);
    const [internalFiles, setInternalFiles] = React20.useState([]);
    const [isDragging, setIsDragging] = React20.useState(false);
    const [isUploading, setIsUploading] = React20.useState(false);
    const fileInputRef = React20.useRef(null);
    const isControlled = controlledValue !== void 0;
    const files = isControlled ? controlledValue : internalFiles;
    const updateFiles = React20.useCallback(
      (newFiles) => {
        if (!isControlled) {
          setInternalFiles(newFiles);
        }
        onValueChange == null ? void 0 : onValueChange(newFiles);
      },
      [isControlled, onValueChange]
    );
    const validateFile = (file) => {
      var _a2;
      if (maxSize && file.size > maxSize) {
        return `Arquivo muito grande. Tamanho m\xE1ximo: ${formatFileSize(maxSize)}`;
      }
      if (accept) {
        const acceptedTypes = accept.split(",").map((type) => type.trim());
        const fileExtension = "." + ((_a2 = file.name.split(".").pop()) == null ? void 0 : _a2.toLowerCase());
        const fileType = file.type;
        const isAccepted = acceptedTypes.some((type) => {
          if (type.startsWith(".")) {
            return fileExtension === type.toLowerCase();
          }
          return fileType.match(type.replace("*", ".*"));
        });
        if (!isAccepted) {
          return `Tipo de arquivo n\xE3o permitido. Tipos aceitos: ${accept}`;
        }
      }
      return null;
    };
    const createFileObject = (file) => {
      const id = Math.random().toString(36).substring(7);
      const preview = file.type.startsWith("image/") ? URL.createObjectURL(file) : void 0;
      return {
        file,
        id,
        preview,
        status: "pending"
      };
    };
    const handleFiles = React20.useCallback(
      async (newFiles) => {
        const fileArray = Array.from(newFiles);
        const validFiles = [];
        for (const file of fileArray) {
          const error = validateFile(file);
          if (error) {
            console.warn(error);
            continue;
          }
          if (maxFiles && files.length + validFiles.length >= maxFiles) {
            break;
          }
          validFiles.push(createFileObject(file));
        }
        if (validFiles.length === 0) return;
        const updatedFiles = multiple ? [...files, ...validFiles] : validFiles;
        updateFiles(updatedFiles);
        if (onUpload) {
          setIsUploading(true);
          try {
            await onUpload(validFiles.map((f) => f.file));
            const successFiles = updatedFiles.map(
              (f) => validFiles.some((vf) => vf.id === f.id) ? __spreadProps(__spreadValues({}, f), { status: "success" }) : f
            );
            updateFiles(successFiles);
          } catch (error) {
            const errorFiles = updatedFiles.map(
              (f) => validFiles.some((vf) => vf.id === f.id) ? __spreadProps(__spreadValues({}, f), { status: "error" }) : f
            );
            updateFiles(errorFiles);
          } finally {
            setIsUploading(false);
          }
        }
      },
      [files, multiple, maxFiles, updateFiles, onUpload]
    );
    const handleDrop = React20.useCallback(
      (e) => {
        e.preventDefault();
        setIsDragging(false);
        if (disabled) return;
        const droppedFiles = e.dataTransfer.files;
        if (droppedFiles.length > 0) {
          handleFiles(droppedFiles);
        }
      },
      [disabled, handleFiles]
    );
    const handleDragOver = React20.useCallback((e) => {
      e.preventDefault();
      if (!disabled) {
        setIsDragging(true);
      }
    }, [disabled]);
    const handleDragLeave = React20.useCallback(() => {
      setIsDragging(false);
    }, []);
    const handleFileInput = React20.useCallback(
      (e) => {
        const selectedFiles = e.target.files;
        if (selectedFiles && selectedFiles.length > 0) {
          handleFiles(selectedFiles);
        }
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      },
      [handleFiles]
    );
    const removeFile = React20.useCallback(
      (id) => {
        const updatedFiles = files.filter((f) => f.id !== id);
        const removedFile = files.find((f) => f.id === id);
        if (removedFile == null ? void 0 : removedFile.preview) {
          URL.revokeObjectURL(removedFile.preview);
        }
        updateFiles(updatedFiles);
      },
      [files, updateFiles]
    );
    React20.useEffect(() => {
      return () => {
        files.forEach((f) => {
          if (f.preview) {
            URL.revokeObjectURL(f.preview);
          }
        });
      };
    }, [files]);
    const formatFileSize = (bytes) => {
      if (bytes === 0) return "0 Bytes";
      const k = 1024;
      const sizes = ["Bytes", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
    };
    return /* @__PURE__ */ jsxs("div", __spreadProps(__spreadValues({ ref, className: cn("space-y-4", className) }, props), { children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          onDrop: handleDrop,
          onDragOver: handleDragOver,
          onDragLeave: handleDragLeave,
          className: cn(
            "relative border-2 border-dashed rounded-lg p-8 transition-colors duration-200",
            "flex flex-col items-center justify-center gap-4",
            isDragging && "border-primary bg-primary/5",
            !isDragging && "border-input/60 hover:border-input",
            disabled && "opacity-50 cursor-not-allowed"
          ),
          children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                ref: fileInputRef,
                type: "file",
                accept,
                multiple,
                disabled,
                onChange: handleFileInput,
                className: "hidden"
              }
            ),
            /* @__PURE__ */ jsx(Upload, { className: cn("h-10 w-10 text-muted-foreground", isDragging && "text-primary") }),
            /* @__PURE__ */ jsxs("div", { className: "text-center space-y-2", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: isDragging ? "Solte os arquivos aqui" : "Arraste arquivos aqui ou clique para selecionar" }),
              /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
                accept && `Tipos aceitos: ${accept}`,
                maxSize && ` \u2022 Tamanho m\xE1ximo: ${formatFileSize(maxSize)}`,
                maxFiles && ` \u2022 M\xE1ximo de ${maxFiles} arquivo(s)`
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "button",
                variant: "outline",
                size: "sm",
                disabled,
                onClick: () => {
                  var _a2;
                  return (_a2 = fileInputRef.current) == null ? void 0 : _a2.click();
                },
                children: "Selecionar arquivos"
              }
            )
          ]
        }
      ),
      files.length > 0 && /* @__PURE__ */ jsx("div", { className: "space-y-2", children: files.map((fileItem) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex items-center gap-3 p-3 border rounded-lg bg-background",
          children: [
            fileItem.preview ? /* @__PURE__ */ jsx(
              "img",
              {
                src: fileItem.preview,
                alt: fileItem.file.name,
                className: "h-10 w-10 object-cover rounded"
              }
            ) : /* @__PURE__ */ jsx("div", { className: "h-10 w-10 flex items-center justify-center bg-muted rounded", children: /* @__PURE__ */ jsx(File, { className: "h-5 w-5 text-muted-foreground" }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium truncate", children: fileItem.file.name }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: formatFileSize(fileItem.file.size) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              fileItem.status === "uploading" && /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin text-muted-foreground" }),
              fileItem.status === "success" && /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600" }),
              fileItem.status === "error" && /* @__PURE__ */ jsx("span", { className: "text-xs text-destructive", children: "Erro" }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  type: "button",
                  variant: "ghost",
                  size: "icon-sm",
                  onClick: () => removeFile(fileItem.id),
                  disabled: disabled || fileItem.status === "uploading",
                  children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
                }
              )
            ] })
          ]
        },
        fileItem.id
      )) })
    ] }));
  }
);
FileUpload.displayName = "FileUpload";
var ratingVariants = cva("", {
  variants: {
    size: {
      sm: "h-4 w-4",
      default: "h-5 w-5",
      lg: "h-6 w-6"
    }
  },
  defaultVariants: {
    size: "default"
  }
});
var Rating = React20.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      value: controlledValue,
      defaultValue,
      max = 5,
      onValueChange,
      readOnly = false,
      disabled = false,
      allowHalf = false,
      icon: Icon2 = Star,
      emptyIcon: EmptyIcon,
      filledColor,
      emptyColor,
      size,
      className
    } = _b, props = __objRest(_b, [
      "value",
      "defaultValue",
      "max",
      "onValueChange",
      "readOnly",
      "disabled",
      "allowHalf",
      "icon",
      "emptyIcon",
      "filledColor",
      "emptyColor",
      "size",
      "className"
    ]);
    const [internalValue, setInternalValue] = React20.useState(defaultValue || 0);
    const [hoverValue, setHoverValue] = React20.useState(null);
    const isControlled = controlledValue !== void 0;
    const currentValue = isControlled ? controlledValue : internalValue;
    const displayValue = hoverValue !== null ? hoverValue : currentValue;
    const isInteractive = !readOnly && !disabled && !!onValueChange;
    const handleClick = (newValue) => {
      if (!isInteractive) return;
      if (isControlled) {
        onValueChange == null ? void 0 : onValueChange(newValue);
      } else {
        setInternalValue(newValue);
        onValueChange == null ? void 0 : onValueChange(newValue);
      }
    };
    const handleMouseEnter = (newValue) => {
      if (!isInteractive) return;
      setHoverValue(newValue);
    };
    const handleMouseLeave = () => {
      if (!isInteractive) return;
      setHoverValue(null);
    };
    const filledStyles = React20.useMemo(() => {
      const styles = {};
      if (filledColor) {
        styles.color = filledColor;
        styles.fill = filledColor;
      }
      return styles;
    }, [filledColor]);
    const emptyStyles = React20.useMemo(() => {
      const styles = {};
      if (emptyColor) {
        styles.color = emptyColor;
        styles.fill = emptyColor;
      }
      return styles;
    }, [emptyColor]);
    const EmptyIconComponent = EmptyIcon || Icon2;
    return /* @__PURE__ */ jsx(
      "div",
      __spreadProps(__spreadValues({
        ref,
        className: cn("flex items-center gap-1", className),
        role: readOnly ? "img" : "radiogroup",
        "aria-label": `Rating: ${currentValue} out of ${max}`,
        "aria-readonly": readOnly,
        "aria-disabled": disabled
      }, props), {
        children: Array.from({ length: max }, (_, index) => {
          const starValue = index + 1;
          const isFilled = displayValue >= starValue;
          const isHalfFilled = allowHalf && displayValue >= starValue - 0.5 && displayValue < starValue;
          return /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              disabled: disabled || readOnly,
              onClick: () => handleClick(starValue),
              onMouseEnter: () => handleMouseEnter(starValue),
              onMouseLeave: handleMouseLeave,
              className: cn(
                "relative inline-flex items-center justify-center transition-colors duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm",
                isInteractive && "cursor-pointer",
                (disabled || readOnly) && "cursor-default",
                ratingVariants({ size })
              ),
              "aria-label": `Rate ${starValue} out of ${max}`,
              "aria-checked": currentValue === starValue,
              children: isHalfFilled ? /* @__PURE__ */ jsxs("div", { className: "relative w-full h-full overflow-hidden", children: [
                /* @__PURE__ */ jsx(
                  EmptyIconComponent,
                  {
                    className: cn("absolute inset-0", ratingVariants({ size })),
                    style: emptyStyles
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 w-1/2 overflow-hidden", children: /* @__PURE__ */ jsx(
                  Icon2,
                  {
                    className: cn(ratingVariants({ size })),
                    style: filledStyles,
                    fill: "currentColor"
                  }
                ) })
              ] }) : /* @__PURE__ */ jsx(Fragment, { children: isFilled ? /* @__PURE__ */ jsx(
                Icon2,
                {
                  className: cn(ratingVariants({ size })),
                  style: filledStyles,
                  fill: "currentColor"
                }
              ) : /* @__PURE__ */ jsx(EmptyIconComponent, { className: cn(ratingVariants({ size })), style: emptyStyles }) })
            },
            index
          );
        })
      })
    );
  }
);
Rating.displayName = "Rating";
var RichTextEditor = React20.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      value: controlledValue,
      defaultValue = "",
      onChange,
      placeholder = "Comece a escrever...",
      editable = true,
      className,
      showToolbar = true,
      toolbarClassName,
      contentClassName,
      minHeight = "200px",
      maxHeight
    } = _b, props = __objRest(_b, [
      "value",
      "defaultValue",
      "onChange",
      "placeholder",
      "editable",
      "className",
      "showToolbar",
      "toolbarClassName",
      "contentClassName",
      "minHeight",
      "maxHeight"
    ]);
    const [isMounted, setIsMounted] = React20.useState(false);
    React20.useEffect(() => {
      setIsMounted(true);
    }, []);
    const editor = useEditor(
      {
        extensions: [
          StarterKit.configure({
            heading: {
              levels: [1, 2, 3]
            }
          }),
          Link.configure({
            openOnClick: false,
            HTMLAttributes: {
              class: "text-primary underline"
            }
          }),
          Placeholder.configure({
            placeholder
          })
        ],
        content: controlledValue !== void 0 ? controlledValue : defaultValue,
        editable,
        immediatelyRender: false,
        onUpdate: ({ editor: editor2 }) => {
          onChange == null ? void 0 : onChange(editor2.getHTML());
        }
      },
      [isMounted]
    );
    React20.useEffect(() => {
      if (editor && controlledValue !== void 0 && editor.getHTML() !== controlledValue) {
        editor.commands.setContent(controlledValue);
      }
    }, [controlledValue, editor]);
    if (!isMounted || !editor) {
      return /* @__PURE__ */ jsx(
        "div",
        __spreadProps(__spreadValues({
          className: cn("border rounded-lg overflow-hidden", className),
          style: {
            minHeight,
            maxHeight,
            padding: "1rem"
          }
        }, props), {
          children: /* @__PURE__ */ jsx("div", { className: "text-muted-foreground text-sm", children: placeholder })
        })
      );
    }
    const setLink = React20.useCallback(() => {
      const previousUrl = editor.getAttributes("link").href;
      const url = window.prompt("URL", previousUrl);
      if (url === null) {
        return;
      }
      if (url === "") {
        editor.chain().focus().extendMarkRange("link").unsetLink().run();
        return;
      }
      editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
    }, [editor]);
    return /* @__PURE__ */ jsxs("div", __spreadProps(__spreadValues({ ref, className: cn("border rounded-lg overflow-hidden", className) }, props), { children: [
      showToolbar && editable && /* @__PURE__ */ jsxs(
        "div",
        {
          className: cn(
            "flex flex-wrap items-center gap-1 border-b bg-muted/50 p-2",
            toolbarClassName
          ),
          children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "button",
                variant: "ghost",
                size: "icon-sm",
                onClick: () => editor.chain().focus().toggleBold().run(),
                disabled: !editor.can().chain().focus().toggleBold().run(),
                className: cn(editor.isActive("bold") && "bg-accent"),
                "aria-label": "Bold",
                children: /* @__PURE__ */ jsx(Bold, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "button",
                variant: "ghost",
                size: "icon-sm",
                onClick: () => editor.chain().focus().toggleItalic().run(),
                disabled: !editor.can().chain().focus().toggleItalic().run(),
                className: cn(editor.isActive("italic") && "bg-accent"),
                "aria-label": "Italic",
                children: /* @__PURE__ */ jsx(Italic, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "button",
                variant: "ghost",
                size: "icon-sm",
                onClick: () => editor.chain().focus().toggleStrike().run(),
                disabled: !editor.can().chain().focus().toggleStrike().run(),
                className: cn(editor.isActive("strike") && "bg-accent"),
                "aria-label": "Strikethrough",
                children: /* @__PURE__ */ jsx(Underline, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "h-6 w-px bg-border mx-1" }),
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "button",
                variant: "ghost",
                size: "icon-sm",
                onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
                className: cn(editor.isActive("heading", { level: 1 }) && "bg-accent"),
                "aria-label": "Heading 1",
                children: /* @__PURE__ */ jsx(Heading1, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "button",
                variant: "ghost",
                size: "icon-sm",
                onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
                className: cn(editor.isActive("heading", { level: 2 }) && "bg-accent"),
                "aria-label": "Heading 2",
                children: /* @__PURE__ */ jsx(Heading2, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "button",
                variant: "ghost",
                size: "icon-sm",
                onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
                className: cn(editor.isActive("heading", { level: 3 }) && "bg-accent"),
                "aria-label": "Heading 3",
                children: /* @__PURE__ */ jsx(Heading3, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "h-6 w-px bg-border mx-1" }),
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "button",
                variant: "ghost",
                size: "icon-sm",
                onClick: () => editor.chain().focus().toggleBulletList().run(),
                className: cn(editor.isActive("bulletList") && "bg-accent"),
                "aria-label": "Bullet List",
                children: /* @__PURE__ */ jsx(List, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "button",
                variant: "ghost",
                size: "icon-sm",
                onClick: () => editor.chain().focus().toggleOrderedList().run(),
                className: cn(editor.isActive("orderedList") && "bg-accent"),
                "aria-label": "Ordered List",
                children: /* @__PURE__ */ jsx(ListOrdered, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "h-6 w-px bg-border mx-1" }),
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "button",
                variant: "ghost",
                size: "icon-sm",
                onClick: setLink,
                className: cn(editor.isActive("link") && "bg-accent"),
                "aria-label": "Link",
                children: /* @__PURE__ */ jsx(Link$1, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "h-6 w-px bg-border mx-1" }),
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "button",
                variant: "ghost",
                size: "icon-sm",
                onClick: () => editor.chain().focus().undo().run(),
                disabled: !editor.can().chain().focus().undo().run(),
                "aria-label": "Undo",
                children: /* @__PURE__ */ jsx(Undo, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "button",
                variant: "ghost",
                size: "icon-sm",
                onClick: () => editor.chain().focus().redo().run(),
                disabled: !editor.can().chain().focus().redo().run(),
                "aria-label": "Redo",
                children: /* @__PURE__ */ jsx(Redo, { className: "h-4 w-4" })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        EditorContent,
        {
          editor,
          className: cn(
            "prose prose-sm dark:prose-invert max-w-none focus:outline-none [&_p]:my-2 [&_ul]:my-2 [&_ol]:my-2 [&_h1]:my-4 [&_h2]:my-3 [&_h3]:my-2",
            contentClassName
          ),
          style: {
            minHeight,
            maxHeight,
            overflowY: maxHeight ? "auto" : "visible",
            padding: "1rem"
          }
        }
      )
    ] }));
  }
);
RichTextEditor.displayName = "RichTextEditor";
var Card = React20.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, hover = false, interactive = false, customBorderColor, customBgColor, customTextColor } = _b, props = __objRest(_b, ["className", "hover", "interactive", "customBorderColor", "customBgColor", "customTextColor"]);
    const colorStyles = React20.useMemo(() => {
      const styles = {};
      if (customBorderColor) {
        styles.borderColor = customBorderColor;
      }
      if (customBgColor) {
        styles.backgroundColor = customBgColor;
        if (!customTextColor) {
          styles.color = getContrastTextColor(customBgColor);
        } else {
          styles.color = customTextColor;
        }
      } else if (customTextColor) {
        styles.color = customTextColor;
      }
      return styles;
    }, [customBorderColor, customBgColor, customTextColor]);
    return /* @__PURE__ */ jsx(
      "div",
      __spreadValues({
        ref,
        style: colorStyles,
        className: cn(
          "rounded-xl border-2 bg-card text-card-foreground shadow-md",
          "transition-all duration-300 ease-in-out",
          hover && "hover:shadow-lg hover:border-accent/60 hover:scale-[1.01]",
          interactive && "cursor-pointer hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]",
          className
        )
      }, props)
    );
  }
);
Card.displayName = "Card";
var CardHeader = React20.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      ref,
      className: cn("flex flex-col space-y-1.5 p-6", className)
    }, props)
  );
});
CardHeader.displayName = "CardHeader";
var CardTitle = React20.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      ref,
      className: cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className
      )
    }, props)
  );
});
CardTitle.displayName = "CardTitle";
var CardDescription = React20.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      ref,
      className: cn("text-sm text-muted-foreground leading-relaxed", className)
    }, props)
  );
});
CardDescription.displayName = "CardDescription";
var CardContent = React20.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx("div", __spreadValues({ ref, className: cn("p-6 pt-0", className) }, props));
});
CardContent.displayName = "CardContent";
var CardFooter = React20.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      ref,
      className: cn(
        "flex items-center p-6 pt-0 gap-2",
        className
      )
    }, props)
  );
});
CardFooter.displayName = "CardFooter";
var Divider = React20.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, orientation = "horizontal", customColor } = _b, props = __objRest(_b, ["className", "orientation", "customColor"]);
    const colorStyles = React20.useMemo(() => {
      if (!customColor) return {};
      return {
        borderColor: customColor,
        backgroundColor: customColor
      };
    }, [customColor]);
    const defaultColorClasses = customColor ? "" : "border-[#2c09b9] dark:border-white bg-[#2c09b9] dark:bg-white";
    if (orientation === "vertical") {
      return /* @__PURE__ */ jsx(
        "div",
        __spreadValues({
          ref,
          style: colorStyles,
          className: cn(
            "inline-block h-full w-px",
            customColor ? "bg-border" : defaultColorClasses,
            className
          ),
          role: "separator",
          "aria-orientation": "vertical"
        }, props)
      );
    }
    return /* @__PURE__ */ jsx(
      "hr",
      __spreadValues({
        ref,
        style: colorStyles,
        className: cn(
          "border-0 border-t",
          customColor ? "border-border" : defaultColorClasses,
          className
        ),
        role: "separator",
        "aria-orientation": "horizontal"
      }, props)
    );
  }
);
Divider.displayName = "Divider";
function Skeleton(_a) {
  var _b = _a, {
    className,
    customColor
  } = _b, props = __objRest(_b, [
    "className",
    "customColor"
  ]);
  const colorStyles = React20.useMemo(() => {
    if (!customColor) return {};
    return {
      backgroundColor: `${customColor}20`
    };
  }, [customColor]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      style: colorStyles,
      className: cn("animate-pulse rounded-md bg-muted", className)
    }, props)
  );
}
var Spinner = React20.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, size = "default", customColor } = _b, props = __objRest(_b, ["className", "size", "customColor"]);
    const sizes = {
      sm: "h-4 w-4",
      default: "h-6 w-6",
      lg: "h-8 w-8"
    };
    const colorStyles = React20.useMemo(() => {
      const styles = {};
      if (customColor) {
        styles.color = customColor;
      }
      return styles;
    }, [customColor]);
    return /* @__PURE__ */ jsx(
      "div",
      __spreadProps(__spreadValues({
        ref,
        className: cn("inline-flex items-center justify-center", className)
      }, props), {
        children: /* @__PURE__ */ jsx(
          Loader2,
          {
            className: cn("animate-spin", sizes[size]),
            style: colorStyles
          }
        )
      })
    );
  }
);
Spinner.displayName = "Spinner";
var Progress = React20.forwardRef((_a, ref) => {
  var _b = _a, { className, value, customColor, customBgColor } = _b, props = __objRest(_b, ["className", "value", "customColor", "customBgColor"]);
  const indicatorStyle = React20.useMemo(() => {
    const styles = {
      transform: `translateX(-${100 - (value || 0)}%)`
    };
    if (customColor) {
      styles.backgroundColor = customColor;
    }
    return styles;
  }, [value, customColor]);
  const rootStyle = React20.useMemo(() => {
    const styles = {};
    if (customBgColor) {
      styles.backgroundColor = customBgColor;
    }
    return styles;
  }, [customBgColor]);
  return /* @__PURE__ */ jsx(
    ProgressPrimitive.Root,
    __spreadProps(__spreadValues({
      ref,
      style: rootStyle,
      className: cn(
        "relative h-4 w-full overflow-hidden rounded-full transition-all duration-300",
        !customBgColor && "bg-secondary/50 dark:bg-secondary/30",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsx(
        ProgressPrimitive.Indicator,
        {
          className: cn(
            "h-full w-full flex-1 transition-all duration-300 ease-in-out",
            !customColor && "bg-[#2c09b9] dark:bg-[#2c09b9]"
          ),
          style: indicatorStyle
        }
      )
    })
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;
var CircularProgress = React20.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      value = 0,
      max = 100,
      size = "default",
      showLabel = false,
      customColor
    } = _b, props = __objRest(_b, [
      "className",
      "value",
      "max",
      "size",
      "showLabel",
      "customColor"
    ]);
    const percentage = Math.min(Math.max(value / max * 100, 0), 100);
    const circumference = 2 * Math.PI * 45;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - percentage / 100 * circumference;
    const sizes = {
      sm: "h-12 w-12",
      default: "h-16 w-16",
      lg: "h-24 w-24"
    };
    const strokeWidths = {
      sm: 3,
      default: 4,
      lg: 5
    };
    const strokeColor = customColor || "currentColor";
    return /* @__PURE__ */ jsxs(
      "div",
      __spreadProps(__spreadValues({
        ref,
        className: cn("relative inline-flex items-center justify-center", sizes[size], className)
      }, props), {
        children: [
          /* @__PURE__ */ jsxs(
            "svg",
            {
              className: "transform -rotate-90",
              viewBox: "0 0 100 100",
              style: { width: "100%", height: "100%" },
              children: [
                /* @__PURE__ */ jsx(
                  "circle",
                  {
                    cx: "50",
                    cy: "50",
                    r: "45",
                    fill: "none",
                    stroke: strokeColor,
                    strokeWidth: strokeWidths[size],
                    className: "opacity-20"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "circle",
                  {
                    cx: "50",
                    cy: "50",
                    r: "45",
                    fill: "none",
                    stroke: strokeColor,
                    strokeWidth: strokeWidths[size],
                    strokeDasharray,
                    strokeDashoffset,
                    strokeLinecap: "round",
                    className: "transition-all duration-300"
                  }
                )
              ]
            }
          ),
          showLabel && /* @__PURE__ */ jsxs("span", { className: "absolute text-sm font-medium", children: [
            Math.round(percentage),
            "%"
          ] })
        ]
      })
    );
  }
);
CircularProgress.displayName = "CircularProgress";
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React20.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    AccordionPrimitive.Item,
    __spreadValues({
      ref,
      className: cn("border-b border-border", className)
    }, props)
  );
});
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React20.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
    AccordionPrimitive.Trigger,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
      ]
    })
  ) });
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React20.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx(
    AccordionPrimitive.Content,
    __spreadProps(__spreadValues({
      ref,
      className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    }, props), {
      children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
    })
  );
});
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
var SidebarContext = React20.createContext({
  open: false,
  setOpen: () => {
  }
});
var Sidebar = React20.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      open: controlledOpen,
      onOpenChange,
      side = "left",
      variant = "sidebar",
      children,
      className,
      trigger,
      showCloseButton = true
    } = _b, props = __objRest(_b, [
      "open",
      "onOpenChange",
      "side",
      "variant",
      "children",
      "className",
      "trigger",
      "showCloseButton"
    ]);
    const [internalOpen, setInternalOpen] = React20.useState(false);
    const isControlled = controlledOpen !== void 0;
    const open = isControlled ? controlledOpen : internalOpen;
    const setOpen = React20.useCallback(
      (newOpen) => {
        if (!isControlled) {
          setInternalOpen(newOpen);
        }
        onOpenChange == null ? void 0 : onOpenChange(newOpen);
      },
      [isControlled, onOpenChange]
    );
    const content = /* @__PURE__ */ jsxs(
      "div",
      __spreadProps(__spreadValues({
        ref,
        className: cn(
          "fixed inset-y-0 z-50 flex flex-col bg-background border-r border-border shadow-lg transition-transform duration-300 ease-in-out",
          side === "left" ? "left-0" : "right-0",
          variant === "overlay" && "w-80",
          variant === "sidebar" && "w-64",
          className
        )
      }, props), {
        children: [
          showCloseButton && /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end p-4 border-b", children: /* @__PURE__ */ jsx(
            Button,
            {
              variant: "ghost",
              size: "icon-sm",
              onClick: () => setOpen(false),
              className: "h-8 w-8",
              children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-y-auto p-4", children })
        ]
      })
    );
    if (variant === "overlay") {
      return /* @__PURE__ */ jsxs(SidebarContext.Provider, { value: { open, setOpen }, children: [
        trigger && /* @__PURE__ */ jsx(
          Button,
          {
            variant: "ghost",
            size: "icon",
            onClick: () => setOpen(true),
            className: "lg:hidden",
            children: /* @__PURE__ */ jsx(PanelLeft, { className: "h-5 w-5" })
          }
        ),
        /* @__PURE__ */ jsx(DialogPrimitive2.Root, { open, onOpenChange: setOpen, children: /* @__PURE__ */ jsxs(DialogPrimitive2.Portal, { children: [
          /* @__PURE__ */ jsx(DialogPrimitive2.Overlay, { className: "fixed inset-0 z-40 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
          /* @__PURE__ */ jsxs(
            DialogPrimitive2.Content,
            {
              className: cn(
                "fixed inset-y-0 z-50 flex flex-col bg-background border-r border-border shadow-lg transition-transform duration-300 ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
                side === "left" ? "left-0" : "right-0 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
                "w-80"
              ),
              children: [
                showCloseButton && /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end p-4 border-b", children: /* @__PURE__ */ jsx(DialogPrimitive2.Close, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon-sm", className: "h-8 w-8", children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }) }) }) }),
                /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-y-auto p-4", children })
              ]
            }
          )
        ] }) })
      ] });
    }
    return /* @__PURE__ */ jsx(SidebarContext.Provider, { value: { open, setOpen }, children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      trigger && /* @__PURE__ */ jsx(
        Button,
        {
          variant: "ghost",
          size: "icon",
          onClick: () => setOpen(!open),
          className: "lg:hidden",
          children: /* @__PURE__ */ jsx(PanelLeft, { className: "h-5 w-5" })
        }
      ),
      /* @__PURE__ */ jsx(
        "aside",
        {
          className: cn(
            "fixed inset-y-0 z-50 flex flex-col bg-background border-r border-border shadow-lg transition-transform duration-300 ease-in-out",
            side === "left" ? "left-0" : "right-0",
            open ? "translate-x-0" : side === "left" ? "-translate-x-full" : "translate-x-full",
            "w-64 lg:translate-x-0 lg:static lg:shadow-none",
            className
          ),
          children: content
        }
      )
    ] }) });
  }
);
Sidebar.displayName = "Sidebar";
var SidebarTrigger = React20.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const { setOpen } = React20.useContext(SidebarContext);
  return /* @__PURE__ */ jsx(
    Button,
    __spreadProps(__spreadValues({
      ref,
      variant: "ghost",
      size: "icon",
      onClick: () => setOpen(true),
      className
    }, props), {
      children: /* @__PURE__ */ jsx(PanelLeft, { className: "h-5 w-5" })
    })
  );
});
SidebarTrigger.displayName = "SidebarTrigger";
var SidebarClose = React20.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const { setOpen } = React20.useContext(SidebarContext);
  return /* @__PURE__ */ jsx(
    Button,
    __spreadProps(__spreadValues({
      ref,
      variant: "ghost",
      size: "icon-sm",
      onClick: () => setOpen(false),
      className
    }, props), {
      children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
    })
  );
});
SidebarClose.displayName = "SidebarClose";
var SidebarContent = React20.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx("div", __spreadValues({ ref, className: cn("flex-1 overflow-y-auto p-4", className) }, props));
  }
);
SidebarContent.displayName = "SidebarContent";
var SidebarHeader = React20.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx("div", __spreadValues({ ref, className: cn("flex flex-col space-y-1.5 p-4 border-b", className) }, props));
  }
);
SidebarHeader.displayName = "SidebarHeader";
var SidebarFooter = React20.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx("div", __spreadValues({ ref, className: cn("flex flex-col space-y-1.5 p-4 border-t", className) }, props));
  }
);
SidebarFooter.displayName = "SidebarFooter";
var CarouselContext = React20.createContext(null);
function useCarousel() {
  const context = React20.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
var Carousel = React20.forwardRef((_a, ref) => {
  var _b = _a, { orientation = "horizontal", opts, setApi, plugins, className, children } = _b, props = __objRest(_b, ["orientation", "opts", "setApi", "plugins", "className", "children"]);
  const [carouselRef, api] = useEmblaCarousel(
    __spreadProps(__spreadValues({}, opts), {
      axis: orientation === "horizontal" ? "x" : "y"
    }),
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React20.useState(false);
  const [canScrollNext, setCanScrollNext] = React20.useState(false);
  const onSelect = React20.useCallback((api2) => {
    if (!api2) {
      return;
    }
    setCanScrollPrev(api2.canScrollPrev());
    setCanScrollNext(api2.canScrollNext());
  }, []);
  const scrollPrev = React20.useCallback(() => {
    api == null ? void 0 : api.scrollPrev();
  }, [api]);
  const scrollNext = React20.useCallback(() => {
    api == null ? void 0 : api.scrollNext();
  }, [api]);
  const handleKeyDown = React20.useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );
  React20.useEffect(() => {
    if (!api || !setApi) {
      return;
    }
    setApi(api);
  }, [api, setApi]);
  React20.useEffect(() => {
    if (!api) {
      return;
    }
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api == null ? void 0 : api.off("select", onSelect);
    };
  }, [api, onSelect]);
  return /* @__PURE__ */ jsx(
    CarouselContext.Provider,
    {
      value: {
        carouselRef,
        api: api || void 0,
        opts,
        orientation: orientation || ((opts == null ? void 0 : opts.axis) === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      },
      children: /* @__PURE__ */ jsx(
        "div",
        __spreadProps(__spreadValues({
          ref,
          onKeyDownCapture: handleKeyDown,
          className: cn("relative", className),
          role: "region",
          "aria-label": "Carousel"
        }, props), {
          children
        })
      )
    }
  );
});
Carousel.displayName = "Carousel";
var CarouselContent = React20.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    const { carouselRef, orientation } = useCarousel();
    return /* @__PURE__ */ jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsx(
      "div",
      __spreadValues({
        ref,
        className: cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )
      }, props)
    ) });
  }
);
CarouselContent.displayName = "CarouselContent";
var CarouselItem = React20.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    const { orientation } = useCarousel();
    return /* @__PURE__ */ jsx(
      "div",
      __spreadValues({
        ref,
        role: "group",
        "aria-roledescription": "slide",
        className: cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className
        )
      }, props)
    );
  }
);
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = React20.forwardRef((_a, ref) => {
  var _b = _a, { className, variant = "outline", size = "icon" } = _b, props = __objRest(_b, ["className", "variant", "size"]);
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    __spreadProps(__spreadValues({
      ref,
      variant,
      size,
      className: cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollPrev,
      onClick: scrollPrev
    }, props), {
      children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    })
  );
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = React20.forwardRef((_a, ref) => {
  var _b = _a, { className, variant = "outline", size = "icon" } = _b, props = __objRest(_b, ["className", "variant", "size"]);
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    __spreadProps(__spreadValues({
      ref,
      variant,
      size,
      className: cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollNext,
      onClick: scrollNext
    }, props), {
      children: [
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    })
  );
});
CarouselNext.displayName = "CarouselNext";
var CarouselDots = React20.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    const { api } = useCarousel();
    const [selectedIndex, setSelectedIndex] = React20.useState(0);
    const [scrollSnaps, setScrollSnaps] = React20.useState([]);
    const onSelect = React20.useCallback(() => {
      if (!api) return;
      setSelectedIndex(api.selectedScrollSnap());
    }, [api]);
    React20.useEffect(() => {
      if (!api) return;
      setScrollSnaps(api.scrollSnapList());
      setSelectedIndex(api.selectedScrollSnap());
      api.on("select", onSelect);
      api.on("reInit", onSelect);
      return () => {
        api.off("select", onSelect);
      };
    }, [api, onSelect]);
    const scrollTo = React20.useCallback(
      (index) => {
        api == null ? void 0 : api.scrollTo(index);
      },
      [api]
    );
    if (scrollSnaps.length <= 1) return null;
    return /* @__PURE__ */ jsx(
      "div",
      __spreadProps(__spreadValues({
        ref,
        className: cn("flex justify-center gap-2 mt-4", className)
      }, props), {
        children: scrollSnaps.map((_, index) => /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => scrollTo(index),
            className: cn(
              "h-2 w-2 rounded-full transition-all",
              selectedIndex === index ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            ),
            "aria-label": `Go to slide ${index + 1}`
          },
          index
        ))
      })
    );
  }
);
CarouselDots.displayName = "CarouselDots";
var Toaster = (_a) => {
  var _b = _a, { customColor, customBorderColor } = _b, props = __objRest(_b, ["customColor", "customBorderColor"]);
  const { theme = "system" } = useTheme();
  const toastClassNames = React20.useMemo(() => {
    const baseToast = "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg";
    const customToast = customColor || customBorderColor ? `${baseToast} ${customColor ? `group-[.toaster]:bg-[${customColor}]` : ""} ${customBorderColor ? `group-[.toaster]:border-[${customBorderColor}]` : ""}` : baseToast;
    return {
      toast: customToast,
      description: "group-[.toast]:text-muted-foreground",
      actionButton: customColor ? `group-[.toast]:bg-[${customColor}] group-[.toast]:text-white` : "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
      cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
    };
  }, [customColor, customBorderColor]);
  return /* @__PURE__ */ jsx(
    Toaster$1,
    __spreadValues({
      theme,
      className: "toaster group",
      icons: {
        success: /* @__PURE__ */ jsx(CircleCheck, { className: "h-4 w-4" }),
        info: /* @__PURE__ */ jsx(Info, { className: "h-4 w-4" }),
        warning: /* @__PURE__ */ jsx(TriangleAlert, { className: "h-4 w-4" }),
        error: /* @__PURE__ */ jsx(OctagonX, { className: "h-4 w-4" }),
        loading: /* @__PURE__ */ jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" })
      },
      toastOptions: {
        classNames: toastClassNames
      }
    }, props)
  );
};
var badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80 shadow-sm",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground hover:bg-accent",
        success: "border-transparent bg-green-600 text-white hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800",
        warning: "border-transparent bg-yellow-600 text-white hover:bg-yellow-700 dark:bg-yellow-700 dark:hover:bg-yellow-800",
        info: "border-transparent bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge(_a) {
  var _b = _a, { className, variant, customColor, customTextColor } = _b, props = __objRest(_b, ["className", "variant", "customColor", "customTextColor"]);
  const colorStyles = React20.useMemo(() => {
    const styles = {};
    if (customColor && variant === "default") {
      styles.backgroundColor = customColor;
      styles.borderColor = customColor;
      if (!customTextColor) {
        styles.color = getContrastTextColor(customColor);
      } else {
        styles.color = customTextColor;
      }
    } else if (customTextColor && variant === "default") {
      styles.color = customTextColor;
    }
    return styles;
  }, [customColor, customTextColor, variant]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      style: colorStyles,
      className: cn(badgeVariants({ variant }), className)
    }, props)
  );
}
var Breadcrumb = React20.forwardRef((_a, ref) => {
  var _b = _a, { customColor } = _b, props = __objRest(_b, ["customColor"]);
  const colorStyles = React20.useMemo(() => {
    if (!customColor) return {};
    return {
      "--breadcrumb-color": customColor
    };
  }, [customColor]);
  return /* @__PURE__ */ jsx("nav", __spreadValues({ ref, "aria-label": "breadcrumb", style: colorStyles }, props));
});
Breadcrumb.displayName = "Breadcrumb";
var BreadcrumbList = React20.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "ol",
    __spreadValues({
      ref,
      className: cn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
        className
      )
    }, props)
  );
});
BreadcrumbList.displayName = "BreadcrumbList";
var BreadcrumbItem = React20.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "li",
    __spreadValues({
      ref,
      className: cn("inline-flex items-center gap-1.5", className)
    }, props)
  );
});
BreadcrumbItem.displayName = "BreadcrumbItem";
var BreadcrumbLink = React20.forwardRef((_a, ref) => {
  var _b = _a, { asChild, className, customColor } = _b, props = __objRest(_b, ["asChild", "className", "customColor"]);
  const Comp = asChild ? Slot : "a";
  const colorStyles = React20.useMemo(() => {
    if (!customColor) return {};
    return {
      color: `${customColor}99`,
      // 99 em hex = ~60% de opacidade
      "--breadcrumb-hover-color": customColor
    };
  }, [customColor]);
  return /* @__PURE__ */ jsx(
    Comp,
    __spreadValues({
      ref,
      style: colorStyles,
      className: cn(
        "transition-colors",
        customColor && "hover:text-[--breadcrumb-hover-color]",
        className
      )
    }, props)
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";
var BreadcrumbPage = React20.forwardRef((_a, ref) => {
  var _b = _a, { className, customColor } = _b, props = __objRest(_b, ["className", "customColor"]);
  const colorStyles = React20.useMemo(() => {
    if (!customColor) return {};
    return {
      color: customColor
    };
  }, [customColor]);
  return /* @__PURE__ */ jsx(
    "span",
    __spreadValues({
      ref,
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      style: colorStyles,
      className: cn("font-bold text-foreground", className)
    }, props)
  );
});
BreadcrumbPage.displayName = "BreadcrumbPage";
var BreadcrumbSeparator = (_a) => {
  var _b = _a, {
    children,
    className,
    customColor
  } = _b, props = __objRest(_b, [
    "children",
    "className",
    "customColor"
  ]);
  const colorStyles = React20.useMemo(() => {
    if (!customColor) return {};
    return {
      color: `${customColor}80`
    };
  }, [customColor]);
  return /* @__PURE__ */ jsx(
    "li",
    __spreadProps(__spreadValues({
      role: "presentation",
      "aria-hidden": "true",
      style: colorStyles,
      className: cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className)
    }, props), {
      children: children != null ? children : /* @__PURE__ */ jsx(ChevronRight, {})
    })
  );
};
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
var BreadcrumbEllipsis = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxs(
    "span",
    __spreadProps(__spreadValues({
      role: "presentation",
      "aria-hidden": "true",
      className: cn("flex h-9 w-9 items-center justify-center", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "More" })
      ]
    })
  );
};
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";
var PaginationContext = React20.createContext({
  showPrevious: true,
  showNext: true,
  language: "en"
});
var translations = {
  en: { previous: "Previous", next: "Next" },
  pt: { previous: "Anterior", next: "Pr\xF3ximo" },
  es: { previous: "Anterior", next: "Siguiente" },
  fr: { previous: "Pr\xE9c\xE9dent", next: "Suivant" },
  de: { previous: "Zur\xFCck", next: "Weiter" },
  it: { previous: "Precedente", next: "Successivo" }
};
var Pagination = (_a) => {
  var _b = _a, {
    className,
    customColor,
    showPrevious = true,
    showNext = true,
    language = "en"
  } = _b, props = __objRest(_b, [
    "className",
    "customColor",
    "showPrevious",
    "showNext",
    "language"
  ]);
  const contextValue = React20.useMemo(() => ({
    customColor,
    showPrevious,
    showNext,
    language
  }), [customColor, showPrevious, showNext, language]);
  return /* @__PURE__ */ jsx(PaginationContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx(
    "nav",
    __spreadValues({
      role: "navigation",
      "aria-label": "pagination",
      className: cn("mx-auto flex w-full justify-center", className)
    }, props)
  ) });
};
Pagination.displayName = "Pagination";
var PaginationContent = React20.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "ul",
    __spreadValues({
      ref,
      className: cn("flex flex-row items-center gap-1", className)
    }, props)
  );
});
PaginationContent.displayName = "PaginationContent";
var PaginationItem = React20.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx("li", __spreadValues({ ref, className: cn("", className) }, props));
});
PaginationItem.displayName = "PaginationItem";
var PaginationLink = (_a) => {
  var _b = _a, {
    className,
    isActive,
    size = "icon"
  } = _b, props = __objRest(_b, [
    "className",
    "isActive",
    "size"
  ]);
  const { customColor } = React20.useContext(PaginationContext);
  const linkStyle = React20.useMemo(() => {
    if (!customColor) return {};
    if (isActive) {
      return {
        backgroundColor: customColor,
        borderColor: customColor,
        color: "#ffffff"
      };
    } else {
      return {
        color: customColor,
        borderColor: `${customColor}40`,
        "--pagination-hover-bg": `${customColor}15`
      };
    }
  }, [customColor, isActive]);
  return /* @__PURE__ */ jsx(
    "a",
    __spreadValues({
      "aria-current": isActive ? "page" : void 0,
      style: linkStyle,
      className: cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size
        }),
        customColor && isActive && "hover:opacity-90",
        customColor && !isActive && "[&:hover]:bg-[var(--pagination-hover-bg)]",
        className
      )
    }, props)
  );
};
PaginationLink.displayName = "PaginationLink";
var PaginationPrevious = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  var _a2;
  const { showPrevious, language = "en" } = React20.useContext(PaginationContext);
  if (showPrevious === false) return null;
  const text = ((_a2 = translations[language]) == null ? void 0 : _a2.previous) || translations.en.previous;
  return /* @__PURE__ */ jsxs(
    PaginationLink,
    __spreadProps(__spreadValues({
      "aria-label": `Go to previous page - ${text}`,
      size: "default",
      className: cn("gap-1 pl-2.5", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { children: text })
      ]
    })
  );
};
PaginationPrevious.displayName = "PaginationPrevious";
var PaginationNext = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  var _a2;
  const { showNext, language = "en" } = React20.useContext(PaginationContext);
  if (showNext === false) return null;
  const text = ((_a2 = translations[language]) == null ? void 0 : _a2.next) || translations.en.next;
  return /* @__PURE__ */ jsxs(
    PaginationLink,
    __spreadProps(__spreadValues({
      "aria-label": `Go to next page - ${text}`,
      size: "default",
      className: cn("gap-1 pr-2.5", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsx("span", { children: text }),
        /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
      ]
    })
  );
};
PaginationNext.displayName = "PaginationNext";
var PaginationEllipsis = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxs(
    "span",
    __spreadProps(__spreadValues({
      "aria-hidden": true,
      className: cn("flex h-9 w-9 items-center justify-center", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "More pages" })
      ]
    })
  );
};
PaginationEllipsis.displayName = "PaginationEllipsis";
var Tabs = React20.forwardRef((_a, ref) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsx(TabsPrimitive.Root, __spreadValues({ ref }, props));
});
Tabs.displayName = "Tabs";
var TabsList = React20.forwardRef((_a, ref) => {
  var _b = _a, { className, customColor } = _b, props = __objRest(_b, ["className", "customColor"]);
  const colorStyles = React20.useMemo(() => {
    if (!customColor) return {};
    return {
      backgroundColor: `${customColor}15`
    };
  }, [customColor]);
  return /* @__PURE__ */ jsx(
    TabsPrimitive.List,
    __spreadValues({
      ref,
      style: colorStyles,
      className: cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        className
      )
    }, props)
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;
var TabsTrigger = React20.forwardRef((_a, ref) => {
  var _b = _a, { className, customColor } = _b, props = __objRest(_b, ["className", "customColor"]);
  const colorStyles = React20.useMemo(() => {
    if (!customColor) return {};
    return {
      "--tabs-active-bg": customColor,
      "--tabs-active-text": getContrastTextColor(customColor)
    };
  }, [customColor]);
  return /* @__PURE__ */ jsx(
    TabsPrimitive.Trigger,
    __spreadValues({
      ref,
      style: colorStyles,
      className: cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
        customColor && "data-[state=active]:bg-[--tabs-active-bg] data-[state=active]:text-[--tabs-active-text]",
        className
      )
    }, props)
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React20.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    TabsPrimitive.Content,
    __spreadValues({
      ref,
      className: cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )
    }, props)
  );
});
TabsContent.displayName = TabsPrimitive.Content.displayName;
var Dialog = DialogPrimitive2.Root;
var DialogTrigger = DialogPrimitive2.Trigger;
var DialogPortal = DialogPrimitive2.Portal;
var DialogClose = DialogPrimitive2.Close;
var DialogOverlay = React20.forwardRef((_a, ref) => {
  var _b = _a, { className, customOverlayColor } = _b, props = __objRest(_b, ["className", "customOverlayColor"]);
  const colorStyles = React20.useMemo(() => {
    const styles = {};
    if (customOverlayColor) {
      styles.backgroundColor = customOverlayColor;
    }
    return styles;
  }, [customOverlayColor]);
  return /* @__PURE__ */ jsx(
    DialogPrimitive2.Overlay,
    __spreadValues({
      ref,
      style: colorStyles,
      className: cn(
        "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )
    }, props)
  );
});
DialogOverlay.displayName = DialogPrimitive2.Overlay.displayName;
var DialogContent = React20.forwardRef((_a, ref) => {
  var _b = _a, { className, children, customBorderColor, customBgColor, customOverlayColor } = _b, props = __objRest(_b, ["className", "children", "customBorderColor", "customBgColor", "customOverlayColor"]);
  const colorStyles = React20.useMemo(() => {
    const styles = {};
    if (customBorderColor) {
      styles.borderColor = customBorderColor;
    }
    if (customBgColor) {
      styles.backgroundColor = customBgColor;
    }
    return styles;
  }, [customBorderColor, customBgColor]);
  return /* @__PURE__ */ jsxs(DialogPortal, { children: [
    /* @__PURE__ */ jsx(DialogOverlay, { customOverlayColor }),
    /* @__PURE__ */ jsxs(
      DialogPrimitive2.Content,
      __spreadProps(__spreadValues({
        ref,
        style: colorStyles,
        className: cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-xl duration-300 ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          className
        )
      }, props), {
        children: [
          children,
          /* @__PURE__ */ jsxs(DialogPrimitive2.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-all duration-200 hover:opacity-100 hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
            /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      })
    )
  ] });
});
DialogContent.displayName = DialogPrimitive2.Content.displayName;
var DialogHeader = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      className: cn(
        "flex flex-col space-y-1.5 text-center sm:text-left",
        className
      )
    }, props)
  );
};
DialogHeader.displayName = "DialogHeader";
var DialogFooter = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      className: cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      )
    }, props)
  );
};
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React20.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    DialogPrimitive2.Title,
    __spreadValues({
      ref,
      className: cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )
    }, props)
  );
});
DialogTitle.displayName = DialogPrimitive2.Title.displayName;
var DialogDescription = React20.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    DialogPrimitive2.Description,
    __spreadValues({
      ref,
      className: cn("text-sm text-muted-foreground", className)
    }, props)
  );
});
DialogDescription.displayName = DialogPrimitive2.Description.displayName;
var CommandPalette = React20.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      open: controlledOpen,
      onOpenChange,
      commands = [],
      placeholder = "Digite um comando ou pesquise...",
      emptyMessage = "Nenhum resultado encontrado.",
      className,
      trigger,
      onCommandSelect
    } = _b, props = __objRest(_b, [
      "open",
      "onOpenChange",
      "commands",
      "placeholder",
      "emptyMessage",
      "className",
      "trigger",
      "onCommandSelect"
    ]);
    const [internalOpen, setInternalOpen] = React20.useState(false);
    const [search, setSearch] = React20.useState("");
    const isControlled = controlledOpen !== void 0;
    const open = isControlled ? controlledOpen : internalOpen;
    const setOpen = React20.useCallback(
      (newOpen) => {
        if (!isControlled) {
          setInternalOpen(newOpen);
        }
        onOpenChange == null ? void 0 : onOpenChange(newOpen);
        if (!newOpen) {
          setSearch("");
        }
      },
      [isControlled, onOpenChange]
    );
    React20.useEffect(() => {
      const down = (e) => {
        if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          setOpen(!open);
        }
        if (e.key === "Escape" && open) {
          setOpen(false);
        }
      };
      document.addEventListener("keydown", down);
      return () => document.removeEventListener("keydown", down);
    }, [open, setOpen]);
    const handleCommandSelect = React20.useCallback(
      (command) => {
        var _a2;
        (_a2 = command.onSelect) == null ? void 0 : _a2.call(command);
        onCommandSelect == null ? void 0 : onCommandSelect(command);
        setOpen(false);
      },
      [onCommandSelect, setOpen]
    );
    const groupedCommands = React20.useMemo(() => {
      const groups = {};
      const ungrouped = [];
      commands.forEach((cmd) => {
        if (cmd.group) {
          if (!groups[cmd.group]) {
            groups[cmd.group] = [];
          }
          groups[cmd.group].push(cmd);
        } else {
          ungrouped.push(cmd);
        }
      });
      return { groups, ungrouped };
    }, [commands]);
    const filteredCommands = React20.useMemo(() => {
      if (!search.trim()) return commands;
      const searchLower = search.toLowerCase();
      return commands.filter((cmd) => {
        var _a2;
        const labelMatch = cmd.label.toLowerCase().includes(searchLower);
        const keywordMatch = (_a2 = cmd.keywords) == null ? void 0 : _a2.some((kw) => kw.toLowerCase().includes(searchLower));
        return labelMatch || keywordMatch;
      });
    }, [commands, search]);
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      trigger && /* @__PURE__ */ jsx("div", { onClick: () => setOpen(true), className: "cursor-pointer", children: trigger }),
      /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: setOpen, children: /* @__PURE__ */ jsx(DialogContent, __spreadProps(__spreadValues({ className: "overflow-hidden p-0 max-w-2xl", ref }, props), { children: /* @__PURE__ */ jsxs(Command, { className: cn("overflow-hidden", className), children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center border-b px-3", children: [
          /* @__PURE__ */ jsx(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
          /* @__PURE__ */ jsx(
            Command.Input,
            {
              value: search,
              onValueChange: setSearch,
              placeholder,
              className: "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            }
          ),
          search && /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setSearch(""),
              className: "ml-2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
              children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsx(Command.List, { className: "max-h-[300px] overflow-y-auto p-1", children: filteredCommands.length === 0 ? /* @__PURE__ */ jsx(Command.Empty, { className: "py-6 text-center text-sm text-muted-foreground", children: emptyMessage }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          Object.entries(groupedCommands.groups).map(([groupName, groupCommands]) => {
            const filteredGroupCommands = groupCommands.filter(
              (cmd) => filteredCommands.includes(cmd)
            );
            if (filteredGroupCommands.length === 0) return null;
            return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
              Command.Group,
              {
                heading: groupName,
                className: "px-2 py-1.5 text-xs font-semibold text-muted-foreground",
                children: filteredGroupCommands.map((cmd) => /* @__PURE__ */ jsxs(
                  Command.Item,
                  {
                    value: cmd.id,
                    keywords: cmd.keywords,
                    onSelect: () => handleCommandSelect(cmd),
                    className: "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                    children: [
                      cmd.icon && /* @__PURE__ */ jsx("div", { className: "mr-2 flex h-4 w-4 items-center justify-center", children: cmd.icon }),
                      /* @__PURE__ */ jsx("span", { children: cmd.label })
                    ]
                  },
                  cmd.id
                ))
              }
            ) }, groupName);
          }),
          groupedCommands.ungrouped.filter((cmd) => filteredCommands.includes(cmd)).length > 0 && /* @__PURE__ */ jsx("div", { children: groupedCommands.ungrouped.filter((cmd) => filteredCommands.includes(cmd)).map((cmd) => /* @__PURE__ */ jsxs(
            Command.Item,
            {
              value: cmd.id,
              keywords: cmd.keywords,
              onSelect: () => handleCommandSelect(cmd),
              className: "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
              children: [
                cmd.icon && /* @__PURE__ */ jsx("div", { className: "mr-2 flex h-4 w-4 items-center justify-center", children: cmd.icon }),
                /* @__PURE__ */ jsx("span", { children: cmd.label })
              ]
            },
            cmd.id
          )) })
        ] }) })
      ] }) })) })
    ] });
  }
);
CommandPalette.displayName = "CommandPalette";
var Drawer = (_a) => {
  var _b = _a, {
    shouldScaleBackground = true
  } = _b, props = __objRest(_b, [
    "shouldScaleBackground"
  ]);
  return /* @__PURE__ */ jsx(
    Drawer$1.Root,
    __spreadValues({
      shouldScaleBackground
    }, props)
  );
};
Drawer.displayName = "Drawer";
var DrawerTrigger = Drawer$1.Trigger;
var DrawerPortal = Drawer$1.Portal;
var DrawerClose = Drawer$1.Close;
var DrawerOverlay = React20.forwardRef((_a, ref) => {
  var _b = _a, { className, customColor } = _b, props = __objRest(_b, ["className", "customColor"]);
  const colorStyles = React20.useMemo(() => {
    if (!customColor) return {};
    return {
      backgroundColor: `${customColor}CC`
    };
  }, [customColor]);
  return /* @__PURE__ */ jsx(
    Drawer$1.Overlay,
    __spreadValues({
      ref,
      style: colorStyles,
      className: cn("fixed inset-0 z-50 bg-black/80", className)
    }, props)
  );
});
DrawerOverlay.displayName = Drawer$1.Overlay.displayName;
var DrawerContent = React20.forwardRef((_a, ref) => {
  var _b = _a, { className, children, customColor, customBorderColor } = _b, props = __objRest(_b, ["className", "children", "customColor", "customBorderColor"]);
  const colorStyles = React20.useMemo(() => {
    const styles = {};
    if (customColor) {
      styles.backgroundColor = customColor;
    }
    if (customBorderColor) {
      styles.borderColor = customBorderColor;
    }
    return styles;
  }, [customColor, customBorderColor]);
  return /* @__PURE__ */ jsxs(DrawerPortal, { children: [
    /* @__PURE__ */ jsx(DrawerOverlay, {}),
    /* @__PURE__ */ jsxs(
      Drawer$1.Content,
      __spreadProps(__spreadValues({
        ref,
        style: colorStyles,
        className: cn(
          "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
          className
        )
      }, props), {
        children: [
          /* @__PURE__ */ jsx("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
          children
        ]
      })
    )
  ] });
});
DrawerContent.displayName = "DrawerContent";
var DrawerHeader = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      className: cn("grid gap-1.5 p-4 text-center sm:text-left", className)
    }, props)
  );
};
DrawerHeader.displayName = "DrawerHeader";
var DrawerFooter = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      className: cn("mt-auto flex flex-col gap-2 p-4", className)
    }, props)
  );
};
DrawerFooter.displayName = "DrawerFooter";
var DrawerTitle = React20.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    Drawer$1.Title,
    __spreadValues({
      ref,
      className: cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )
    }, props)
  );
});
DrawerTitle.displayName = Drawer$1.Title.displayName;
var DrawerDescription = React20.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    Drawer$1.Description,
    __spreadValues({
      ref,
      className: cn("text-sm text-muted-foreground", className)
    }, props)
  );
});
DrawerDescription.displayName = Drawer$1.Description.displayName;
var Popover = PopoverPrimitive.Root;
var PopoverTrigger = PopoverPrimitive.Trigger;
var PopoverContent = React20.forwardRef((_a, ref) => {
  var _b = _a, { className, align = "center", sideOffset = 4, customColor, customBorderColor } = _b, props = __objRest(_b, ["className", "align", "sideOffset", "customColor", "customBorderColor"]);
  const colorStyles = React20.useMemo(() => {
    const styles = {};
    if (customColor) {
      styles.backgroundColor = customColor;
    }
    if (customBorderColor) {
      styles.borderColor = customBorderColor;
    }
    return styles;
  }, [customColor, customBorderColor]);
  return /* @__PURE__ */ jsx(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx(
    PopoverPrimitive.Content,
    __spreadValues({
      ref,
      align,
      sideOffset,
      style: colorStyles,
      className: cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-lg outline-none duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-popover-content-transform-origin]",
        className
      )
    }, props)
  ) });
});
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
var TooltipProvider = TooltipPrimitive.Provider;
var Tooltip = TooltipPrimitive.Root;
var TooltipTrigger = TooltipPrimitive.Trigger;
var TooltipContent = React20.forwardRef((_a, ref) => {
  var _b = _a, { className, sideOffset = 4, customColor } = _b, props = __objRest(_b, ["className", "sideOffset", "customColor"]);
  const colorStyles = React20.useMemo(() => {
    if (!customColor) return {};
    return {
      backgroundColor: customColor,
      borderColor: customColor,
      color: "#ffffff"
    };
  }, [customColor]);
  return /* @__PURE__ */ jsx(
    TooltipPrimitive.Content,
    __spreadValues({
      ref,
      sideOffset,
      style: colorStyles,
      className: cn(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-lg animate-in fade-in-0 zoom-in-95 duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",
        className
      )
    }, props)
  );
});
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuPortal = DropdownMenuPrimitive.Portal;
var DropdownMenuSub = DropdownMenuPrimitive.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
var DropdownMenuSubTrigger = React20.forwardRef((_a, ref) => {
  var _b = _a, { className, inset, children } = _b, props = __objRest(_b, ["className", "inset", "children"]);
  return /* @__PURE__ */ jsxs(
    DropdownMenuPrimitive.SubTrigger,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        inset && "pl-8",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto" })
      ]
    })
  );
});
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React20.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.SubContent,
    __spreadValues({
      ref,
      className: cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]",
        className
      )
    }, props)
  );
});
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = React20.forwardRef((_a, ref) => {
  var _b = _a, { className, sideOffset = 4, customColor, customBorderColor } = _b, props = __objRest(_b, ["className", "sideOffset", "customColor", "customBorderColor"]);
  const colorStyles = React20.useMemo(() => {
    const styles = {};
    if (customColor) {
      styles.backgroundColor = customColor;
    }
    if (customBorderColor) {
      styles.borderColor = customBorderColor;
    }
    return styles;
  }, [customColor, customBorderColor]);
  return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Content,
    __spreadValues({
      ref,
      sideOffset,
      style: colorStyles,
      className: cn(
        "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]",
        className
      )
    }, props)
  ) });
});
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React20.forwardRef((_a, ref) => {
  var _b = _a, { className, inset, customColor } = _b, props = __objRest(_b, ["className", "inset", "customColor"]);
  const colorStyles = React20.useMemo(() => {
    if (!customColor) return {};
    return {
      "--dropdown-hover-color": `${customColor}20`
    };
  }, [customColor]);
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Item,
    __spreadValues({
      ref,
      style: colorStyles,
      className: cn(
        "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors duration-150 focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        customColor && "focus:bg-[--dropdown-hover-color]",
        inset && "pl-8",
        className
      )
    }, props)
  );
});
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React20.forwardRef((_a, ref) => {
  var _b = _a, { className, children, checked } = _b, props = __objRest(_b, ["className", "children", "checked"]);
  return /* @__PURE__ */ jsxs(
    DropdownMenuPrimitive.CheckboxItem,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      ),
      checked
    }, props), {
      children: [
        /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 animate-in fade-in-0 zoom-in-95" }) }) }),
        children
      ]
    })
  );
});
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React20.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxs(
    DropdownMenuPrimitive.RadioItem,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }),
        children
      ]
    })
  );
});
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React20.forwardRef((_a, ref) => {
  var _b = _a, { className, inset } = _b, props = __objRest(_b, ["className", "inset"]);
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Label,
    __spreadValues({
      ref,
      className: cn(
        "px-2 py-1.5 text-sm font-semibold",
        inset && "pl-8",
        className
      )
    }, props)
  );
});
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React20.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Separator,
    __spreadValues({
      ref,
      className: cn("-mx-1 my-1 h-px bg-muted", className)
    }, props)
  );
});
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx(
    "span",
    __spreadValues({
      className: cn("ml-auto text-xs tracking-widest opacity-60", className)
    }, props)
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var CalendarColorContext = React20.createContext({});
function Calendar(_a) {
  var _b = _a, {
    className,
    classNames,
    showOutsideDays = true,
    captionLayout = "label",
    buttonVariant = "ghost",
    primaryColor,
    accentColor,
    fixedWidth,
    fixedHeight,
    formatters,
    components
  } = _b, props = __objRest(_b, [
    "className",
    "classNames",
    "showOutsideDays",
    "captionLayout",
    "buttonVariant",
    "primaryColor",
    "accentColor",
    "fixedWidth",
    "fixedHeight",
    "formatters",
    "components"
  ]);
  const defaultClassNames = getDefaultClassNames();
  const colorStyles = React20.useMemo(() => {
    const styles = {};
    if (primaryColor) {
      styles["--calendar-primary"] = primaryColor;
      styles["--calendar-primary-text"] = getContrastTextColor(primaryColor);
    }
    if (accentColor) {
      styles["--calendar-accent"] = accentColor;
      styles["--calendar-accent-text"] = getContrastTextColor(accentColor);
    }
    if (fixedWidth) {
      styles.width = typeof fixedWidth === "number" ? `${fixedWidth}px` : fixedWidth;
    }
    if (fixedHeight) {
      styles.height = typeof fixedHeight === "number" ? `${fixedHeight}px` : fixedHeight;
    }
    return styles;
  }, [primaryColor, accentColor, fixedWidth, fixedHeight]);
  const primaryTextColor = React20.useMemo(() => {
    return primaryColor ? getContrastTextColor(primaryColor) : void 0;
  }, [primaryColor]);
  const accentTextColor = React20.useMemo(() => {
    return accentColor ? getContrastTextColor(accentColor) : void 0;
  }, [accentColor]);
  const defaultColorStyles = React20.useMemo(() => {
    const styles = __spreadValues({}, colorStyles);
    if (!primaryColor) {
      styles["--calendar-primary"] = "hsl(var(--primary))";
      styles["--calendar-primary-text"] = "hsl(var(--primary-foreground))";
    }
    if (!accentColor) {
      styles["--calendar-accent"] = "hsl(var(--accent))";
      styles["--calendar-accent-text"] = "hsl(var(--accent-foreground))";
    }
    return styles;
  }, [colorStyles, primaryColor, accentColor]);
  return /* @__PURE__ */ jsx(
    CalendarColorContext.Provider,
    {
      value: {
        primaryColor,
        accentColor,
        primaryTextColor,
        accentTextColor
      },
      children: /* @__PURE__ */ jsx(
        "div",
        {
          style: defaultColorStyles,
          className: cn(
            (fixedWidth || fixedHeight) && "overflow-hidden",
            className
          ),
          children: /* @__PURE__ */ jsx(
            DayPicker,
            __spreadValues({
              showOutsideDays,
              className: cn(
                "bg-background group/calendar p-4 rounded-lg border shadow-sm [--cell-size:3rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent transition-all duration-200",
                (fixedWidth || fixedHeight) && "w-full h-full",
                String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
                String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
                className
              ),
              captionLayout,
              formatters: __spreadValues({
                formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" })
              }, formatters),
              classNames: __spreadValues({
                root: cn(
                  fixedWidth || fixedHeight ? "w-full h-full" : "w-fit",
                  defaultClassNames.root
                ),
                months: cn(
                  "relative flex flex-col gap-4 md:flex-row w-full h-full",
                  defaultClassNames.months
                ),
                month: cn("flex w-full h-full flex-col gap-4", defaultClassNames.month),
                nav: cn(
                  "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1 mb-2",
                  defaultClassNames.nav
                ),
                button_previous: cn(
                  buttonVariants({ variant: buttonVariant }),
                  "h-[--cell-size] w-[--cell-size] select-none p-0 aria-disabled:opacity-50 transition-all duration-200 hover:scale-110 rounded-full",
                  defaultClassNames.button_previous
                ),
                button_next: cn(
                  buttonVariants({ variant: buttonVariant }),
                  "h-[--cell-size] w-[--cell-size] select-none p-0 aria-disabled:opacity-50 transition-all duration-200 hover:scale-110 rounded-full",
                  defaultClassNames.button_next
                ),
                month_caption: cn(
                  "flex h-[--cell-size] w-full items-center justify-center px-[--cell-size] font-semibold text-base",
                  defaultClassNames.month_caption
                ),
                dropdowns: cn(
                  "flex h-[--cell-size] w-full items-center justify-center gap-1.5 text-sm font-medium transition-all duration-200",
                  defaultClassNames.dropdowns
                ),
                dropdown_root: cn(
                  "has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border transition-all duration-200 hover:border-ring/50",
                  defaultClassNames.dropdown_root
                ),
                dropdown: cn(
                  "bg-popover absolute inset-0 opacity-0",
                  defaultClassNames.dropdown
                ),
                caption_label: cn(
                  "select-none font-semibold text-base",
                  captionLayout === "label" ? "text-base" : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5",
                  defaultClassNames.caption_label
                ),
                table: "w-full border-collapse",
                weekdays: cn("flex mb-2", defaultClassNames.weekdays),
                weekday: cn(
                  "text-muted-foreground flex-1 select-none rounded-md text-xs font-semibold uppercase tracking-wider",
                  defaultClassNames.weekday
                ),
                week: cn("flex w-full gap-2", defaultClassNames.week),
                week_number_header: cn(
                  "w-[--cell-size] select-none",
                  defaultClassNames.week_number_header
                ),
                week_number: cn(
                  "text-muted-foreground select-none text-[0.8rem]",
                  defaultClassNames.week_number
                ),
                day: cn(
                  "group/day relative aspect-square h-full w-full select-none p-0.5 text-center transition-all duration-200",
                  defaultClassNames.day
                ),
                range_start: cn(
                  "",
                  defaultClassNames.range_start
                ),
                range_middle: cn("", defaultClassNames.range_middle),
                range_end: cn("", defaultClassNames.range_end),
                today: cn(
                  "border-2 border-[--calendar-primary]/50 font-semibold",
                  defaultClassNames.today
                ),
                outside: cn(
                  "text-muted-foreground/50 aria-selected:text-muted-foreground/50",
                  defaultClassNames.outside
                ),
                disabled: cn(
                  "text-muted-foreground opacity-30 cursor-not-allowed",
                  defaultClassNames.disabled
                ),
                hidden: cn("invisible", defaultClassNames.hidden)
              }, classNames),
              components: __spreadValues({
                Root: (_a2) => {
                  var _b2 = _a2, { className: className2, rootRef } = _b2, props2 = __objRest(_b2, ["className", "rootRef"]);
                  return /* @__PURE__ */ jsx(
                    "div",
                    __spreadValues({
                      "data-slot": "calendar",
                      ref: rootRef,
                      className: cn(className2)
                    }, props2)
                  );
                },
                Chevron: (_c) => {
                  var _d = _c, { className: className2, orientation } = _d, props2 = __objRest(_d, ["className", "orientation"]);
                  if (orientation === "left") {
                    return /* @__PURE__ */ jsx(ChevronLeftIcon, __spreadValues({ className: cn("size-4 transition-transform duration-200", className2) }, props2));
                  }
                  if (orientation === "right") {
                    return /* @__PURE__ */ jsx(
                      ChevronRightIcon,
                      __spreadValues({
                        className: cn("size-4 transition-transform duration-200", className2)
                      }, props2)
                    );
                  }
                  return /* @__PURE__ */ jsx(ChevronDownIcon, __spreadValues({ className: cn("size-4 transition-transform duration-200", className2) }, props2));
                },
                DayButton: CalendarDayButton,
                WeekNumber: (_e) => {
                  var _f = _e, { children } = _f, props2 = __objRest(_f, ["children"]);
                  return /* @__PURE__ */ jsx("td", __spreadProps(__spreadValues({}, props2), { children: /* @__PURE__ */ jsx("div", { className: "flex size-[--cell-size] items-center justify-center text-center", children }) }));
                }
              }, components)
            }, props)
          )
        }
      )
    }
  );
}
function CalendarDayButton(_a) {
  var _b = _a, {
    className,
    day,
    modifiers
  } = _b, props = __objRest(_b, [
    "className",
    "day",
    "modifiers"
  ]);
  const defaultClassNames = getDefaultClassNames();
  const { primaryColor, accentColor, primaryTextColor, accentTextColor } = React20.useContext(CalendarColorContext);
  const ref = React20.useRef(null);
  React20.useEffect(() => {
    var _a2;
    if (modifiers.focused) (_a2 = ref.current) == null ? void 0 : _a2.focus();
  }, [modifiers.focused]);
  const buttonStyles = React20.useMemo(() => {
    const styles = {};
    if (modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle) {
      if (primaryColor) {
        styles.backgroundColor = primaryColor;
        styles.borderColor = primaryColor;
        if (primaryTextColor) {
          styles.color = primaryTextColor;
        }
      }
    } else if (modifiers.range_start || modifiers.range_end) {
      if (primaryColor) {
        styles.backgroundColor = primaryColor;
        styles.borderColor = primaryColor;
        if (primaryTextColor) {
          styles.color = primaryTextColor;
        }
      }
    } else if (modifiers.range_middle) {
      if (accentColor) {
        styles.backgroundColor = `${accentColor}66`;
        styles.borderColor = `${accentColor}66`;
        if (accentTextColor) {
          styles.color = accentTextColor;
        }
      }
    } else if (modifiers.today) {
      if (primaryColor) {
        styles.borderColor = `${primaryColor}99`;
      }
      if (accentColor) {
        styles.backgroundColor = `${accentColor}1A`;
      }
    }
    return styles;
  }, [modifiers, primaryColor, accentColor, primaryTextColor, accentTextColor]);
  return /* @__PURE__ */ jsx(
    Button,
    __spreadValues({
      ref,
      variant: "ghost",
      size: "icon",
      "data-day": day.date.toLocaleDateString(),
      "data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
      "data-range-start": modifiers.range_start,
      "data-range-end": modifiers.range_end,
      "data-range-middle": modifiers.range_middle,
      "data-today": modifiers.today,
      style: buttonStyles,
      className: cn(
        // Estilo de card individual
        "w-full h-full rounded-lg border border-border/40 bg-card shadow-sm",
        "p-2.5 flex flex-col items-center justify-center gap-0.5",
        "transition-all duration-200 ease-in-out",
        "min-h-[--cell-size]",
        // Estados de seleção (fallback para quando não há cores customizadas)
        !primaryColor && "data-[selected-single=true]:bg-[--calendar-primary] data-[selected-single=true]:text-[--calendar-primary-text] data-[selected-single=true]:border-[--calendar-primary] data-[selected-single=true]:shadow-md data-[selected-single=true]:shadow-[--calendar-primary]/20 data-[selected-single=true]:scale-[1.02]",
        !accentColor && "data-[range-middle=true]:bg-[--calendar-accent]/40 data-[range-middle=true]:text-[--calendar-accent-text] data-[range-middle=true]:border-[--calendar-accent]/40",
        !primaryColor && "data-[range-start=true]:bg-[--calendar-primary] data-[range-start=true]:text-[--calendar-primary-text] data-[range-start=true]:border-[--calendar-primary] data-[range-start=true]:shadow-md data-[range-start=true]:shadow-[--calendar-primary]/20 data-[range-start=true]:rounded-l-lg data-[range-start=true]:rounded-r-sm",
        !primaryColor && "data-[range-end=true]:bg-[--calendar-primary] data-[range-end=true]:text-[--calendar-primary-text] data-[range-end=true]:border-[--calendar-primary] data-[range-end=true]:shadow-md data-[range-end=true]:shadow-[--calendar-primary]/20 data-[range-end=true]:rounded-r-lg data-[range-end=true]:rounded-l-sm",
        // Estado today (fallback)
        !primaryColor && "data-[today=true]:border-2 data-[today=true]:border-[--calendar-primary]/60 data-[today=true]:font-semibold",
        !accentColor && "data-[today=true]:bg-[--calendar-accent]/10",
        // Estados de hover e focus
        "hover:bg-accent/50 hover:text-accent-foreground hover:border-accent-foreground/30 hover:shadow-md hover:scale-[1.02]",
        "group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:ring-2 group-data-[focused=true]/day:ring-offset-1 group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:relative",
        "active:scale-100",
        // Estados disabled e outside
        "data-[disabled=true]:opacity-30 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:hover:scale-100 data-[disabled=true]:hover:bg-card",
        "data-[outside=true]:opacity-40 data-[outside=true]:bg-muted/30",
        // Tipografia
        "font-normal leading-none text-sm",
        "[&>span]:text-[0.65rem] [&>span]:opacity-70 [&>span]:font-medium [&>span]:leading-tight",
        // Aplicar scale quando selecionado
        (modifiers.selected || modifiers.range_start || modifiers.range_end) && "scale-[1.02]",
        defaultClassNames.day,
        className
      )
    }, props)
  );
}
function DatePicker({
  date,
  onSelect,
  placeholder = "Pick a date",
  disabled = false,
  className,
  primaryColor,
  accentColor
}) {
  return /* @__PURE__ */ jsxs(Popover, { children: [
    /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      Button,
      {
        variant: "default",
        className: cn(
          "w-full justify-start text-left font-normal",
          !date && "text-muted-foreground",
          className
        ),
        disabled,
        customColor: primaryColor,
        children: [
          /* @__PURE__ */ jsx(Calendar$1, { className: "mr-2 h-4 w-4" }),
          date ? format(date, "PPP") : /* @__PURE__ */ jsx("span", { children: placeholder })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(PopoverContent, { className: "w-auto p-0", align: "start", customColor: primaryColor, customBorderColor: accentColor, children: /* @__PURE__ */ jsx(
      Calendar,
      {
        mode: "single",
        selected: date,
        onSelect,
        initialFocus: true,
        primaryColor,
        accentColor
      }
    ) })
  ] });
}
function DateRangePicker({
  dateRange,
  onSelect,
  placeholder = "Pick a date range",
  disabled = false,
  className,
  primaryColor,
  accentColor
}) {
  return /* @__PURE__ */ jsxs(Popover, { children: [
    /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      Button,
      {
        variant: "default",
        className: cn(
          "w-full justify-start text-left font-normal",
          !dateRange && "text-muted-foreground",
          className
        ),
        disabled,
        customColor: primaryColor,
        children: [
          /* @__PURE__ */ jsx(Calendar$1, { className: "mr-2 h-4 w-4" }),
          (dateRange == null ? void 0 : dateRange.from) ? dateRange.to ? /* @__PURE__ */ jsxs(Fragment, { children: [
            format(dateRange.from, "LLL dd, y"),
            " -",
            " ",
            format(dateRange.to, "LLL dd, y")
          ] }) : format(dateRange.from, "LLL dd, y") : /* @__PURE__ */ jsx("span", { children: placeholder })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(PopoverContent, { className: "w-auto p-0", align: "start", customColor: primaryColor, customBorderColor: accentColor, children: /* @__PURE__ */ jsx(
      Calendar,
      {
        initialFocus: true,
        mode: "range",
        defaultMonth: dateRange == null ? void 0 : dateRange.from,
        selected: dateRange,
        onSelect,
        numberOfMonths: 2,
        primaryColor,
        accentColor
      }
    ) })
  ] });
}
var DateInput = React20.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, value, onChange, showCalendar = true, primaryColor, accentColor, customBorderColor, customFocusColor } = _b, props = __objRest(_b, ["className", "value", "onChange", "showCalendar", "primaryColor", "accentColor", "customBorderColor", "customFocusColor"]);
    const [inputValue, setInputValue] = React20.useState(
      value ? format(value, "yyyy-MM-dd") : ""
    );
    React20.useEffect(() => {
      if (value) {
        setInputValue(format(value, "yyyy-MM-dd"));
      }
    }, [value]);
    const handleInputChange = (e) => {
      const newValue = e.target.value;
      setInputValue(newValue);
      if (newValue) {
        const date = new Date(newValue);
        if (!isNaN(date.getTime())) {
          onChange == null ? void 0 : onChange(date);
        }
      } else {
        onChange == null ? void 0 : onChange(void 0);
      }
    };
    const handleCalendarSelect = (date) => {
      if (date) {
        setInputValue(format(date, "yyyy-MM-dd"));
        onChange == null ? void 0 : onChange(date);
      } else {
        setInputValue("");
        onChange == null ? void 0 : onChange(void 0);
      }
    };
    if (!showCalendar) {
      return /* @__PURE__ */ jsx(
        Input,
        __spreadValues({
          ref,
          type: "date",
          value: inputValue,
          onChange: handleInputChange,
          className,
          customBorderColor,
          customFocusColor
        }, props)
      );
    }
    return /* @__PURE__ */ jsxs(Popover, { children: [
      /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(
          Input,
          __spreadValues({
            ref,
            type: "date",
            value: inputValue,
            onChange: handleInputChange,
            className: cn("pr-10", className),
            customBorderColor,
            customFocusColor
          }, props)
        ),
        /* @__PURE__ */ jsx(Calendar$1, { className: "absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" })
      ] }) }),
      /* @__PURE__ */ jsx(PopoverContent, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ jsx(
        Calendar,
        {
          mode: "single",
          selected: value,
          onSelect: handleCalendarSelect,
          initialFocus: true,
          primaryColor,
          accentColor
        }
      ) })
    ] });
  }
);
DateInput.displayName = "DateInput";
var Avatar = React20.forwardRef((_a, ref) => {
  var _b = _a, { className, customRingColor } = _b, props = __objRest(_b, ["className", "customRingColor"]);
  const colorStyles = React20.useMemo(() => {
    const styles = {};
    if (customRingColor) {
      styles["--avatar-ring-color"] = customRingColor;
    }
    return styles;
  }, [customRingColor]);
  return /* @__PURE__ */ jsx(
    AvatarPrimitive.Root,
    __spreadValues({
      ref,
      style: colorStyles,
      className: cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full transition-all duration-200 hover:ring-2 hover:ring-ring hover:ring-offset-2",
        customRingColor && "hover:ring-[--avatar-ring-color]",
        className
      )
    }, props)
  );
});
Avatar.displayName = AvatarPrimitive.Root.displayName;
var AvatarImage = React20.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    AvatarPrimitive.Image,
    __spreadValues({
      ref,
      className: cn("aspect-square h-full w-full object-cover transition-opacity duration-200", className)
    }, props)
  );
});
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
var AvatarFallback = React20.forwardRef((_a, ref) => {
  var _b = _a, { className, customBgColor } = _b, props = __objRest(_b, ["className", "customBgColor"]);
  const colorStyles = React20.useMemo(() => {
    const styles = {};
    if (customBgColor) {
      styles.backgroundColor = customBgColor;
      styles.color = getContrastTextColor(customBgColor);
    }
    return styles;
  }, [customBgColor]);
  return /* @__PURE__ */ jsx(
    AvatarPrimitive.Fallback,
    __spreadValues({
      ref,
      style: colorStyles,
      className: cn(
        "flex h-full w-full items-center justify-center rounded-full bg-muted",
        className
      )
    }, props)
  );
});
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
var KeyboardKey = React20.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, keys, children, customColor } = _b, props = __objRest(_b, ["className", "keys", "children", "customColor"]);
    const keysArray = keys ? Array.isArray(keys) ? keys : [keys] : children ? [children] : [];
    if (keysArray.length === 0) {
      return null;
    }
    const colorStyles = React20.useMemo(() => {
      if (!customColor) return {};
      return {
        backgroundColor: `${customColor}15`,
        borderColor: `${customColor}40`,
        color: customColor
      };
    }, [customColor]);
    return /* @__PURE__ */ jsx(
      "kbd",
      __spreadProps(__spreadValues({
        ref,
        style: colorStyles,
        className: cn(
          "pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100",
          className
        )
      }, props), {
        children: keysArray.map((key, index) => /* @__PURE__ */ jsxs(React20.Fragment, { children: [
          index > 0 && /* @__PURE__ */ jsx("span", { className: "text-muted-foreground/50", children: "+" }),
          /* @__PURE__ */ jsx("span", { children: key })
        ] }, index))
      })
    );
  }
);
KeyboardKey.displayName = "KeyboardKey";
var ScrollShadow = React20.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      orientation = "vertical",
      showTop = true,
      showBottom = true,
      showLeft = false,
      showRight = false,
      shadowColor,
      shadowSize = "default",
      children
    } = _b, props = __objRest(_b, [
      "className",
      "orientation",
      "showTop",
      "showBottom",
      "showLeft",
      "showRight",
      "shadowColor",
      "shadowSize",
      "children"
    ]);
    const [showTopShadow, setShowTopShadow] = React20.useState(false);
    const [showBottomShadow, setShowBottomShadow] = React20.useState(false);
    const [showLeftShadow, setShowLeftShadow] = React20.useState(false);
    const [showRightShadow, setShowRightShadow] = React20.useState(false);
    const scrollRef = React20.useRef(null);
    const shadowSizes = {
      sm: "h-6",
      default: "h-12",
      lg: "h-16"
    };
    const shadowWidths = {
      sm: "w-6",
      default: "w-12",
      lg: "w-16"
    };
    const checkScroll = React20.useCallback(() => {
      const element = scrollRef.current;
      if (!element) return;
      const { scrollTop, scrollHeight, clientHeight, scrollLeft, scrollWidth, clientWidth } = element;
      if (orientation === "vertical" || orientation === "both") {
        setShowTopShadow(showTop && scrollTop > 0);
        setShowBottomShadow(
          showBottom && scrollTop < scrollHeight - clientHeight - 1
        );
      }
      if (orientation === "horizontal" || orientation === "both") {
        setShowLeftShadow(showLeft && scrollLeft > 0);
        setShowRightShadow(
          showRight && scrollLeft < scrollWidth - clientWidth - 1
        );
      }
    }, [orientation, showTop, showBottom, showLeft, showRight]);
    React20.useEffect(() => {
      const element = scrollRef.current;
      if (!element) return;
      checkScroll();
      element.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      return () => {
        element.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }, [checkScroll]);
    const getGradientStyle = (direction) => {
      if (shadowColor) {
        const gradients = {
          top: `linear-gradient(to bottom, ${shadowColor} 0%, ${shadowColor}80 50%, transparent 100%)`,
          bottom: `linear-gradient(to top, ${shadowColor} 0%, ${shadowColor}80 50%, transparent 100%)`,
          left: `linear-gradient(to right, ${shadowColor} 0%, ${shadowColor}80 50%, transparent 100%)`,
          right: `linear-gradient(to left, ${shadowColor} 0%, ${shadowColor}80 50%, transparent 100%)`
        };
        return { background: gradients[direction] };
      }
      return {};
    };
    const shadowClasses = shadowColor ? "" : "bg-gradient-to-b from-background via-background/95 to-transparent";
    return /* @__PURE__ */ jsxs("div", __spreadProps(__spreadValues({ className: cn("relative", className) }, props), { children: [
      (orientation === "vertical" || orientation === "both") && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "pointer-events-none absolute inset-x-0 top-0 z-20 transition-opacity duration-300",
              shadowSizes[shadowSize],
              !shadowColor && shadowClasses,
              showTopShadow ? "opacity-100" : "opacity-0"
            ),
            style: getGradientStyle("top")
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "pointer-events-none absolute inset-x-0 bottom-0 z-20 transition-opacity duration-300",
              shadowSizes[shadowSize],
              !shadowColor && "bg-gradient-to-t from-background via-background/95 to-transparent",
              showBottomShadow ? "opacity-100" : "opacity-0"
            ),
            style: getGradientStyle("bottom")
          }
        )
      ] }),
      (orientation === "horizontal" || orientation === "both") && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "pointer-events-none absolute inset-y-0 left-0 z-20 transition-opacity duration-300",
              shadowWidths[shadowSize],
              !shadowColor && "bg-gradient-to-r from-background via-background/95 to-transparent",
              showLeftShadow ? "opacity-100" : "opacity-0"
            ),
            style: getGradientStyle("left")
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "pointer-events-none absolute inset-y-0 right-0 z-20 transition-opacity duration-300",
              shadowWidths[shadowSize],
              !shadowColor && "bg-gradient-to-l from-background via-background/95 to-transparent",
              showRightShadow ? "opacity-100" : "opacity-0"
            ),
            style: getGradientStyle("right")
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "div",
        {
          ref: (node) => {
            scrollRef.current = node;
            if (typeof ref === "function") {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
          },
          className: cn(
            "overflow-auto",
            orientation === "vertical" && "overflow-x-hidden",
            orientation === "horizontal" && "overflow-y-hidden"
          ),
          children
        }
      )
    ] }));
  }
);
ScrollShadow.displayName = "ScrollShadow";
var Snippet = React20.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      text,
      showCopyButton = true,
      copyText = "Copy",
      onCopy,
      customColor,
      customBorderColor
    } = _b, props = __objRest(_b, [
      "className",
      "text",
      "showCopyButton",
      "copyText",
      "onCopy",
      "customColor",
      "customBorderColor"
    ]);
    const [copied, setCopied] = React20.useState(false);
    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        onCopy == null ? void 0 : onCopy();
        setTimeout(() => setCopied(false), 2e3);
      } catch (err) {
        console.error("Failed to copy text:", err);
      }
    };
    const colorStyles = React20.useMemo(() => {
      const styles = {};
      if (customColor) {
        styles.backgroundColor = `${customColor}15`;
      }
      if (customBorderColor) {
        styles.borderColor = customBorderColor;
      }
      return styles;
    }, [customColor, customBorderColor]);
    return /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
      /* @__PURE__ */ jsx(
        "pre",
        __spreadProps(__spreadValues({
          ref,
          style: colorStyles,
          className: cn(
            "relative overflow-x-auto rounded-md border bg-muted p-4 font-mono text-sm",
            className
          )
        }, props), {
          children: /* @__PURE__ */ jsx("code", { children: text })
        })
      ),
      showCopyButton && /* @__PURE__ */ jsx(
        Button,
        {
          variant: "ghost",
          size: "icon",
          className: "absolute right-2 top-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity",
          onClick: handleCopy,
          "aria-label": copyText,
          children: copied ? /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4" })
        }
      )
    ] });
  }
);
Snippet.displayName = "Snippet";
var sizeClasses = {
  sm: "size-8",
  md: "size-10",
  lg: "size-12"
};
var ColorPicker = React20.forwardRef(
  ({
    value = "#000000",
    onChange,
    format: format4 = "hex",
    showAlpha = false,
    size = "md",
    disabled = false,
    className
  }, ref) => {
    const [open, setOpen] = React20.useState(false);
    const [internalColor, setInternalColor] = React20.useState(() => {
      const parsed = parseRgba(value);
      return parsed || { r: 0, g: 0, b: 0, a: 1 };
    });
    React20.useEffect(() => {
      const parsed = parseRgba(value);
      if (parsed) {
        setInternalColor(parsed);
      }
    }, [value]);
    const hsl = React20.useMemo(
      () => rgbToHsl(internalColor.r, internalColor.g, internalColor.b),
      [internalColor.r, internalColor.g, internalColor.b]
    );
    const updateColor = React20.useCallback(
      (updates) => {
        const newColor = __spreadValues(__spreadValues({}, internalColor), updates);
        setInternalColor(newColor);
        let colorString = "";
        if (format4 === "hex") {
          if (showAlpha && newColor.a < 1) {
            const hex = rgbToHex(newColor.r, newColor.g, newColor.b);
            const alphaHex = Math.round(newColor.a * 255).toString(16).padStart(2, "0");
            colorString = `${hex}${alphaHex}`;
          } else {
            colorString = rgbToHex(newColor.r, newColor.g, newColor.b);
          }
        } else if (format4 === "rgba" || format4 === "rgb" && showAlpha) {
          colorString = rgbaToString(
            newColor.r,
            newColor.g,
            newColor.b,
            newColor.a
          );
        } else {
          colorString = `rgb(${Math.round(newColor.r)}, ${Math.round(newColor.g)}, ${Math.round(newColor.b)})`;
        }
        onChange == null ? void 0 : onChange(colorString);
      },
      [internalColor, format4, showAlpha, onChange]
    );
    const handleHueChange = (hue) => {
      const rgb = hslToRgb(hue, hsl.s, hsl.l);
      updateColor({ r: rgb.r, g: rgb.g, b: rgb.b });
    };
    const handleSaturationBrightnessChange = (saturation, brightness) => {
      const rgb = hslToRgb(hsl.h, saturation, brightness);
      updateColor({ r: rgb.r, g: rgb.g, b: rgb.b });
    };
    const handleAlphaChange = (alpha) => {
      updateColor({ a: alpha });
    };
    const handleHexChange = (hex) => {
      const parsed = parseRgba(hex);
      if (parsed) {
        updateColor(parsed);
      }
    };
    const handleRgbChange = (channel, val) => {
      updateColor({ [channel]: Math.max(0, Math.min(255, val)) });
    };
    const displayColor = React20.useMemo(() => {
      return rgbaToString(
        internalColor.r,
        internalColor.g,
        internalColor.b,
        internalColor.a
      );
    }, [internalColor]);
    return /* @__PURE__ */ jsxs(Popover, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
        "button",
        {
          ref,
          type: "button",
          disabled,
          className: cn(
            "inline-flex items-center justify-center rounded-md border-2 border-input/60 transition-all duration-200",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "hover:border-ring/50 hover:shadow-md",
            "disabled:cursor-not-allowed disabled:opacity-50",
            sizeClasses[size],
            className
          ),
          style: {
            backgroundColor: displayColor
          },
          "aria-label": "Selecionar cor",
          children: /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Selecionar cor" })
        }
      ) }),
      /* @__PURE__ */ jsx(PopoverContent, { className: "w-80 p-4", align: "start", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(
          SaturationBrightnessPicker,
          {
            hue: hsl.h,
            saturation: hsl.s,
            brightness: hsl.l,
            onChange: handleSaturationBrightnessChange
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "text-sm font-medium", children: "Matiz" }),
          /* @__PURE__ */ jsx(HueSlider, { value: hsl.h, onChange: handleHueChange })
        ] }),
        showAlpha && /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "text-sm font-medium", children: "Opacidade" }),
          /* @__PURE__ */ jsx(
            AlphaSlider,
            {
              color: rgbToHex(internalColor.r, internalColor.g, internalColor.b),
              value: internalColor.a,
              onChange: handleAlphaChange
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("label", { className: "text-sm font-medium", children: "Hexadecimal" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                value: rgbToHex(internalColor.r, internalColor.g, internalColor.b),
                onChange: (e) => handleHexChange(e.target.value),
                placeholder: "#000000",
                className: "font-mono text-sm"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("label", { className: "text-sm font-medium", children: "RGB" }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "number",
                  min: "0",
                  max: "255",
                  value: Math.round(internalColor.r),
                  onChange: (e) => handleRgbChange("r", parseInt(e.target.value) || 0),
                  className: "text-sm",
                  placeholder: "R"
                }
              ),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "number",
                  min: "0",
                  max: "255",
                  value: Math.round(internalColor.g),
                  onChange: (e) => handleRgbChange("g", parseInt(e.target.value) || 0),
                  className: "text-sm",
                  placeholder: "G"
                }
              ),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "number",
                  min: "0",
                  max: "255",
                  value: Math.round(internalColor.b),
                  onChange: (e) => handleRgbChange("b", parseInt(e.target.value) || 0),
                  className: "text-sm",
                  placeholder: "B"
                }
              )
            ] })
          ] })
        ] }),
        showAlpha && /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "text-sm font-medium", children: "Opacidade (%)" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "number",
              min: "0",
              max: "100",
              value: Math.round(internalColor.a * 100),
              onChange: (e) => {
                const val = parseInt(e.target.value) || 0;
                handleAlphaChange(Math.max(0, Math.min(100, val)) / 100);
              },
              className: "text-sm"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 pt-2 border-t", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "size-12 rounded-md border-2 border-input shadow-sm",
              style: { backgroundColor: displayColor }
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-1", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Cor selecionada" }),
            /* @__PURE__ */ jsx("div", { className: "font-mono text-sm", children: format4 === "hex" ? rgbToHex(internalColor.r, internalColor.g, internalColor.b) : rgbaToString(
              internalColor.r,
              internalColor.g,
              internalColor.b,
              internalColor.a
            ) })
          ] })
        ] })
      ] }) })
    ] });
  }
);
ColorPicker.displayName = "ColorPicker";
var SaturationBrightnessPicker = ({
  hue,
  saturation,
  brightness,
  onChange
}) => {
  const containerRef = React20.useRef(null);
  const [isDragging, setIsDragging] = React20.useState(false);
  const handleMouseDown = (e) => {
    setIsDragging(true);
    handleMove(e);
  };
  const handleMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
    const y = Math.max(0, Math.min(rect.height, e.clientY - rect.top));
    const s = x / rect.width * 100;
    const l = 100 - y / rect.height * 100;
    onChange(s, l);
  };
  React20.useEffect(() => {
    if (!isDragging) return;
    const handleMouseMove = (e) => handleMove(e);
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, onChange]);
  const hueColor = React20.useMemo(() => {
    const rgb = hslToRgb(hue, 100, 50);
    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  }, [hue]);
  const pointerX = saturation / 100 * 100;
  const pointerY = 100 - brightness / 100 * 100;
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: containerRef,
      className: "relative h-48 w-full rounded-md cursor-crosshair overflow-hidden border border-input",
      style: {
        background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, ${hueColor})`
      },
      onMouseDown: handleMouseDown,
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-lg pointer-events-none",
          style: {
            left: `${pointerX}%`,
            top: `${pointerY}%`
          }
        }
      )
    }
  );
};
var HueSlider = ({ value, onChange }) => {
  const containerRef = React20.useRef(null);
  const [isDragging, setIsDragging] = React20.useState(false);
  const handleMouseDown = (e) => {
    setIsDragging(true);
    handleMove(e);
  };
  const handleMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
    const hue = x / rect.width * 360;
    onChange(hue);
  };
  React20.useEffect(() => {
    if (!isDragging) return;
    const handleMouseMove = (e) => handleMove(e);
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, onChange]);
  const pointerX = value / 360 * 100;
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: containerRef,
      className: "relative h-4 w-full rounded-md cursor-pointer overflow-hidden border border-input",
      style: {
        background: "linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)"
      },
      onMouseDown: handleMouseDown,
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute top-0 h-full w-1 -translate-x-1/2 bg-white border border-gray-300 shadow-md pointer-events-none",
          style: {
            left: `${pointerX}%`
          }
        }
      )
    }
  );
};
var AlphaSlider = ({
  color,
  value,
  onChange
}) => {
  const containerRef = React20.useRef(null);
  const [isDragging, setIsDragging] = React20.useState(false);
  const handleMouseDown = (e) => {
    setIsDragging(true);
    handleMove(e);
  };
  const handleMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
    const alpha = x / rect.width;
    onChange(alpha);
  };
  React20.useEffect(() => {
    if (!isDragging) return;
    const handleMouseMove = (e) => handleMove(e);
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, onChange]);
  const pointerX = value * 100;
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: containerRef,
      className: "relative h-4 w-full rounded-md cursor-pointer overflow-hidden border border-input",
      style: {
        background: `linear-gradient(to right, transparent, ${color})`,
        backgroundImage: `linear-gradient(to right, transparent, ${color}), repeating-conic-gradient(#808080 0% 25%, #fff 0% 50%) 50% / 8px 8px`
      },
      onMouseDown: handleMouseDown,
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute top-0 h-full w-1 -translate-x-1/2 bg-white border border-gray-300 shadow-md pointer-events-none",
          style: {
            left: `${pointerX}%`
          }
        }
      )
    }
  );
};
function ThemeProvider(_a) {
  var _b = _a, {
    children
  } = _b, props = __objRest(_b, [
    "children"
  ]);
  return /* @__PURE__ */ jsx(ThemeProvider$1, __spreadProps(__spreadValues({}, props), { children }));
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Avatar, AvatarFallback, AvatarImage, Badge, Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Button, Calendar, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious, Checkbox, CircularProgress, ColorPicker, CommandPalette, DateInput, DatePicker, DateRangePicker, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, Divider, Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerPortal, DrawerTitle, DrawerTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, FileUpload, FormField, IconButton, Input, KeyboardKey, Dialog as Modal, DialogClose as ModalClose, DialogContent as ModalContent, DialogDescription as ModalDescription, DialogFooter as ModalFooter, DialogHeader as ModalHeader, DialogOverlay as ModalOverlay, DialogPortal as ModalPortal, DialogTitle as ModalTitle, DialogTrigger as ModalTrigger, Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, Popover, PopoverContent, PopoverTrigger, Progress, Rating, RichTextEditor, ScrollShadow, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Sidebar, SidebarClose, SidebarContent, SidebarFooter, SidebarHeader, SidebarTrigger, Skeleton, Snippet, Spinner, Switch, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, ThemeProvider, Toaster, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, badgeVariants, buttonVariants, cn, getContrastTextColor, hexToRgb, hslToRgb, isLightColor, parseRgba, ratingVariants, rgbToHex, rgbToHsl, rgbaToString };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map