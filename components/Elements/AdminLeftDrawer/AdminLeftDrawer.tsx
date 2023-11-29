"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useLeftSiderState } from "@/store/commonState/globalState";
import { adminLeftDrawerList } from "./AdminLeftDrawerList";
import { usePathname } from "next/navigation";
import CustomToolTip from "../CustomToolTip/CustomToolTip";
import "../../../Styles/Admin/AdminLeftSider.scss";
import { colorPallette } from "@/Helpers/Constants/ColourConstants";
import Logo from "../Logo/Logo";
import { PiList } from "react-icons/pi";
import { CgClose } from "react-icons/cg";
const AdminLeftDrawer = () => {
  const { siderState, setSiderState, closeSider } = useLeftSiderState(
    (state: any) => state
  );
  const hideSiderDetail = siderState === 1 || siderState === 2;
  const pathname = usePathname();
  const theme = localStorage.getItem("theme");
  return (
    <>
      <div
        className={`fixed top-0 left-0 z-[99] bg-black/40 w-screen h-screen lg:hidden ${
          siderState === 2 ? "hidden" : "block"
        }`}
        onClick={setSiderState}
      />
      <nav
        id="adminLeftDrawer"
        className={`adminLeftDrawer dark:bg-[#051114] dark:text-white px-5 overflow-y-scroll h-screen visible transition-width duration-300 ease-in-out ${
          siderState == 0
            ? "w-[19rem]"
            : siderState == 1
            ? "w-[6rem]"
            : "w-0 left-[-20rem] pr-0 pl-5 "
        } lg:relative left-0  z-[100] lg:z-0 fixed top-0 lg:flex flex-col items-start justify-start`}>
        <div className="w-[18rem] px-3 flex justify-between items-center flex-nowrap lg:hidden">
          <Logo to="/admin" title="MARIO" />
          <span
            onClick={closeSider}
            className="cursor-pointer hover:text-black text-black dark:bg-transparent dark:text-white dark:hover:bg-accent dark:hover:text-black bg-gray-100/60 hover:bg-gray-200/60 h-[2rem] w-[2rem]  flex justify-center items-center rounded-[5px]">
            <CgClose size={20} />
          </span>
        </div>
        {adminLeftDrawerList.map((item: any, index: number) => (
          <>
            <ul
              key={index}
              className={`w-full flex flex-col items-start justify-start gap-2 dark:bg-[${
                colorPallette.darkBg
              }] dark:text-gray-300 dark:border-b-gray-400/40  ${
                hideSiderDetail ? "border-b-0 py-1" : "border-b-[1px] py-3"
              }
              `}>
              <div
                key={index}
                className={`${
                  hideSiderDetail ? "hidden" : "h-6"
                } flex justify-start items-center font-bold text-[14px] transition-all visible duration-300 ease-in-out`}>
                {item.title}
              </div>
              {item.list.map((item: any, index: number) => (
                <>
                  <CustomToolTip
                    showArrow={true}
                    key={index}
                    toolTipContent={item.listName}
                    showToolTip={hideSiderDetail}>
                    <Button
                      variant={
                        pathname.includes(item.listName.toLowerCase())
                          ? "selected"
                          : "icon"
                      }
                      size={"iconWithText"}
                      className={`${hideSiderDetail && "justify-center p-0"} `}>
                      <item.icon
                        key={index}
                        className={`${
                          hideSiderDetail ? "mr-0 " : "mr-2 "
                        } h-4 w-4`}
                      />
                      {!hideSiderDetail && <h5> {item.listName}</h5>}
                    </Button>
                  </CustomToolTip>
                </>
              ))}
            </ul>
          </>
        ))}
      </nav>
    </>
  );
};

export default AdminLeftDrawer;
