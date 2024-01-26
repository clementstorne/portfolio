import ProjectCard from "../components/ProjectCard";

import useTheme from "../hooks/useTheme";

export default function Projects() {
  const { isDarkMode } = useTheme();

  const projects = [
    {
      title: "Tic Tac Toe Game",
      description:
        "Dans le cadre des défis Frontend Mentor, j'ai réalisé un jeu de morpion interactif avec un mode multijoueur et un mode monojoueur contre une IA.",
      tags: ["vite", "JS", "react", "redux", "tailwind"],
      code: "https://github.com/clementstorne/FrontendMentor-tic-tac-toe-game",
      demo: "https://clementstorne-tic-tac-toe-game.netlify.app/",
      demoIcon: "netlify",
    },
    {
      title: "Groupomania",
      description:
        "Réseau social d’entreprise où il est possible de partager des images ou des textes aux autres utilisateurs avec des fonctions de like et dislike des publications.",
      tags: [
        "vite",
        "vue",
        "bootstrap",
        "sass",
        "node",
        "express",
        "sequelize",
        "mysql",
      ],
      code: "https://github.com/clementstorne/Groupomania",
      demo: "",
    },
    {
      title: "Domaine de Lipica",
      description:
        "Refonte complète du site internet existant pour moderniser l’expérience utilisateur. Développement d’un back-end permettant à l’administrateur du site une gestion autonome des contenus.",
      tags: [
        "figma",
        "vite",
        "JS",
        "react",
        "redux",
        "tailwind",
        "node",
        "express",
        "prisma",
        "mysql",
      ],
      code: "https://github.com/clementstorne/LearnAtHome",
      demo: "https://domaine-de-lipica.onrender.com/",
    },
  ];

  return (
    <section
      id="projects"
      className={`text-cyan-light-12 ${isDarkMode ? "dark" : ""}`}
    >
      <h2>Projets</h2>
      <div className="grid grid-cols-1 grid-rows-3 gap-40 mx-50 sm:mx-150 lg:mx-100 xl:mx-150 mb-50 md:mb-150 lg:grid-cols-3 lg:grid-rows-1 ">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            code={project.code}
            demo={project.demo}
            demoIcon={project.demoIcon}
          />
        ))}
      </div>
    </section>
  );
}
