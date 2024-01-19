"use client";
import { validateFormField } from "@/Helpers/validateForm";
import CustomInputContainer from "@/components/Elements/CutomInputContainer/CustomInputContainer";
import Logo from "@/components/Elements/Logo/Logo";
import ThemeButton from "@/components/Elements/ThemeButton/ThemeButton";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { getToken, setToken, setUserDetail } from "@/utils/token";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
const LoginPage = () => {
  const [formValues, setFormValues] = useState<any>({});
  const [formErrors, setFormErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const token = getToken();
  const router = useRouter();
  const ref = useRef<any>(null);
  const { toast } = useToast();
  async function handleSubmit(e: any) {
    e.preventDefault();
    setFormErrors(validateFormField(formValues));

    const hasErrors = validateFormField(formValues);
    setIsSubmitting(true);

    if (hasErrors) {
      try {
        const response = await fetch("api/auth/signin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formValues),
        });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(`${data.message}`);
        }

        if (data?.token) {
          setToken(data?.token);
          setUserDetail(data?.userDetails);
          window.location.href = "/admin/home";
        } else {
          throw new Error(`Error logging in.`);
        }
      } catch (error: any) {
        toast({
          duration: 900,
          title: error.message,
          variant: "success",
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormErrors(validateFormField(formValues));
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    if (token) {
      router.replace("/admin/home");
    }
  }, [token, router]);
  return (
    <form
      className="w-screen h-full flex justify-center items-center p-5 bg-accent  dark:bg-darkBg"
      onSubmit={handleSubmit}
    >
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
            className={`flex justify-between items-center w-full text-darkBg`}
          >
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
              className={`text-center dark:text-white text-darkBg font-semibold text-md flex justify-center items-end leading-[1.75]`}
            >
              Forgot Password?
            </Link>
          </div>

          <Button
            effect={`${isSubmitting ? "none" : "press"}`}
            asChild={false}
            type="submit"
            className={`w-full ${
              isSubmitting
                ? "bg-gray-300 text-gray-500  hover:bg-gray-300"
                : "bg-darkBg dark:bg-white hover:bg-darkBg text-white"
            }  dark:hover:bg-white  dark:text-darkBg h-10 rounded-md flex justify-center items-center  text-md font-medium capitalize`}
          >
            Sign In
          </Button>
        </div>

        <Link
          href={"/signup"}
          className="text-center hover:underline underline-offset- dark:text-white font-medium text-md flex justify-center items-end leading-[1.75] text-[#3F444F]"
        >
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
