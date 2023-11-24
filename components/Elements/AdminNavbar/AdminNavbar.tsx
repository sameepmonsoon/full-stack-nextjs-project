"use client";
import Logo from "../Logo/Logo";
import { NavMenu } from "../NavMenu/NavMenu";
import { PiList } from "react-icons/pi";
import { Button } from "../../ui/button";
import { Input } from "@/components/ui/input";
import UserIconContainer from "../UserIconContainer/UserIconContainer";
import { IoSearchOutline } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLeftSiderState } from "@/store/commonState/globalState";

function AdminNav() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const { setSiderState } = useLeftSiderState((state: any) => state);

  return (
    <div className=" top-0 fixed flex w-full z-40 h-[6rem] justify-start items-center px-3 pt-0 pb-0  gap-5 bg-white">
      <div className="w-[15rem] flex justify-between items-center">
        <Logo to="/admin" title="MARIO" />
        <span
          onClick={setSiderState}
          className="cursor-pointer hover:text-black text-black bg-gray-100/60 hover:bg-gray-200/60 h-10 w-10  flex justify-center items-center rounded-[5px]">
          <PiList size={20} />
        </span>
      </div>
      <div className="relative flex items-center justify-start">
        <IoSearchOutline size={18} className="absolute left-[13px]" />
        <Input
          type="text"
          placeholder="Search"
          width={90}
          className=" pl-10 w-[20rem] h-[2.8rem] rounded-[0.4rem] border-gray-500/30 focus:border-transparent focus:ring-0 text-black"
        />
      </div>
      {/* <NavMenu /> */}
      <div className="h-full w-full flex justify-end items-center l gap-2">
        <Button
          variant={"ghost"}
          className="w-10 flex justify-center items-center p-1">
          <FaBell size={20} />
        </Button>
        <Button
          variant={"ghost"}
          className="w-10 flex justify-center items-center p-1">
          <SiGooglemessages size={21} />
        </Button>
        <UserIconContainer userIconTitle="Lorem Name And the " />
      </div>
    </div>
  );
}

export default AdminNav;
