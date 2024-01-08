import InfoIconCard from "@/components/Elements/Cards/InfoIconCard/InfoIconCard";
import React from "react";
import { BiSolidShoppingBags } from "react-icons/bi";
import { FaSackDollar } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";

const page = () => {
  return (
    <div className="w-full">
      <div className="flex gap-5 justify-evenly items-center w-full flex-wrap flex-1">
        <InfoIconCard
          type={"column"}
          color="green"
          title="$500K"
          detail={"Lorem ipsum"}
          icon={BiSolidShoppingBags}
        />

        <InfoIconCard
          type={"column"}
          color="red"
          title="$500K"
          detail={"Lorem ipsum"}
          icon={BiSolidShoppingBags}
        />

        <InfoIconCard
          type={"column"}
          color="yellow"
          title="$500K"
          detail={"Lorem ipsum"}
          icon={BiSolidShoppingBags}
        />

        <InfoIconCard
          type={"column"}
          color="rose"
          title="$500K"
          detail={"Lorem ipsum"}
          icon={BiSolidShoppingBags}
        />
      </div>
    </div>
  );
};

export default page;
