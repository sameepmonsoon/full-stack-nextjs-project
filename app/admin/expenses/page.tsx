"use client";
import useRouteHistory from "@/Hooks/useRouteHistory";
import BreadCrumbNav from "@/components/Elements/BreadCrumbs/BreadCrumbNav/BreadCrumbNav";
import BreadCrumbs from "@/components/Elements/BreadCrumbs/BreadCrumbs";
import React from "react";
import { FaMoneyBillTransfer } from "react-icons/fa6";
const ExpensePage = () => {
  const routeHistory = useRouteHistory();
  return (
    <>
      <div className="w-full flex flex-row flex-wrap items-center justify-stretch gap-2">
        <BreadCrumbNav
          title="Expenses"
          crumb={
            <BreadCrumbs
              gap={20}
              separatorType={2}
              routeHistory={routeHistory}
              icon={FaMoneyBillTransfer}
            />
          }
        />
      </div>
      ExpensePage
    </>
  );
};

export default ExpensePage;
