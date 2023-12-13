"use client";
import { validateFormField } from "@/Helpers/validateForm";
import CustomInputContainer from "@/components/Elements/CutomInputContainer/CustomInputContainer";
import Logo from "@/components/Elements/Logo/Logo";
import ThemeButton from "@/components/Elements/ThemeButton/ThemeButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useRef, useState } from "react";
const LoginPage = () => {
  const [formValues, setFormValues] = useState<any>({});
  const [formErrors, setFormErrors] = useState<any>({});

  const ref = useRef<any>(null);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setFormErrors(validateFormField(formValues));

    const hasErrors = validateFormField(formValues);
    try {
      if (!hasErrors) {
        const response = await fetch("api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formValues),
        });

        if (response.ok) {
          console.log("User created successfully");
        } else {
          const data = await response.json();
          console.error("Error:", data.error);
        }
      }
    } catch (error: any) {
      console.error("Error:", error.message);
    }
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form className="w-full  h-full flex justify-center items-center p-5 bg-accent  dark:bg-darkBg">
      <div className="w-[29.5rem] h-auto p-10 flex flex-col justify-start items-center dark:text-white bg-white dark:bg-darkBg rounded-lg gap-2">
        <div className="h-[25%] flex justify-start items-center flex-col gap-2">
          <Logo to="/admin" title="MARIO" />
          <div className="flex justify-center items-cente flex-col gap-4">
            <p className="text-center dark:text-white capitalize font-bold text-2xl">
              Hi, Welcome Back
            </p>
            <p className="text-center text-md leading-3 font-normal text-gray-400  ">
              Enter Your credentials to Continue
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center gap-5 w-full border-b-[1px] border-b-gray-300 py-5">
          <CustomInputContainer
            size={"default"}
            font={"medium"}
            type="email"
            inputBorder={"none"}
            containerStyle={"border"}
            label={"Email Address"}
            id="emailAddress"
            required
            onChange={handleChange}
          />
          <CustomInputContainer
            size={"default"}
            font={"medium"}
            type="password"
            inputBorder={"none"}
            containerStyle={"border"}
            label={"Password"}
            id="password"
            required
            onChange={handleChange}
          />

          <div
            className={`flex justify-between items-center w-full text-darkBg`}>
            <span className="text-center  font-medium text-md dark:text-white flex justify-center items-center leading-[1.75] text-[#3F444F]">
              <span className=" group cursor-pointer  text-gray-400 hover:bg-darkBg/10 dark:hover:bg-white/10 transition-all duration-300 ease-in-out p-1 h-10 w-10 mt-auto rounded-full flex justify-center items-center">
                <input
                  type="checkbox"
                  id="check"
                  className="cursor-pointer p-4"
                />
              </span>
              Keep Me logged in
            </span>
            <Link
              href={"/admin/home"}
              className={`text-center dark:text-white text-darkBg font-semibold text-md flex justify-center items-end leading-[1.75]`}>
              Forgot Password?
            </Link>
          </div>

          <Button
            effect={"press"}
            asChild={false}
            type="submit"
            className={`w-full bg-darkBg dark:bg-white hover:bg-darkBg dark:hover:bg-white text-white dark:text-darkBg h-10 rounded-md flex justify-center items-center  text-md font-medium capitalize`}>
            Sign In
          </Button>
        </div>

        <Link
          href={"/signup"}
          className="text-center hover:underline underline-offset- dark:text-white font-medium text-md flex justify-center items-end leading-[1.75] text-[#3F444F]">
          Dont have an account ?
        </Link>
      </div>

      <div className="cursor-pointer absolute right-1 top-[40%] mb-auto h-10 w-10 bg-accent flex justify-center items-center rounded-lg">
        <ThemeButton />
      </div>
    </form>
  );
};

export default LoginPage;
