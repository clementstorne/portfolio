import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  SiAdobeillustrator,
  SiBootstrap,
  SiExpress,
  SiFigma,
  SiGithub,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVitest,
  SiVuedotjs,
} from "react-icons/si";

const About = () => {
  return (
    <main
      className={cn(
        "min-h-screen mx-auto max-w-285",
        "mt-22 mb-8 space-y-4",
        "md:mt-28"
      )}
    >
      <h1 className="animate-fade-in-left">Mes compétences</h1>

      <div
        className={cn("w-full mt-4", "grid grid-cols-12 gap-5 items-center")}
      >
        <div className="col-span-7 space-y-8">
          <section className="space-y-4 animate-fade-in-left delay-500">
            <h2>Front-End</h2>
            <p>
              Ces technologies englobent les langages de programmation et les
              frameworks utilisés pour développer l&apos;interface utilisateur,
              ainsi que les outils de styling pour la conception et la mise en
              forme des éléments visuels.
            </p>
            <div className="flex space-x-4">
              <SiJavascript size={40} />
              <SiTypescript size={40} />
              <SiReact size={40} />
              <SiVuedotjs size={40} />
              <SiSass size={40} />
              <SiBootstrap size={40} />
              <SiTailwindcss size={40} />
            </div>
          </section>

          <section className="space-y-4 animate-fade-in-left delay-900">
            <h2>Back-End</h2>
            <p>
              Ces outils et frameworks sont employés pour le développement du
              back-end des applications web, la gestion des bases de données et
              la création d&apos;API.
            </p>
            <div className="flex space-x-4">
              <SiNodedotjs size={40} />
              <SiExpress size={40} />
              <SiPrisma size={40} />
              <SiMongodb size={40} />
              <SiMysql size={40} />
            </div>
          </section>
        </div>
        <div className="col-span-5 animate-fade-in-right delay-1300">
          <Image
            src="/competences-1.png"
            alt="Clément Storne"
            width={489}
            height={525}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div
        className={cn("w-full mt-4", "grid grid-cols-12 gap-5 items-center")}
      >
        <div className="col-span-5 animate-fade-in-left delay-2500">
          <Image
            src="/competences-2.png"
            alt="Travail d'équipe"
            width={536}
            height={490}
            className="w-full h-auto"
          />
        </div>
        <div className="col-span-7 space-y-8">
          <section className="space-y-4 animate-fade-in-right delay-1700">
            <h2>Développement & Test</h2>
            <p>
              Dans cette catégorie, vous trouverez les outils utilisés pour
              développer et tester des applications web, incluant les frameworks
              de test et les outils de développement rapide.
            </p>
            <div className="flex space-x-4">
              <SiJest size={40} />
              <SiVitest size={40} />
              <SiVite size={40} />
              <SiNextdotjs size={40} />
            </div>
          </section>

          <section className="space-y-4 animate-fade-in-right delay-2100">
            <h2>Collaboration & Design</h2>
            <p>
              Ces outils jouent un rôle essentiel dans la collaboration en
              développement logiciel, de la gestion de version à la conception
              et au prototypage des interfaces utilisateur.
            </p>
            <div className="flex space-x-4">
              <SiGithub size={40} />
              <SiFigma size={40} />
              <SiAdobeillustrator size={40} />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default About;
