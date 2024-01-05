"use client";
import useRouteHistory from "@/Hooks/useRouteHistory";
import Banner from "@/components/Elements/Banners/Banner";
import CardLayout from "@/components/Elements/CardLayout/CardLayout";
import { CarouselSlider } from "@/components/Elements/Carousels/CarouselSlider/CarouselSlider";
import React from "react";
function AdminPage() {
  const routeHistory = useRouteHistory();
  return (
    <div className="flex flex-1 flex-col gap-2">
      <div className="p-0 w-full flex gap-5 max-h-[22rem] flex-1 justify-evenly items-stretch">
        <Banner />
        <div className="max-w-[35%]">
          <CarouselSlider />
        </div>
      </div>
      <div className="p-2 w-full h-[10rem] flex gap-5">
        <CardLayout
          type={"column"}
          title={"$100"}
          detail="Lorem Ipsum is the earning."
        />
        <CardLayout
          type={"column"}
          title={"$100"}
          detail="Lorem Ipsum is the earning."
        />
        <CardLayout
          type={"column"}
          title={"$100"}
          detail="Lorem Ipsum is the earning."
        ></CardLayout>
      </div>
      <CardLayout
        type={"row"}
        title={"$100"}
        detail="Lorem Ipsum is the earning."
      />
    </div>
  );
}

export default AdminPage;
