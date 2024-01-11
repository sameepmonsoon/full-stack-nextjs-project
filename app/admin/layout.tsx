import "./admin.scss";
import AdminNav from "@/components/Elements/AdminNavbar/AdminNavbar";
import AdminLeftDrawer from "@/components/Elements/AdminLeftDrawer/AdminLeftDrawer";
import { Suspense } from "react";
import Loading from "./loading";
import ProtectedRoute from "@/components/HOC/ProtectedRoute";
import "@/Styles/Admin/AdminBody.scss";
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
          className={`flex w-screen h-full lg:pr-5 pl-5 pr-5 lg:pl-0 pt-[5.5rem] dark:bg-darkBg`}
        >
          <AdminLeftDrawer />
          <div
            className={`adminBody dark:bg-darkModeBg dark:text-white overflow-x-hidden h-full bg-accent flex-1 flex-grow rounded-[10px] p-5 flex overflow-y-auto  flex-col gap-5 pb-2`}
          >
            {children}
          </div>
        </section>
      </Suspense>
    </>
  );
}

export default ProtectedRoute(layout);
