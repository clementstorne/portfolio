import Image from "next/image";

import Diamond from "@/components/Diamond";
import SocialLinks from "@/components/SocialLinks";
import { cn } from "@/lib/utils";

const Home = () => {
  return (
    <main
      className={cn(
        "min-h-screen mx-auto max-w-285",
        "flex flex-col items-center mt-22 mx-5 space-y-6",
        "flex md:flex-row md:mt-0 md:mx-0 md:space-x-5 md:space-y-0"
      )}
    >
      <section
        className={cn("w-full space-y-2 text-center", "md:w-1/2 md:space-y-8")}
      >
        <h1
          className={cn(
            "uppercase animate-fade-in-left",
            "text-[40px] tracking-[.22em]",
            "md:text-[72px]"
          )}
        >
          Clément STORNE
        </h1>
        <div
          className={cn(
            "flex justify-center delay-200 animate-fade-in-left",
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
            "font-bold animate-fade-in-left delay-400",
            "text-[16px] tracking-[.34em]",
            "md:text-[24px] md:tracking-[.43em]"
          )}
        >
          Développeur Front-End
        </p>
      </section>
      <div
        className={cn(
          "flex items-center delay-600 animate-fade-in-right",
          "w-full",
          "md:w-1/2"
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
      <SocialLinks />
    </main>
  );
};

export default Home;
