import InfoIconCard from "@/components/Elements/Cards/InfoIconCard/InfoIconCard";
import React from "react";
import { FaMoneyBillTransfer, FaSackDollar } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import { FaHandHoldingDollar } from "react-icons/fa6";
const page = () => {
  return (
    <div className="w-full">
      <div className="flex gap-5 justify-evenly items-center w-full flex-wrap flex-1">
        <InfoIconCard
          type={"column"}
          color="green"
          title="500K"
          detail={"Monthly Income"}
          icon={GiWallet}
        />

        <InfoIconCard
          type={"column"}
          color="red"
          title="500K"
          detail={"Monthly Savings"}
          icon={FaSackDollar}
        />

        <InfoIconCard
          type={"row"}
          color="yellow"
          title="500K"
          detail={"Monthly Expense"}
          icon={FaMoneyBillTransfer}
        />

        <InfoIconCard
          type={"default"}
          color="rose"
          title="500K"
          detail={"Monthly EMI"}
          icon={FaHandHoldingDollar}
        />
      </div>
    </div>
  );
};

export default page;
