"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { getToken } from "@/utils/token";
import SkeletonLayout from "@/components/Elements/Skeleton/SkeletonLayout/SkeletonLayout";

interface AuthEffectProps {
  children: React.ReactNode;
}

const CheckTokenEffect: React.FC<AuthEffectProps> = ({ children }) => {
  const token = getToken();

  useEffect(() => {
    const checkAuth = () => {
      if (!token) {
        redirect("/login");
      }
    };

    checkAuth();
  }, [token]);
  if (!token) {
    return <SkeletonLayout />;
  }
  return <>{children}</>;
};

export default CheckTokenEffect;
