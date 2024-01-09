import React from "react";
import { TbDotsVertical } from "react-icons/tb";
const BalanceCard = () => {
  return (
    <div className="h-[10rem] relative flex justify-center items-center">
      <div className="z-[100] bg-darkBg w-full h-full rounded-[14px] p-5 py-3">
        <div className="h-12 flex justify-between items-center">
          <span className="text-gray-400 text-md font-medium capitalize">
            current balance
          </span>
          <span className="text-gray-400 cursor-pointer">
            <TbDotsVertical size={20} />
          </span>
        </div>
        <h3 className="font-bold text-white h-10 text-2xl capitalize relative -top-2 ">
          $6000
        </h3>
        <div className="flex flex-1 w-full h-10 justify-start gap-5 overflow-hidden">
          <div className="h-full min-w-24 flex justify-center items-start flex-col">
            <span className="text-gray-500 text-sm font-medium capitalize">
              Card holder
            </span>
            <span className="text-white font-bold">Sameep Monsoon Rana</span>
          </div>
          <div className="h-full min-w-24 flex  justify-center items-start flex-col">
            <span className="text-gray-500 text-sm font-medium capitalize">
              Valid Till
            </span>
            <span className="text-white font-bold">11/22</span>
          </div>
        </div>
      </div>

      <div className="bg-darkBg/20 dark:bg-gray-100/10 absolute -bottom-[13px] w-[96.5%] h-full rounded-[14px] -z-1 order-2">
        &nbsp;
      </div>
      <div className="bg-darkBg/30 dark:bg-gray-100/20 absolute -bottom-[7px] w-[98.5%] h-full rounded-xl z-5 order-1">
        &nbsp;
      </div>
    </div>
  );
};

export default BalanceCard;
