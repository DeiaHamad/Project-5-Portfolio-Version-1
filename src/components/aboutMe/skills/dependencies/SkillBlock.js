import React from "react";
import PropTypes from "prop-types";

function SkillBlock({ name, lvl, percentage, icon }) {
  const percentageDivStyle = {
    width: `${percentage}%`,
    height: "5px",
  };

  return (
    <article className="skill-block">
      <div className="name-container">
        <div className="icon">{icon}</div>
        <h4>{name}</h4>
      </div>
      <div className="lvl-container">
        <p>{lvl}</p>
        <div className="percentage-container">
          <p>{`${percentage} %`}</p>
          <div className="percentage-div">
            <div className="percentage-bar" style={percentageDivStyle}></div>
          </div>
        </div>
      </div>
    </article>
  );
}

SkillBlock.propTypes = {
  name: PropTypes.string.isRequired,
  lvl: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  icon: PropTypes.element.isRequired,
};

export default SkillBlock;
