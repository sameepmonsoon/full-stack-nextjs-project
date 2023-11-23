"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useLeftSiderState } from "@/store/commonState/globalState";
import { adminLeftDrawerList } from "./AdminLeftDrawerList";
import { usePathname } from "next/navigation";
const AdminLeftDrawer = () => {
  const { siderState } = useLeftSiderState((state: any) => state);
  const hideSiderDetail = siderState === 1 || siderState === 2;

  const pathname = usePathname();
  console.log(pathname);
  return (
    <div
      className={`relative px-5 left-0 h-screen visible transition-width duration-300 ease-in-out ${
        siderState == 0
          ? "w-[20rem] "
          : siderState == 1
          ? "w-[6rem]"
          : "w-0 left-[-20rem] px-0 pl-5"
      }  flex flex-col items-start justify-start`}>
      {adminLeftDrawerList.map((item: any) => (
        <>
          <ul
            className={`w-full flex flex-col items-start justify-start gap-2  ${
              hideSiderDetail ? "border-b-0 pb-0" : "border-b-[1px] pb-4"
            }
              `}>
            <div
              className={`${
                hideSiderDetail ? "hidden" : "h-6"
              } flex justify-start items-center font-bold text-[14px] transition-all visible duration-300 ease-in-out`}>
              {item.title}
            </div>
            {item.list.map((item: any) => (
              <>
                <Button variant={"icon"} size={"iconWithText"}>
                  <item.icon className="mr-2 h-4 w-4" />
                  {!hideSiderDetail && <h5> {item.listName}</h5>}
                </Button>
              </>
            ))}
          </ul>
        </>
      ))}
    </div>
  );
};

export default AdminLeftDrawer;
