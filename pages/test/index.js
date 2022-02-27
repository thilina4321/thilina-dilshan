import React, { Fragment } from "react";
import About from "./About";
import Contacts from "./Contacts";
import First from "./First";
import Projects from "./Projects";
import Skills from "./Skills";

const MyApp = () => {
  return (
    <Fragment>
      <First />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </Fragment>
  );
};

export default MyApp;
