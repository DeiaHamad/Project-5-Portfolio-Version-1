import React from "react";
import Title from "../subComp/Title";
import LeftContact from "./leftContact/LeftContact";
import RightContact from "./rightContact/RightContact";

function ContactMe() {
  return (
    <section className="contact-me" aria-label="contact-me">
      <Title mainTitle="CONTACT" spanText="ME" subTitle="MY CONTACT" />
      <div className="contact-container">
        <LeftContact />
        <RightContact />
      </div>
    </section>
  );
}

export default ContactMe;
