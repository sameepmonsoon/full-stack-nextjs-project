import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import NavBar from "@/components/Elements/NavBar/NavBar";
import AdminNav from "@/components/Elements/AdminNavbar/AdminNavbar";
import AdminPage from "./home/page";
import AdminLeftDrawer from "@/components/Elements/AdminLeftDrawer/AdminLeftDrawer";
import { Suspense } from "react";
import Loading from "./loading";
function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <header>
          <nav>
            <AdminNav />
          </nav>
        </header>
        <section
          className={`flex w-full h-full lg:pr-5 pl-5 pr-5 lg:pl-0 mt-[5.5rem] dark:bg-darkBg `}>
          <AdminLeftDrawer />
          {children}
        </section>
      </Suspense>
    </>
  );
}

export default layout;
