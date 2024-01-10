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
import ListContainer from "@/components/Elements/ListContainer/ListContainer";
import { DialogBox } from "@/components/Elements/DialogBox/DialogBox";
import CustomInputContainer from "@/components/Elements/CutomInputContainer/CustomInputContainer";
const IncomePage = () => {
  const routeHistory = useRouteHistory();
  return (
    <div className="w-full h-full flex flex-col gap-5">
      <p className="w-full min-h-14 rounded-[10px] bg-white dark:bg-darkBg flex justify-between items-center px-5">
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

        <DialogBox
          dialogDescription="Add Income Details"
          dialogTitle="Income"
          trigger={
            <Button
              size={"lg"}
              variant={"outline"}
              className="w-[3rem] h-[3rem] hover:bg-white text-gray-400 outline-gray-400 dark:outline-gray-100/30 dark:hover:text-gray-100/30 border-dashed outline-dashed outline-[1px] flex justify-center items-center p-1 rounded-full"
            >
              <BsPlusCircleDotted size={20} />
            </Button>
          }
        >
          <form className="w-full h-full flex flex-col gap-4">
            <div className="flex gap-2 w-full items-center justify-between flex-1">
              <CustomInputContainer
                size={"small"}
                font={"medium"}
                type="text"
                inputBorder={"none"}
                containerStyle={"border"}
                label={"Title"}
                id="income-type"
                required
                // onChange={handleChange}
              />
              <CustomInputContainer
                size={"small"}
                font={"medium"}
                type="text"
                inputBorder={"none"}
                containerStyle={"border"}
                label={"Amount"}
                id="income-type"
                required
                // onChange={handleChange}
              />
            </div>
            <CustomInputContainer
              size={"small"}
              font={"medium"}
              type="text"
              inputBorder={"none"}
              containerStyle={"border"}
              label={"Source"}
              id="income-type"
              required
              // onChange={handleChange}
            />
            <CustomInputContainer
              size={"small"}
              font={"medium"}
              type="text"
              inputBorder={"none"}
              containerStyle={"border"}
              label={"Category"}
              id="income-type"
              required
              // onChange={handleChange}
            />
            <CustomInputContainer
              size={"small"}
              font={"medium"}
              type="date"
              inputBorder={"none"}
              containerStyle={"border"}
              label={"Date"}
              id="income-type"
              required
              // onChange={handleChange}
            />
            <CustomInputContainer
              size={"small"}
              font={"medium"}
              type="text"
              inputBorder={"none"}
              containerStyle={"border"}
              label={"Paymet Method"}
              id="income-type"
              required
              // onChange={handleChange}
            />
            <CustomInputContainer
              size={"medium"}
              font={"medium"}
              type="text"
              inputBorder={"none"}
              containerStyle={"border"}
              label={"Note"}
              id="income-type"
              required
              // onChange={handleChange}
            />
          </form>
        </DialogBox>
      </div>
      <div className="flex flex-1 gap-5 justify-start items-start flex-wrap">
        <ListContainer title={"History"} showViewAll={true}>
          <div className="flex flex-col gap-1 w-full h-full">
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
          </div>
        </ListContainer>
        <ListContainer title={"History"} showViewAll={true}>
          <DetailCard
            type="row"
            image={userImage}
            title="five hunred"
            detail="500"
          />
        </ListContainer>
      </div>
    </div>
  );
};

export default IncomePage;
