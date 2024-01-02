import Image from "next/image";
import React from "react";
import image from "../../../../public/next.svg";
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
        `group flex gap-2 h-[2.8rem] transition-colors bg-transparent dark:text-darkText ease-linear duration-100 group items-center rounded-full flex-1 overflow-hidden px-[5px] justify-center max-w-[6rem] hover:bg-accent dark:hover:bg-accent hover:cursor-pointer`,
        className
      )}
    >
      <Image
        src={image}
        alt="image "
        className={` rounded-full w-[35px] h-[35px] `}
      />
      <span
        className={`max-w-[5rem] text-sm text-ellipsis whitespace-nowrap overflow-hidden capitalize font-medium dark:group-hover:text-black`}
      >
        {userIconTitle}
      </span>
    </div>
  );
};

export default UserIconContainer;
