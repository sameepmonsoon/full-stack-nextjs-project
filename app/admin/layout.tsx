import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import NavBar from "@/components/Elements/NavBar/NavBar";
import AdminNav from "@/components/Elements/AdminNavbar/AdminNavbar";
import AdminPage from "./page";
import AdminLeftDrawer from "@/components/Elements/AdminLeftDrawer/AdminLeftDrawer";

import ReduxProvider from "@/components/Elements/ReduxProvider/ReduxProvider";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <nav>
          <AdminNav />
        </nav>
      </header>
      <section className="flex w-full h-full pr-5">
        <AdminLeftDrawer />
        {children}
      </section>
    </>
  );
}

export default layout;
