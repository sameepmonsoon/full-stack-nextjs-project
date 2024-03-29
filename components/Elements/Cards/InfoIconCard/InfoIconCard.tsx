import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React from "react";
import { TbCurrencyRupeeNepalese } from "react-icons/tb";
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
  color: "default" | "red" | "yellow" | "green" | "rose" | null | undefined;
  icon: React.ComponentType<{ size: number; className: string }>;
}) => {
  const infoIconCardVariant = cva(
    `flex-1  flex  relative items-center p-4 shadow-sm rounded-[12px] overflow-hidden text-white`,
    {
      variants: {
        type: {
          default: "min-h-[135px] min-w-[13rem] justify-start",
          column: "min-h-[222px] w-[354px] min-w-[300px] justify-center py-12",
          row: "min-h-[135px] min-w-[15rem] justify-start",
        },
        color: {
          default: " bg-darkBg",
          red: "bg-orange-500/10 dark:bg-orange-900/30",
          yellow: "bg-[#f9fae2] dark:bg-yellow-900/30",
          green: "bg-[#D5F3E6] dark:bg-green-900/30",
          rose: "bg-rose-200/30 dark:bg-rose-900/20",
        },
      },
      defaultVariants: {
        type: "default",
      },
    }
  );

  const infoIconInnerDivVariant = cva(
    `flex-1 h-full w-full flex gap-[5px]  items-center text-white`,
    {
      variants: {
        type: {
          default:
            "justify-center justify-center items-start pl-[6rem] flex-col",
          column: "justify-between flex-col",
          row: "justify-center items-start pl-5 flex-col pr-[6rem]",
        },
        color: {
          default: "text-white",
          red: "dark:text-white text-orange-800",
          yellow: "text-yellow-900 dark:text-white",
          green: "text-green-900 dark:text-white",
          rose: "text-rose-900 dark:text-white",
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
            "absolute items-center -left-8 text-darkBg/20 dark:text-white/30 h-full",
          column: "justify-center items-start font-semibold",
          row: "absolute items-center -right-8 text-darkBg/20 dark:text-white/30 h-full",
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
          <Icon size={45} className={`h-full w-full`} />
        </div>
        {children ? (
          children
        ) : (
          <>
            <h3 className="text-4xl font-semibold tracking-tight flex justify-center items-center">
              <TbCurrencyRupeeNepalese />
              {title}
            </h3>
            <h6 className="text-[14px] capitalize h-5 font-medium whitespace-nowrap text-ellipsis overflow-hidden">
              {detail}
            </h6>
          </>
        )}
      </div>
    </div>
  );
};

export default InfoIconCard;
