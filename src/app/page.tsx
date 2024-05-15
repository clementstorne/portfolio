import Image from "next/image";

import Diamond from "@/components/Diamond";
import { cn } from "@/lib/utils";

const Home = () => {
  return (
    <main
      className={cn(
        "min-h-screen max-w-240 flex justify-center items-center",
        "flex-col mt-8 mx-5 space-y-6",
        "md:flex-row md:mt-0 md:mx-8 md:space-x-5 md:space-y-0",
        "lg:mx-auto"
      )}
    >
      <section className={cn("w-full space-y-8 text-center", "md:w-1/2")}>
        <h1
          className={cn(
            "fade-in-left",
            "uppercase tracking-[.2em]",
            "text-5xl",
            "md:text-6xl",
            "lg:text-7xl"
          )}
        >
          Clément STORNE
        </h1>
        <div
          className={cn(
            "fade-in-left delay-200",
            "flex justify-center",
            "h-4 gap-x-4",
            "md:h-6 md:gap-x-6"
          )}
        >
          <Diamond />
          <Diamond />
          <Diamond />
          <Diamond />
          <Diamond />
        </div>
        <p
          className={cn(
            "fade-in-left delay-400",
            "font-bold tracking-[.3em] text-center",
            "text-xl",
            "md:text-2xl",
            "lg:text-3xl"
          )}
        >
          Développeur <span>Front-End</span>
        </p>
      </section>
      <div
        className={cn(
          "fade-in-right delay-600",
          "flex items-center",
          "w-full max-w-[383px]",
          "md:max-w-[465px]"
        )}
      >
        <Image
          src="/home.png"
          alt="Clément Storne"
          width={597}
          height={613}
          className="w-full h-auto"
        />
      </div>
    </main>
  );
};

export default Home;
