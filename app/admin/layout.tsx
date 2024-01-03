import "../globals.css";
import AdminNav from "@/components/Elements/AdminNavbar/AdminNavbar";
import AdminLeftDrawer from "@/components/Elements/AdminLeftDrawer/AdminLeftDrawer";
import { Suspense } from "react";
import Loading from "./loading";
import ProtectedRoute from "@/components/HOC/ProtectedRoute";
function layout({
  children,
  home,
  login,
}: {
  children: React.ReactNode;
  home: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = true;
  return (
    <>
      <Suspense fallback={<Loading />}>
        <header>
          <nav>
            <AdminNav />
          </nav>
        </header>
        <section
          className={`flex w-full h-full lg:pr-5 pl-5 pr-5 lg:pl-0 mt-[5.5rem] dark:bg-darkBg `}
        >
          <AdminLeftDrawer />
          {children}
        </section>
      </Suspense>
    </>
  );
}

export default ProtectedRoute(layout);
