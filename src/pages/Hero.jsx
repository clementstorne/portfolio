import { SiLinkedin, SiGithub, SiX } from "react-icons/si";

import useTheme from "../hooks/useTheme";

export default function Hero() {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="hero"
      className={`justify-center text-cyan-light-1 ${isDarkMode ? "dark" : ""}`}
    >
      <img
        src="clement-storne.jpg"
        alt="Photo de profil de Clément STORNE"
        className="rounded-full w-150 h-150 md:w-200 md:h-200 drop-shadow-base"
      />
      <h1 className="mb-5 md:mb-10 drop-shadow-xl">- Clément Storne- </h1>
      <h4 className="mt-5 md:mt-10 mb-20 md:mb-30 drop-shadow-base">
        Développeur JavaScript
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
          className="rs-link"
        >
          <SiLinkedin size={30} />
        </a>
        <a
          href="https://github.com/clementstorne"
          target="_blank"
          rel="noopener noreferrer"
          className="rs-link"
        >
          <SiGithub size={30} />
        </a>
        <a
          href="https://twitter.com/clementstorne"
          target="_blank"
          rel="noopener noreferrer"
          className="rs-link"
        >
          <SiX size={30} />
        </a>
      </div>
    </section>
  );
}
