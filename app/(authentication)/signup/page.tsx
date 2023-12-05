import CustomInputContainer from "@/components/Elements/CutomInputContainer/CustomInputContainer";
import Logo from "@/components/Elements/Logo/Logo";
import ThemeButton from "@/components/Elements/ThemeButton/ThemeButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
const LoginPage = () => {
  return (
    <div className="w-full  h-screen flex justify-center items-center p-5 bg-accent  dark:bg-darkBg">
      <div className="w-[29.5rem] h-auto p-10 flex flex-col justify-start items-center dark:text-white bg-white dark:bg-darkBg rounded-lg gap-2">
        <div className="h-[25%] flex justify-start items-center flex-col gap-2">
          <Logo to="/admin" title="MARIO" />
          <div className="flex justify-center items-cente flex-col gap-4">
            <p className="text-center dark:text-white capitalize font-bold text-2xl">
              Sign Up
            </p>
            <p className="text-center text-md leading-3 font-normal text-gray-400  ">
              Enter Your credentials to Continue
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center gap-5 w-full border-b-[1px] border-b-gray-300 py-5">
          <div className="w-full flex justify-between items-center gap-10 flex-wrap md:flex-nowrap">
            <CustomInputContainer
              size={"default"}
              font={"medium"}
              type="text"
              inputBorder={"none"}
              containerStyle={"border"}
              label={"First Name"}
            />
            <CustomInputContainer
              size={"default"}
              font={"medium"}
              type="text"
              inputBorder={"none"}
              containerStyle={"border"}
              label={"Last Name"}
            />
          </div>
          <CustomInputContainer
            size={"default"}
            font={"medium"}
            type="email"
            inputBorder={"none"}
            containerStyle={"border"}
            label={"Email Address"}
          />
          <CustomInputContainer
            size={"default"}
            font={"medium"}
            type="password"
            inputBorder={"none"}
            containerStyle={"border"}
            label={"Password"}
          />

          <div
            className={`flex justify-between items-center w-full text-darkBg`}>
            <span className="text-center flex-1  font-medium text-md flex justify-start items-center leading-[1.75] text-[#3F444F]">
              <span className=" group cursor-pointer text-gray-400 dark:text-white hover:bg-darkBg/10 dark:hover:bg-white/10 transition-all duration-300 ease-in-out p-2 h-10 w-10 mt-auto rounded-full flex justify-center items-center">
                <input
                  type="checkbox"
                  id="check"
                  className="cursor-pointer p-4"
                />
              </span>
              Agree With <Link href="#"> Terms & Condition</Link>
            </span>
          </div>

          <Button
            className={`w-full bg-darkBg dark:bg-white hover:bg-darkBg dark:hover:bg-white text-white dark:text-darkBg h-10 rounded-md flex justify-center items-center  text-md font-medium capitalize`}>
            Sign Up
          </Button>
        </div>

        <Link
          href={"/admin/home"}
          className="text-center dark:text-white font-medium text-md flex justify-center items-end leading-[1.75] text-[#3F444F]">
          Already have an account ?
        </Link>
      </div>

      <div className="cursor-pointer absolute right-1 top-[40%] mb-auto h-10 w-10 bg-accent flex justify-center items-center rounded-lg">
        <ThemeButton />
      </div>
    </div>
  );
};

export default LoginPage;
