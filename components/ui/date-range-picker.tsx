"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface DateRangePickerProps {
  dateRange?: DateRange
  onSelect?: (range: DateRange | undefined) => void
  placeholder?: string
  disabled?: boolean
  className?: string
  primaryColor?: string
  accentColor?: string
}

export function DateRangePicker({
  dateRange,
  onSelect,
  placeholder = "Pick a date range",
  disabled = false,
  className,
  primaryColor,
  accentColor,
}: DateRangePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"default"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !dateRange && "text-muted-foreground",
            className
          )}
          disabled={disabled}
          customColor={primaryColor}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {dateRange?.from ? (
            dateRange.to ? (
              <>
                {format(dateRange.from, "LLL dd, y")} -{" "}
                {format(dateRange.to, "LLL dd, y")}
              </>
            ) : (
              format(dateRange.from, "LLL dd, y")
            )
          ) : (
            <span>{placeholder}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start" customColor={primaryColor} customBorderColor={accentColor}>
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={dateRange?.from}
          selected={dateRange}
          onSelect={onSelect}
          numberOfMonths={2}
          primaryColor={primaryColor}
          accentColor={accentColor}
        />
      </PopoverContent>
    </Popover>
  )
}

