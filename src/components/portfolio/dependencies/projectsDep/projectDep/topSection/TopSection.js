import React, { useContext } from "react";
import { ProjectContext } from "../../Project";

function TopSection() {
  const { id, title } = useContext(ProjectContext);

  return (
    <div className="top-section" data-testid="top-section">
      <img
        src={process.env.PUBLIC_URL + `/assets/projects/${id}.png`}
        alt={title}
      />
    </div>
  );
}

export default TopSection;
