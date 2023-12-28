import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { DndContext } from "@dnd-kit/core";
import AdminNav from "@/components/Elements/AdminNavbar/AdminNavbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" h-full">
      <body
        className={cn(
          "relative h-full font-sans antialiased dark:bg-darkBg bg-white",
          inter.className
        )}
      >
        <header className="absolute">
          <nav>
            <AdminNav />
          </nav>
        </header>
        <main className="relative flex flex-col h-screen">
          <div className="flex-grow flex-1 absolute">{children}</div>
          <Toaster />
        </main>
      </body>
    </html>
  );
}
