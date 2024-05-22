import ContactForm from "@components/ContactForm";
import { cn } from "@lib/utils";
import Image from "next/image";

const Contact = () => {
  return (
    <main
      className={cn(
        "min-h-screen max-w-240 mb-8",
        "mt-20 mx-5 space-y-14",
        "md:mx-8",
        "lg:mt-28 lg:mx-auto"
      )}
    >
      <h1 className="fade-in-left">Me contacter</h1>

      <section
        className={cn(
          "flex flex-col items-center gap-14",
          "md:grid md:grid-cols-2 md:gap-5"
        )}
      >
        <div className="flex flex-col space-y-5">
          <p className="fade-in-left delay-500">
            Vous avez un projet web en tête ? Je serais ravi de collaborer avec
            vous pour le concrétiser.
            <br /> Remplissez le formulaire ci-dessous et discutons de vos idées
            !
          </p>
          <ContactForm />
        </div>
        <div
          className={cn(
            "flex items-center delay-900 fade-in-right",
            "w-full max-w-[383px]",
            "md:max-w-[465px]"
          )}
        >
          <Image
            src="/contact-developpeur-web-smartphone.webp"
            alt="Mains utilisant un smartphone à côté d'un ordinateur portable pour contacter un développeur web"
            width={631}
            height={583}
            className="w-full h-auto"
          />
        </div>
      </section>
    </main>
  );
};

export default Contact;
