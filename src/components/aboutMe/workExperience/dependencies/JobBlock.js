import React from "react";
import PropTypes from "prop-types";
import { BsBriefcaseFill } from "react-icons/bs";

function JobBlock({
  jobTitle,
  company,
  startDate,
  endDate,
  description,
  country,
}) {
  return (
    <article className="job-block">
      <div className="icon">
        <BsBriefcaseFill className="work-icon" data-testid="job-icon" />
      </div>
      <div className="info-header">
        <div className="working-period">{`${startDate} - ${endDate}`}</div>
        <div className="country">
          <div className="country-name">{country}</div>
          <div className="country-image">
            <img
              src={
                country === "UAE"
                  ? process.env.PUBLIC_URL + "/assets/country/uae.png"
                  : process.env.PUBLIC_URL + "/assets/country/egypt.png"
              }
              alt={`${country} Flag`}
            />
          </div>
        </div>
      </div>
      <div className="job-details">
        <span className="title">{jobTitle}</span> - {company}
      </div>
      <div className="job-description">{description}</div>
    </article>
  );
}

JobBlock.propTypes = {
  jobTitle: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default JobBlock;
