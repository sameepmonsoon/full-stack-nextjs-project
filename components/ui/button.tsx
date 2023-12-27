import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 ",
        destructive:
          "bg-destructive dark:bg-[#292929] dark:text-white text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input dark:bg-[#292929] dark:text-white bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        text: " hover:text-accent-foreground hover:text-red-500 ",
        icon: " flex justify-start gap-2  dark:hover:bg-gray-600/40 dark:text-gray-300 capitalize rounded-[10px] pl-5 bg-transparent hover:bg-accent text-black",
        selected:
          " flex justify-start gap-2 dark:text-gray-300 capitalize rounded-[10px] pl-5 bg-transparent dark:bg-gray-600/40 text-black bg-accent",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        md: "h-[2.4rem] rounded-md px-5",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        iconWithText: "h-[2.5rem] w-full",
      },
      effect: {
        none: "",
        press: "transform active:scale-[0.92] transition-transform",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      effect: "none",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

interface extraButtonProps extends ButtonProps {
  effect?: "none" | "press" | null | undefined;
}
const Button = React.forwardRef<HTMLButtonElement, extraButtonProps>(
  ({ className, variant, effect, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, effect, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
