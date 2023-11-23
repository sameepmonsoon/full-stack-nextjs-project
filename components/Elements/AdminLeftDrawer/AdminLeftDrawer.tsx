"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { GiSupersonicBullet } from "react-icons/gi";
import { useSelector } from "react-redux";
import { FaHouse } from "react-icons/fa6";
import { useLeftSiderState } from "@/store/commonState/globalState";
const AdminLeftDrawer = () => {
  const { siderState } = useLeftSiderState((state: any) => state);
  const hideSiderDetail = siderState === 1 || siderState === 2;
  return (
    <div
      className={`relative px-5 left-0 h-screen visible transition-width duration-300 ease-in-out ${
        siderState == 0
          ? "w-[20rem] "
          : siderState == 1
          ? "w-[6rem]"
          : "w-0 left-[-20rem] px-0 pl-5"
      }  flex flex-col items-start justify-start`}>
      <ul className="w-full flex flex-col items-start justify-start gap-2 border-b-[1px] pb-4">
        <div
          className={`${
            hideSiderDetail ? "hidden" : "h-8"
          } flex justify-start items-center font-semibold text-[16px] transition-all visible duration-300 ease-in-out`}>
          Dashboard
        </div>
        <Button variant={"icon"} size={"iconWithText"}>
          <FaHouse className="mr-2 h-4 w-4" />
          {!hideSiderDetail && <h5> Home</h5>}
        </Button>
        <Button variant={"icon"} size={"iconWithText"}>
          <GiSupersonicBullet className="mr-2 h-4 w-4" />
          {!hideSiderDetail && <h5> lorem</h5>}
        </Button>
      </ul>
    </div>
  );
};

export default AdminLeftDrawer;
