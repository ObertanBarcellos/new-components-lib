"use client"

import * as React from "react"
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react"
import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker"

import { cn, getContrastTextColor } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
  primaryColor?: string
  accentColor?: string
  fixedWidth?: string | number
  fixedHeight?: string | number
}

// Contexto para passar cores customizadas para CalendarDayButton
const CalendarColorContext = React.createContext<{
  primaryColor?: string
  accentColor?: string
  primaryTextColor?: string
  accentTextColor?: string
}>({})

function Calendar({
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
  components,
  ...props
}: CalendarProps) {
  const defaultClassNames = getDefaultClassNames()

  const colorStyles = React.useMemo(() => {
    const styles: React.CSSProperties & Record<string, string> = {}
    if (primaryColor) {
      styles['--calendar-primary'] = primaryColor
      // Calcula automaticamente a cor do texto baseado na cor primária
      styles['--calendar-primary-text'] = getContrastTextColor(primaryColor)
    }
    if (accentColor) {
      styles['--calendar-accent'] = accentColor
      // Calcula automaticamente a cor do texto baseado na cor de destaque
      styles['--calendar-accent-text'] = getContrastTextColor(accentColor)
    }
    // Aplica dimensões fixas se fornecidas
    if (fixedWidth) {
      styles.width = typeof fixedWidth === 'number' ? `${fixedWidth}px` : fixedWidth
    }
    if (fixedHeight) {
      styles.height = typeof fixedHeight === 'number' ? `${fixedHeight}px` : fixedHeight
    }
    return styles
  }, [primaryColor, accentColor, fixedWidth, fixedHeight])

  // Calcular cores de texto
  const primaryTextColor = React.useMemo(() => {
    return primaryColor ? getContrastTextColor(primaryColor) : undefined
  }, [primaryColor])

  const accentTextColor = React.useMemo(() => {
    return accentColor ? getContrastTextColor(accentColor) : undefined
  }, [accentColor])

  // Garantir que as variáveis CSS sejam definidas mesmo se não houver cores customizadas
  const defaultColorStyles = React.useMemo(() => {
    const styles: React.CSSProperties & Record<string, string> = { ...colorStyles }
    if (!primaryColor) {
      styles['--calendar-primary'] = 'hsl(var(--primary))'
      styles['--calendar-primary-text'] = 'hsl(var(--primary-foreground))'
    }
    if (!accentColor) {
      styles['--calendar-accent'] = 'hsl(var(--accent))'
      styles['--calendar-accent-text'] = 'hsl(var(--accent-foreground))'
    }
    return styles
  }, [colorStyles, primaryColor, accentColor])

  return (
    <CalendarColorContext.Provider
      value={{
        primaryColor,
        accentColor,
        primaryTextColor,
        accentTextColor,
      }}
    >
      <div 
        style={defaultColorStyles} 
        className={cn(
          (fixedWidth || fixedHeight) && "overflow-hidden",
          className
        )}
      >
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn(
          "bg-background group/calendar p-4 rounded-lg border shadow-sm [--cell-size:3rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent transition-all duration-200",
          (fixedWidth || fixedHeight) && "w-full h-full",
          String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
          String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
          className
        )}
        captionLayout={captionLayout}
        formatters={{
          formatMonthDropdown: (date) =>
            date.toLocaleString("default", { month: "short" }),
          ...formatters,
        }}
        classNames={{
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
            captionLayout === "label"
              ? "text-base"
              : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5",
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
          hidden: cn("invisible", defaultClassNames.hidden),
          ...classNames,
        }}
        components={{
          Root: ({ className, rootRef, ...props }) => {
            return (
              <div
                data-slot="calendar"
                ref={rootRef}
                className={cn(className)}
                {...props}
              />
            )
          },
          Chevron: ({ className, orientation, ...props }) => {
            if (orientation === "left") {
              return (
                <ChevronLeftIcon className={cn("size-4 transition-transform duration-200", className)} {...props} />
              )
            }

            if (orientation === "right") {
              return (
                <ChevronRightIcon
                  className={cn("size-4 transition-transform duration-200", className)}
                  {...props}
                />
              )
            }

            return (
              <ChevronDownIcon className={cn("size-4 transition-transform duration-200", className)} {...props} />
            )
          },
          DayButton: CalendarDayButton,
          WeekNumber: ({ children, ...props }) => {
            return (
              <td {...props}>
                <div className="flex size-[--cell-size] items-center justify-center text-center">
                  {children}
                </div>
              </td>
            )
          },
          ...components,
        }}
        {...props}
      />
      </div>
    </CalendarColorContext.Provider>
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames()
  const { primaryColor, accentColor, primaryTextColor, accentTextColor } = React.useContext(CalendarColorContext)

  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  // Aplicar estilos inline quando há cores customizadas
  const buttonStyles = React.useMemo(() => {
    const styles: React.CSSProperties & Record<string, string> = {}
    
    if (modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle) {
      // Seleção única
      if (primaryColor) {
        styles.backgroundColor = primaryColor
        styles.borderColor = primaryColor
        if (primaryTextColor) {
          styles.color = primaryTextColor
        }
      }
    } else if (modifiers.range_start || modifiers.range_end) {
      // Início ou fim do range
      if (primaryColor) {
        styles.backgroundColor = primaryColor
        styles.borderColor = primaryColor
        if (primaryTextColor) {
          styles.color = primaryTextColor
        }
      }
    } else if (modifiers.range_middle) {
      // Meio do range
      if (accentColor) {
        styles.backgroundColor = `${accentColor}66` // ~40% opacity
        styles.borderColor = `${accentColor}66`
        if (accentTextColor) {
          styles.color = accentTextColor
        }
      }
    } else if (modifiers.today) {
      // Dia de hoje
      if (primaryColor) {
        styles.borderColor = `${primaryColor}99` // ~60% opacity
      }
      if (accentColor) {
        styles.backgroundColor = `${accentColor}1A` // ~10% opacity
      }
    }
    
    return styles
  }, [modifiers, primaryColor, accentColor, primaryTextColor, accentTextColor])

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      data-today={modifiers.today}
      style={buttonStyles}
      className={cn(
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
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }
