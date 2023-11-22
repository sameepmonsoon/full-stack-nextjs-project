import Image from "next/image";
import React from "react";
import image from "../../../public/next.svg";
const UserIconContainer = ({ userIconTitle }: { userIconTitle: string }) => {
  return (
    <div className="flex gap-2 h-[2.8rem] items-center px-2 rounded-[4px] flex-1 overflow-hidden w-auto justify-between max-w-[15rem] hover:bg-gray-200/60 hover:cursor-pointer">
      <Image src={image} alt="image " className="rounded-full w-10 h-[90%]" />
      <span className=" max-w-[10rem] text-ellipsis whitespace-nowrap overflow-hidden">
        {userIconTitle}
      </span>
    </div>
  );
};

export default UserIconContainer;
