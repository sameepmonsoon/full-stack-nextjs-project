"use client";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import React, { useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { colorPallette } from "@/Helpers/Constants/ColourConstants";
const containerVariant = cva(
  `border-2 group rounded-[8px] p-0 pb-0 gap-0 border-gray-300 h-[50px] w-full flex flex-col justify-end items-start focus-within:ring-black/60 dark:focus-within:ring-gray-200/60 `,
  {
    variants: {
      containerStyle: {
        default: `focus-within:border-black overflow-hidden focus-within:ring-[1px] focus-within:ring-black/60 dark:focus-within:ring-gray-200/60 dark:focus-within:border-gray-200 border-[1px] dark:border-gray-200 border-[1px] group rounded-[8px] p-0 pb-0 gap-0 border-gray-300 h-20  w-full flex flex-col justify-end items-start`,
        border: `focus-within:border-black overflow-hidden focus-within:ring-[1px] focus-within:ring-black/60 dark:focus-within:ring-gray-200/60  border-[1px] dark:focus-within:border-gray-200 dark:border-gray-200 hover:border-black border-[1px] cursor-text group rounded-[8px] p-0 pb-0 gap-0 border-gray-300 h-20  w-full flex flex-col justify-end items-start`,
      },
      size: {
        default: "h-[60px]",
        medium: "h-20 ",
        small: "h-[50px] ",
      },
    },
    defaultVariants: {
      containerStyle: "default",
      size: "default",
    },
  }
);
const labelVariant = cva(
  `absolute text-lg text-gray-500 dark:text-gray-400 px-5 duration-200 transform -translate-y-[58%] scale-75 top-[30%] z-10 origin-[0] start-0 peer-focus:dark:text-gray-200/60 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[58%] rtl:peer-focus:translate-x-[58%] rtl:peer-focus:left-aut`,
  {
    variants: {
      size: {
        default:
          "absolute text-lg text-gray-500 dark:text-gray-400 px-5 duration-200 transform -translate-y-[28%] top-[24%] z-10 origin-0 start-0 peer-focus:dark:text-gray-200/60 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-[28%] rtl:peer-focus:left-auto",
        medium:
          "absolute text-xl text-gray-500 dark:text-gray-400 px-5 duration-200 transform -translate-y-[30%] top-[30%] z-10 origin-0 start-0 peer-focus:dark:text-gray-200/60 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-[30%] rtl:peer-focus:left-auto",
        small:
          "absolute text-md text-gray-500 dark:text-gray-400 px-5 duration-200 transform -translate-y-[22%] top-[22%] z-10 origin-0 start-0 peer-focus:dark:text-gray-200/60 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-[22%] rtl:peer-focus:left-auto",
      },
      font: {
        default: "font-normal",
        medium: "font-medium",
      },
    },
    defaultVariants: {
      size: "default",
      font: "default",
    },
  }
);

const inputVariant = cva(
  `border-b bg-transparent  w-full h-full focus:outline-none focus:border-[0px] border-[0px] focus:border-b-2 transition-colors peer`,
  {
    variants: {
      inputBorder: {
        default: `flex dark:text-white hover:border-gray-400 dark:focus-visible:ring-gray-400 dark:border-gray-400 bg-transparent dark:placeholder:text-red-100 h-full w-full dark:focus:border-[${colorPallette.darkBorderColor}] z-1 dark:text-[${colorPallette.darkText}] rounded-md border border-input  px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm transition-border ease-linear duration-100  file:font-medium placeholder:text-muted-foreground focus-visible:outline-none outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50`,
        none: "border-b px-[16px]  dark:text-white w-full h-full focus:outline-none border-none focus:border-nonetransition-colors peer",
      },
      font: {
        default: "font-normal",
        medium: " font-medium",
      },
      size: {
        default: "text-sm  pt-5",
        medium: " pt-7 text-lg",
        small: "pt-4 text-sm ",
      },
    },
    defaultVariants: {
      inputBorder: "default",
      font: "default",
      size: "default",
    },
  }
);
const CustomInputContainer = ({
  type = "text",
  className,
  inputBorder,
  containerStyle,
  label,
  font,
  size,
}: {
  type: string;
  className?: string;
  inputBorder: any;
  containerStyle: any;
  label: string;
  font: "default" | "medium" | null | undefined;
  size: "default" | "medium" | "small" | null | undefined;
}) => {
  return (
    <div className={cn(containerVariant({ containerStyle, className, size }))}>
      <div className="relative w-full h-full">
        <Input
          type={type}
          id={type}
          className={cn(inputVariant({ inputBorder, font, className, size }))}
          placeholder=" "
        />
        <Label htmlFor={type} className={cn(labelVariant({ size, className }))}>
          {label}
        </Label>
        <p
          id="filled_success_help"
          className="mt-2 text-sm text-green-600 dark:text-green-400">
          <span className="font-medium">Well done!</span> Some success message.
        </p>
      </div>
    </div>
  );
};

export default CustomInputContainer;
