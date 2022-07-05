import React, { useContext } from "react";
import { ProjectContext } from "../../Project";

function BottomSection() {
  const { startingDate, finishingDate, duration } = useContext(ProjectContext);
  const unit = duration > 1 ? "Days" : "Day";

  return (
    <div className="bottom-section" data-testid="bottom-section">
      <div className="date-block">
        <p>Starting Date:</p>
        <p>{startingDate}</p>
      </div>
      <div className="date-block">
        <p>Finishing Date:</p>
        <p>{finishingDate}</p>
      </div>
      <div className="date-block">
        <p>Duration:</p>
        <p className="duration">{`${duration} ${unit}`}</p>
      </div>
    </div>
  );
}

export default BottomSection;
