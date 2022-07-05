import React from "react";
import PropTypes from "prop-types";

function ContactBlock({ icon, title, text }) {
  return (
    <article className="contact-block">
      <div className="contact-details">
        <div className="icon">{icon}</div>
        <p>{title}</p>
      </div>
      <p>{text}</p>
    </article>
  );
}

ContactBlock.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ContactBlock;
