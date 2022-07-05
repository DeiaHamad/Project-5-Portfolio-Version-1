import React from "react";
import LeftHome from "./leftHome/LeftHome";
import RightHome from "./rightHome/RightHome";

function Home() {
  return (
    <section className="home" aria-label="home">
      <LeftHome />
      <RightHome />
    </section>
  );
}

export default Home;
