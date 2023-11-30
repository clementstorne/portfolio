import PropTypes from "prop-types";

import { getTechnoIcon, getTechnoName } from "../utils/technoUtils";

export default function TechnoItem(props) {
  const icon = getTechnoIcon(props.techno, 20);
  const name = getTechnoName(props.techno);

  return (
    <li className={`techno-item ${props.favorite ? "favorite" : ""}`}>
      <span className="inline-block mr-10">{icon}</span>
      {name}
    </li>
  );
}

TechnoItem.propTypes = {
  techno: PropTypes.string.isRequired,
  favorite: PropTypes.bool,
};
