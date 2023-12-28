"use client";
import Logo from "../Logo/Logo";
import { PiList } from "react-icons/pi";
import { Button } from "../../ui/button";
import { Input } from "@/components/ui/input";
import UserIconContainer from "../Users/UserIconContainer/UserIconContainer";
import { IoSearchOutline } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { useLeftSiderState } from "@/store/commonState/globalState";
import { useEffect, useState } from "react";
import { useSystemThemeDetector } from "@/Hooks/useSystemThemeDetector";
import { AiOutlineFullscreen } from "react-icons/ai";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import { makeFullScreen } from "@/Helpers/makeFullScreen";
import CustomToolTip from "../CustomToolTip/CustomToolTip";
import { PiDotsThreeVertical } from "react-icons/pi";
import useScreenSize from "@/Hooks/useScreenSize";
import ThemeButton from "../ThemeButton/ThemeButton";
function AdminNav() {
  const { setSiderState } = useLeftSiderState((state: any) => state);
  const screenSize = useScreenSize();
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [openList, setOpenList] = useState(false);

  useEffect(() => {
    if (screenSize?.width > 666) {
      setOpenList(false);
    }
  }, [screenSize]);

  const handleFullScreen = () => {
    makeFullScreen();
    setIsFullScreen(!isFullScreen);
  };

  const handleListClick = () => {
    setOpenList(!openList);
  };
  return (
    <div
      className={` top-0 bg-white fixed flex w-full z-40 h-auto flex-nowrap justify-start items-center flex-col`}
    >
      <div
        className={`order-1 bg-white  flex w-full z-40 h-[5.5rem] flex-nowrap justify-start items-center px-3 pr-5 pt-0 pb-0  gap-5 dark:bg-darkBg dark:text-white`}
      >
        <div className="hidden pl-5 w-[18rem] lg:flex justify-between items-center flex-nowrap">
          <Logo to="/admin" title="MARIO" />
          <span
            onClick={setSiderState}
            className="cursor-pointer hover:text-black text-black dark:bg-transparent dark:text-white dark:hover:bg-accent dark:hover:text-black bg-gray-100/60 hover:bg-gray-200/60 h-[2rem] w-[2rem]  flex justify-center items-center rounded-[5px]"
          >
            <PiList size={20} />
          </span>
        </div>
        <span
          onClick={setSiderState}
          className="lg:hidden cursor-pointer hover:text-black text-black dark:bg-transparent dark:text-white dark:hover:bg-accent dark:hover:text-black bg-gray-100/60 hover:bg-gray-200/60 h-[2rem] w-[2rem]  flex justify-center items-center rounded-[5px]"
        >
          <PiList size={20} />
        </span>
        <div className="h-full  flex-1 flex justify-end items-center gap-2 flex-nowrap">
          <div className="relative hidden items-center md:flex  justify-start">
            <IoSearchOutline size={18} className="absolute left-[13px]" />
            <Input
              type="text"
              placeholder="Search"
              width={90}
              className=" pl-10 w-[20rem] h-[2.8rem] rounded-[0.4rem]  dark:border-gray-600 dark:hover:border-white hover:border-black border-[1px] bg-transparent focus:border-transparent focus:ring-0 text-black"
            />
          </div>
          <div className="h-full w-full flex justify-end items-center l gap-2">
            <Button
              variant={"ghost"}
              className="w-[2rem] h-[2rem] flex justify-center items-center p-1"
            >
              <FaBell size={17} />
            </Button>
            <Button
              variant={"ghost"}
              className="w-[2rem] h-[2rem] flex justify-center items-center p-1"
            >
              <SiGooglemessages size={18} />
            </Button>

            {isFullScreen ? (
              <CustomToolTip
                showArrow={false}
                toolTipContent={"Exit FullScreen"}
                showToolTip={true}
                toolTipPosition={"bottom"}
                sideOffset={7}
              >
                <Button
                  onClick={handleFullScreen}
                  variant={"ghost"}
                  className="w-[2rem] hidden xl:flex h-[2rem] justify-center items-center p-1"
                >
                  <AiOutlineFullscreenExit size={21} />
                </Button>
              </CustomToolTip>
            ) : (
              <CustomToolTip
                toolTipContent={"Full screen"}
                showToolTip={true}
                showArrow={false}
                toolTipPosition={"bottom"}
                sideOffset={7}
              >
                <Button
                  onClick={handleFullScreen}
                  variant={"ghost"}
                  className="w-[2rem] hidden xl:flex h-[2rem]  justify-center items-center p-1"
                >
                  <AiOutlineFullscreen size={21} />{" "}
                </Button>
              </CustomToolTip>
            )}
            {/* theme button */}
            <ThemeButton />

            <UserIconContainer
              userIconTitle="Lorem Name And the "
              className="hidden md:flex"
            />
            <Button
              onClick={handleListClick}
              variant={"ghost"}
              className="md:hidden w-[2rem] h-[2rem] flex justify-center items-center p-1 rounded-full"
            >
              <PiDotsThreeVertical size={25} />
            </Button>
          </div>
        </div>
      </div>

      <div
        className={`${
          openList ? "flex" : "hidden"
        } animate-fadeIn transition-opacity opacity-100 duration-700 ease-in order-last dark:shadow-none shadow-[3px_2px_10px_3px_#e8e7e3]   bg-white w-full flex md:hidden z-40 h-[5.5rem] flex-nowrap justify-between items-center px-3 pt-0 pb-0  gap-5 dark:bg-darkBg dark:text-white`}
      >
        <div className="relative items-center flex  justify-start flex-1">
          <IoSearchOutline size={18} className="absolute left-[13px]" />
          <Input
            type="text"
            placeholder="Search"
            width={90}
            className=" pl-10 dark:text-white  h-[2.8rem] rounded-[0.4rem] border-gray-500/30 focus:border-transparent focus:ring-0 text-black"
          />
        </div>
        <UserIconContainer
          userIconTitle="Lorem Name And the "
          className="flex"
        />
      </div>
    </div>
  );
}

export default AdminNav;
