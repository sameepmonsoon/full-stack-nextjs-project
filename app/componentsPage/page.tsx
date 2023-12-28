"use client";
import useRouteHistory from "@/Hooks/useRouteHistory";
import BreadCrumbs from "@/components/Elements/BreadCrumbs/BreadCrumbs";
import CardLayout from "@/components/Elements/CardLayout/CardLayout";
import CustomInputContainer from "@/components/Elements/CutomInputContainer/CustomInputContainer";
import ListContainer from "@/components/Elements/ListContainer/ListContainer";
import ThemeButton from "@/components/Elements/ThemeButton/ThemeButton";
import UserDetailCard from "@/components/Elements/Users/Profile/UserDetailCard/UserDetailCard";
import React from "react";
import image from "../../public/next.svg";
import { toast } from "sonner";
// import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import DragAndDrop from "@/components/Elements/DragAndDrop/DragAndDrop";
import { CarouselSlider } from "@/components/Elements/Carousels/CarouselSlider/CarouselSlider";
import SkeletonLayout from "@/components/Elements/Skeleton/SkeletonLayout/SkeletonLayout";
const ComponentPage = () => {
  const routeHistory = useRouteHistory();
  // const { toast } = useToast();
  return (
    <div
      className={`dark:bg-[#030708] dark:text-white bg-accent flex-1 p-5 flex h-full w-full flex-col gap-4`}
    >
      <h1 className="w-full h-10 flex justify-center items-center text-xl font-medium">
        This is Components page
      </h1>
      <div className="w-full h-20 p-2 flex flex-col dark:bg-accent/10 justify-center items-center bg-black/10">
        <h1>Change Theme</h1>
        <ThemeButton />
      </div>
      <br />
      <div>
        <UserDetailCard
          image={image}
          userName="JWT Not User"
          userDetail="UI/UX Designer"
          label="Pro"
        />
        <br />
        <BreadCrumbs gap={20} separatorType={1} routeHistory={routeHistory} />
        <br />
        <BreadCrumbs gap={20} separatorType={2} routeHistory={routeHistory} />
        <br />
        <BreadCrumbs gap={20} separatorType={3} routeHistory={routeHistory} />
        <br />
        <BreadCrumbs gap={20} separatorType={5} routeHistory={routeHistory} />
        <br />
        <Button
          variant="outline"
          onClick={() =>
            toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
        >
          Toast check
        </Button>
        <br />
        <div className="p-5 w-full flex justify-center items-center">
          <CarouselSlider />
        </div>
        <br />
        <SkeletonLayout />
        <br />
      </div>
      <div className="w-full flex gap-1 ">
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
            detail="Lorem Ipsum is the earning."
          >
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
            detail="Lorem Ipsum is the earning."
          >
            <div>lorem</div>
            <div>lorem</div>
            <div>lorem</div>
          </CardLayout>
          <div className="w-full flex  gap-2">
            <ListContainer title={"User LIst"} showViewAll={true}>
              <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id at,
                natus sunt hic veritatis quibusdam iure! Dignissimos maxime est
                nobis aliquam dolorum ea nostrum, aliquid doloremque facilis
                quas doloribus ab?
              </div>
            </ListContainer>
            <ListContainer title={"User LIst"} showViewAll={true}>
              <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id at,
                natus sunt hic veritatis quibusdam iure! Dignissimos maxime est
                nobis aliquam dolorum ea nostrum, aliquid doloremque facilis
                quas doloribus ab?
              </div>
            </ListContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentPage;
