import React from "react";
import myData from "../../../data/myData";
import JobBlock from "./dependencies/JobBlock";

function WorkExperience() {
  const { jobs } = myData;

  const jobsList = jobs.map((job) => {
    const { id, jobTitle, company, startDate, endDate, description, country } =
      job;
    return (
      <JobBlock
        key={id}
        jobTitle={jobTitle}
        company={company}
        startDate={startDate}
        endDate={endDate}
        description={description}
        country={country}
      />
    );
  });

  return (
    <div data-testid="work-experience">
      <div className="main-title">
        <h2>Work Experience</h2>
      </div>
      <div className="work-experience">{jobsList}</div>
    </div>
  );
}

export default WorkExperience;
