import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React from "react";

//variant
const cardLayoutVariant = cva(
  `flex-1 flex justify-start items-cemter bg-gray-500 p-4 rounded-md overflow-hidden`,
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

const innerCardContainerVariant = cva(`w-full flex  gap-2 overflow-hidden`, {
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
const divVariant = cva(`h-auto bg-yellow-200 flex justify-start items-center`, {
  variants: {
    type: {
      default: "h-10 bg-yellow-200 flex justify-start items-center",
      column: "h-10 bg-yellow-200 flex justify-start items-center",
      row: "flex-row h-full w-40",
    },
  },
  defaultVariants: {
    type: "default",
  },
});

const CardLayout = ({
  type,
}: {
  type: "default" | "column" | "row" | null | undefined;
}) => {
  return (
    <div className={cn(cardLayoutVariant({ type }))}>
      <div className={cn(innerCardContainerVariant({ type }))}>
        <div className={cn(divVariant({ type }))}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
        </div>
        <div className="w-full h-auto  flex flex-col gap-2">
          <p className="h-16 bg-yellow-200 flex justify-start items-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
          </p>
          <p className="h-4 bg-yellow-200 flex justify-start items-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
