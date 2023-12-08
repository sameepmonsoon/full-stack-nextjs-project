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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
const LoginPage = () => {
  const [formValues, setFormValues] = useState<any>({});
  const [formErrors, setFormErrors] = useState<any>({});
  const [touched, setTouched] = useState<any>({});
  const [passwordStrength, setPasswordStrength] = useState<{
    strength: number;
    type: string;
  }>({ strength: 0, type: "poor" });

  const ref = useRef<any>(null);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setFormErrors(validateFormField(formValues));
    setFormErrors(validateFormField(formValues));

    const hasErrors = validateFormField(formValues);
    const hasErrors = validateFormField(formValues);
    try {
      if (!hasErrors) {
        const response = await fetch("api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formValues),
        });
      if (!hasErrors) {
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

  const handleBlur = (e: any) => {
    const { name, value } = e.target;
    const capitalName = name.charAt(0).toUpperCase() + name.slice(1);
    if (value === undefined || value.length === 0) {
      setFormErrors({ ...formErrors, [name]: `${capitalName} is required.` });
    }
  };

  const handleTouched = (e: any) => {
    const { name } = e.target;
    setTouched({ [name]: true });
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(Object.keys(touched).filter((item) => item === name));
    if (name) {
      setFormErrors(validateFormField(formValues));
    }
  };
  const handleSelectChange = (e: any) => {
    setFormValues({ ...formValues, ["role"]: e });
  };
  // console.log(touched, formErrors);
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full  h-full flex justify-center items-center p-5 bg-accent  dark:bg-darkBg">
      className="w-full  h-full flex justify-center items-center p-5 bg-accent  dark:bg-darkBg">
      <div className="w-[29.5rem] h-auto p-10 flex flex-col justify-start items-center dark:text-white bg-white dark:bg-darkBg rounded-lg gap-2">
        <div className="h-[25%] flex justify-start items-center flex-col gap-0 md:gap-2">
          <Logo to="/admin" title="MARIO" />
          <div className="flex justify-center items-cente flex-col gap-4 text-xs md:text-[16px]">
            <p className="text-center dark:text-white capitalize font-bold text-xl md:text-2xl">
              Sign Up
            </p>
            <p className="text-center text-md leading-3 font-normal text-gray-400  ">
              Enter Your credentials to Continue
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center gap-5 w-full border-b-[1px] border-b-gray-300 py-5">
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-5 md:gap-10 flex-wrap md:flex-nowrap">
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
            onFocus={handleTouched}
            onBlur={handleBlur}
            valid={!formErrors?.phone}
            errorMessage={formErrors?.phone}
            onFocus={handleTouched}
            onBlur={handleBlur}
            valid={!formErrors?.phone}
            errorMessage={formErrors?.phone}
          />
          <Select onValueChange={handleSelectChange} name="role">
          <Select onValueChange={handleSelectChange} name="role">
            <SelectTrigger className="px-3 py-4 bg-transparent  text-gray-500 dark:text-gray-400 focus-within:border-black overflow-hidden focus-within:ring-[1px] h-[60px] ring-offset-0 focus-within:ring-black/80 dark:focus-within:ring-gray-200/80 flex  dark:focus-within:border-gray-200 dark:border-gray-600 dark:hover:border-white hover:border-black border-[1px] cursor-pointer group rounded-[8px] gap-0 border-gray-300  w-full  justify-between items-center">
              <SelectValue placeholder="Select a Role" />
            </SelectTrigger>
            <SelectContent className="dark:bg-darkBg dark:text-white">
              <SelectItem value="super-admin">Super Admin</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="user">Student</SelectItem>
            </SelectContent>
          </Select>

          <CustomInputContainer
            size={"default"}
            font={"medium"}
            type="email"
            inputBorder={"none"}
            containerStyle={"border"}
            id="email"
            label={"Email Address"}
            required
            onFocus={handleTouched}
            onFocus={handleTouched}
            onChange={handleChange}
            onBlur={handleBlur}
            valid={!formErrors?.email}
            errorMessage={formErrors?.email}
            onBlur={handleBlur}
            valid={!formErrors?.email}
            errorMessage={formErrors?.email}
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
            ref={ref}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={formErrors?.password}
            valid={!formErrors?.password}
            onFocus={handleTouched}
            onBlur={handleBlur}
            errorMessage={formErrors?.password}
            valid={!formErrors?.password}
            onFocus={handleTouched}
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
          className="text-center text-sm md:text-[16px] dark:text-white font-medium text-md flex justify-center items-end leading-[1.75] text-[#3F444F]">
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
