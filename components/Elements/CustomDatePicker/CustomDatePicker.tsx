"use client";

import { CalendarIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DayPickerRangeProps } from "react-day-picker";

export function CustomDatePicker({
  value,
  disabled = false,
  onChange,
  mode = "single",
}: {
  value: Date;
  disabled: boolean;
  onChange: () => any;
  mode: "default" | "single" | "range" | "multiple" | undefined | any;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size="small"
          variant={"trigger"}
          className={cn("pl-3 text-left font-normal")}
        >
          <span className="text-gray-400">Pick a date</span>

          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      {!disabled && (
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode={mode}
            selected={value}
            onSelect={onChange}
            disabled={disabled}
            initialFocus
          />
        </PopoverContent>
      )}
    </Popover>
  );
}
