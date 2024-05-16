"use client";

import projects from "@/data/projects";
import { cn } from "@/lib/utils";
import Diamond from "@components/Diamond";
import Project from "@components/Project";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const ProjectsCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleButtonClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <Carousel
      setApi={setApi}
      opts={{
        loop: true,
      }}
      className="fade-in-left md:scale-in delay-500"
    >
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem key={index}>
            <Project {...project} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-6 flex justify-center items-center gap-2">
        {projects.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className="w-6 h-6"
            onClick={() => handleButtonClick(index)}
          >
            <span className={cn("w-4 h-4", index === current - 1 && "w-6 h-6")}>
              <Diamond color={index === current - 1 ? "#60D548" : "#F9F9F9"} />
            </span>
          </Button>
        ))}
      </div>
      <CarouselPrevious className="max-lg:hidden" />
      <CarouselNext className="max-lg:hidden" />
    </Carousel>
  );
};

export default ProjectsCarousel;
