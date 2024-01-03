"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const useRouteHistory = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [routeHistory, setRouteHistory] = useState<any>([]);
  const isAdminPage = pathname.includes("admin");
  useEffect(() => {
    if (true) {
      const formattedRoute = pathname.split("/")[2];
      // const formattedRoute = pathname.split("/")[1];

      setRouteHistory((prevHistory: any) => [...prevHistory, formattedRoute]);
    }
  }, [pathname, isAdminPage]);
  return routeHistory;
};

export default useRouteHistory;
