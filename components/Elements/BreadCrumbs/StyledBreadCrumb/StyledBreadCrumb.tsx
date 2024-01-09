import Link from "next/link";
import React from "react";
interface StyledBreadCrumbProps {
  icon?: React.ComponentType<{ size: number; className?: string }>;
  label?: string;
  showBackground?: boolean;
  href: string;
}
const StyledBreadCrumb: React.FC<StyledBreadCrumbProps> = ({
  icon: Icon,
  label,
  showBackground = false,
  href,
}) => {
  return (
    <Link
      href={href}
      className={`w-auto px-[2px] h-[24px] overflow-hidden ${
        showBackground &&
        "bg-darkBg/10 hover:bg-darkBg/20 dark:bg-accent/10 hover:dark:bg-accent/20"
      } flex  rounded-[16px] justify-start items-center  `}
    >
      {Icon && (
        <span className="w-7 overflow-hidden h-full flex justify-center items-center">
          <Icon size={18} />
        </span>
      )}
      {label && (
        <span
          className={`max-w-40 w-auto ${
            Icon ? "px-0 pr-2" : "px-2"
          } overflow-hidden text-center text-ellipsis whitespace-nowrap text-sm align-middle capitalize font-medium`}
        >
          {label}
        </span>
      )}
    </Link>
  );
};

export default StyledBreadCrumb;
