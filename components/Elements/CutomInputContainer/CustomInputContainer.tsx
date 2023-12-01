"use client";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import React, { useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { colorPallette } from "@/Helpers/Constants/ColourConstants";
const containerVariant = cva(
  `border-2 group rounded-md p-4 pb-0 gap-1 border-gray-300 h-20  w-full flex flex-col justify-end items-start transition-all duration-1000 ease-in-out`,
  {
    variants: {
      containerStyle: {
        default: `border-2 group rounded-md p-4 pb-0 gap-1 border-gray-300 h-20  w-full flex flex-col justify-end items-start transition-all duration-1000 ease-in-out`,
        border: `border-2 group rounded-md p-4 pb-0 gap-1 border-gray-300 h-20  w-full flex flex-col justify-end items-start transition-all duration-1000 ease-in-out`,
      },
    },
    defaultVariants: {
      containerStyle: "default",
    },
  }
);

const inputVariant = cva(
  `border-b bg-transparent py-1 w-full h-full focus:outline-none focus:border-[0px] border-[0px] focus:border-b-2 transition-colors peer`,
  {
    variants: {
      inputBorder: {
        default: `flex hover:border-gray-400 dark:focus-visible:ring-gray-400 dark:border-gray-400 bg-transparent dark:placeholder:text-red-100 h-full w-full dark:focus:border-[${colorPallette.darkBorderColor}] z-1 dark:text-[${colorPallette.darkText}] rounded-md border border-input  px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm transition-border ease-linear duration-100  file:font-medium placeholder:text-muted-foreground focus-visible:outline-none outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50`,
        none: "border-b bg-transparent py-1 w-full h-full focus:outline-none focus:border-[0px] border-[0px] focus:border-b-2 transition-colors peer",
      },
    },
    defaultVariants: {
      inputBorder: "default",
    },
  }
);
const CustomInputContainer = ({
  type = "text",
  className,
  inputBorder,
  containerStyle,
}: {
  type: string;
  className: string;
  inputBorder: any;
  containerStyle: any;
}) => {
  return (
    <div className={cn(containerVariant({ containerStyle, className }))}>
      <div className="relative w-full h-[90%]">
        <Input
          type={type}
          id="username"
          className={cn(inputVariant({ inputBorder, className }))}
        />
        <Label
          htmlFor="username"
          className="absolute left-0 top-3 h-[10px] w-full text-gray-600 text-md cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-purple-600 transition-all">
          Username
        </Label>
      </div>
    </div>
  );
};

export default CustomInputContainer;
