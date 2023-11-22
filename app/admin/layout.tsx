"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import NavBar from "@/components/Elements/NavBar/NavBar";
import AdminNav from "@/components/Elements/AdminNavbar/AdminNavbar";
import AdminPage from "./page";
import AdminLeftDrawer from "@/components/Elements/AdminLeftDrawer/AdminLeftDrawer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
function layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
            <AdminNav />
          </nav>
        </header>
        <section className="flex w-full h-full pr-5">
          <AdminLeftDrawer />
          <AdminPage />
        </section>
        {/* <AdminPage /> */}
      </body>
    </html>
  );
}

export default layout;
