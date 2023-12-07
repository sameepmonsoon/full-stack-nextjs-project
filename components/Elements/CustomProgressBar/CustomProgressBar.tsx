"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const progressBarVariant = cva(
  ` h-[8px] relative overflow-hidden rounded-full`,
  {
    variants: {
      type: {
        default: "bg-primary",
        weak: "bg-yellow-500",
        normal: "bg-green-300",
        poor: "bg-red-800",
        good: "bg-green-500",
        strong: "bg-green-900",
      },
    },
    defaultVariants: {
      type: "default",
    },
  }
);
export function CustomProgressBar({
  type,
  className,
  value,
}: {
  type:
    | string
    | "normal"
    | "strong"
    | "good"
    | "default"
    | "weak"
    | "poor"
    | null
    | undefined
    | any;

  className?: string;
  value: number;
}) {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress
      value={value}
      className={cn(progressBarVariant({ type, className }))}
    />
  );
}
