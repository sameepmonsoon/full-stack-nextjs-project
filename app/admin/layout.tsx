import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import NavBar from "@/components/Elements/NavBar/NavBar";
import AdminNav from "@/components/Elements/AdminNavbar/AdminNavbar";
import AdminPage from "./home/page";
import AdminLeftDrawer from "@/components/Elements/AdminLeftDrawer/AdminLeftDrawer";
import { colorPallette } from "@/Helpers/Constants/ColourConstants";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <nav>
          <AdminNav />
        </nav>
      </header>
      <section
        className={`flex w-full h-full lg:pr-5 pl-5 pr-5 lg:pl-0 mt-[5.5rem] dark:bg-[${colorPallette.darkBg}] `}>
        <AdminLeftDrawer />
        {children}
      </section>
    </>
  );
}

export default layout;
