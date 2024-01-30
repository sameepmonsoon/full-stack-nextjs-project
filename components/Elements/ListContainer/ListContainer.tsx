import React from "react";
import { PaginationBar } from "../Pagination/PaginationBar";

const ListContainer = ({
  title,
  children,
  footer,
  listTitleProps,
}: {
  title: string;
  children: React.ReactNode;
  footer: React.ReactNode;
  listTitleProps?: any;
}) => {
  return (
    <section
      className={`min-w-[20rem]  transition-height ease-in-out flex-1 flex flex-col rounded-[8px] overflow-hidden bg-white dark:bg-darkBg text-darkBg dark:text-white`}
    >
      <div className="h-[3.5rem] w-full font-medium text-lg capitalize p-4  flex justify-between items-center border-b-[1px] dark:border-b-accent/10 border-b-gray-200">
        {title}
        <span className="flex items-center ">{listTitleProps}</span>
      </div>
      <div className="w-full p-4 flex-1 h-full min-h-[20rem]">{children}</div>

      {footer && (
        <div className="h-[3.5rem] w-full font-medium text-lg capitalize p-4  flex justify-end items-center border-t-[1px] dark:border-t-accent/10 border-t-gray-200">
          {/* <span className="h-8 text-sm font-normal cursor-pointer flex justify-center items-center w-32 rounded-md hover:bg-darkBg/10 dark:hover:bg-accent/10 bg-white dark:bg-darkBg text-darkBg dark:text-white"> */}
          {/* View All Projects */}
          {footer}
          {/* </span> */}
        </div>
      )}
    </section>
  );
};

export default ListContainer;
