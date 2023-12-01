import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/Elements/NavBar/NavBar";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <NavBar />
      {children}
    </main>
  );
}
