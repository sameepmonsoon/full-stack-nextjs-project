import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React from "react";

//variant for icon container
const cardLayoutVariant = cva(
  `w-full flex justify-center items-cemter bg-red-900`,
  {
    variants: {
      size: {
        default: "h-12 w-full",
        medium: "h-16 w-full",
        small: "h-10 w-full",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const CardLayout = ({ size }: { size?: any }) => {
  return (
    <div className={cn(cardLayoutVariant(size))}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi esse
      nesciunt veritatis quos amet necessitatibus reiciendis mollitia numquam?
      Ullam asperiores dolore vitae impedit, quaerat aliquid dolorum labore
      repellat expedita voluptas.
    </div>
  );
};

export default CardLayout;
