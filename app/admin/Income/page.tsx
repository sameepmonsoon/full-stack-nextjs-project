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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  validateFormField,
  validateNumberField,
  validateTextField,
} from "@/Helpers/validateForm";
const IncomePage = () => {
  const routeHistory = useRouteHistory();
  return (
    <>
      <div className="w-full h-14 rounded-[10px] bg-white dark:bg-darkBg flex justify-between items-center px-5">
        <span className="font-medium capitalize text-xl tracking-tight">
          Income
        </span>
        <BreadCrumbs
          gap={20}
          separatorType={2}
          routeHistory={routeHistory}
          icon={GiWallet}
        />
      </div>

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
                maxlength={14}
                required
                onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                  validateTextField(e, 14)
                }
                // onChange={handleChange}
              />
              <CustomInputContainer
                size={"small"}
                font={"medium"}
                type="text"
                inputBorder={"none"}
                containerStyle={"border"}
                label={"Amount (Rs.)"}
                id="income-type"
                required
                onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                  validateNumberField(e, 5)
                }
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
              onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                validateTextField(e, 14)
              }
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
            <Select onValueChange={() => {}} name="method">
              <SelectTrigger className="px-3 py-4 bg-transparent  text-gray-500 dark:text-gray-400 focus-within:border-black overflow-hidden focus-within:ring-[1px] h-[50px] ring-offset-0 focus-within:ring-black/80 dark:focus-within:ring-gray-200/80 flex  dark:focus-within:border-gray-200 dark:border-gray-600 dark:hover:border-white hover:border-black border-[1px] cursor-pointer group rounded-[8px] gap-0 border-gray-300  w-full  justify-between items-center">
                <SelectValue placeholder="Payment Method" />
              </SelectTrigger>
              <SelectContent className="dark:bg-darkBg dark:text-white">
                <SelectItem value="cash">Cash</SelectItem>
                <SelectItem value="bank">Bank</SelectItem>
                <SelectItem value="cheque">Cheque</SelectItem>
              </SelectContent>
            </Select>
            <CustomInputContainer
              size={"small"}
              font={"default"}
              type="textarea"
              inputBorder={"none"}
              containerStyle={"border"}
              label={"Note"}
              id="income-type"
              required
              // onChange={handleChange}
            />
            {/* <textarea
              rows={10}
              cols={10}
              className="focus-within:border-black overflow-hidden focus-within:ring-[1px] ring-offset-0 focus-within:ring-black/80 dark:focus-within:ring-gray-200/80  dark:focus-within:border-gray-200  dark:border-gray-600 dark:hover:border-white hover:border-black border-[1px] group rounded-[8px] p-0 pb-0 gap-0 border-gray-300 h-20  w-full flex flex-col justify-end items-startborder-2 relative  group  items-start "
            /> */}

            <div>
              <Button variant="outline">Submit</Button>
            </div>
          </form>
        </DialogBox>
      </div>
      <div className="flex flex-1 gap-5 justify-start items-start flex-wrap">
        <ListContainer title={"History"} showViewAll={true}>
          <div className="flex flex-col gap-1 w-full h-full">
            <DetailCard
              type="row"
              image={userImage}
              title="five hundred"
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
    </>
  );
};

export default IncomePage;
