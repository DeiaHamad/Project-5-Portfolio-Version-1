import React, { useContext, useRef } from "react";
import { ContactMeContext } from "../../../../App";
import emailjs from "emailjs-com";

function Form() {
  const { formInputs, setFormInputs } = useContext(ContactMeContext);
  const { nameValue, emailValue, subjectValue, messageValue } = formInputs;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_9erde3c",
      "template_scgnj68",
      form.current,
      "kYyrBu7_DWsFnU3V8"
    );
    handleInputsReset();
  };

  function handleInputsChange(e) {
    const { id, value } = e.target;
    setFormInputs((prevFormInputs) => {
      return {
        ...prevFormInputs,
        [id]: value,
      };
    });
  }

  function handleInputsReset() {
    setFormInputs({
      nameValue: "",
      emailValue: "",
      subjectValue: "",
      messageValue: "",
    });
  }

  return (
    <form onSubmit={sendEmail} ref={form} aria-label="form">
      <div className="person-details">
        <input
          type="text"
          id="nameValue"
          placeholder="Your Name"
          name="Name"
          required
          value={nameValue}
          onChange={handleInputsChange}
        />
        <input
          type="email"
          id="emailValue"
          placeholder="Your Email"
          name="Email"
          required
          value={emailValue}
          onChange={handleInputsChange}
        />
      </div>
      <div className="subject">
        <input
          type="text"
          id="subjectValue"
          placeholder="Subject"
          className="subject-input"
          name="Subject"
          required
          value={subjectValue}
          onChange={handleInputsChange}
        />
      </div>
      <div className="message">
        <textarea
          name="Message"
          placeholder="Your Message"
          id="messageValue"
          cols="30"
          rows="10"
          required
          value={messageValue}
          onChange={handleInputsChange}
        ></textarea>
      </div>
      <div className="btn-container">
        <button className="submit-btn">Say Hello</button>
      </div>
    </form>
  );
}

export default Form;
