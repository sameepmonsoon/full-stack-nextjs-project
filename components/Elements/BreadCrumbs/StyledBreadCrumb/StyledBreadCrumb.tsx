import Link from "next/link";
import React from "react";
interface StyledBreadCrumbProps {
  icon: React.ComponentType<{ size: number }>;
  label: string;
}
const StyledBreadCrumb: React.FC<StyledBreadCrumbProps> = ({
  icon: Icon,
  label,
}) => {
  return (
    <Link
      href="#"
      className={`w-auto px-[2px] h-[24px] overflow-hidden bg-darkBg/10 dark:bg-accent/10 flex  rounded-[16px] justify-start items-center  `}>
      {Icon && (
        <span className="w-7 overflow-hidden h-full flex justify-center items-center">
          <Icon size={18} />
        </span>
      )}
      <span
        className={`max-w-40 w-auto ${
          Icon ? "px-0 pr-2" : "px-2"
        } overflow-hidden text-ellipsis whitespace-nowrap text-sm capitalize font-medium`}>
        {label}
      </span>
    </Link>
  );
};

export default StyledBreadCrumb;
