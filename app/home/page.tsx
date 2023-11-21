import NavBar from "@/components/Elements/NavBar/NavBar";
import Link from "next/link";
import React from "react";

const Home = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div>
      <Link href={"/about"}>About</Link>
    </div>
  );
};

export default Home;
