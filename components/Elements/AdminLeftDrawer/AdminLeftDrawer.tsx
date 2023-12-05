"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useLeftSiderState } from "@/store/commonState/globalState";
import { adminLeftDrawerList } from "./AdminLeftDrawerList";
import { usePathname } from "next/navigation";
import CustomToolTip from "../CustomToolTip/CustomToolTip";
import "../../../Styles/Admin/AdminLeftSider.scss";
import Logo from "../Logo/Logo";

const AdminLeftDrawer = () => {
  const { siderState, setSiderState, closeSider } = useLeftSiderState(
    (state: any) => state
  );
  const hideSiderDetail = siderState === 1 || siderState === 2;
  const pathname = usePathname();
  return (
    <>
      <div
        className={`fixed top-0 z-[99] bg-black/40 w-screen h-screen lg:hidden ${
          siderState === 2
            ? "left-[-60rem] opacity-0 transition-[left,opacity] duration-500 ease-in-out"
            : "left-0 opacity-100 transition-[left,opacity] duration-500 ease-in-out"
        }`}
        onClick={closeSider}
      />
      <nav
        id="adminLeftDrawer"
        className={`adminLeftDrawer fixed bg-white dark:bg-darkBg dark:text-white px-5 overflow-y-scroll h-screen visible transition-width duration-300 ease-in-out ${
          siderState == 0
            ? "w-[19rem] left-0 transition-left duration-400 ease-in-out l"
            : siderState == 1
            ? "w-[6rem] transition-width duration-400 ease-in-out"
            : " lg:w-[0] w-[19rem] left-[-20rem] pr-0 pl-5   transition-[width, left] duration-400 ease-in-out "
        } lg:relative  z-[100] lg:z-0 fixed top-0 lg:flex flex-col items-start justify-start`}>
        <div
          className={`w-full  pt-3 flex  items-center flex-nowrap lg:hidden justify-between pr-3`}>
          <Logo to="/admin" title="MARIO" />
        </div>
        {adminLeftDrawerList.map((item: any, index: number) => (
          <>
            <ul
              key={index}
              className={`w-full flex flex-col items-start justify-start gap-2 dark:bg-darkBg dark:text-gray-300 dark:border-b-gray-400/40  ${
                hideSiderDetail
                  ? "lg:border-b-0 lg:py-1 border-b-[1px] py-3"
                  : "border-b-[1px] py-3"
              }
              `}>
              <div
                key={index}
                className={`${
                  hideSiderDetail ? "lg:hidden h-6 lg:h-0" : "h-6"
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
                      className={`${
                        hideSiderDetail &&
                        "lg:justify-center lg:p-0 justify-start gap-4 lg:gap-0"
                      } `}>
                      <item.icon
                        key={index}
                        className={`${
                          hideSiderDetail ? "mr-0 " : "mr-2 "
                        } h-4 w-4`}
                      />
                      <h5
                        className={`${
                          !hideSiderDetail ? "flex" : "flex lg:hidden"
                        }`}>
                        {item.listName}
                      </h5>
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
