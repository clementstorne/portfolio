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
        <ContactForm />
        <div
          className={cn(
            "flex items-center delay-900 fade-in-right",
            "w-full max-w-[383px]",
            "md:max-w-[465px]"
          )}
        >
          <Image
            src="/contact.png"
            alt="Personne en train de saisir du texte sur son smartphone"
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
