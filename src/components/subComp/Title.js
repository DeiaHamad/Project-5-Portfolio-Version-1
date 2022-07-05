import React from "react";
import PropTypes from "prop-types";

function Title({ mainTitle, spanText, subTitle }) {
  return (
    <header className="section-title">
      <div className="text-container">
        <h2>
          {`${mainTitle} `} <span>{spanText}</span>
        </h2>
        <h3>{subTitle}</h3>
      </div>
    </header>
  );
}

Title.propTypes = {
  mainTitle: PropTypes.string.isRequired,
  spanText: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default Title;
