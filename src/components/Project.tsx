import { cn } from "@/lib/utils";
import { ProjectData } from "@/types";
import { buttonVariants } from "@components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  SiBootstrap,
  SiExpress,
  SiFigma,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVitest,
  SiVuedotjs,
} from "react-icons/si";

type ProjectProps = ProjectData;

const Project = ({
  title,
  image,
  technologies,
  introduction,
  mission,
  url,
  code,
}: ProjectProps) => {
  const getIcon = (technology: string, iconSize?: number) => {
    switch (technology) {
      case "bootstrap":
        return <SiBootstrap size={iconSize} />;
      case "express":
        return <SiExpress size={iconSize} />;
      case "figma":
        return <SiFigma size={iconSize} />;
      case "javascript":
        return <SiJavascript size={iconSize} />;
      case "jest":
        return <SiJest size={iconSize} />;
      case "mongodb":
        return <SiMongodb size={iconSize} />;
      case "mysql":
        return <SiMysql size={iconSize} />;
      case "next":
        return <SiNextdotjs size={iconSize} />;
      case "node":
        return <SiNodedotjs size={iconSize} />;
      case "prisma":
        return <SiPrisma size={iconSize} />;
      case "react":
        return <SiReact size={iconSize} />;
      case "redux":
        return <SiRedux size={iconSize} />;
      case "sass":
        return <SiSass size={iconSize} />;
      case "tailwind":
        return <SiTailwindcss size={iconSize} />;
      case "typescript":
        return <SiTypescript size={iconSize} />;
      case "vite":
        return <SiVite size={iconSize} />;
      case "vitest":
        return <SiVitest size={iconSize} />;
      case "vue":
        return <SiVuedotjs size={iconSize} />;
    }
  };

  return (
    <div
      className={cn("grid grid-cols-1 gap-5 items-center", "md:grid-cols-2")}
    >
      <Image
        src={image}
        alt={title}
        width={600}
        height={600}
        className="w-full h-auto"
      />
      <div className="space-y-4">
        <h2>{title}</h2>
        <p className="text-xs font-semibold">{introduction}</p>
        <div className="flex flex-wrap gap-4">
          {technologies.map((technology, index) => (
            <span key={index}>{getIcon(technology, 40)}</span>
          ))}
        </div>
        <p>{mission}</p>
        <div className="w-full flex flex-col !mt-8 space-y-4">
          {url ? (
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "default", size: "lg" })}
            >
              Voir le projet
            </Link>
          ) : null}
          <Link
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "default", size: "lg" })}
          >
            Voir le code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
