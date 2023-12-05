"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";

export function CustomProgressBar() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={40} className=" h-[8px]" />;
}
