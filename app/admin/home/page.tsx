import { colorPallette } from "@/Helpers/Constants/ColourConstants";
import CustomInputContainer from "@/components/Elements/CutomInputContainer/CustomInputContainer";
import React from "react";

function AdminPage() {
  return (
    <div
      className={`dark:bg-[#030708] dark:text-white bg-accent flex-1 w-auto rounded-xl p-5`}>
      This is admin page.
      <CustomInputContainer
        size={"default"}
        font={"medium"}
        type="='text"
        inputBorder={"none"}
        containerStyle={"border"}
        label={"User Name"}
      />
    </div>
  );
}

export default AdminPage;
