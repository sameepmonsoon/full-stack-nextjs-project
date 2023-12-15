import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React from "react";
import { TbDots } from "react-icons/tb";
import { FaRegCreditCard } from "react-icons/fa6";
const cardLayoutVariant = cva(
  `flex-1 flex justify-start items-center p-4 rounded-[8px] overflow-hidden bg-darkBg text-white`,
  {
    variants: {
      type: {
        default: "h-[5rem]",
        column: "h-[10rem]",
        row: "h-[5rem]",
      },
    },
    defaultVariants: {
      type: "default",
    },
  }
);

const innerCardContainerVariant = cva(`w-full flex  gap-0 overflow-hidden`, {
  variants: {
    type: {
      default: "w-full flex h-full",
      column: "flex-col",
      row: "flex-row h-full gap-3",
    },
  },
  defaultVariants: {
    type: "default",
  },
});

const divVariant = cva(
  `text-white flex justify-between items-center pl-[1px]`,
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

const CardLayout = ({
  type,
  children,
}: {
  type: "default" | "column" | "row" | null | undefined;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn(cardLayoutVariant({ type }))}>
      <div className={cn(innerCardContainerVariant({ type }))}>
        <div className={cn(divVariant({ type }))}>
          <span
            className={`bg-accent/10 h-full cursor-pointer ${
              type?.toLowerCase() === "row" ? "w-[3.3rem]" : "w-[2.3rem]"
            }   rounded-md flex justify-center items-center overflow-hidden`}>
            <FaRegCreditCard />
          </span>
          <span
            className={`bg-accent/10 h-full cursor-pointer   rounded-md justify-center items-center overflow-hidden ${
              type?.toLowerCase() === "row" ? "w-0 hidden" : "flex w-[2.3rem]"
            }`}>
            <TbDots size={20} />
          </span>
        </div>
        <div
          className={`w-full h-auto flex flex-col gap-0  ${
            type?.toLowerCase() === "row" ? "mb-[5px]" : "mb-0"
          }`}>
          {children ? (
            children
          ) : (
            <>
              <p
                className={`flex justify-start items-center gap-2 ${
                  type?.toLowerCase() === "row"
                    ? "font-medium text-lg h-7"
                    : "font-medium text-5xl h-13 "
                } `}>
                500
              </p>

              <p
                className={`h-7 font-semibold text-start overflow-hidden text-ellipsis  ${
                  type?.toLowerCase() === "row"
                    ? "font-medium text-xs h-5"
                    : "font-medium text-sm h-7"
                }`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
