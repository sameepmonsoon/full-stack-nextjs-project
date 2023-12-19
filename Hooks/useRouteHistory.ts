import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const useRouteHistory = () => {
  const router = useRouter();
  const pathname= usePathname();
  const [routeHistory, setRouteHistory] = useState<any>([]);

  
  useEffect(() => {

    setRouteHistory((prevHistory:any) => [...prevHistory,pathname]);

  }, [pathname]);

  return routeHistory;
};

export default useRouteHistory;
