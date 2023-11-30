import PropTypes from "prop-types";

import { getTechnoIcon, getTechnoName } from "../utils/technoUtils";

export default function TechnoTag(props) {
  const icon = getTechnoIcon(props.techno, 16);
  const name = getTechnoName(props.techno);

  return (
    <div className="techno-tag">
      <span className="inline-block mr-8">{icon}</span>
      {name}
    </div>
  );
}

TechnoTag.propTypes = {
  techno: PropTypes.string.isRequired,
  favorite: PropTypes.bool,
};
