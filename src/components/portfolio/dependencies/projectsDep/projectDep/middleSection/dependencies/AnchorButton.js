import React from "react";
import PropTypes from "prop-types";

function AnchorButton({ link, icon }) {
  return (
    <button>
      <a href={link} target="_blank" rel="noreferrer noopener">
        {icon}
      </a>
    </button>
  );
}

AnchorButton.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default AnchorButton;
