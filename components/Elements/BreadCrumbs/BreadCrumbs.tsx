import React from "react";
import StyledBreadCrumb from "./StyledBreadCrumb/StyledBreadCrumb";
import { AiTwotoneHome } from "react-icons/ai";
import { VscDash } from "react-icons/vsc";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CgFormatSlash } from "react-icons/cg";
import useRouteHistory from "@/Hooks/useRouteHistory";
const BreadCrumbs = ({
  gap,
  separatorType,
  showBackground,
}: {
  gap: number;
  separatorType?: number;
  showBackground?: boolean;
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
  const routeHistory = useRouteHistory();
  return (
    <div className={`w-auto flex justify-start gap-[0px]`}>
      <div className={`w-auto flex justify-start gap-[0px]`}>
        <StyledBreadCrumb icon={AiTwotoneHome} href={"/admin/home"} />
        <span className="flex justify-center items-center">{separator}</span>

        {routeHistory?.map((item: any, index: number) => {
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
