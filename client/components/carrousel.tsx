"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import gimnasio1 from "@/public/gimnasio1.jpg";
import gimnasio2 from "@/public/gimnasio2.jpg";
import gimnasio3 from "@/public/gimnasio3.jpg";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const imagenes = [gimnasio1, gimnasio2, gimnasio3];

  return (
    <Carousel
      className="w-full h-screen"
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="h-full">
        {imagenes.map((imagen, index) => (
          <CarouselItem key={index} className="w-full h-full relative">
            <Image
            priority={true}
              src={imagen}
              alt="Gimnasio"
              fill={true}
              sizes="100%"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
