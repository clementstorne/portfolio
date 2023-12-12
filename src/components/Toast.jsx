import { useEffect } from "react";
import PropTypes from "prop-types";

import { BsXLg } from "react-icons/bs";

export default function Toast(props) {
  function closeOnEscapeKeyDown(e) {
    if ((e.charCode || e.keyCode) === 27) {
      props.close();
    }
  }

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return (
    <div className="toast">
      <span className="toast-close-button" onClick={props.close}>
        <BsXLg />
      </span>
      <p>{props.message}</p>
    </div>
  );
}

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  close: PropTypes.func,
};
