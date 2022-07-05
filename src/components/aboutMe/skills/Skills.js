import React from "react";
import SkillBlock from "./dependencies/SkillBlock";
import myData from "../../../data/myData";

function Skills() {
  const { skills } = myData;
  const skillsList = skills.map((skill) => {
    const { name, lvl, percentage, icon } = skill;
    return (
      <SkillBlock
        key={name}
        name={name}
        lvl={lvl}
        percentage={percentage}
        icon={icon}
      />
    );
  });

  return (
    <div data-testid="skills">
      <div className="main-title">
        <h2>Skills</h2>
      </div>
      <div className="skills">{skillsList}</div>
    </div>
  );
}

export default Skills;
