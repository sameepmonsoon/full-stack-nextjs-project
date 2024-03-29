import * as React from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import image from "@/public/image-two.png";
import Image from "next/image";
export function CarouselSlider() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <Carousel
      className="w-auto overflow-hidden bg-transparent rounded-[12px] border-none h-full"
      setApi={setApi}
      loop={true}
      opts={{
        align: "start",
      }}
    >
      <CarouselContent className="h-[22rem] rounded-[12px] bg-transparent border-none">
        {Array.from({ length: 10 }).map((_, index) => (
          <>
            <CarouselItem
              key={index}
              className="h-full w-full bg-white dark:bg-darkBg border-none"
            >
              <Card className="h-[22rem] overflow-hidden border-none bg-white dark:bg-darkBg">
                <CardContent className="flex relative items-center justify-center bg-transparent p-0 overflow-hidden h-[22rem] border-none">
                  <Image
                    src={image}
                    alt="none"
                    className="h-full w-full object-cover transition-all bg-transparent duration-100"
                  />

                  <CarouselContent className="h-full w-full m-auto z-5">
                    <CarouselItem key={index} className="h-40 w-full">
                      <motion.div
                        key={index}
                        initial={{ x: 5, y: -5 }}
                        animate={{ x: 0, y: 0 }}
                        transition={{
                          delay: 0.8,
                          type: "spring",
                          restDelta: 0.5,
                        }}
                        className="text-4xl font-semibold absolute m-auto z-5 text-red-900 transition-opacity duration-200 "
                      >
                        {index + 1}
                      </motion.div>
                    </CarouselItem>
                  </CarouselContent>
                </CardContent>
              </Card>
            </CarouselItem>{" "}
          </>
        ))}
      </CarouselContent>
      <div className="absolute top-8 right-[3.3rem] flex justify-center items-center gap-1">
        <div className="relative left-8">
          <CarouselPrevious />
        </div>
        <div className="">
          <CarouselNext />
        </div>
      </div>
    </Carousel>
  );
}
