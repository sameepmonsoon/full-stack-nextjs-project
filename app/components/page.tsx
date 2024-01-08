"use client";
import useRouteHistory from "@/Hooks/useRouteHistory";
import BreadCrumbs from "@/components/Elements/BreadCrumbs/BreadCrumbs";
import CardLayout from "@/components/Elements/Cards/CardLayout/CardLayout";
import CustomInputContainer from "@/components/Elements/CutomInputContainer/CustomInputContainer";
import ListContainer from "@/components/Elements/ListContainer/ListContainer";
import LoadingDots from "@/components/Elements/Loading/LoadingDots/LoadingDots";
import SkeletonCard from "@/components/Elements/Skeleton/SkeletonCard/SkeletonCard";
import React from "react";
import { FaRegCreditCard } from "react-icons/fa";
import { FaMoneyBillTransfer, FaSackDollar } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import { BiSolidShoppingBags } from "react-icons/bi";
import InfoIconCard from "@/components/Elements/Cards/InfoIconCard/InfoIconCard";
const ComponentPage = () => {
  const routeHistory = useRouteHistory();
  return (
    <div
      className={`dark:bg-[#030708] dark:text-white bg-accent flex-1 rounded-xl p-5 flex h-full w-full flex-col`}
    >
      <h1 className="w-full h-10 flex justify-center items-center text-xl font-medium">
        This is Components page
      </h1>
      <div className="w-full flex gap-1 ">
        <div className="p-2 w-[20rem] h-full flex flex-col gap-5">
          <SkeletonCard type={"column"} />
          <LoadingDots />
          <BreadCrumbs gap={20} separatorType={5} routeHistory={routeHistory} />
          <br />
          <InfoIconCard
            type={"column"}
            color="safe"
            title="$500K"
            detail={"Lorem ipsum"}
            icon={BiSolidShoppingBags}
          />
          <InfoIconCard
            type={"row"}
            color="danger"
            title="$50K"
            detail={"Lorem ipsum"}
            icon={BiSolidShoppingBags}
          />
          <InfoIconCard
            type={"default"}
            color="alert"
            title="$100K"
            detail={"Lorem ipsum"}
            icon={BiSolidShoppingBags}
          />
          <CustomInputContainer
            size={"default"}
            font={"medium"}
            type="password"
            inputBorder={"none"}
            containerStyle={"border"}
            label={"User Name"}
            id="userName"
          />

          <CardLayout
            color="danger"
            icon={GiWallet}
            type={"column"}
            title={"$100"}
            detail="Total Income"
          />
          <CardLayout
            color="alert"
            icon={FaMoneyBillTransfer}
            type={"column"}
            title={"$100"}
            detail="Total Expenses"
          />
          <CardLayout
            color={"safe"}
            icon={FaSackDollar}
            type={"column"}
            title={"$100"}
            detail="Total Savings"
          >
            <>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur commodi vel excepturi fuga nobis iusto repellat optio
                deserunt illo eum eaque obcaecati aliquid error, architecto
                delectus minima eveniet voluptate sed.
              </div>
            </>
          </CardLayout>
        </div>
        <div className="p-2 w-full h-full flex flex-col gap-5">
          <CardLayout
            color={"default"}
            icon={FaRegCreditCard}
            type={"row"}
            title={"$100"}
            detail="Lorem Ipsum is the earning."
          />

          <CardLayout
            color={"default"}
            icon={FaRegCreditCard}
            type={"column"}
            title={"$100"}
            detail="Lorem Ipsum is the earning."
          />
          <CardLayout
            color={"default"}
            icon={FaRegCreditCard}
            type={"column"}
            title={"$100"}
            detail="Lorem Ipsum is the earning."
          >
            <div>lorem</div>
            <div>lorem</div>
            <div>lorem</div>
          </CardLayout>
          <div className="w-full flex  gap-2">
            {" "}
            <ListContainer title={"User LIst"} showViewAll={true}>
              <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id at,
                natus sunt hic veritatis quibusdam iure! Dignissimos maxime est
                nobis aliquam dolorum ea nostrum, aliquid doloremque facilis
                quas doloribus ab?
              </div>
            </ListContainer>
            <ListContainer title={"User LIst"} showViewAll={true}>
              {" "}
              <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id at,
                natus sunt hic veritatis quibusdam iure! Dignissimos maxime est
                nobis aliquam dolorum ea nostrum, aliquid doloremque facilis
                quas doloribus ab?
              </div>
            </ListContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentPage;
