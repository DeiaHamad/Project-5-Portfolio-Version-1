import React, { useState, createContext } from "react";
import Controls from "./components/controls/Controls";
import Home from "./components/home/Home";
import AboutMe from "./components/aboutMe/AboutMe";
import Portfolio from "./components/portfolio/Portfolio ";
import ContactMe from "./components/contactMe/ContactMe";
import "./sass/App.css";

export const AppContext = createContext(null);
export const ContactMeContext = createContext(null);

function App() {
  const [web, setWeb] = useState({
    home: true,
    aboutMe: false,
    portfolio: false,
    contactMe: false,
  });

  const [formInputs, setFormInputs] = useState({
    nameValue: "",
    emailValue: "",
    subjectValue: "",
    messageValue: "",
  });

  return (
    <AppContext.Provider value={{ web, setWeb }}>
      <div className="App">
        <Controls />
        {web.home && <Home />}
        {web.aboutMe && <AboutMe />}
        {web.portfolio && <Portfolio />}
        <ContactMeContext.Provider value={{ formInputs, setFormInputs }}>
          {web.contactMe && <ContactMe />}
        </ContactMeContext.Provider>
      </div>
    </AppContext.Provider>
  );
}

export default App;
