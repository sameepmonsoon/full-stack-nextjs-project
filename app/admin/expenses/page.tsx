"use client";
import useRouteHistory from "@/Hooks/useRouteHistory";
import BreadCrumbs from "@/components/Elements/BreadCrumbs/BreadCrumbs";
import React from "react";
import { FaMoneyBillTransfer } from "react-icons/fa6";
const ExpensePage = () => {
  const routeHistory = useRouteHistory();
  return (
    <div className="w-full h-full">
      <p className="w-full h-14 rounded-[10px] bg-white dark:bg-darkBg flex justify-between items-center px-5">
        <span className="font-medium capitalize text-xl tracking-tight">
          Expenses
        </span>
        <BreadCrumbs
          gap={20}
          separatorType={2}
          routeHistory={routeHistory}
          icon={FaMoneyBillTransfer}
        />
      </p>
      ExpensePage
    </div>
  );
};

export default ExpensePage;
