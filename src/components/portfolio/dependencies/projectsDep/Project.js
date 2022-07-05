import React, { createContext } from "react";
import PropTypes from "prop-types";
import TopSection from "./projectDep/topSection/TopSection";
import MiddleSection from "./projectDep/middleSection/MiddleSection";
import BottomSection from "./projectDep/bottomSection/BottomSection";

export const ProjectContext = createContext(null);

function Project({
  id,
  title,
  liveDeom,
  github,
  projectTechnology,
  sum,
  startingDate,
  finishingDate,
  duration,
}) {
  const values = {
    id,
    title,
    liveDeom,
    github,
    projectTechnology,
    sum,
    startingDate,
    finishingDate,
    duration,
  };

  return (
    <ProjectContext.Provider value={values}>
      <article className="project">
        <TopSection />
        <MiddleSection />
        <BottomSection />
      </article>
    </ProjectContext.Provider>
  );
}

Project.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  liveDeom: PropTypes.string,
  github: PropTypes.string.isRequired,
  projectTechnology: PropTypes.arrayOf(PropTypes.object).isRequired,
  sum: PropTypes.number.isRequired,
  startingDate: PropTypes.string.isRequired,
  finishingDate: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
};

export default Project;
