import * as React from "react";

import { cn } from "@/lib/utils";
import { colorPallette } from "@/Helpers/Constants/ColourConstants";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `flex hover:border-gray-400 dark:focus-visible:ring-gray-400 dark:border-gray-400 bg-transparent dark:placeholder:text-red-100 h-full w-full dark:focus:border-[${colorPallette.darkBorderColor}] z-1 dark:text-[${colorPallette.darkText}] rounded-md border border-input  px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm transition-border ease-linear duration-100  file:font-medium placeholder:text-muted-foreground focus-visible:outline-none outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50`,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
