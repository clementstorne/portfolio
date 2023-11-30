import PropTypes from "prop-types";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiSass,
  SiBootstrap,
  SiTailwindcss,
  SiRedux,
  SiVite,
  SiD3Dotjs,
  SiJest,
  SiVitest,
  SiNodedotjs,
  SiExpress,
  SiSequelize,
  SiPrisma,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiFigma,
  SiNetlify,
  SiPostman,
  SiAdobeillustrator,
} from "react-icons/si";

export default function TechnoItem(props) {
  let icon;
  let name;
  switch (props.techno) {
    case "JS":
      icon = <SiJavascript size={20} />;
      name = "JavaScript";
      break;
    case "TS":
      icon = <SiTypescript size={20} />;
      name = "TypeScript";
      break;
    case "react":
      icon = <SiReact size={20} />;
      name = "React";
      break;
    case "vue":
      icon = <SiVuedotjs size={20} />;
      name = "Vue.js";
      break;
    case "sass":
      icon = <SiSass size={20} />;
      name = "Sass";
      break;
    case "bootstrap":
      icon = <SiBootstrap size={20} />;
      name = "Bootstrap";
      break;
    case "tailwind":
      icon = <SiTailwindcss size={20} />;
      name = "Tailwind CSS";
      break;
    case "redux":
      icon = <SiRedux size={20} />;
      name = "Redux";
      break;
    case "vite":
      icon = <SiVite size={20} />;
      name = "Vite";
      break;
    case "d3js":
      icon = <SiD3Dotjs size={20} />;
      name = "D3.js";
      break;
    case "jest":
      icon = <SiJest size={20} />;
      name = "Jest";
      break;
    case "vitest":
      icon = <SiVitest size={20} />;
      name = "Vitest";
      break;
    case "node":
      icon = <SiNodedotjs size={20} />;
      name = "Node.js";
      break;
    case "express":
      icon = <SiExpress size={20} />;
      name = "Express";
      break;
    case "sequelize":
      icon = <SiSequelize size={20} />;
      name = "Sequelize";
      break;
    case "prisma":
      icon = <SiPrisma size={20} />;
      name = "Prisma";
      break;
    case "mongo":
      icon = <SiMongodb size={20} />;
      name = "MongoDB";
      break;
    case "mysql":
      icon = <SiMysql size={20} />;
      name = "MySQL";
      break;
    case "github":
      icon = <SiGithub size={20} />;
      name = "GitHub";
      break;
    case "figma":
      icon = <SiFigma size={20} />;
      name = "Figma";
      break;
    case "netlify":
      icon = <SiNetlify size={20} />;
      name = "Netlify";
      break;
    case "postman":
      icon = <SiPostman size={20} />;
      name = "Postman";
      break;
    case "illustrator":
      icon = <SiAdobeillustrator size={20} />;
      name = "Illustrator";
      break;
  }

  return (
    <li className={`techno-item ${props.favorite ? "favorite" : ""}`}>
      <span className="inline-block mr-10">{icon}</span>
      {name}
    </li>
  );
}

TechnoItem.propTypes = {
  techno: PropTypes.string.isRequired,
  favorite: PropTypes.bool,
};
