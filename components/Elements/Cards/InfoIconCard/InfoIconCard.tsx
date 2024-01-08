import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React from "react";

const InfoIconCard = ({
  type,
  children,
  title,
  detail,
  icon: Icon,
  color,
}: {
  type: "default" | "column" | "row" | null | undefined;
  children?: React.ReactNode;
  title: string;
  detail: string;
  color: "default" | "danger" | "alert" | "safe" | null | undefined;
  icon: React.ComponentType<{ size: number; className: string }>;
}) => {
  const infoIconCardVariant = cva(
    `flex-1  flex  relative items-center p-4 rounded-[12px] overflow-hidden text-white`,
    {
      variants: {
        type: {
          default: "min-h-[135px] min-w-[15rem] justify-start",
          column: "min-h-[222px] w-[354px] justify-center py-12",
          row: "min-h-[135px] min-w-[15rem] justify-start",
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

  const infoIconInnerDivVariant = cva(
    `flex-1 h-full w-full flex gap-[5px] relative items-center  text-white`,
    {
      variants: {
        type: {
          default:
            "justify-center justify-center items-start pl-[5rem] flex-col",
          column: "justify-between flex-col",
          row: "justify-center items-start pl-5 flex-col",
        },
        color: {
          default: "text-white",
          danger: "dark:text-white text-[#7A0916]",
          alert: "text-yellow-900 dark:text-white",
          safe: "text-green-900 dark:text-white",
        },
      },
      defaultVariants: {
        type: "default",
      },
    }
  );
  const innerIconContainerVariant = cva(
    `flex flex-1 justify-center items-start font-semibold`,
    {
      variants: {
        type: {
          default:
            "absolute items-center -left-8 text-darkBg/10 dark:text-white/30 h-full",
          column: "justify-center items-start font-semibold",
          row: "absolute items-center -right-8 text-darkBg/10 dark:text-white/30 h-full",
        },
      },
      defaultVariants: {
        type: "default",
      },
    }
  );
  return (
    <div className={cn(infoIconCardVariant({ type, color }))}>
      <div className={cn(infoIconInnerDivVariant({ type, color }))}>
        <div className={cn(innerIconContainerVariant({ type }))}>
          <Icon size={50} className={`h-full w-full`} />
        </div>
        {children ? (
          children
        ) : (
          <>
            <h3 className="text-4xl font-semibold tracking-tight">{title}</h3>
            <h6 className="text-[14px] capitalize h-3 font-medium">{detail}</h6>
          </>
        )}
      </div>
    </div>
  );
};

export default InfoIconCard;
