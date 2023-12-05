import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Tic Tac Toe Game",
      description:
        "Dans le cadre des défis Frontend Mentor, j'ai réalisé un jeu de morpion interactif avec un mode multijoueur et un mode monojoueur contre une IA.",
      tags: ["vite", "JS", "react", "redux", "tailwind"],
      code: "https://github.com/clementstorne/FrontendMentor-tic-tac-toe-game",
      demo: "",
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
      title: "Learn@Home",
      description:
        "Plateforme de mise en relation d’élèves et tuteurs avec une messagerie, un calendrier ainsi qu’une todo-list.",
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
      demo: "",
    },
  ];

  return (
    <section id="projects" className="text-cyan-light-12">
      <h2>Projets</h2>
      <div className="mx-50 sm:mx-150 lg:mx-100 xl:mx-150 mb-50 md:mb-150 grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-40 ">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            code={project.code}
          />
        ))}
      </div>
    </section>
  );
}
