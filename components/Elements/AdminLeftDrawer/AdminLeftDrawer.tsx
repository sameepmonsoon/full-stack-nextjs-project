import { Button } from "@/components/ui/button";
import React from "react";
import { GiSupersonicBullet } from "react-icons/gi";
import { useSelector } from "react-redux";
const AdminLeftDrawer = () => {
  const state = useSelector((state: any) => state.global);
  console.log(state)
  return (
    <div className="h-screen w-[20rem] px-5 flex flex-col items-start justify-start">
      <ul className="w-full flex flex-col items-start justify-start gap-2 border-b-[1px] pb-4">
        <div className="h-8 flex justify-start items-center">Dashboard</div>
        <Button variant={"icon"} size={"iconWithText"}>
          <GiSupersonicBullet className="mr-2 h-4 w-4" />
          <h5> lorem</h5>
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
