import projects from "@/data/projects";
import Project from "@components/Project";
import { cn } from "@lib/utils";

const Projects = () => {
  return (
    <main
      className={cn(
        "min-h-screen max-w-240 mb-8",
        "mt-20 mx-5 space-y-14",
        "md:mx-8",
        "lg:mt-28 lg:mx-auto"
      )}
    >
      <h1 className="animate-fade-in-left">Mes projets</h1>

      <div
        className={cn(
          "w-full",
          "flex flex-col items-center gap-14"
          // "md:grid md:grid-cols-8 md:gap-4 md:space-y-0",
          // "lg:grid-cols-12 lg:gap-5"
        )}
      >
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </main>
  );
};

export default Projects;
