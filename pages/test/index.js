import React, { Fragment } from "react";
import About from "./About";
import Contacts from "./Contacts";
import First from "./First";
import Projects from "./Projects";

const MyApp = () => {
  return (
    <Fragment>
      <First />
      <About />
      <Projects />
      <Contacts />
    </Fragment>
  );
};

export default MyApp;
