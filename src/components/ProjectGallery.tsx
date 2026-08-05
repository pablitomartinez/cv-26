"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProjectImage {
  src: string;
  title: string;
}

interface Props {
  images: ProjectImage[];
}

export default function ProjectGallery({ images }: Props) {
  const [current, setCurrent] = React.useState(0);
  const [api, setApi] = React.useState<any>();

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="group">
      <Carousel
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent>

          {images.map((image) => (

            <CarouselItem key={image.src}>

              <div className="relative overflow-hidden rounded-2xl border border-primary/10 bg-muted aspect-video">

                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />

              </div>

            </CarouselItem>

          ))}

        </CarouselContent>

        {images.length > 1 && (
          <>
            <CarouselPrevious className="left-5 opacity-0 group-hover:opacity-100 transition-all" />

            <CarouselNext className="right-5 opacity-0 group-hover:opacity-100 transition-all" />
          </>
        )}

      </Carousel>

      <div className="mt-5 flex items-center justify-between">

        <span className="text-sm text-muted-foreground">
          {images[current]?.title}
        </span>

        <span className="text-xs text-muted-foreground">
          {current + 1} / {images.length}
        </span>

      </div>

      {images.length > 1 && (

        <div className="flex gap-2 mt-3">

          {images.map((_, index) => (

            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-8 bg-primary"
                  : "w-2 bg-primary/20"
              }`}
            />

          ))}

        </div>

      )}

    </div>
  );
}