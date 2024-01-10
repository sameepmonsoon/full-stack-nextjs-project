import Image, { StaticImageData } from "next/image";
import React from "react";

const DetailCard = ({
  image,
  title,
  detail,
  type,
}: {
  image: string | StaticImageData;
  title: string;
  detail: string;
  type: "row" | "column";
}) => {
  return (
    <div className="flex overflow-hidden gap-3 flex-1 bg-white dark:bg-transparent rounded-[18px] px-2 py-2 min-w-[15rem] h-[4rem] items-start justify-start border-[1px] border-darkBg/20 dark:border-accent/10">
      <div className="h-[45px] overflow-hidden w-[46px] rounded-full">
        <Image
          src={image}
          alt="item"
          className="object-cover min-h-full w-full rounded-full"
        />
      </div>
      <div
        className={`${
          type?.toLowerCase() === "column"
            ? "flex-col items-start justify-center"
            : " flex-row w-full items-center justify-between pr-3"
        } flex flex-1   overflow-hidden h-full gap-0 pt-1`}
      >
        <div className=" flex justify-center items-start flex-col gap-0">
          <h6
            className={`text-sm ${
              type?.toLowerCase() === "row"
                ? "text-black dark:text-white"
                : "text-black/40 dark:text-accent/50"
            } font-medium capitalize whitespace-nowrap text-ellipsis`}
          >
            {title}
          </h6>
          <p
            className={`${
              type?.toLowerCase() === "column"
                ? "hidden"
                : " text-black/40 dark:text-accent/50"
            } relative whitespace-nowrap text-ellipsis -top-[2px] font-medium text-sm `}
          >
            lorem
          </p>
        </div>
        <span
          className={`relative -top-[2px] overflow-hidden whitespace-nowrap text-ellipsis  ${
            type?.toLowerCase() === "column"
              ? "font-medium text-sm"
              : "text-md font-bold"
          }`}
        >
          {detail}
        </span>
      </div>
    </div>
  );
};

export default DetailCard;
