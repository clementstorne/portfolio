import Image from "next/image";

import Diamond from "@/components/Diamond";
import SocialLinks from "@/components/SocialLinks";

const Home = () => {
  return (
    <main className="flex flex-row items-center min-h-screen mx-auto max-w-285 gap-x-5">
      <section className="w-1/2 space-y-8 text-center">
        <h1 className="uppercase text-[72px] tracking-[.22em] animate-fade-in-left">
          Clément STORNE
        </h1>
        <div className="flex justify-center delay-200 animate-fade-in-left gap-x-6">
          <Diamond />
          <Diamond />
          <Diamond />
          <Diamond />
          <Diamond />
        </div>
        <p className="font-black text-[24px] tracking-[.43em] animate-fade-in-left delay-400">
          Développeur Front-End
        </p>
      </section>
      <div className="flex items-center w-1/2 delay-600 animate-fade-in-right">
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
