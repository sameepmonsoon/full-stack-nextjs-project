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
      <div className="p-0 w-full flex gap-5 h-[18rem] flex-1">
        <Banner />{" "}
        <div className="w-[30%] h-full">
          <CarouselSlider />
        </div>
      </div>
      <div className="p-2 w-full h-full flex flex-col gap-5">
        <CardLayout
          type={"row"}
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
    </div>
  );
}

export default AdminPage;
