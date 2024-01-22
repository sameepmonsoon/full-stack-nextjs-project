import React from "react";

const BreadCrumbNav = ({
  title,
  crumb,
}: {
  title: string;
  crumb: React.ReactNode;
}) => {
  return (
    <div className="w-full h-[60px] rounded-[10px] bg-white dark:bg-darkBg flex justify-between items-center px-5">
      <span className="font-medium capitalize text-xl tracking-tight">
        {title}
      </span>
      <div>{crumb}</div>
    </div>
  );
};

export default BreadCrumbNav;
