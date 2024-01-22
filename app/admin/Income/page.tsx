"use client";
import useRouteHistory from "@/Hooks/useRouteHistory";
import BreadCrumbs from "@/components/Elements/BreadCrumbs/BreadCrumbs";
import BalanceCard from "@/components/Elements/Cards/BalanceCard/BalanceCard";
import CardLayout from "@/components/Elements/Cards/CardLayout/CardLayout";
import Image from "next/image";
import "@/Styles/Admin/income/income.scss";
import { RxCross2 } from "react-icons/rx";
import React, { useEffect, useState } from "react";
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
import Select, {
  components,
  ControlProps,
  MultiValueRemoveProps,
  OptionProps,
} from "react-select";

import {
  validateFormField,
  validateNumberField,
  validateTextField,
} from "@/Helpers/validateForm";
import { getUserDetail } from "@/utils/token";
import { AddIncomeFormValueType } from "@/utils/types";
import { useToast } from "@/components/ui/use-toast";
import {
  IncomeCategoryConstant,
  IncomeSubcategoryConstant,
  PaymentMethodConstant,
} from "@/Helpers/Constants/Admin/IncomeConstants";
import BreadCrumbNav from "@/components/Elements/BreadCrumbs/BreadCrumbNav/BreadCrumbNav";
import SkeletonCard from "@/components/Elements/Skeleton/SkeletonCard/SkeletonCard";
import SkeletonDetailCard from "@/components/Elements/Skeleton/SkeletonDetailCard/SkeletonDetailCard";

