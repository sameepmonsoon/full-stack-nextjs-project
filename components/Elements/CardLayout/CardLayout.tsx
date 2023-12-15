import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React from "react";
import { TbDots } from "react-icons/tb";
import { FaRegCreditCard } from "react-icons/fa6";
const cardLayoutVariant = cva(
  `flex-1 flex justify-start items-cemter p-4 rounded-[8px] overflow-hidden bg-darkBg text-white`,
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
      row: "flex-row h-full",
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
        row: "flex-row h-full w-40",
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
            className={`bg-accent/10 h-full cursor-pointer  w-[2.3rem] rounded-md justify-center items-center overflow-hidden ${
              type?.toLowerCase() === "row" ? "hidden" : "flex"
            }`}>
            <TbDots size={20} />
          </span>
        </div>
        <div className="w-full h-auto  flex flex-col gap-0">
          {children ? (
            children
          ) : (
            <>
              <p className="h-13 flex justify-start items-center gap-2 font-medium text-5xl">
                500
              </p>

              <p className="h-7 font-semibold text-base overflow-hidden text-ellipsis">
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
