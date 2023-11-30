import LinkButton from "../components/LinkButton";

export default function Projects() {
  return (
    <section id="projects" className="text-cyan-light-12">
      <h2 className="mt-50 mb-30 md:my-100 md:mt-181 lg:mb-150">Projets</h2>
      <LinkButton
        label="Voir le code"
        link="https://github.com/clementstorne/run-master"
        icon="github"
      />
    </section>
  );
}
