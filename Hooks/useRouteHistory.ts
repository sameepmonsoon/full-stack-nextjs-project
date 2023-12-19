'use client'
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const useRouteHistory = () => {
  const router = useRouter();
  const pathname= usePathname();
  const [routeHistory, setRouteHistory] = useState<any>([]);
const isAdminPage = pathname.includes('admin')
  console.log(isAdminPage)
  useEffect(() => {
if(true){

  // const formattedRoute = pathname.split('/')[2]

    setRouteHistory((prevHistory:any) => [...prevHistory,pathname]);
  }
  }, [pathname,isAdminPage]);
  return routeHistory;
};

export default useRouteHistory;
