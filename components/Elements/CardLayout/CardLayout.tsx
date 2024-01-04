import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React from "react";
import { TbDots } from "react-icons/tb";
import { FaRegCreditCard } from "react-icons/fa6";
import "./CardLayout.scss";
import { motion } from "framer-motion";
const cardLayoutVariant = cva(
  `flex-1 flex justify-start relative items-center p-4 rounded-[8px] overflow-hidden bg-darkBg text-white`,
  {
    variants: {
      type: {
        default: "max-h-[5rem]",
        column: "max-h-[10rem]",
        row: "max-h-[5rem]",
      },
    },
    defaultVariants: {
      type: "default",
    },
  }
);

const innerCardContainerVariant = cva(
  `z-10 w-full flex gap-2 overflow-hidden relative`,
  {
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
  }
);

const divVariant = cva(
  `z-10 text-white flex justify-between items-center pl-[1px] gap-5 relative`,
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
  title,
  detail,
}: {
  type: "default" | "column" | "row" | null | undefined;
  children?: React.ReactNode;
  title: string;
  detail: string;
}) => {
  return (
    <div className={cn(cardLayoutVariant({ type }))}>
      <motion.div
        initial={{ x: 5, y: -5 }}
        animate={{ x: 0, y: 0 }}
        transition={{ delay: 0.5, type: "spring", restDelta: 0.5 }}
        className="first-div absolute z-4 w-40 bg-accent/10 h-full right-0"
      ></motion.div>

      <motion.div
        initial={{ x: 5, y: -5 }}
        animate={{ x: 0, y: 0 }}
        transition={{ delay: 0.6, type: "spring", restDelta: 0.5 }}
        className="second-div absolute  z-3 w-40 bg-accent/10 h-full right-0"
      ></motion.div>
      <motion.div
        initial={{ x: 5, y: -5 }}
        animate={{ x: 0, y: 0 }}
        transition={{ delay: 0.7,  type: "spring", restDelta: 0.5 }}
        className="third-div absolute  z-2 w-40 bg-accent/10 h-full right-0"
      ></motion.div>
      <motion.div
        initial={{ x: 5, y: -5 }}
        animate={{ x: 0, y: 0 }}
        transition={{ delay: 0.8, type: "spring", restDelta: 0.5 }}
        className="fourth-div absolute  z-1 w-40 bg-accent/10 h-full right-0"
      ></motion.div>
      <div className={cn(innerCardContainerVariant({ type }), "z-10")}>
        <div className={cn(divVariant({ type }))}>
          <span
            className={`bg-accent/10 h-full cursor-pointer relative z-10 ${
              type?.toLowerCase() === "row" ? "w-[3.3rem]" : "w-[2.6rem]"
            }   rounded-md flex justify-center items-center overflow-hidden`}
          >
            <FaRegCreditCard size={18} />
          </span>
          <span
            className={`bg-darkBg/50  relative cursor-pointer z-10 rounded-md justify-center items-center overflow-hidden ${
              type?.toLowerCase() === "row"
                ? "w-0 hidden h-full"
                : "flex w-[2.3rem] h-[90%]"
            }`}
          >
            <TbDots size={20} />
          </span>
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
                className={`h-7 font-semibold text-start overflow-hidden text-ellipsis  ${
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
