import { SiLinkedin, SiGithub, SiX } from "react-icons/si";

export default function Hero() {
  return (
    <section id="hero" className="text-cyan-light-1">
      <img
        src="clement-storne.jpg"
        alt="Photo de profil de Clément STORNE"
        className="circle w-150 h-150 md:w-200 md:h-200 drop-shadow-base"
      />
      <h1 className="mb-5 md:mb-10 drop-shadow-xl">- Clément Storne- </h1>
      <h4 className="mt-5 md:mt-10 mb-20 md:mb-30 drop-shadow-base">
        Développeur Front-End
      </h4>
      <p className="w-280 md:w-350 mb-20 md:mb-30 text-center">
        Je suis en quête de nouvelles opportunités pour appliquer ma passion
        croissante dans la création d’applications en ligne. Je suis disponible
        dès à présent.
      </p>
      <div className="w-150 flex flex-row flex-nowrap justify-between items-center">
        <a
          href="https://www.linkedin.com/in/clementstorne/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLinkedin size={30} />
        </a>
        <a
          href="https://github.com/clementstorne"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub size={30} />
        </a>
        <a
          href="https://twitter.com/clementstorne"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiX size={30} />
        </a>
      </div>
    </section>
  );
}
