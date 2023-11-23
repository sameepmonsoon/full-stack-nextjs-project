"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { GiSupersonicBullet } from "react-icons/gi";
import { useSelector } from "react-redux";
import { FaHouse } from "react-icons/fa6";
import { useLeftSiderState } from "@/store/commonState/globalState";
const AdminLeftDrawer = () => {
  const { isSiderOpen } = useLeftSiderState((state: any) => state);

  return (
    <div
      className={`h-screen transition-width duration-300 ease-in-out ${
        isSiderOpen ? "w-[20rem]" : "w-[10rem]"
      } px-5 flex flex-col items-start justify-start`}>
      <ul className="w-full flex flex-col items-start justify-start gap-2 border-b-[1px] pb-4">
        <div className="h-8 flex justify-start items-center font-semibold text-[16px]">
          Dashboard
        </div>
        <Button variant={"icon"} size={"iconWithText"}>
          <FaHouse className="mr-2 h-4 w-4" />
          <h5> Home</h5>
        </Button>
        <Button variant={"icon"} size={"iconWithText"}>
          <GiSupersonicBullet className="mr-2 h-4 w-4" />
          <h5> lorem</h5>
        </Button>
      </ul>
    </div>
  );
};

export default AdminLeftDrawer;
