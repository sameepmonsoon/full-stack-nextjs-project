import CustomInputContainer from "@/components/Elements/CutomInputContainer/CustomInputContainer";
import React from "react";

function AdminPage() {
  return (
    <div
      className={`dark:bg-[#030708] dark:text-white bg-accent flex-1 w-auto rounded-xl p-5`}>
      This is admin page.
      <div className="h-40 p-2 w-[20rem]">
        <CustomInputContainer
          size={"default"}
          font={"medium"}
          type="password"
          inputBorder={"none"}
          containerStyle={"border"}
          label={"User Name"}
          id="userName"
        />
      </div>
    </div>
  );
}

export default AdminPage;
