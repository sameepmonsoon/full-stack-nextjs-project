import CardLayout from "@/components/Elements/CardLayout/CardLayout";
import CustomInputContainer from "@/components/Elements/CutomInputContainer/CustomInputContainer";

import React from "react";

function AdminPage() {
  return (
    <div
      className={`dark:bg-[#030708] dark:text-white bg-accent flex-1 w-auto rounded-xl p-5 flex `}>
      This is admin page.
      <div className="p-2 w-[20rem] h-full flex flex-col gap-5">
        <CustomInputContainer
          size={"default"}
          font={"medium"}
          type="password"
          inputBorder={"none"}
          containerStyle={"border"}
          label={"User Name"}
          id="userName"
        />

        <CardLayout
          type={"row"}
          title={"$100"}
          detail="Lorem Ipsum is the earning."
        />

        <CardLayout
          type={"column"}
          title={"$100"}
          detail="Lorem Ipsum is the earning."
        />
        <CardLayout
          type={"column"}
          title={"$100"}
          detail="Lorem Ipsum is the earning.">
          <div>lorem</div>
          <div>lorem</div>
          <div>lorem</div>
        </CardLayout>
      </div>
      <div className="p-2 w-full h-full flex flex-col gap-5">
        <CardLayout
          type={"row"}
          title={"$100"}
          detail="Lorem Ipsum is the earning."
        />

        <CardLayout
          type={"column"}
          title={"$100"}
          detail="Lorem Ipsum is the earning."
        />
        <CardLayout
          type={"column"}
          title={"$100"}
          detail="Lorem Ipsum is the earning.">
          <div>lorem</div>
          <div>lorem</div>
          <div>lorem</div>
        </CardLayout>
      </div>
    </div>
  );
}

export default AdminPage;
