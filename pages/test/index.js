import React, { Fragment } from "react";
import About from "./About";
import Contacts from "./Contacts";
import First from "./First";
import Projects from "./Projects";
import Quotes from "./Quotes";
import Skills from "./Skills";

const MyApp = () => {
  return (
    <Fragment>
      <First />
      <About />
      <Skills />
      <Projects />
      <Quotes />
      <Contacts />
    </Fragment>
  );
};

export default MyApp;
