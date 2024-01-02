"use client";
import LoadingDots from "@/components/Elements/Loading/LoadingDots/LoadingDots";
import React, { useEffect, useState } from "react";

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return (
      <>
        <LoadingDots />
      </>
    );
  }
  return <div>{children}</div>;
};

export default ClientProvider;
