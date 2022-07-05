import React from "react";
import Title from "../subComp/Title";
import Infos from "./infos/Infos";
import Skills from "./skills/Skills";
import WorkExperience from "./workExperience/WorkExperience";

function AboutMe() {
  return (
    <section className="about-me" aria-label="about-me">
      <Title mainTitle="ABOUT" spanText="ME" subTitle="MY STATS" />
      <Infos />
      <hr />
      <Skills />
      <hr />
      <WorkExperience />
    </section>
  );
}

export default AboutMe;
