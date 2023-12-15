import CardLayout from "@/components/Elements/CardLayout/CardLayout";
import CustomInputContainer from "@/components/Elements/CutomInputContainer/CustomInputContainer";
import ListContainer from "@/components/Elements/ListContainer/ListContainer";
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
        <div className="w-full flex  gap-2">
          <ListContainer title={"User LIst"} showViewAll={true}>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id at,
              natus sunt hic veritatis quibusdam iure! Dignissimos maxime est
              nobis aliquam dolorum ea nostrum, aliquid doloremque facilis quas
              doloribus ab?
            </div>
          </ListContainer>
          <ListContainer title={"User LIst"} showViewAll={true}>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id at,
              natus sunt hic veritatis quibusdam iure! Dignissimos maxime est
              nobis aliquam dolorum ea nostrum, aliquid doloremque facilis quas
              doloribus ab?
            </div>
          </ListContainer>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
