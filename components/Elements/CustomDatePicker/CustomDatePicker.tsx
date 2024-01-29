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

export function CustomDatePicker({
  value,
  disabled = false,
  onChange,
  mode = "single",
}: {
  value: Date | null;
  disabled: boolean;
  onChange: (e: any) => void;
  mode: "default" | "single" | "range" | "multiple" | undefined | any;
}) {
  let date: any;
  if (value) {
    date = new Date(value);
    date = date.toDateString();
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size="small"
          variant={"trigger"}
          className={cn("pl-3 text-left font-normal")}
        >
          {!value ? (
            <span className="text-gray-400">Date</span>
          ) : (
            <span className="text-gray-400">{date}</span>
          )}

          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      {!disabled && (
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode={mode}
            selected={value ? value : new Date()}
            onSelect={onChange}
            disabled={disabled}
            initialFocus
          />
        </PopoverContent>
      )}
    </Popover>
  );
}
