"use client";
import { useEffect, useState } from "react";

export const useSystemThemeDetector = () => {
  const isClient = typeof window === "object"; // Check if window is defined

  const getCurrentTheme = () =>
    isClient
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : false;

  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());

  const mqListener = (e: any) => {
    setIsDarkTheme(e.matches);
  };

  useEffect(() => {
    if (isClient) {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      darkThemeMq.addListener(mqListener);
      return () => darkThemeMq.removeListener(mqListener);
    }
  }, [isClient]);

  return isDarkTheme;
};
