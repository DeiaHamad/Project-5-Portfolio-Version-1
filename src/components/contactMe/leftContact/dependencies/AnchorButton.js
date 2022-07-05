import React from "react";
import PropTypes from "prop-types";

function AnchorButton({ link, icon }) {
  return (
    <div className="btn-container">
      <button className="anchor-btn">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {icon}
        </a>
      </button>
    </div>
  );
}

AnchorButton.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default AnchorButton;
