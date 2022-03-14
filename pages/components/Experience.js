import React from "react";
import classes from "./experience.module.css";


const Experience = () => {
  return (
    <section className={classes.section}>
      <div className={classes.about}>
        <h3> Experience </h3>
        <h4> Intern Software Engineer @ Arimac - (2021 June to 2022 Feb) </h4>
        <p>
          {" "}
          Working with several different projects with the technologies like
          React, Next and Node{" "}
        </p>
      </div>
      <div className={classes.contact}>
        <h3> Technologies </h3>
        <ul>
          <li> React.JS </li>
          <li> Next.JS </li>
          <li> Node.JS (Express) </li>
          <li> Flutter </li>
          <li> Angular </li>
        </ul>

        
      </div>
    </section>
  );
};

export default Experience;
