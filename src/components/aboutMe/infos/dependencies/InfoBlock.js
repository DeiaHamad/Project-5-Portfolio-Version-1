import React from "react";
import PropTypes from "prop-types";

function InfoBlock({ icon, header, text, num }) {
  return (
    <article className="info-block">
      <div className="icon">{icon}</div>
      <div className="details">
        <h4>{header}</h4>
        <p>{text ? text : num}</p>
      </div>
    </article>
  );
}

InfoBlock.propTypes = {
  icon: PropTypes.element.isRequired,
  header: PropTypes.string.isRequired,
  text: PropTypes.string,
  num: PropTypes.number,
};

export default InfoBlock;
