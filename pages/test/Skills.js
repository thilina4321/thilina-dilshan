import React from "react";
import classes from "./skill.module.css";

const Skills = () => {
  const skills = [
    { title: "Javascript", image: "/js.png" },
    { title: "Typescript", image: "/ts.png" },
    { title: "React.js", image: "/react.jpg" },
    { title: "Node.js", image: "/node.jpeg" },
    { title: "Git", image: "/git.png" },
    { title: "Docker", image: "/docker.jpeg" },
  ];
  return (
    <section className={classes.section}>
      <h1> Skills </h1>
      <div className={classes.skills}>
        {skills.map((sk, i) => (
          <div className={classes.skill} key={i}>
            <img src={sk.image} height={200} width={200} alt={sk.title} />
            <p> {sk.title} </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
