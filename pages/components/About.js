import React from "react";
import classes from "./about.module.css";

const About = () => {
  return (
    <section className={classes.section}>
      <div className={classes.about}>
        <h3> About Me </h3>
        <p>{`I am undergraduate, with an interest in Full-stack software development, I am keen in learning new technologies specially in javascript world, and increasing my knowledge in them. `}</p>
        <p>{`I am seeking new opportunities to improve my experience and like to produce amazing new things to the world.`}</p>
      </div>
      <div className={classes.contact}>
        <h3> Attended </h3>
        <ul>
        <li> Wrexham Glyndwr University, UK </li>
        <li> Institute Of Technology University Of Moratuwa </li>
        <li> Ananda College, Colombo 10 </li>
        <li> Asoka College, Colombo 10 </li>
        <li> Biyagama Junior School, Biyagama </li>
        </ul>
        
      </div>
    </section>
  );
};

export default About;
