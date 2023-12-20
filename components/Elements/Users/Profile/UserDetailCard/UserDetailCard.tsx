import Image from "next/image";
import React from "react";

const UserDetailCard = () => {
  return (
    <div className="flex items-center justify-between bg-red-200 h-[4rem] px-5 w-[20rem] gap-4">
      <div className="flex flex-1 justify-start items-center h-full gap-3">
        <div className="h-[70%] w-[20%] rounded-full flex justify-center items-center overflow-hidden bg-red-500">
          <Image src="" alt="imgtaf" className="h-full w-full" />
        </div>
        <div className="flex flex-col gap-0 items-start justify-center flex-1 h-[50%] py-5">
          <span className="text-lg font-medium p-0">ffffffffffff</span>
          <span className="text-md font-normal p-0 h-auto">zzzzzz</span>
        </div>
      </div>
      <div>Lorem</div>
    </div>
  );
};

export default UserDetailCard;
