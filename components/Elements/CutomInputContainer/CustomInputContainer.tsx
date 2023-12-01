"use client";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import React, { useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { colorPallette } from "@/Helpers/Constants/ColourConstants";
const containerVariant = cva(
  `border-2 group rounded-[8px] p-4 pb-0 gap-1 border-gray-300 h-20  w-full flex flex-col justify-end items-start focus-within:ring-black/60 dark:focus-within:ring-gray-200/60 `,
  {
    variants: {
      containerStyle: {
        default: `focus-within:border-black  focus-within:ring-1 focus-within:ring-black/60 dark:focus-within:ring-gray-200/60 dark:focus-within:border-gray-200 border-[1px] dark:border-gray-200 border-[1px] group rounded-[8px] p-4 pb-0 gap-0 border-gray-300 h-20  w-full flex flex-col justify-end items-start`,
        border: `focus-within:border-black focus-within:ring-1 focus-within:ring-black/60 dark:focus-within:ring-gray-200/60  border-[1px] dark:focus-within:border-gray-200 dark:border-gray-200 hover:border-black border-[1px] cursor-text group rounded-[8px] p-4 pb-0 gap-0 border-gray-300 h-20  w-full flex flex-col justify-end items-start`,
      },
    },
    defaultVariants: {
      containerStyle: "default",
    },
  }
);

const inputVariant = cva(
  `border-b bg-transparent  w-full h-full focus:outline-none focus:border-[0px] border-[0px] focus:border-b-2 transition-colors peer`,
  {
    variants: {
      inputBorder: {
        default: `flex dark:text-white hover:border-gray-400 dark:focus-visible:ring-gray-400 dark:border-gray-400 bg-transparent dark:placeholder:text-red-100 h-full w-full dark:focus:border-[${colorPallette.darkBorderColor}] z-1 dark:text-[${colorPallette.darkText}] rounded-md border border-input  px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm transition-border ease-linear duration-100  file:font-medium placeholder:text-muted-foreground focus-visible:outline-none outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50`,
        none: "border-b bg-transparent dark:text-white w-full h-full focus:outline-none border-none focus:border-nonetransition-colors peer",
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
  label,
}: {
  type: string;
  className?: string;
  inputBorder: any;
  containerStyle: any;
  label: string;
}) => {
  return (
    <>
      <div className={cn(containerVariant({ containerStyle, className }))}>
        <div className="relative w-full h-[90%]">
          <Input
            type={type}
            id="username"
            className={cn(inputVariant({ inputBorder, className }))}
          />
          <Label
            htmlFor="username"
            className="dark:text-white absolute left-0 duration-200 linear top-0 h-full peer-focus:h-[10px] w-full text-gray-600 text-lg cursor-text peer-focus:text-sm peer-focus:-top-3  transition-all">
            {label}
          </Label>
        </div>
      </div>
      <span>Invalid</span>
    </>
  );
};

export default CustomInputContainer;
