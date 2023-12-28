import React from "react";

const SkeletonLayout = () => {
  return (
    <div
      className={` top-0 bg-white fixed flex w-full z-40 h-auto flex-nowrap justify-start items-center flex-col`}
    >
      <div
        className={`order-1 bg-white  flex w-full z-40 h-[5.5rem] flex-nowrap justify-start items-center px-3 pr-5 pt-0 pb-0  gap-5 dark:bg-darkBg dark:text-white`}
      >
        <div className="hidden pl-5 w-[18rem] lg:flex justify-between items-center flex-nowrap">
          <div>logo</div>
          <span className="cursor-pointer hover:text-black text-black dark:bg-transparent dark:text-white dark:hover:bg-accent dark:hover:text-black bg-gray-100/60 hover:bg-gray-200/60 h-[2rem] w-[2rem]  flex justify-center items-center rounded-[5px]">
            list icon
          </span>
        </div>
        <span className="lg:hidden cursor-pointer hover:text-black text-black dark:bg-transparent dark:text-white dark:hover:bg-accent dark:hover:text-black bg-gray-100/60 hover:bg-gray-200/60 h-[2rem] w-[2rem]  flex justify-center items-center rounded-[5px]">
          list icon
        </span>
        <div className="h-full  flex-1 flex justify-end items-center gap-2 flex-nowrap">
          <div className="relative hidden items-center md:flex  justify-start">
            search container
          </div>
          <div className="h-full w-full flex justify-end items-center l gap-2">
            <span className="w-[2rem] h-[2rem] flex justify-center items-center p-1" />

            <span className="w-[2rem] h-[2rem] flex justify-center items-center p-1" />

            <div>theme button</div>
            <div className="user-container" />
            <span className="md:hidden w-[2rem] h-[2rem] flex justify-center items-center p-1 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLayout;
