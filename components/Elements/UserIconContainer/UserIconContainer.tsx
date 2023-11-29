import Image from "next/image";
import React from "react";
import image from "../../../public/next.svg";
import { colorPallette } from "@/Helpers/Constants/ColourConstants";
import { cn } from "@/lib/utils";
const UserIconContainer = ({
  userIconTitle,
  className,
}: {
  userIconTitle: string;
  className: string;
}) => {
  return (
    <div
      className={cn(
        `group flex gap-4 h-10 transition-colors bg-transparent dark:text-[${colorPallette.darkText}] ease-linear duration-100 group items-center rounded-md flex-1 overflow-hidden px-[5px] justify-center max-w-[8rem] hover:bg-accent dark:hover:bg-accent hover:cursor-pointer`,
        className
      )}>
      <Image
        src={image}
        alt="image "
        className={` rounded-full w-[40px] h-[40px]`}
      />
      <span
        className={`max-w-[10rem] text-ellipsis whitespace-nowrap overflow-hidden capitalize font-medium dark:group-hover:text-black`}>
        {userIconTitle}
      </span>
    </div>
  );
};

export default UserIconContainer;
