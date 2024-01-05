import Image from "next/image";
import React from "react";
import image from "@/public/image-one.png";
import { Button } from "@/components/ui/button";
const Banner = () => {
  return (
    <div className="h-auto flex-1 flex-col bg-white w-auto dark:bg-darkBg rounded-[12px] md:flex-row flex justify-center items-center  overflow-hidden gap-1">
      <div className="h-full flex flex-col justify-start px-10 py-14 flex-1 gap-1">
        <span className="text-2xl font-medium flex justify-center md:justify-start tracking-[0.02em] items-center">
          Welcome back 👋
        </span>
        <span className="text-2xl font-medium flex justify-center md:justify-start  items-start tracking-[0.02em]">
          Super Mario
        </span>
        <span className="h-40 overflow-hidden  flex text-[15px] justify-center items-start pt-3 tracking-[0.03em]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          corrupti omnis quasi est cupiditate ex, accusamus, dolore voluptatum
          tenetur impedit quia quae sapiente quos autem! Facere libero
          voluptates dolores eligendi?
        </span>
        <span className="w-full flex justify-center md:justify-start h-20">
          <Button variant={"default"}>Visit</Button>
        </span>
      </div>

      <div className="max-w-[40%] h-full flex justify-center items-center overflow-hidden">
        <Image src={image} alt="aa" className="w-full h-full  object-cover" />
      </div>
    </div>
  );
};

export default Banner;
