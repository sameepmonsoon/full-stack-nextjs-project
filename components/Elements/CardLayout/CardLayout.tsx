import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React from "react";

const cardLayoutVariant = cva(
  `flex-1 flex justify-start items-cemter p-4 py-6 rounded-[8px] overflow-hidden bg-darkBg text-white`,
  {
    variants: {
      type: {
        default: "h-[4.2rem]",
        column: "h-[10rem]",
        row: "h-[4.2rem]",
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
  `h-10 text-white flex justify-between items-center pl-2`,
  {
    variants: {
      type: {
        default: "flex",
        column: "flex",
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
          <span className="bg-red-900 w-10 h-full rounded-md flex justify-center items-center overflow-hidden">
            aaaa
          </span>
          <span className="bg-red-900 h-full w-10 rounded-md flex justify-center items-center overflow-hidden">
            aaaa
          </span>
        </div>
        <div className="w-full h-auto  flex flex-col gap-0">
          {children ? (
            children
          ) : (
            <>
              <p className="h-14  flex justify-start items-center gap-2 font-medium text-5xl">
                500
              </p>

              <p className="h-5 font-semibold text-base overflow-hidden text-ellipsis">
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
