import { FaDesktop, FaFile } from "react-icons/fa";
import {
  SiAdobeillustrator,
  SiBootstrap,
  SiD3Dotjs,
  SiExpress,
  SiFigma,
  SiGithub,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNodedotjs,
  SiPostman,
  SiPrisma,
  SiReact,
  SiRedux,
  SiSass,
  SiSequelize,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVitest,
  SiVuedotjs,
} from "react-icons/si";

const getTechnoIcon = (techno, iconSize) => {
  switch (techno) {
    case "JS":
      return <SiJavascript size={iconSize} />;
    case "TS":
      return <SiTypescript size={iconSize} />;
    case "react":
      return <SiReact size={iconSize} />;
    case "vue":
      return <SiVuedotjs size={iconSize} />;
    case "sass":
      return <SiSass size={iconSize} />;
    case "bootstrap":
      return <SiBootstrap size={iconSize} />;
    case "tailwind":
      return <SiTailwindcss size={iconSize} />;
    case "redux":
      return <SiRedux size={iconSize} />;
    case "vite":
      return <SiVite size={iconSize} />;
    case "d3js":
      return <SiD3Dotjs size={iconSize} />;
    case "jest":
      return <SiJest size={iconSize} />;
    case "vitest":
      return <SiVitest size={iconSize} />;
    case "node":
      return <SiNodedotjs size={iconSize} />;
    case "express":
      return <SiExpress size={iconSize} />;
    case "sequelize":
      return <SiSequelize size={iconSize} />;
    case "prisma":
      return <SiPrisma size={iconSize} />;
    case "mongo":
      return <SiMongodb size={iconSize} />;
    case "mysql":
      return <SiMysql size={iconSize} />;
    case "github":
      return <SiGithub size={iconSize} />;
    case "figma":
      return <SiFigma size={iconSize} />;
    case "netlify":
      return <SiNetlify size={iconSize} />;
    case "postman":
      return <SiPostman size={iconSize} />;
    case "illustrator":
      return <SiAdobeillustrator size={iconSize} />;
    case "file":
      return <FaFile size={iconSize} />;
    default:
      return <FaDesktop size={iconSize} />;
  }
};

const getTechnoName = (techno) => {
  switch (techno) {
    case "JS":
      return "JavaScript";
    case "TS":
      return "TypeScript";
    case "react":
      return "React";
    case "vue":
      return "Vue.js";
    case "sass":
      return "Sass";
    case "bootstrap":
      return "Bootstrap";
    case "tailwind":
      return "Tailwind CSS";
    case "redux":
      return "Redux";
    case "vite":
      return "Vite";
    case "d3js":
      return "D3.js";
    case "jest":
      return "Jest";
    case "vitest":
      return "Vitest";
    case "node":
      return "Node.js";
    case "express":
      return "Express";
    case "sequelize":
      return "Sequelize";
    case "prisma":
      return "Prisma";
    case "mongo":
      return "MongoDB";
    case "mysql":
      return "MySQL";
    case "github":
      return "GitHub";
    case "figma":
      return "Figma";
    case "netlify":
      return "Netlify";
    case "postman":
      return "Postman";
    case "illustrator":
      return "Illustrator";
  }
};

export { getTechnoIcon, getTechnoName };
