import React from "react";
import Title from "../subComp/Title";
import Projects from "./dependencies/Projects";

function Portfolio() {
  return (
    <section className="portfolio" aria-label="portfolio">
      <Title mainTitle="MY" spanText="PORTFOLIO" subTitle="MY PROJECTS" />
      <Projects />
    </section>
  );
}

export default Portfolio;
