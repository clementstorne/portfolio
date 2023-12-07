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
        src="clement-storne.webp"
        alt="Photo de profil de Clément STORNE"
        className="rounded-full w-150 h-150 md:w-200 md:h-200 drop-shadow-base"
      />
      <h1 className="mb-5 md:mb-10 drop-shadow-xl">- Clément Storne- </h1>
      <p className="mt-5 md:mt-10 mb-20 md:mb-30 drop-shadow-base text-xl md:text-2xl font-heading font-bold m-0">
        Développeur JavaScript
      </p>
      <p className="w-280 md:w-350 mb-20 md:mb-30 text-center">
        Déterminé à explorer de nouvelles opportunités et à canaliser ma passion
        grandissante dans le domaine de la création d&apos;applications en
        ligne, je suis prêt à collaborer avec vous pour donner vie à vos
        prochaines applications. Ensemble, créons des solutions sur mesure qui
        répondent à vos besoins et dépassent vos attentes.
      </p>
      <div className="w-150 flex flex-row flex-nowrap justify-between items-center">
        <a
          href="https://www.linkedin.com/in/clementstorne/"
          target="_blank"
          rel="noopener noreferrer"
          className="rs-link"
          aria-label="Visiter mon profil LinkedIn"
        >
          <SiLinkedin size={30} />
        </a>
        <a
          href="https://github.com/clementstorne"
          target="_blank"
          rel="noopener noreferrer"
          className="rs-link"
          aria-label="Visiter mon profil GitHub"
        >
          <SiGithub size={30} />
        </a>
        <a
          href="https://twitter.com/clementstorne"
          target="_blank"
          rel="noopener noreferrer"
          className="rs-link"
          aria-label="Visiter mon profil X"
        >
          <SiX size={30} />
        </a>
      </div>
    </section>
  );
}
