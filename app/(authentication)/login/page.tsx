import CustomInputContainer from "@/components/Elements/CutomInputContainer/CustomInputContainer";
import React from "react";
const page = () => {
  return (
    <div className="bg-red-900">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
      quisquam dolorum sed, rerum quos ab, dicta rem unde minus, aliquam nostrum
      obcaecati nulla ipsam voluptate quis. Reiciendis ea culpa molestias!
      <CustomInputContainer
        size={"default"}
        font={"medium"}
        type="password"
        inputBorder={"none"}
        containerStyle={"border"}
        label={"User Name"}
      />{" "}
    </div>
  );
};

export default page;
