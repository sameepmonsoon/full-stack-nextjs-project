import { colorPallette } from "@/Helpers/Constants/ColourConstants";
import CustomInputContainer from "@/components/Elements/CutomInputContainer/CustomInputContainer";
import Logo from "@/components/Elements/Logo/Logo";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
const page = () => {
  return (
    <div className="w-full  h-screen flex justify-center items-center p-5  dark:bg-gray-200">
      <div className="w-[29.5rem] h-auto p-10 flex flex-col justify-start items-center bg-white rounded-lg gap-2">
        <div className="h-[25%] flex justify-start items-center flex-col gap-2">
          <Logo to="/admin" title="MARIO" />
          <div className="flex justify-center items-cente flex-col gap-4">
            <p className="text-center capitalize font-bold text-2xl">
              Hi, Welcome Back
            </p>
            <p className="text-center text-md leading-3 font-normal text-gray-400">
              Enter Your credentials to Continue
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center gap-5 w-full border-b-[1px] border-b-red-600 py-5">
          <CustomInputContainer
            size={"default"}
            font={"medium"}
            type="password"
            inputBorder={"none"}
            containerStyle={"border"}
            label={"User Name"}
          />
          <CustomInputContainer
            size={"default"}
            font={"medium"}
            type="password"
            inputBorder={"none"}
            containerStyle={"border"}
            label={"User Name"}
          />

          <div
            className={`flex justify-between items-center w-full text-[${colorPallette.darkBg}]`}>
            <span className="text-center font-medium text-md flex justify-center gap-2 items-center leading-[1.75] text-[#3F444F]">
              <Checkbox />
              Keep Me logged in
            </span>
            <span
              className={` text-[${colorPallette.darkBg}] text-center font-semibold text-md flex justify-center items-end leading-[1.75]`}>
              Forgot Password?
            </span>
          </div>

          <div className="w-full h-10 rounded-md flex justify-center items-center bg-emerald-900 text-md font-medium capitalize">
            Sign In
          </div>
        </div>

        <span className="text-center font-medium text-md flex justify-center items-end leading-[1.75] text-[#3F444F]">
          Dont have an account ?
        </span>
      </div>
    </div>
  );
};

export default page;
