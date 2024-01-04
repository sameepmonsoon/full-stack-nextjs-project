import Image from "next/image";
import React from "react";

interface useDetailCard {
  userName: string;
  userDetail: string;
  image: string;
  label: string;
}
const UserDetailCard: React.FC<useDetailCard> = ({
  userName,
  userDetail,
  label,
  image,
}) => {
  return (
    <div className="flex items-center justify-between  h-[4rem] px-5  gap-4 rounded-md bg-transparent">
      <div className="flex flex-1 justify-start items-center h-full gap-3">
        <div className="h-[45px] w-[45px]  rounded-full flex justify-center items-center overflow-hidden border-[1px] border-darkBg/10 dark:border-accent/10">
          <Image
            src={image}
            alt="imgtaf"
            className="h-full w-full object-cover overflow-hidden"
          />
        </div>
        <div className="flex flex-col gap-0 items-start justify-center flex-1 h-[50%] py-5">
          <span className="text-md tracking-tight font-medium p-0 h-5 flex justify-center items-center capitalize">
            {userName}
          </span>
          <span className="text-sm font-medium tracking-normal text-gray-500 p-0 h-5 flex justify-center items-center capitalize">
            {userDetail}
          </span>
        </div>
      </div>
      <div className="text-white flex justify-center items-center rounded-full text-sm font-medium px-2 bg-darkBg/30 dark:bg-accent/10">
        {label}
      </div>
    </div>
  );
};

export default UserDetailCard;
