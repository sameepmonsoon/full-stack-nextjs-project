"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useLeftSiderState } from "@/store/commonState/globalState";
import { adminLeftDrawerList } from "./AdminLeftDrawerList";
import { redirect, usePathname, useRouter } from "next/navigation";
import CustomToolTip from "@/components/Elements/CustomToolTip/CustomToolTip";
import "@/Styles/Admin/AdminLeftSider.scss";
import Logo from "@/components/Elements/Logo/Logo";

const AdminLeftDrawer = () => {
  const { siderState, setSiderState, closeSider } = useLeftSiderState(
    (state: any) => state
  );
  const hideSiderDetail = siderState === 1 || siderState === 2;
  const pathname = usePathname();

  const router = useRouter();

  console.log(adminLeftDrawerList[0].list[0].listName.toLowerCase());
  return (
    <>
      <div
        className={`fixed top-0 z-[99] bg-black/40 w-screen h-screen lg:hidden ${
          siderState === 2
            ? "left-[-60rem] opacity-0 transition-[left] lg:transition-none duration-500 ease-in-out"
            : siderState == 1
            ? "left-0 w-0 hidden opacity-0 transition-[left] duration-500 ease-in-out lg:transition-none"
            : "left-0  opacity-100 transition-[left] duration-500 ease-in-out lg:transition-none"
        }`}
        onClick={closeSider}
      />
      <nav
        id="adminLeftDrawer"
        className={`adminLeftDrawer  lg:bg-transparent bg-white dark:bg-darkBg lg:dark:bg-transparent dark:text-white px-5 overflow-y-scroll h-full visible transition-width duration-300 ease-in-out ${
          siderState == 0
            ? "w-[19rem] left-0 transition-left duration-400 ease-in-out l"
            : siderState == 1
            ? "lg:w-[6rem]  w-0 hidden lg:visible transition-width duration-400 ease-in-out"
            : " lg:w-[0]  w-[19rem] left-[-20rem] pr-0 pl-5  transition-[width, left] duration-400 ease-in-out "
        } lg:relative z-[100] lg:z-10  fixed top-0 lg:flex flex-col items-start justify-start`}
      >
        <div
          className={`w-full  pt-3 flex  items-center flex-nowrap lg:hidden justify-between pr-3`}
        >
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
              `}
            >
              <div
                key={index}
                className={`${
                  hideSiderDetail ? "lg:hidden h-6 lg:h-0" : "h-6"
                } flex justify-start items-center font-bold text-[14px]`}
              >
                {item.title}
              </div>
              {item.list.map((item: any, index: number) => {
                const url = item.listName.toLowerCase();
                console.log(url);
                return (
                  <>
                    <CustomToolTip
                      showArrow={true}
                      key={index}
                      toolTipContent={item.listName}
                      showToolTip={hideSiderDetail}
                    >
                      <Button
                        onClick={() => router.push(`/admin/${url}`)}
                        variant={pathname.includes(url) ? "selected" : "icon"}
                        size={"iconWithText"}
                        className={`${
                          hideSiderDetail &&
                          "lg:justify-center lg:p-0 justify-start gap-4 lg:gap-0"
                        } `}
                      >
                        <item.icon
                          key={index}
                          className={`${
                            hideSiderDetail ? "mr-0 " : "mr-2 "
                          } h-4 w-4`}
                        />
                        <h5
                          className={`${
                            !hideSiderDetail ? "flex" : "flex lg:hidden"
                          }`}
                        >
                          {item.listName}
                        </h5>
                      </Button>
                    </CustomToolTip>
                  </>
                );
              })}
            </ul>
          </>
        ))}
      </nav>
    </>
  );
};

export default AdminLeftDrawer;
