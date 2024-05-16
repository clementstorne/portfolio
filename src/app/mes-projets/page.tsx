import ProjectsCarousel from "@/components/ProjectsCarousel";
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
      <h1 className="fade-in-left">Mes projets</h1>

      <div className={cn("w-full")}>
        <ProjectsCarousel />
      </div>
    </main>
  );
};

export default Projects;
