import AdminLeftDrawer from "@/components/Elements/AdminLeftDrawer/AdminLeftDrawer";
import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

function AdminPage() {
  return (
    <Provider store={store}>
      <section  className="flex w-full h-full pr-5">
      <AdminLeftDrawer />
      <div className="bg-red-100 w-full rounded-xl p-5">this is admin page</div></section>
    </Provider>
  );
}

export default AdminPage;
