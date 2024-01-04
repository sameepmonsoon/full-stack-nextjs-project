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
import image from "@/public/image-one.jpg";
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
      className=" max-w-[30rem] overflow-hidden rounded-[12px] border-none h-full"
      setApi={setApi}
      loop={true}
      opts={{
        align: "start",
      }}
    >
      <CarouselContent className="h-auto rounded-[12px] bg-transparent border-none">
        {Array.from({ length: 10 }).map((_, index) => (
          <>
            <CarouselItem key={index} className="h-[20rem] w-full border-none">
              <Card className="h-[20rem] overflow-hidden border-none">
                <CardContent className="flex relative items-center justify-center p-0 overflow-hidden h-full border-none">
                  <Image
                    src={image}
                    alt="none"
                    className="h-full w-full object-cover transition-all duration-100"
                  />
                  <Carousel
                    className="h-full w-full  absolute m-auto z-5"
                    setApi={setApi}
                    loop={true}
                    opts={{
                      align: "start",
                    }}
                  >
                    <CarouselContent className="h-full w-full  m-auto z-5">
                      <CarouselItem key={index} className="h-[20rem] w-full">
                        <span className="text-4xl font-semibold absolute m-auto z-5 text-white transition-opacity duration-200 ">
                          {index + 1}
                        </span>
                      </CarouselItem>
                    </CarouselContent>
                  </Carousel>
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
