import React from "react";

const SkeletonDetailCard = () => {
  return (
    <div className="flex animate-pulse duration-[1200] overflow-hidden gap-2 flex-1 bg-white dark:bg-transparent rounded-[18px] px-2 py-2 min-w-[15rem] h-[4rem] items-start justify-between border-[1px] border-darkBg/20 dark:border-accent/10">
      <div className="h-[45px] overflow-hidden w-[46px] rounded-full  bg-gray-200">
        <span className="object-cover min-h-full w-full rounded-full" />
      </div>
      <div
        className={` flex flex-1 overflow-hidden h-full gap-1 flex-col pt-2`}
      >
        <p className=" h-3 rounded-sm bg-gray-200 w-[50%]">&nbsp;</p>
        <p className=" h-3 rounded-sm bg-gray-200">&nbsp;</p>
      </div>
    </div>
  );
};

export default SkeletonDetailCard;
