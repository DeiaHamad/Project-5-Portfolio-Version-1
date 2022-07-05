import React from "react";
import ContactBlock from "./dependencies/ContactBlock";
import AnchorButton from "./dependencies/AnchorButton";
import myData from "../../../data/myData";

function LeftContact() {
  const { contacts } = myData;

  const contactList = contacts.details.map((contact) => {
    const { id, icon, title, text } = contact;
    return <ContactBlock key={id} icon={icon} title={title} text={text} />;
  });

  const socialMedia = contacts.socialMedia.map((media) => {
    const { id, link, icon } = media;
    return <AnchorButton key={id} link={link} icon={icon} />;
  });

  return (
    <div className="left-contact" data-testid="left-contact">
      <div className="contact-list">{contactList}</div>
      <div className="btns-container">{socialMedia}</div>
    </div>
  );
}

export default LeftContact;
