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

export default function Technologies() {
  return (
    <section
      id="techno"
      className="full-size flex flex-col flex-nowrap justify-start items-center bg-cyan-light-1 text-cyan-light-12"
    >
      <h2 className="mt-50 mb-30 md:my-100 md:mt-181 lg:mb-150">
        Technologies
      </h2>
      <div className="mx-50 md:mx-150 grid grid-cols-2 grid-rows-2 gap-x-40 gap-y-20 xl:grid-cols-4 ">
        <div>
          <h4 className="mb-10">Programmation</h4>
          <ul>
            <li className="techno-item favorite">
              <span className="inline-block mr-10">
                <SiJavascript size={20} />
              </span>
              JavaScript
            </li>
            <li className="techno-item favorite">
              <span className="inline-block mr-10">
                <SiTypescript size={20} />
              </span>
              TypeScript
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-10">Front-End</h4>
          <ul>
            <li className="techno-item">
              <span className="inline-block mr-10">
                <SiReact size={20} />
              </span>
              React
            </li>
            <li className="techno-item">
              <span className="inline-block mr-10">
                <SiVuedotjs size={20} />
              </span>
              Vue.js
            </li>
            <li className="techno-item">
              <span className="inline-block mr-10">
                <SiSass size={20} />
              </span>
              Sass
            </li>
            <li className="techno-item">
              <span className="inline-block mr-10">
                <SiBootstrap size={20} />
              </span>
              Bootstrap
            </li>
            <li className="techno-item favorite">
              <span className="inline-block mr-10">
                <SiTailwindcss size={20} />
              </span>
              Tailwind CSS
            </li>
            <li className="techno-item favorite">
              <span className="inline-block mr-10">
                <SiRedux size={20} />
              </span>
              Redux
            </li>
            <li className="techno-item favorite">
              <span className="inline-block mr-10">
                <SiVite size={20} />
              </span>
              Vite
            </li>
            <li className="techno-item">
              <span className="inline-block mr-10">
                <SiD3Dotjs size={20} />
              </span>
              D3.js
            </li>
            <li className="techno-item">
              <span className="inline-block mr-10">
                <SiJest size={20} />
              </span>
              Jest
            </li>
            <li className="techno-item favorite">
              <span className="inline-block mr-10">
                <SiVitest size={20} />
              </span>
              Vitest
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-10">Back-End</h4>
          <ul>
            <li className="techno-item">
              <span className="inline-block mr-10">
                <SiNodedotjs size={20} />
              </span>
              Node.js
            </li>
            <li className="techno-item">
              <span className="inline-block mr-10">
                <SiExpress size={20} />
              </span>
              Express
            </li>
            <li className="techno-item">
              <span className="inline-block mr-10">
                <SiSequelize size={20} />
              </span>
              Sequelize
            </li>
            <li className="techno-item">
              <span className="inline-block mr-10">
                <SiPrisma size={20} />
              </span>
              Prisma
            </li>
            <li className="techno-item">
              <span className="inline-block mr-10">
                <SiMongodb size={20} />
              </span>
              MongoDB
            </li>
            <li className="techno-item">
              <span className="inline-block mr-10">
                <SiMysql size={20} />
              </span>
              MySQL
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-10">Autres</h4>
          <ul>
            <li className="techno-item favorite">
              <span className="inline-block mr-10">
                <SiGithub size={20} />
              </span>
              GitHub
            </li>
            <li className="techno-item favorite">
              <span className="inline-block mr-10">
                <SiFigma size={20} />
              </span>
              Figma
            </li>
            <li className="techno-item favorite">
              <span className="inline-block mr-10">
                <SiNetlify size={20} />
              </span>
              Netlify
            </li>
            <li className="techno-item">
              <span className="inline-block mr-10">
                <SiPostman size={20} />
              </span>
              Postman
            </li>
            <li className="techno-item favorite">
              <span className="inline-block mr-10">
                <SiAdobeillustrator size={20} />
              </span>
              Illustrator
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
