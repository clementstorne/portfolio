import PropTypes from "prop-types";

import { getTechnoIcon } from "../utils/technoUtils";

export default function LinkButton(props) {
  let icon = null;
  if (props.icon) {
    icon = getTechnoIcon(props.icon, 20);
  }
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className="link-button"
    >
      {props.icon && <span className="inline-block mr-8">{icon}</span>}
      {props.label}
    </a>
  );
}

LinkButton.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.string,
};
