import React from "react";
import StyledBreadCrumb from "./StyledBreadCrumb/StyledBreadCrumb";
import { AiTwotoneHome } from "react-icons/ai";
const BreadCrumbs = ({ gap }: { gap: number }) => {
  return (
    <div className={`w-auto flex justify-start gap-[4px]`}>
      <StyledBreadCrumb icon={AiTwotoneHome} label="home" />
      <StyledBreadCrumb icon={AiTwotoneHome} label="home" />
      <StyledBreadCrumb
        icon={AiTwotoneHome}
        label="home is where the house is the nepal"
      />
    </div>
  );
};

export default BreadCrumbs;
