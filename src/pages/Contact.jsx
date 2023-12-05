import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="text-cyan-light-12">
      <h2>Contact</h2>
      <div className="mx-50 sm:mx-150 lg:mx-100 xl:mx-150 mb-50 md:mb-150">
        <ContactForm />
      </div>
    </section>
  );
}
