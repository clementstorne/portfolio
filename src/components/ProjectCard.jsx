import PropTypes from "prop-types";

import TechnoTag from "./TechnoTag";
import LinkButton from "./LinkButton";

export default function ProjectCard(props) {
  return (
    <div className="project-card">
      <h4 className="mb-30">{props.title}</h4>
      <p className="min-h-120 mb-30">{props.description}</p>
      <div className="mb-30 flex flex-row flex-wrap justify-center items-center">
        {props.tags.map((tag) => (
          <TechnoTag key={tag} techno={tag} />
        ))}
      </div>
      <div>
        <LinkButton label="Voir le code" link={props.code} icon="github" />
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  code: PropTypes.string.isRequired,
  demo: PropTypes.string,
};
