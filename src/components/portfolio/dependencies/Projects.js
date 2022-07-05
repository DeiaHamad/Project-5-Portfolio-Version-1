import React from "react";
import Project from "./projectsDep/Project";
import myData from "../../../data/myData";

function Projects() {
  function hanldeTechTable(technology) {
    let sum = 0;
    let percentageList = [];

    for (let i = 0; i < technology.length; i++) {
      sum += technology[i].codeLines;
    }

    for (let i = 0; i < technology.length; i++) {
      const percentage =
        Math.round(((technology[i].codeLines * 100) / sum) * 10) / 10;
      percentageList.push(percentage);
    }

    const technologyTable = technology.map((tech, index) => {
      const { lang, icon, codeLines } = tech;
      return (
        <tr key={lang}>
          <th>
            <div className="icon-lang">
              <div className="project-icon">{icon}</div>
              <div className="project-lang">{lang}</div>
            </div>
          </th>
          <td>{codeLines}</td>
          <td>{`${percentageList[index]} %`}</td>
        </tr>
      );
    });

    return [technologyTable, sum];
  }

  const { projects } = myData;

  const projectsList = projects.array.map((project) => {
    const {
      id,
      title,
      liveDeom,
      github,
      technology,
      startingDate,
      finishingDate,
      duration,
    } = project;

    const [projectTechnology, sum] = hanldeTechTable(technology);

    return (
      <Project
        key={id}
        id={id}
        title={title}
        liveDeom={liveDeom}
        github={github}
        projectTechnology={projectTechnology}
        sum={sum}
        startingDate={startingDate}
        finishingDate={finishingDate}
        duration={duration}
      />
    );
  });

  return (
    <div className="projects" data-testid="projects">
      {projectsList}
    </div>
  );
}

export default Projects;
