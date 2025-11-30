"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"

export interface DateInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  value?: Date
  onChange?: (date: Date | undefined) => void
  showCalendar?: boolean
  primaryColor?: string
  accentColor?: string
  customBorderColor?: string
  customFocusColor?: string
}

const DateInput = React.forwardRef<HTMLInputElement, DateInputProps>(
  ({ className, value, onChange, showCalendar = true, primaryColor, accentColor, customBorderColor, customFocusColor, ...props }, ref) => {
    const [inputValue, setInputValue] = React.useState(
      value ? format(value, "yyyy-MM-dd") : ""
    )

    React.useEffect(() => {
      if (value) {
        setInputValue(format(value, "yyyy-MM-dd"))
      }
    }, [value])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      setInputValue(newValue)

      if (newValue) {
        const date = new Date(newValue)
        if (!isNaN(date.getTime())) {
          onChange?.(date)
        }
      } else {
        onChange?.(undefined)
      }
    }

    const handleCalendarSelect = (date: Date | undefined) => {
      if (date) {
        setInputValue(format(date, "yyyy-MM-dd"))
        onChange?.(date)
      } else {
        setInputValue("")
        onChange?.(undefined)
      }
    }

    if (!showCalendar) {
      return (
        <Input
          ref={ref}
          type="date"
          value={inputValue}
          onChange={handleInputChange}
          className={className}
          customBorderColor={customBorderColor}
          customFocusColor={customFocusColor}
          {...props}
        />
      )
    }

    return (
      <Popover>
        <PopoverTrigger asChild>
          <div className="relative">
            <Input
              ref={ref}
              type="date"
              value={inputValue}
              onChange={handleInputChange}
              className={cn("pr-10", className)}
              customBorderColor={customBorderColor}
              customFocusColor={customFocusColor}
              {...props}
            />
            <CalendarIcon className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={value}
            onSelect={handleCalendarSelect}
            initialFocus
            primaryColor={primaryColor}
            accentColor={accentColor}
          />
        </PopoverContent>
      </Popover>
    )
  }
)
DateInput.displayName = "DateInput"

export { DateInput }

