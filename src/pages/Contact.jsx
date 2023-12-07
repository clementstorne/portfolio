import ContactForm from "../components/ContactForm";

import useTheme from "../hooks/useTheme";

export default function Contact() {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="contact"
      className={`text-cyan-light-12 ${isDarkMode ? "dark" : ""}`}
    >
      <h2>Contact</h2>
      <div className="mx-50 sm:mx-150 lg:mx-100 xl:mx-150 mb-50 md:mb-150">
        <ContactForm />
      </div>
    </section>
  );
}
