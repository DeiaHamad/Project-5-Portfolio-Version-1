import React, { useContext } from "react";
import { ProjectContext } from "../../Project";
import AnchorButton from "./dependencies/AnchorButton";
import { MdLiveTv } from "react-icons/md";
import { FaDownload } from "react-icons/fa";

function MiddleSection() {
  const { title, liveDeom, github, projectTechnology, sum } =
    useContext(ProjectContext);

  return (
    <div className="middle-section" data-testid="middle-section">
      <div className="project-details">
        <div className="title">
          <h3>{title}</h3>
        </div>
        <div className="btns">
          {liveDeom && (
            <AnchorButton
              link={liveDeom}
              icon={<MdLiveTv className="btn-icon" />}
            />
          )}
          <AnchorButton
            link={github}
            icon={<FaDownload className="btn-icon" />}
          />
        </div>
      </div>

      <table className="technology-table">
        <tbody>{projectTechnology}</tbody>
        <tfoot>
          <tr>
            <th>TOTAL</th>
            <td colSpan="2">{`${sum} Lines`}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default MiddleSection;
