import CardLayout from "@/components/Elements/CardLayout/CardLayout";
import CustomInputContainer from "@/components/Elements/CutomInputContainer/CustomInputContainer";

import React from "react";

function AdminPage() {
  return (
    <div
      className={`dark:bg-[#030708] dark:text-white bg-accent flex-1 w-auto rounded-xl p-5`}>
      This is admin page.
      <div className="h-40 p-2 w-full">
        <CustomInputContainer
          size={"default"}
          font={"medium"}
          type="password"
          inputBorder={"none"}
          containerStyle={"border"}
          label={"User Name"}
          id="userName"
        />

        <CardLayout type={"row"} />
      </div>
    </div>
  );
}

export default AdminPage;
