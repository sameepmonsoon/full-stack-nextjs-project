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
        alert: "bg-yellow-500",
        danger: "bg-red-800",
        good: "bg-green-700 w-10",
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
  type: "good" | "default" | "alert" | "danger" | null | undefined;
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
