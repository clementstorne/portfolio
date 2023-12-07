import TechnoItem from "../components/TechnoItem";

import useTheme from "../hooks/useTheme";

export default function Technologies() {
  const { isDarkMode } = useTheme();

  const progTechnos = [
    { name: "JS", fav: true },
    { name: "TS", fav: true },
  ];
  const frontTechnos = [
    { name: "react", fav: true },
    { name: "vue", fav: false },
    { name: "sass", fav: false },
    { name: "bootstrap", fav: false },
    { name: "tailwind", fav: true },
    { name: "redux", fav: true },
    { name: "vite", fav: true },
    { name: "d3js", fav: false },
    { name: "jest", fav: false },
    { name: "vitest", fav: true },
  ];
  const backTechnos = [
    { name: "node", fav: true },
    { name: "express", fav: true },
    { name: "sequelize", fav: false },
    { name: "prisma", fav: false },
    { name: "mongo", fav: false },
    { name: "mysql", fav: true },
  ];
  const otherTechnos = [
    { name: "github", fav: false },
    { name: "figma", fav: true },
    { name: "netlify", fav: false },
    { name: "postman", fav: false },
    { name: "illustrator", fav: true },
  ];
  return (
    <section
      id="techno"
      className={`text-cyan-light-12 ${isDarkMode ? "dark" : ""}`}
    >
      <h2>Technologies</h2>
      <div className="mx-50 md:mx-150 grid grid-cols-2 grid-rows-2 gap-x-40 gap-y-20 xl:grid-cols-4 ">
        <div>
          <h3 className="mb-10">Programmation</h3>
          <ul>
            {progTechnos.map((techno) => (
              <TechnoItem
                key={techno.name}
                techno={techno.name}
                favorite={techno.fav}
              />
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-10">Front-End</h3>
          <ul>
            {frontTechnos.map((techno) => (
              <TechnoItem
                key={techno.name}
                techno={techno.name}
                favorite={techno.fav}
              />
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-10">Back-End</h3>
          <ul>
            {backTechnos.map((techno) => (
              <TechnoItem
                key={techno.name}
                techno={techno.name}
                favorite={techno.fav}
              />
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-10">Autres</h3>
          <ul>
            {otherTechnos.map((techno) => (
              <TechnoItem
                key={techno.name}
                techno={techno.name}
                favorite={techno.fav}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
