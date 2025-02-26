import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Data } from "@/types/types";

import CardMenu from "./CardMenu";

const CarouselProduct = ({ data }: { data: Data[] | undefined }) => {
  return (
    <div>
      <Carousel className="w-[270px] md:w-full max-w-xs lg:max-w-3xl xl:max-w-6xl">
        <CarouselContent className="min-h-[350px]">
          {data?.map((menu) => (
            <CarouselItem
              key={menu.no}
              className="flex flex-col basis-full lg:basis-1/2 xl:basis-1/3"
            >
              <CardMenu menu={menu} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselProduct;
