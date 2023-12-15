import React from "react";

const ListContainer = ({
  title,
  children,
  showViewAll,
}: {
  title: string;
  children: React.ReactNode;
  showViewAll: boolean;
}) => {
  return (
    <section className="w-auto flex flex-col rounded-[8px] overflow-hidden bg-white dark:bg-darkBg text-darkBg dark:text-white">
      <div className="h-[4rem] w-full font-medium text-lg capitalize p-4  flex justify-start items-center border-b-[1px] dark:border-b-accent/10 border-b-gray-200">
        {title}
      </div>
      <div className="w-full p-4 flex-1 h-full">{children}</div>

      {showViewAll && (
        <div className="h-[4rem] w-full font-medium text-lg capitalize p-4  flex justify-end items-center border-t-[1px] dark:border-t-accent/10 border-t-gray-200">
          <span className="h-8 text-sm font-normal cursor-pointer flex justify-center items-center w-32 rounded-md hover:bg-darkBg/10 dark:hover:bg-accent/10 bg-white dark:bg-darkBg text-darkBg dark:text-white">
            View All Projects
          </span>
        </div>
      )}
    </section>
  );
};

export default ListContainer;
