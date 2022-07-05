import React from "react";
import Footer from "../../footer/Footer";

function LeftHome() {
  return (
    <article className="left-home" aria-label="left-home">
      <div className="shape"></div>
      <div className="img-container">
        <img
          src={process.env.PUBLIC_URL + "/assets/deia/deia.png"}
          alt="Deia"
        />
      </div>
      <Footer />
    </article>
  );
}

export default LeftHome;
