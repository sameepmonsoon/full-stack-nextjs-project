import React from "react";
import StyledBreadCrumb from "./StyledBreadCrumb/StyledBreadCrumb";
import { AiTwotoneHome } from "react-icons/ai";
import { VscDash } from "react-icons/vsc";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CgFormatSlash } from "react-icons/cg";
const BreadCrumbs = ({
  gap,
  separatorType,
  showBackground,
  routeHistory,
}: {
  gap: number;
  separatorType?: number;
  showBackground?: boolean;
  routeHistory: [];
}) => {
  let separator: React.ReactNode;
  if (separatorType === 1) {
    separator = <VscDash size={25} />;
  }
  if (separatorType === 2) {
    separator = <MdKeyboardArrowRight size={20} />;
  }
  if (separatorType === 3) {
    separator = <CgFormatSlash size={20} />;
  }
  if (separatorType && separatorType > 3) {
    separator = <VscDash size={25} />;
  }
  return (
    <div className={`w-auto flex justify-start gap-0`}>
      <div className={`w-auto flex justify-start gap-0`}>
        <StyledBreadCrumb icon={AiTwotoneHome} href={"/admin/home"} />
        {routeHistory.length > 0 && (
          <span className="flex justify-center items-center">{separator}</span>
        )}
        {routeHistory.length > 0 &&
          routeHistory?.map((item: any, index: number) => {
            if (routeHistory.length - 1 === index) {
              return (
                <>
                  <StyledBreadCrumb
                    icon={AiTwotoneHome}
                    href={`/admin/${item}`}
                    label={item}
                    showBackground={true}
                  />
                </>
              );
            }
            return (
              <>
                <StyledBreadCrumb
                  icon={AiTwotoneHome}
                  href={`/admin/${item}`}
                  label={item}
                  showBackground={true}
                />
                <span className="flex justify-center items-center">
                  {separator}
                </span>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default BreadCrumbs;
