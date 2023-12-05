"use client";

import * as React from "react";
//@ts-ignore
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    style={{ width: `${value}%` }}
    ref={ref}
    className={cn(
      `relative h-4  overflow-hidden rounded-full bg-secondary`,
      className
    )}
    {...props}>
    <ProgressPrimitive.Indicator
      className={`h-full w-full flex-1 bg-primary transition-all`}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };