import React from "react";
import classes from "./about.module.css";

const About = () => {
  return (
    <section id="about" className={classes.section}>
      <h1> About Me </h1>
      <img width={300} height={300} alt="profile pic" src="/profile.jpg" />
      <p>
        Hello, I am Thilina Dilshan. I am a Software Developer and Undergratuate
        , With the hands on industry experience with the MERN stack.
      </p>
    </section>
  );
};

export default About;