"use client";
import { useParams } from "next/navigation";
import React from "react";
import { GiCargoCrane } from "react-icons/gi";
const CatchAllPage = ({ params }: { params: { slug: string } }) => {
  const paramsVal = useParams();
  const currentPage = paramsVal.allFolder[0];
  return (
    <div className="w-full h-full">
      {currentPage}

      <div className="w-full h-full flex flex-col justify-center items-center text-yellow-600">
        <div className="w-full h-[20rem] flex justify-center items-center ">
          <GiCargoCrane size={55} className="w-full h-full" />
        </div>
        <div className="text-5xl font-bold">Under Construction</div>
      </div>
    </div>
  );
};

export default CatchAllPage;