const IncomePage = () => {
  const routeHistory = useRouteHistory();
  const userDetail: any = getUserDetail();

  let initialValue: AddIncomeFormValueType = {
    title: "",
    amount: 0,
    source: "",
    category: "",
    date: new Date(),
    note: "",
    method: "",
    userId: "",
  };
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [incomeDetail, setIncomeDetail] = useState<any[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [formValue, setFormValue] =
    useState<AddIncomeFormValueType>(initialValue);
  const [pageNumber, setPageNumber] = useState(1);

  async function handleSubmit(e: React.FormEvent<HTMLElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    const res = await fetch("/api/finance/income", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValue),
    });

    const data = await res.json();

    if (data.status) {
      toast({
        duration: 900,
        title: data.message,
        variant: "success",
      });
    }
    setIsSubmitting(false);
  }

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { value, name } = e.target;

    setFormValue({ ...formValue, [name]: value });
  };

  const handleSelectChange = (e: any) => {
    setFormValue({ ...formValue, ["method"]: e });
  };
  const handleCategoryChange = (e: any) => {
    setFormValue({ ...formValue, ["category"]: e });
  };
  const handleSourceChange = (e: any) => {
    setFormValue({ ...formValue, ["source"]: e });
  };
  const MultiValueRemove = (props: MultiValueRemoveProps<any>) => {
    return (
      <components.MultiValueRemove {...props}>
        <RxCross2 />
      </components.MultiValueRemove>
    );
  };

  const Option = (props: OptionProps<any>) => {
    return <components.Option {...props} />;
  };

  useEffect(() => {
    if (!formValue.userId && userDetail?._id) {
      setFormValue((prevFormValue) => ({
        ...prevFormValue,
        userId: userDetail._id,
      }));
    }
  }, [userDetail, formValue.userId]);

  async function getInitialData(userId: string) {
    const response = await fetch(
      `/api/finance/income?userId=${userId}&pageNumber=${pageNumber}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    const fetchData = async () => {
      if (userDetail._id) {
        const res = await getInitialData(userDetail._id);
        setIncomeDetail(res);
        setIsFetching(false);
      }
    };

    fetchData();
  }, [pageNumber, userDetail._id]);

  const currentSubCat: any =
    Object.keys(IncomeSubcategoryConstant).find(
      //@ts-ignore
      (item) => item === formValue?.source?.value
    ) ?? "";
  console.log(incomeDetail);
  return (
    <>
      <div className="w-full flex flex-row flex-wrap items-center justify-stretch gap-2">
        <BreadCrumbNav
          title="income"
          crumb={
            <BreadCrumbs
              gap={20}
              separatorType={2}
              routeHistory={routeHistory}
              icon={GiWallet}
            />
          }
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
      <div className="w-full flex flex-row flex-wrap items-center justify-stretch gap-2">
        {isFetching ? (
          <div className="flex justify-evenly flex-1 flex-nowrap gap-2">
            <SkeletonDetailCard />
            <SkeletonDetailCard />
            <SkeletonDetailCard />
            <SkeletonDetailCard />
            <SkeletonDetailCard />
          </div>
        ) : (
          <>
            {incomeDetail?.map((item: any, id: number) => {
              if (id <= 4) {
                return (
                  <DetailCard
                    note={item?.note}
                    type="row"
                    image={userImage}
                    title={item.title}
                    detail={
                      <span className="flex justify-start items-center">
                        <TbCurrencyRupeeNepalese />
                        {item.amount}
                      </span>
                    }
                    key={id}
                  />
                );
              }
            })}
          </>
        )}
        {isFetching ? (
          <div className="flex justify-evenly flex-1 flex-nowrap gap-2">
            <SkeletonDetailCard />
            <SkeletonDetailCard />
            <SkeletonDetailCard />
            <SkeletonDetailCard />
            <SkeletonDetailCard />
          </div>
        ) : (
          <>
            {incomeDetail?.map((item: any, id: number) => {
              if (incomeDetail.length <= 4) {
                return (
                  <DetailCard
                    note={item?.note}
                    type="row"
                    image={userImage}
                    title={item.title}
                    detail={
                      <span className="flex justify-start items-center">
                        <TbCurrencyRupeeNepalese />
                        {item.amount}
                      </span>
                    }
                    key={id}
                  />
                );
              } else {
                return null;
              }
            })}
          </>
        )}
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
          <form
            className="w-full h-full flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-2 w-full items-center justify-between flex-1">
              <CustomInputContainer
                size={"small"}
                font={"medium"}
                type="text"
                inputBorder={"none"}
                containerStyle={"border"}
                label={"Title"}
                id="title"
                maxlength={14}
                required
                onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                  validateTextField(e, 14)
                }
                onChange={handleChange}
              />
              <CustomInputContainer
                size={"small"}
                font={"medium"}
                type="text"
                inputBorder={"none"}
                containerStyle={"border"}
                label={"Amount (Rs.)"}
                id="amount"
                required
                onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                  validateNumberField(e, 5)
                }
                onChange={handleChange}
              />
            </div>

            <CustomInputContainer
              size={"small"}
              font={"medium"}
              type="date"
              inputBorder={"none"}
              containerStyle={"border"}
              label={"Date"}
              id="date"
              required
              onChange={handleChange}
            />
            <Select
              onChange={handleSourceChange}
              closeMenuOnSelect={true}
              isClearable={false}
              components={{
                MultiValueRemove,
                Option,
              }}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? "black" : "rgb(211, 211, 211)",
                  borderRadius: "7px",
                  zIndex: 40,
                  minHeight: "50px",
                  outline: 0,
                  boxShadow: "none",
                  cursor: "pointer",
                  ":hover": {
                    borderColor: "black",
                  },
                }),
                singleValue: (base) => ({
                  ...base,
                  overflow: "hidden",
                  paddingY: "0px",
                  fontSize: "14px",
                  fontWeight: "600",
                }),
                option: (base, state) => ({
                  ...base,
                  marginTop: "4px",
                  gap: "2px",
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "Start",
                  flexDirection: "column",
                  backgroundColor: state.isSelected
                    ? "rgb(221, 241, 251)"
                    : "white",
                  color: "black",
                  ":hover": { backgroundColor: "rgb(221, 241, 251)" },
                }),
              }}
              options={IncomeCategoryConstant}
              name="colors"
              className="basic-multi-select "
              classNamePrefix="select"
              placeholder="Source"
            />
            <Select
              onChange={handleCategoryChange}
              closeMenuOnSelect={true}
              isClearable={false}
              components={{
                MultiValueRemove,
                Option,
              }}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? "black" : "rgb(211, 211, 211)",
                  borderRadius: "7px",
                  zIndex: 40,
                  minHeight: "50px",
                  outline: 0,
                  boxShadow: "none",
                  cursor: "pointer",
                  ":hover": {
                    borderColor: "black",
                  },
                }),
                singleValue: (base) => ({
                  ...base,
                  overflow: "hidden",
                  paddingY: "0px",
                  fontSize: "14px",
                  fontWeight: "600",
                }),
                option: (base, state) => ({
                  ...base,
                  marginTop: "4px",
                  gap: "2px",
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "Start",
                  flexDirection: "column",
                  backgroundColor: state.isSelected
                    ? "rgb(221, 241, 251)"
                    : "white",
                  color: "black",
                  ":hover": { backgroundColor: "rgb(221, 241, 251)" },
                }),
              }}
              options={IncomeSubcategoryConstant[currentSubCat]}
              name="colors"
              className="basic-multi-select "
              classNamePrefix="select"
              placeholder="Category"
            />
            <Select
              onChange={handleSelectChange}
              closeMenuOnSelect={true}
              isClearable={false}
              components={{
                MultiValueRemove,
                Option,
              }}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? "black" : "rgb(211, 211, 211)",
                  borderRadius: "7px",
                  zIndex: 40,
                  minHeight: "50px",
                  outline: 0,
                  boxShadow: "none",
                  cursor: "pointer",
                  ":hover": {
                    borderColor: "black",
                  },
                }),
                singleValue: (base) => ({
                  ...base,
                  overflow: "hidden",
                  paddingY: "0px",
                  fontSize: "14px",
                  fontWeight: "600",
                }),
                option: (base, state) => ({
                  ...base,
                  marginTop: "4px",
                  gap: "2px",
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "Start",
                  flexDirection: "column",
                  backgroundColor: state.isSelected
                    ? "rgb(221, 241, 251)"
                    : "white",
                  color: "black",
                  ":hover": { backgroundColor: "rgb(221, 241, 251)" },
                }),
              }}
              options={PaymentMethodConstant}
              name="colors"
              className="basic-multi-select "
              classNamePrefix="select"
              placeholder="Payment Method"
            />
            <CustomInputContainer
              size={"small"}
              font={"default"}
              type="textarea"
              inputBorder={"none"}
              containerStyle={"border"}
              label={"Note"}
              id="note"
              required
              onChange={handleChange}
            />
            {/* <textarea
              rows={10}
              cols={10}
              className="focus-within:border-black overflow-hidden focus-within:ring-[1px] ring-offset-0 focus-within:ring-black/80 dark:focus-within:ring-gray-200/80  dark:focus-within:border-gray-200  dark:border-gray-600 dark:hover:border-white hover:border-black border-[1px] group rounded-[8px] p-0 pb-0 gap-0 border-gray-300 h-20  w-full flex flex-col justify-end items-startborder-2 relative  group  items-start "
            /> */}
            <div className="flex justify-end items-center w-full">
              <Button
                effect={`${isSubmitting ? "none" : "press"}`}
                asChild={false}
                type="submit"
                className={`w-full ${
                  isSubmitting
                    ? "bg-gray-300 text-gray-500  hover:bg-gray-300"
                    : "bg-darkBg dark:bg-white hover:bg-darkBg text-white"
                }  dark:hover:bg-white  dark:text-darkBg h-10 rounded-md flex justify-center items-center  text-md font-medium capitalize`}
              >
                {isSubmitting ? "Submitting" : "Submit"}
              </Button>
            </div>
          </form>
        </DialogBox>
      </div>
      <div className="flex flex-1 gap-5 justify-start items-start flex-wrap">
        <ListContainer title={"History"} showViewAll={true}>
          <div className="flex flex-col gap-1 w-full h-full">
            {isFetching ? (
              <>
                <SkeletonDetailCard />
                <SkeletonDetailCard />
                <SkeletonDetailCard />
                <SkeletonDetailCard />
                <SkeletonDetailCard />
              </>
            ) : (
              <>
                {incomeDetail?.map((item: any, id: number) => {
                  return (
                    <DetailCard
                      note={item?.note}
                      type="row"
                      image={userImage}
                      title={item.title}
                      detail={
                        <span className="flex justify-start items-center">
                          <TbCurrencyRupeeNepalese />
                          {item.amount}
                        </span>
                      }
                      key={id}
                    />
                  );
                })}
              </>
            )}
          </div>
        </ListContainer>
        {/* <ListContainer title={"History"} showViewAll={true}>
          <DetailCard
            type="row"
            image={userImage}
            title="five hunred"
            detail="500"
          />
        </ListContainer> */}
      </div>
    </>
  );
};

export default IncomePage;
