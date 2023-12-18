import React from "react";
import StyledBreadCrumb from "./StyledBreadCrumb/StyledBreadCrumb";
import { AiTwotoneHome } from "react-icons/ai";
import { VscDash } from "react-icons/vsc";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CgFormatSlash } from "react-icons/cg";
const BreadCrumbs = ({
  gap,
  separatorType,
}: {
  gap: number;
  separatorType?: number;
}) => {
  let separator;
  if (separatorType === 1) {
    separator = <VscDash size={25} />;
  }
  if (separatorType === 2) {
    separator = <MdKeyboardArrowRight size={20} />;
  }
  if (separatorType === 3) {
    separator = <CgFormatSlash size={20} />;
  }
import { VscDash } from "react-icons/vsc";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CgFormatSlash } from "react-icons/cg";
const BreadCrumbs = ({
  gap,
  separatorType,
}: {
  gap: number;
  separatorType?: number;
}) => {
  let separator;
  if (separatorType === 1) {
    separator = <VscDash size={25} />;
  }
  if (separatorType === 2) {
    separator = <MdKeyboardArrowRight size={20} />;
  }
  if (separatorType === 3) {
    separator = <CgFormatSlash size={20} />;
  }
  return (
    <div className={`w-auto flex justify-start gap-[0px]`}>
      <StyledBreadCrumb icon={AiTwotoneHome} />
      <span className="flex justify-center items-center">{separator}</span>
    <div className={`w-auto flex justify-start gap-[0px]`}>
      <StyledBreadCrumb icon={AiTwotoneHome} />
      <span className="flex justify-center items-center">{separator}</span>
      <StyledBreadCrumb
        icon={AiTwotoneHome}
        label="home"
        showBackground={true}
      />
      <span className="flex justify-center items-center">{separator}</span>
      <StyledBreadCrumb
        showBackground={true}
        icon={AiTwotoneHome}
        label="home is where the house is."
      />
      <span className="flex justify-center items-center">{separator}</span>
      <span className="flex justify-center items-center">{separator}</span>
    </div>
  );
};

export default BreadCrumbs;
