import LinkButton from "../components/LinkButton";

import useTheme from "../hooks/useTheme";

export default function WhoAmI() {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="who-am-i"
      className={`text-cyan-light-12 ${isDarkMode ? "dark" : ""}`}
    >
      <h2>Qui je suis ?</h2>
      <div className="mx-50 sm:mx-150 lg:mx-100 xl:mx-150 mb-50 md:mb-150">
        <p className="mb-30">
          Je suis Clément STORNE, un passionné de{" "}
          <strong>développement web</strong> avec une histoire professionnelle
          atypique. Mon parcours a débuté au lycée avec la découverte d&apos;
          <strong>HTML</strong> et de <strong>CSS</strong>, évoluant ensuite
          vers des <strong>études en mathématiques</strong>. Après une
          expérience enrichissante en tant que <strong>professeur</strong> de
          mathématiques, j&apos;ai choisi de me réorienter vers le développement
          web. On me décrit comme <strong>rigoureux</strong>,
          <strong>créatif</strong> et <strong>à l&apos;écoute</strong>.
        </p>
        <div className="flex flex-row flex-nowrap justify-center items-center mb-30">
          <img
            src="./dev.webp"
            alt="Le bureau d'un développeur"
            className="object-center"
          />
        </div>
        <p className="mb-30">
          Au cours d&apos;une <strong>formation</strong> intense de développeur{" "}
          <strong>full-stack</strong>, j&apos;ai acquis des compétences solides,
          de la création de sites web à l&apos;utilisation d&apos;API. Ma{" "}
          <strong>spécialisation dans le front-end</strong> m&apos;a permis de
          maîtriser <strong>React</strong> pour la création d&apos;applications
          web dynamiques.
        </p>
        <LinkButton
          label="Voir mon CV"
          link="https://drive.google.com/file/d/1GyRbjsgV3Q3c5t2p8bXB7VOdFExL740Z/view?usp=share_link"
          icon="file"
        />
      </div>
    </section>
  );
}
