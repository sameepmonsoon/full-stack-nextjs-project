import React from "react";

const SkeletonNavbar = () => {
  return (
    <div
      className={` top-0 bg-white fixed flex w-full z-40 h-auto flex-nowrap justify-start items-center flex-col`}
    >
      <div
        className={`order-1 bg-white  flex w-full z-40 h-[5.5rem] flex-nowrap justify-start items-center px-3 pr-5 pt-0 pb-0  gap-5 dark:bg-darkBg dark:text-white`}
      >
        <div
          className={`order-1 bg-white  flex w-full z-40 h-[5.5rem] flex-nowrap justify-start items-center px-3 pr-5 pt-0 pb-0  gap-5 dark:bg-darkBg dark:text-white`}
        >
          <div className="hidden pl-5 w-[18rem] lg:flex justify-between items-center flex-nowrap">
            <div className="animate-pulse duration-900 h-[2.5rem] w-[10rem] flex justify-start px-0 rounded-sm items-center gap-3 dark:bg-light bg-gray-200">
              &nbsp;
            </div>
            <span className="dark:bg-light bg-gray-200  animate-pulse duration-900 rounded-md text-sm font-medium ring-offset-background  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-[2rem] h-[2rem] flex justify-center items-center p-1">
              &nbsp;
            </span>
          </div>

          <div className="h-full  flex-1 flex justify-end items-center gap-2 flex-nowrap">
            <div className="relative hidden  animate-pulse duration-900 items-center md:flex  justify-start  pl-10 w-[20rem] h-[2.8rem] rounded-[0.4rem] dark:bg-light bg-gray-200  text-black">
              &nbsp;
            </div>
            <div className="h-full w-full flex justify-end items-center l gap-2">
              <span className="dark:bg-light bg-gray-200  animate-pulse duration-900 rounded-md text-sm font-medium ring-offset-background  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-[2rem] h-[2rem] flex justify-center items-center p-1">
                &nbsp;
              </span>
              <span className="dark:bg-light bg-gray-200  animate-pulse duration-900 rounded-md text-sm font-medium ring-offset-background  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-[2rem] h-[2rem] flex justify-center items-center p-1">
                &nbsp;
              </span>
              <span className="dark:bg-light bg-gray-200  animate-pulse duration-900 rounded-md text-sm font-medium ring-offset-background  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-[2rem] h-[2rem] flex justify-center items-center p-1">
                &nbsp;
              </span>
              <span className="dark:bg-light bg-gray-200  animate-pulse duration-900 rounded-md text-sm font-medium ring-offset-background  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-[2rem] h-[2rem] flex justify-center items-center p-1">
                &nbsp;
              </span>

              <div className="user-container group flex gap-2 h-[2.8rem] transition-colors animate-pulse duration-900  dark:text-darkText  group items-center rounded-full flex-1 overflow-hidden px-[5px] justify-center max-w-[6rem] dark:bg-light bg-gray-200   hover:cursor-pointer">
                &nbsp;
              </div>
              <span className="md:hidden w-[2rem] h-[2rem] flex justify-center items-center p-1 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonNavbar;
