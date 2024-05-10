import { cn } from "@/lib/utils";
import Image from "next/image";

const About = () => {
  return (
    <main
      className={cn(
        "min-h-screen max-w-240 mb-8",
        "mt-20 mx-5 space-y-14",
        "md:mx-8",
        "lg:mt-28 lg:mx-auto"
      )}
    >
      <h1 className="animate-fade-in-left">Qui suis-je ?</h1>

      <section
        className={cn(
          "w-full",
          "flex flex-col items-center space-y-14",
          "md:grid md:grid-cols-8 md:gap-4 md:space-y-0",
          "lg:grid-cols-12 lg:gap-5"
        )}
      >
        <div
          className={cn(
            "animate-fade-in-left delay-500 space-y-4",
            "md:col-span-6",
            "lg:col-span-9"
          )}
        >
          <h2>À propos de moi</h2>
          <p>
            Je suis Clément STORNE, un développeur front-end passionné par
            l&apos;art de créer des expériences web engageantes et
            fonctionnelles. Mon parcours dans le monde du développement web a
            été façonné par une diversité d&apos;expériences, notamment mon
            temps en tant que professeur de mathématiques. Cette expérience
            m&apos;a inculqué des valeurs telles que la rigueur, la logique et
            la méthodologie, des compétences qui imprègnent désormais chaque
            ligne de code que j&apos;écris.
          </p>
        </div>
        <div
          className={cn(
            "animate-fade-in-right delay-800",
            "w-full",
            "md:col-span-2",
            "lg:col-span-3"
          )}
        >
          <Image
            src="/clement-storne.png"
            alt="Clément Storne"
            width={281}
            height={268}
            className="w-full h-auto"
          />
        </div>
      </section>

      <section
        className={cn("w-full animate-fade-in-left delay-1200 space-y-4")}
      >
        <h2>Compétences et expériences</h2>
        <p>
          Mon domaine d&apos;application en tant que freelance couvre divers
          aspects du développement front-end, allant de l&apos;intégration de
          maquettes à l&apos;optimisation des performances et au refactoring de
          code. L&apos;un des aspects les plus gratifiants de mon travail est de
          voir comment mes compétences techniques peuvent transformer une idée
          en réalité. Chaque projet sur lequel j&apos;ai travaillé a été une
          opportunité pour moi d&apos;approfondir mes compétences et
          d&apos;apporter des solutions sur mesure à mes clients.
        </p>
      </section>

      <section
        className={cn(
          "w-full",
          "flex flex-col items-center space-y-14",
          "md:grid md:grid-cols-8 md:gap-4 md:space-y-0",
          "lg:grid-cols-12 lg:gap-5"
        )}
      >
        <div
          className={cn(
            "w-full",
            "animate-fade-in-right delay-1600",
            "md:col-span-3 md:animate-fade-in-left md:delay-1900",
            "lg:col-span-5"
          )}
        >
          <Image
            src="/teamwork.png"
            alt="Travail d'équipe"
            width={498}
            height={414}
            className="w-full h-auto"
          />
        </div>
        <div
          className={cn(
            "space-y-4",
            "animate-fade-in-left delay-1900",
            "md:col-span-5 md:animate-fade-in-right md:delay-1600",
            "lg:col-span-7"
          )}
        >
          <h2>Valeurs et engagement</h2>
          <p>
            Je suis guidé par la rigueur dans mon travail, en m&apos;efforçant
            de produire un code propre et une architecture solide. De plus, je
            m&apos;engage à rendre mes interfaces web accessibles à tous,
            suivant ainsi les meilleures pratiques en matière
            d&apos;accessibilité web. Convaincu que le travail d&apos;équipe est
            essentiel pour atteindre l&apos;excellence, je valorise la
            collaboration et l&apos;échange de connaissances. Je crois fermement
            que chaque membre d&apos;une équipe a quelque chose à apporter et
            que le partage des idées conduit à des résultats exceptionnels.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
