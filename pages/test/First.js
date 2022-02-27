import React from "react";
import classes from "./first.module.css";

const First = () => {
  return (
    <section className={classes.section}>
      <ul className={classes.navbar}>
        <li>
          <a href="#about"> About </a>
        </li>
        <li>
          <a href="#projects"> Projects </a>
        </li>
        <li>
          <a href="#contact"> Contacts </a>
        </li>
      </ul>
      <div className={classes.name}>
        <h1> Thilina Dilshan </h1>
        <h4> Full Stack Developer </h4>
        <button className={classes.btn}> <a href="#about"> About Me </a>  </button>
      </div>
    </section>
  );
};

export default First;
