import Image from "next/image";
import React from "react";
import image from "@/public/image-two.jpg";
const Banner = () => {
  return (
    <div className="h-auto flex-1 bg-white dark:bg-darkBg rounded-[12px] flex justify-center items-center  overflow-hidden gap-1">
      <div className="h-full flex flex-col justify-center px-5 py-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
        quibusdam voluptas eum, accusantium corrupti neque? Quo, velit eos natus
        voluptates laudantium mollitia suscipit dolorem. Minus praesentium
        tenetur est veniam id?
      </div>

      <div className="min-w-[30%] h-full flex justify-center items-center overflow-hidden">
        <Image src={image} alt="aa" className="w-full h-full  object-cover" />
      </div>
    </div>
  );
};

export default Banner;
