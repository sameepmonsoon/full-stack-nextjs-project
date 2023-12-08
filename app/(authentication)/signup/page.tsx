"use client";
import {
  calculatePasswordStrength,
  passwordStrengthType,
  validateFormField,
} from "@/Helpers/validateForm";
import { CustomProgressBar } from "@/components/Elements/CustomProgressBar/CustomProgressBar";
import CustomInputContainer from "@/components/Elements/CutomInputContainer/CustomInputContainer";
import Logo from "@/components/Elements/Logo/Logo";
import ThemeButton from "@/components/Elements/ThemeButton/ThemeButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
const LoginPage = () => {
  const [formValues, setFormValues] = useState<any>({});
  const [formErrors, setFormErrors] = useState<any>({});
  const [passwordStrength, setPasswordStrength] = useState<{
    strength: number;
    type: string;
  }>({ strength: 0, type: "poor" });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const ref = useRef<any>(null);

  async function handleSubmit(e: any) {
    e.preventDefault();

    try {
      const response = await fetch("api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        console.log("User created successfully");
        // Handle success, redirect, or perform any other actions
      } else {
        const data = await response.json();
        console.error("Error:", data.error);
        // Handle error response
      }
    } catch (error: any) {
      console.error("Error:", error.message);
      // Handle fetch error
    }
  }

  useEffect(() => {
    const calculatedStrength = calculatePasswordStrength(formValues?.password);
    const calculatedType = passwordStrengthType(calculatedStrength.strength);

    setPasswordStrength({
      strength: calculatedStrength.strength,
      type: calculatedType,
    });
  }, [formValues]);
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full  h-screen flex justify-center items-center p-5 bg-accent  dark:bg-darkBg">
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
              id="firstName"
              required
              onChange={handleChange}
            />
            <CustomInputContainer
              size={"default"}
              font={"medium"}
              type="text"
              inputBorder={"none"}
              containerStyle={"border"}
              label={"Last Name"}
              id="lastName"
              required
              onChange={handleChange}
            />
          </div>
          <CustomInputContainer
            size={"default"}
            font={"medium"}
            type="number"
            inputBorder={"none"}
            containerStyle={"border"}
            id="phone"
            label={"Phone Number"}
            required
            onChange={handleChange}
            maxlength={10}
          />
          <CustomInputContainer
            size={"default"}
            font={"medium"}
            type="email"
            inputBorder={"none"}
            containerStyle={"border"}
            id="email"
            label={"Email Address"}
            required
            onChange={handleChange}
          />
          <CustomInputContainer
            size={"default"}
            font={"medium"}
            type="role"
            inputBorder={"none"}
            containerStyle={"border"}
            id="role"
            label={"Role"}
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
            valid={formErrors?.password}
            ref={ref}
            onChange={handleChange}
          />
          <div className="w-full flex justify-start gap-3 items-end text-xs font-bold">
            <CustomProgressBar type={passwordStrength.type} value={30} />
            <span className="h-full capitalize flex justify-center items-end relative -bottom-[3px]">
              {passwordStrength.type}
            </span>
          </div>
          <div
            className={`flex justify-between items-center w-full text-darkBg`}>
            <span className="text-center flex-1 relative left-[-13px] font-medium  dark:text-white text-md flex justify-start items-center leading-[1.75] text-[#3F444F]">
              <span className=" group cursor-pointer text-gray-400  hover:bg-darkBg/10 dark:hover:bg-white/10 transition-all duration-300 ease-in-out p-1 h-10 w-10 mt-auto rounded-full flex justify-center items-center">
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
            asChild={false}
            type="submit"
            effect={"press"}
            className={`w-full bg-darkBg dark:bg-white hover:bg-darkBg dark:hover:bg-white text-white dark:text-darkBg h-10 rounded-md flex justify-center items-center  text-md font-medium capitalize`}>
            Sign Up
          </Button>
        </div>

        <Link
          href={"/login"}
          className="text-center dark:text-white font-medium text-md flex justify-center items-end leading-[1.75] text-[#3F444F]">
          Already have an account ?
        </Link>
      </div>

      <div className="cursor-pointer absolute right-1 top-[40%] mb-auto h-10 w-10 bg-accent flex justify-center items-center rounded-lg">
        <ThemeButton />
      </div>
    </form>
  );
};

export default LoginPage;
