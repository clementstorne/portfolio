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

const Skills = () => {
  return (
    <main
      className={cn(
        "min-h-screen max-w-240 mb-8",
        "mt-20 mx-5 space-y-14",
        "md:mx-8",
        "lg:mt-28 lg:mx-auto"
      )}
    >
      <h1 className="fade-in-left">Mes compétences</h1>

      <div
        className={cn(
          "w-full",
          "flex flex-col items-center gap-14",
          "md:grid md:grid-cols-8 md:gap-4 md:space-y-0",
          "lg:grid-cols-12 lg:gap-5"
        )}
      >
        <div
          className={cn(
            "space-y-14",
            "md:col-span-5 md:space-y-8",
            "lg:col-span-7"
          )}
        >
          <section className="space-y-4 fade-in-left delay-500">
            <h2>Front-End</h2>
            <p>
              Ces technologies englobent les langages de programmation et les
              frameworks utilisés pour développer l&apos;interface utilisateur,
              ainsi que les outils de styling pour la conception et la mise en
              forme des éléments visuels.
            </p>
            <div className="flex gap-x-4 gap-y-2 flex-wrap">
              <SiJavascript size={40} />
              <SiTypescript size={40} />
              <SiReact size={40} />
              <SiVuedotjs size={40} />
              <SiSass size={40} />
              <SiBootstrap size={40} />
              <SiTailwindcss size={40} />
            </div>
          </section>

          <section className="space-y-4 fade-in-left delay-900">
            <h2>Back-End</h2>
            <p>
              Ces outils et frameworks sont employés pour le développement du
              back-end des applications web, la gestion des bases de données et
              la création d&apos;API.
            </p>
            <div className="flex gap-x-4 gap-y-2 flex-wrap">
              <SiNodedotjs size={40} />
              <SiExpress size={40} />
              <SiPrisma size={40} />
              <SiMongodb size={40} />
              <SiMysql size={40} />
            </div>
          </section>
        </div>
        <div
          className={cn(
            "fade-in-right delay-1300",
            "md:col-span-3",
            "lg:col-span-5"
          )}
        >
          <Image
            src="/competences-1.png"
            alt="Développement d'un site internet sur ordinateur, tablette et smartphone"
            width={489}
            height={525}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div
        className={cn(
          "w-full",
          "flex flex-col-reverse items-center gap-14",
          "md:grid md:grid-cols-8 md:gap-4 md:space-y-0",
          "lg:grid-cols-12 lg:gap-5"
        )}
      >
        <div
          className={cn(
            "fade-in-right delay-2500",
            "md:fade-in-left md:delay-2500 md:col-span-3",
            "lg:col-span-5"
          )}
        >
          <Image
            src="/competences-2.png"
            alt="Tests unitaires de code"
            width={536}
            height={490}
            className="w-full h-auto"
          />
        </div>
        <div
          className={cn(
            "space-y-14",
            "md:col-span-5 md:space-y-8",
            "lg:col-span-7"
          )}
        >
          <section
            className={cn(
              "space-y-4",
              "fade-in-left delay-1700",
              "md:fade-in-right md:delay-1700"
            )}
          >
            <h2>Développement & Test</h2>
            <p>
              Dans cette catégorie, vous trouverez les outils utilisés pour
              développer et tester des applications web, incluant les frameworks
              de test et les outils de développement rapide.
            </p>
            <div className="flex gap-x-4 gap-y-2 flex-wrap">
              <SiJest size={40} />
              <SiVitest size={40} />
              <SiVite size={40} />
              <SiNextdotjs size={40} />
            </div>
          </section>

          <section
            className={cn(
              "space-y-4",
              "fade-in-left delay-2100",
              "md:fade-in-right md:delay-2100"
            )}
          >
            <h2>Collaboration & Design</h2>
            <p>
              Ces outils jouent un rôle essentiel dans la collaboration en
              développement logiciel, de la gestion de version à la conception
              et au prototypage des interfaces utilisateur.
            </p>
            <div className="flex gap-x-4 gap-y-2 flex-wrap">
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

export default Skills;
