"ues client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
const DetailCard = ({
  image = { asIcon: false, content: "" },
  title,
  detail,
  type,
  note,
  extraIcons,
}: {
  image: {
    asIcon: boolean;
    content: any;
  };
  title: string;
  note: string;
  detail: string | React.ReactNode;
  type: "row" | "column";
  extraIcons?: React.ReactNode;
}) => {
  const [showIcons, setShowIcons] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setShowIcons(true);
      }}
      onMouseLeave={() => {
        setShowIcons(false);
      }}
      className="relative flex overflow-hidden gap-3 flex-1 bg-white dark:bg-transparent rounded-[18px] px-2 py-2 min-w-[15rem] h-[4rem] items-start justify-start border-[1px] border-darkBg/20 dark:border-accent/10"
    >
      <div className="h-[45px] overflow-hidden w-[46px] rounded-full flex justify-center items-center">
        {!image.asIcon ? (
          <Image
            src={image.content}
            alt="item"
            className="object-cover min-h-full w-full rounded-full"
          />
        ) : (
          <>{image.content}</>
        )}
      </div>
      {showIcons && (
        <div className="top-0 px-2 rounded-[18px] left-0 absolute w-full backdrop-blur-[1px] bg-white/1  z-10 h-full flex-1 flex justify-end items-center gap-1">
          {extraIcons}
        </div>
      )}
      <div
        className={`${
          type?.toLowerCase() === "column"
            ? "flex-col items-start justify-center"
            : " flex-row relative w-full items-center justify-between pr-3"
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
                : " text-black/40 dark:text-accent/50 overflow-hidden pr-10"
            } relative whitespace-nowrap text-ellipsis -top-[2px] font-medium text-sm `}
          >
            {note}
          </p>
        </div>
        <span
          className={`overflow-hidden whitespace-nowrap text-ellipsis  ${
            type?.toLowerCase() === "column"
              ? "font-medium text-sm relative -top-[2px]"
              : "text-md font-bold absolute top-[7px]  right-0"
          }`}
        >
          {detail}
        </span>
      </div>
    </div>
  );
};

export default DetailCard;
