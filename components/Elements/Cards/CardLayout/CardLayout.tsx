"use client";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React, { useState } from "react";
import { TbDots } from "react-icons/tb";
import "./CardLayout.scss";
import { motion } from "framer-motion";
import { CustomPopOver } from "@/components/Elements/CustomPopOver/CustomPopOver";
import { Label } from "@radix-ui/react-label";
import { PaymentMethodConstant } from "@/Helpers/Constants/Admin/IncomeConstants";
const cardLayoutVariant = cva(
  `flex-1 min-w-[15rem] shadow-sm flex justify-start relative items-center p-4 rounded-[12px] overflow-hidden text-white`,
  {
    variants: {
      type: {
        default: "max-h-[5rem]",
        column: "max-h-[10rem]",
        row: "max-h-[5rem]",
      },
      color: {
        default: " bg-darkBg",
        danger: "bg-[#FFEBE3] dark:bg-red-900/30",
        alert: "bg-[#f9fae2] dark:bg-yellow-900/30",
        safe: "bg-[#D5F3E6] dark:bg-green-900/30",
      },
    },
    defaultVariants: {
      type: "default",
    },
  }
);

const innerCardContainerVariant = cva(
  `z-10 w-full  flex gap-2 overflow-hidden relative`,
  {
    variants: {
      type: {
        default: "w-full flex h-full",
        column: "flex-col",
        row: "flex-row h-full gap-3",
      },
      color: {
        default: "text-white",
        danger: "dark:text-white text-red-800",
        alert: "text-yellow-800 dark:text-white",
        safe: "text-green-800 dark:text-white",
      },
    },
    defaultVariants: {
      type: "default",
    },
  }
);

const divVariant = cva(
  `z-10 flex justify-between items-center pl-[1px] gap-5 relative `,
  {
    variants: {
      type: {
        default: "flex",
        column: "flex h-10",
        row: "flex-row h-full w-auto ",
      },
    },
    defaultVariants: {
      type: "default",
    },
  }
);
const styleContainerVariant = cva(`absolute z-4 w-40  h-full right-0`, {
  variants: {
    color: {
      default: "bg-accent/10",
      danger: "dark:bg-red-500/10 bg-red-500/20",
      alert: "dark:bg-yellow-500/10 bg-yellow-500/20",
      safe: "dark:bg-green-500/10 bg-green-500/20",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

const iconContainerVariant = cva(
  `bg-accent/10 h-full cursor-pointer relative z-10 rounded-md flex justify-center items-center overflow-hidden`,
  {
    variants: {
      color: {
        default: "bg-accent/10",
        danger: "bg-red-500/10 dark:bg-accent/10",
        alert: "bg-yellow-500/20 dark:bg-accent/10",
        safe: "bg-green-500/10 dark:bg-accent/10",
      },
    },
    defaultVariants: {
      color: "default",
    },
  }
);
const dotContainerVariant = cva(
  ` relative cursor-pointer z-10 rounded-md justify-center items-center overflow-hidden `,
  {
    variants: {
      color: {
        default: "bg-accent/10",
        danger: "bg-red-500/30 dark:bg-accent/10",
        alert: "bg-yellow-500/30 dark:bg-accent/10",
        safe: "bg-green-500/30 dark:bg-accent/10",
      },
    },
    defaultVariants: {
      color: "default",
    },
  }
);

const CardLayout = ({
  type,
  children,
  title,
  detail,
  icon: Icon,
  popOverContent = {
    content: <></>,
    handler: () => {},
    state: false,
    currentData: "",
  },
  color,
}: {
  type: "default" | "column" | "row" | null | undefined;
  children?: React.ReactNode;
  title: string | React.ReactNode;
  popOverContent?: {
    content: React.ReactNode;
    handler: () => any;
    state: boolean;
    currentData: any;
  };
  detail: string;
  color: "default" | "danger" | "alert" | "safe" | null | undefined;
  icon: React.ComponentType<{ size: number }>;
}) => {
  const { content, handler, state, currentData } = popOverContent;
  console.log(popOverContent);
  return (
    <div className={cn(cardLayoutVariant({ type, color }))}>
      <motion.div
        initial={{ x: 5, y: -5 }}
        animate={{ x: 0, y: 0 }}
        transition={{ delay: 0.5, type: "spring", restDelta: 0.5 }}
        className={cn(styleContainerVariant({ color }), "first-div")}
      ></motion.div>

      <motion.div
        initial={{ x: 5, y: -5 }}
        animate={{ x: 0, y: 0 }}
        transition={{ delay: 0.6, type: "spring", restDelta: 0.5 }}
        className={cn(styleContainerVariant({ color }), "second-div")}
      ></motion.div>
      <motion.div
        initial={{ x: 5, y: -5 }}
        animate={{ x: 0, y: 0 }}
        transition={{ delay: 0.7, type: "spring", restDelta: 0.5 }}
        className={cn(styleContainerVariant({ color }), "third-div")}
      ></motion.div>
      <motion.div
        initial={{ x: 5, y: -5 }}
        animate={{ x: 0, y: 0 }}
        transition={{ delay: 0.8, type: "spring", restDelta: 0.5 }}
        className={cn(styleContainerVariant({ color }), "fourth-div")}
      ></motion.div>
      <div className={cn(innerCardContainerVariant({ type, color }), "z-10")}>
        <div className={cn(divVariant({ type }))}>
          <span
            className={cn(
              iconContainerVariant({ color }),
              `${type?.toLowerCase() === "row" ? "w-[3.3rem]" : "w-[2.6rem]"}`
            )}
          >
            <Icon size={18} />
          </span>
          <CustomPopOver
            onOpenChange={handler}
            defaultOpen={true}
            open={state}
            popOverContent={content}
          >
            <span
              onClick={handler}
              className={cn(
                dotContainerVariant({ color }),
                `${
                  type?.toLowerCase() === "row"
                    ? "w-0 hidden h-full"
                    : "flex w-[2.3rem] h-[90%]"
                }`
              )}
            >
              <TbDots size={20} />
            </span>
          </CustomPopOver>
        </div>
        <div
          className={`w-full h-auto flex flex-col z-1  relative ${
            type?.toLowerCase() === "row" ? "mb-[5px] gap-0" : "mb-0 gap-2 "
          }`}
        >
          {children ? (
            children
          ) : (
            <>
              <p
                className={`flex justify-start items-center  gap-2 ${
                  type?.toLowerCase() === "row"
                    ? "font-medium text-lg h-7"
                    : "font-medium text-5xl h-13 "
                } `}
              >
                {title}
              </p>

              <p
                className={`h-7 font-semibold capitalize text-start overflow-hidden text-ellipsis  ${
                  type?.toLowerCase() === "row"
                    ? "font-medium text-xs h-5"
                    : "font-base text-md h-7"
                }`}
              >
                {detail}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
