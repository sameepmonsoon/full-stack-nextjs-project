"use client";
import useRouteHistory from "@/Hooks/useRouteHistory";
import BreadCrumbs from "@/components/Elements/BreadCrumbs/BreadCrumbs";
import BalanceCard from "@/components/Elements/Cards/BalanceCard/BalanceCard";
import CardLayout from "@/components/Elements/Cards/CardLayout/CardLayout";
import Image from "next/image";
import React from "react";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import { TbCurrencyRupeeNepalese } from "react-icons/tb";
import userImage from "@/public/image-one.jpg";
import DetailCard from "@/components/Elements/Cards/DetailCard/DetailCard";
import { Button } from "@/components/ui/button";
import { BsPlusCircleDotted } from "react-icons/bs";
const IncomePage = () => {
  const routeHistory = useRouteHistory();
  return (
    <div className="w-full h-full flex flex-col gap-5">
      <p className="w-full h-14 rounded-[10px] bg-white dark:bg-darkBg flex justify-between items-center px-5">
        <span className="font-medium capitalize text-xl tracking-tight">
          Income
        </span>
        <BreadCrumbs
          gap={20}
          separatorType={2}
          routeHistory={routeHistory}
          icon={GiWallet}
        />
      </p>

      <div className="w-full flex flex-wrap gap-5">
        <CardLayout
          color="safe"
          icon={FaMoneyBillTransfer}
          type={"column"}
          title={
            <span className="flex justify-start items-center gap-0">
              <TbCurrencyRupeeNepalese />
              50k
            </span>
          }
          detail="Total Expenses"
        />
        <div className="min-w-[60%] w-auto flex-1">
          <BalanceCard />
        </div>
      </div>

      <div className="w-full flex flex-row flex-wrap items-center justify-stretch gap-2 ">
        <DetailCard
          type="row"
          image={userImage}
          title="five hunred"
          detail="500"
        />
        <DetailCard
          type="row"
          image={userImage}
          title="five hunred"
          detail="500"
        />
        <DetailCard
          type="row"
          image={userImage}
          title="five hunred"
          detail="500"
        />
        <DetailCard
          type="row"
          image={userImage}
          title="five hunred"
          detail="500"
        />
        <DetailCard
          type="row"
          image={userImage}
          title="five hunred"
          detail="500"
        />

        <Button
          size={"lg"}
          variant={"outline"}
          className="w-[3rem] h-[3rem] hover:bg-white text-gray-400 outline-gray-400 dark:outline-gray-100/30 dark:hover:text-gray-100/30 border-dashed outline-dashed outline-[1px] flex justify-center items-center p-1 rounded-full"
        >
          <BsPlusCircleDotted size={20} />
        </Button>
      </div>
    </div>
  );
};

export default IncomePage;
