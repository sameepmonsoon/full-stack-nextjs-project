import React from "react";

const SkeletonDrawer = () => {
  return (
    <nav
      id="adminLeftDrawer"
      className={`adminLeftDrawer fixed lg:relative bg-white z-[100] lg:z-0  top-0 lg:flex flex-col items-start justify-start  w-[19rem]  dark:bg-darkBg lg:dark:bg-transparent dark:text-white px-5 overflow-hidden h-screen visible transition-width duration-300 ease-in-out } lg:relative  z-[100] lg:z-0 fixed top-0 lg:flex flex-col items-start justify-start`}
    >
      {[0, 1, 2, 3, 4, 5].map((item: any, index: number) => (
        <>
          <ul
            key={index}
            className={`border-b-[1px] py-3 w-full flex flex-col items-start justify-start gap-2  dark:bg-darkBg dark:text-gray-300 dark:border-b-gray-400/40  
              `}
          >
            <div
              key={index}
              className={` h-4
                 flex justify-start items-center font-bold text-[14px] rounded-sm bg-gray-200 animate-pulse duration-900 w-[50%]`}
            >
              &nbsp;
            </div>
            <div
              className={`${"lg:justify-center lg:p-0 justify-start gap-4 lg:gap-0"} bg-gray-200 animate-pulse duration-900 rounded-sm w-full h-10`}
            >
              &nbsp;
            </div>
            <div
              className={`${"lg:justify-center lg:p-0 justify-start gap-4 lg:gap-0"} bg-gray-200 animate-pulse duration-900 rounded-sm w-full h-10`}
            >
              &nbsp;
            </div>
          </ul>
        </>
      ))}
    </nav>
  );
};

export default SkeletonDrawer;
