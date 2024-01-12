import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ClientProvider from "@/Providers/ClientProvider";
import { ToastProvider } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";

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
          "h-full font-sans antialiased dark:bg-darkBg flex",
          inter.className
        )}
      >
        <ClientProvider>
          <main className="flex flex-1 h-screen overflow-hidden">
            <div className="flex-grow flex-1">{children}</div>
            {/* <Toaster richColors /> */}
            <Toaster/>
          </main>
        </ClientProvider>
      </body>
    </html>
  );
}
