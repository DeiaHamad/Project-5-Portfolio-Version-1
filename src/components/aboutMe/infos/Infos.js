import React from "react";
import InfoBlock from "./dependencies/InfoBlock";
import myData from "../../../data/myData";

function Infos() {
  const { exp, clients, projects } = myData;
  const expText = `${exp.num} ${exp.unit}`;
  const projectsNum = projects.array.length;

  return (
    <div className="infos" data-testid="infos">
      <div className="left-infos">
        <p>
          I started to learn coding in 2021 and found out it's my true passion,
          it's where I found myself the most.
        </p>
        <br />
        <p>
          I like to build websites I enjoy the challenges that come with it. My
          goals are to focus on typography, content ,and conveying the message
          that you want to send.
        </p>
      </div>
      <div className="right-infos">
        <InfoBlock icon={exp.icon} header="Experience" text={expText} />
        <InfoBlock icon={clients.icon} header="Clients" num={clients.num} />
        <InfoBlock icon={projects.icon} header="Projects" num={projectsNum} />
      </div>
    </div>
  );
}

export default Infos;
