import React from "react";
import SkeletonNavbar from "../SkeletonNavbar/SkeletonNavbar";
import SkeletonDrawer from "../SkeletonDrawer/SkeletonDrawer";
import SkeletonCard from "../SkeletonCard/SkeletonCard";
import LoadingCircle from "../../Loading/LoadingCircle/LoadingCircle";

const SkeletonLayout = () => {
  return (
    <div className="w-screen h-full overflow-hidden flex-col fixed top-0 left-0">
      <SkeletonNavbar />
      <div className="relative top-[5.5rem] w-full h-full flex justify-start items-start overflow-hidden">
        <SkeletonDrawer />

        <div className="flex p-5 bg-white justify-start items-start h-full pr-6 flex-grow flex-1 dark:bg-darkBg">
          <div className="bg-gray-200 dark:bg-light animate-pulse duration-900 rounded-md w-full flex-1 h-auto max-h-full">
            &nbsp;
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLayout;
