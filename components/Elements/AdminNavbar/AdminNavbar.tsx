"use client";
import Logo from "../Logo/Logo";
import { PiList } from "react-icons/pi";
import { Button } from "../../ui/button";
import { Input } from "@/components/ui/input";
import UserIconContainer from "../UserIconContainer/UserIconContainer";
import { IoSearchOutline } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { useLeftSiderState } from "@/store/commonState/globalState";
import { CustomPopOver } from "../CustomPopOver/CustomPopOver";
import { Label } from "@radix-ui/react-label";
import { lightModeToggleConstants } from "@/Helpers/Constants/NavBarConstants";
import { SetStateAction, useEffect, useRef, useState } from "react";
import { useSystemThemeDetector } from "@/Hooks/useSystemThemeDetector";
import localThemeChecker from "@/Helpers/localThemeChecker";
import { colorPallette } from "@/Helpers/Constants/ColourConstants";
import { AiOutlineFullscreen } from "react-icons/ai";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import { makeFullScreen, isInFullScreenMode } from "@/Helpers/makeFullScreen";
import CustomToolTip from "../CustomToolTip/CustomToolTip";
function AdminNav() {
  const { setSiderState } = useLeftSiderState((state: any) => state);
  const isDarkTheme = useSystemThemeDetector();
  const [toggle, setToggle] = useState(
    localStorage.getItem("toggle") === "true"
  );
  const [isFullScreen, setIsFullScreen] = useState(false);
  const prevToggleRef = useRef(toggle);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "L");

  useEffect(() => {
    localThemeChecker(theme, isDarkTheme);
  }, [theme, isDarkTheme]);

  const handleThemeToggle = (themeMode: SetStateAction<string>) => {
    setTimeout(() => {
      setTheme(themeMode);
    }, 300);
  };

  const handleToggle = () => {
    const newToggle = !toggle;
    prevToggleRef.current = toggle;
    setToggle(newToggle);
    localStorage.setItem("toggle", `${newToggle}`);
  };
  const handleFullScreen = () => {
    makeFullScreen();
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div
      className={` top-0 bg-white fixed flex w-full z-40 h-[5.5rem] justify-start items-center px-3 pt-0 pb-0  gap-5 dark:bg-[${colorPallette.darkBg}] dark:text-white`}>
      <div className="w-[18rem] flex justify-between items-center">
        <Logo to="/admin" title="MARIO" />
        <span
          onClick={setSiderState}
          className="cursor-pointer hover:text-black text-black dark:bg-transparent dark:text-white dark:hover:bg-accent dark:hover:text-black bg-gray-100/60 hover:bg-gray-200/60 h-[2rem] w-[2rem]  flex justify-center items-center rounded-[5px]">
          <PiList size={20} />
        </span>
      </div>
      <div className="h-full w-full flex justify-end items-center l gap-2">
        <div className="relative flex items-center justify-start">
          <IoSearchOutline size={18} className="absolute left-[13px]" />
          <Input
            type="text"
            placeholder="Search"
            width={90}
            className=" pl-10 w-[20rem] h-[2.8rem] rounded-[0.4rem] border-gray-500/30 focus:border-transparent focus:ring-0 text-black"
          />
        </div>
        <div className="h-full w-full flex justify-end items-center l gap-2">
          <Button
            variant={"ghost"}
            className="w-[2rem] h-[2rem] flex justify-center items-center p-1">
            <FaBell size={17} />
          </Button>
          <Button
            variant={"ghost"}
            className="w-[2rem] h-[2rem] flex justify-center items-center p-1">
            <SiGooglemessages size={18} />
          </Button>

          {isFullScreen ? (
            <CustomToolTip
              showArrow={false}
              toolTipContent={"Exit FullScreen"}
              showToolTip={true}
              toolTipPosition={"bottom"}
              sideOffset={7}>
              <Button
                onClick={handleFullScreen}
                variant={"ghost"}
                className="w-[2rem] h-[2rem] flex justify-center items-center p-1">
                <AiOutlineFullscreenExit size={21} />
              </Button>
            </CustomToolTip>
          ) : (
            <CustomToolTip
              toolTipContent={"Full screen"}
              showToolTip={true}
              showArrow={false}
              toolTipPosition={"bottom"}
              sideOffset={7}>
              <Button
                onClick={handleFullScreen}
                variant={"ghost"}
                className="w-[2rem] h-[2rem] flex justify-center items-center p-1">
                <AiOutlineFullscreen size={21} />{" "}
              </Button>
            </CustomToolTip>
          )}

          <CustomPopOver
            onOpenChange={handleToggle}
            defaultOpen={true}
            open={toggle}
            popOverContent={
              <>
                {lightModeToggleConstants.map((item: any, index: number) => (
                  <>
                    <button
                      key={index}
                      onClick={() => {
                        handleThemeToggle(item.mode);
                        handleToggle();
                      }}
                      className={`gap-2 overflow-hidden cursor-pointer ${
                        theme === item.mode && "bg-accent"
                      } hover:bg-accent rounded-sm w-full text-sm flex justify-start items-center py-[2px] px-2`}>
                      <item.icon size={16} />
                      <Label className="text-ellipsis cursor-pointer overflow-hidden max-w-[75%] h-full">
                        {item.label}
                      </Label>
                    </button>
                  </>
                ))}
              </>
            }>
            <Button
              onClick={handleToggle}
              variant={"ghost"}
              className="w-[2rem] h-[2rem] flex justify-center items-center p-1">
              {lightModeToggleConstants
                .filter((item: any) => item.mode === theme)
                .map((item: any, index: number) => (
                  <item.icon size={18} key={index} />
                ))}
            </Button>
          </CustomPopOver>
          <UserIconContainer userIconTitle="Lorem Name And the " />
        </div>
      </div>
    </div>
  );
}

export default AdminNav;
