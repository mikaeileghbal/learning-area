import React from "react";
import PropTypes from "prop-types";

export default function CallbackButton({ text, onClick, theme, disabled }) {
  return (
    <button
      className={`btn btn-${theme} btn-sm m-1`}
      onClick={onClick}
      disabled={disabled === "true" || disabled === true}
    >
      {text}
    </button>
  );
}

CallbackButton.defaultProps = {
  text: "Default text",
  theme: "warning",
};

CallbackButton.propTypes = {
  text: PropTypes.string,
  theme: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};
