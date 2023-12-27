"use client";
import { Button } from "../../ui/button";
import { CustomPopOver } from "../CustomPopOver/CustomPopOver";
import { Label } from "@radix-ui/react-label";
import { lightModeToggleConstants } from "@/Helpers/Constants/NavBarConstants";
import { SetStateAction, useEffect, useRef, useState } from "react";
import { useSystemThemeDetector } from "@/Hooks/useSystemThemeDetector";
import localThemeChecker from "@/Helpers/localThemeChecker";
interface ThemeButtonProps {}
const ThemeButton: React.FC<ThemeButtonProps> = () => {
  const isBrowser = typeof window !== "undefined";
  const isDarkTheme = useSystemThemeDetector();
  const [theme, setTheme] = useState("L");

  const [toggle, setToggle] = useState(false);
  const prevToggleRef = useRef(toggle);

  //effects
  useEffect(() => {
    if (typeof window !== undefined) {
      localThemeChecker(theme, isDarkTheme);
    }
  }, [theme, isDarkTheme]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "L";
    const storedToggle = localStorage.getItem("toggle") === "true";

    if (isBrowser) {
      setTheme(storedTheme);
      setToggle(storedToggle);
    }
  }, [isBrowser]);

  const handleThemeToggle = (themeMode: SetStateAction<string>) => {
    setTimeout(() => {
      setTheme(themeMode);
    }, 300);
  };

  //handlers
  const handleToggle = () => {
    const newToggle = !toggle;
    prevToggleRef.current = toggle;
    setToggle(newToggle);
    localStorage.setItem("toggle", `${newToggle}`);
  };
  return (
    <CustomPopOver
      onOpenChange={handleToggle}
      defaultOpen={true}
      open={toggle}
      popOverContent={
        <>
          {lightModeToggleConstants.map((item: any, index: number) => (
            <>
              <button
                key={index}
                onClick={() => {
                  handleThemeToggle(item.mode);
                  handleToggle();
                }}
                className={`gap-2 overflow-hidden cursor-pointer ${
                  theme === item.mode && "bg-accent"
                } hover:bg-accent rounded-sm w-full text-sm flex justify-start items-center py-[2px] px-2`}
              >
                <item.icon size={16} key={index} />
                <Label
                  key={index}
                  className="text-ellipsis cursor-pointer overflow-hidden max-w-[75%] h-full"
                >
                  {item.label}
                </Label>
              </button>
            </>
          ))}
        </>
      }
    >
      <Button
        onClick={handleToggle}
        variant={"ghost"}
        className="w-[2rem] h-[2rem] flex justify-center items-center p-1"
      >
        {lightModeToggleConstants
          .filter((item: any) => item.mode === theme)
          .map((item: any, index: number) => (
            <item.icon size={18} key={index} />
          ))}
      </Button>
    </CustomPopOver>
  );
};

export default ThemeButton;
