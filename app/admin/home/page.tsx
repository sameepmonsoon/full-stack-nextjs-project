"use client";
import useRouteHistory from "@/Hooks/useRouteHistory";
import Banner from "@/components/Elements/Banners/Banner";
import CardLayout from "@/components/Elements/CardLayout/CardLayout";
import { CarouselSlider } from "@/components/Elements/Carousels/CarouselSlider/CarouselSlider";
import React from "react";
import Chart from "react-apexcharts";
function AdminPage() {
  const routeHistory = useRouteHistory();

  const state = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };

  return (
    <div className="flex flex-1 flex-col gap-5 w-full">
      <div className="p-0 w-auto lg:flex-row flex-col flex gap-5 h-auto lg:h-[22rem] lg:max-h-[22rem] flex-1 justify-evenly items-stretch">
        <Banner />
        <div className="w-auto lg:w-[35%] h-[15rem] lg:h-auto">
          <CarouselSlider />
        </div>
      </div>
      <div className=" w-full flex-wrap flex gap-5">
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
      <div className="w-auto">
        <Chart options={state.options} series={state.series} type="area" />
      </div>
    </div>
  );
}

export default AdminPage;
