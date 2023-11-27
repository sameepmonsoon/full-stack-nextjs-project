import { colorPallette } from "@/Helpers/Constants/ColourConstants";
import React from "react";

function AdminPage() {
  return (
    <div
      className={`dark:bg-[${colorPallette.darkBg}] dark:text-white bg-accent w-full rounded-xl p-5 relative`}>
      This is admin page.
    </div>
  );
}

export default AdminPage;
