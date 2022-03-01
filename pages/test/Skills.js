import React, { useEffect } from "react";
import classes from "./skill.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const skills = [
    {
      title: "Javascript",
      image: "/js.png",
      icon: (
        <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          height="1em"
          width="1em"
        >
          <path d="M145.2 96l66 746.6L512 928l299.6-85.4L878.9 96H145.2zm595 177.1l-4.8 47.2-1.7 19.5H382.3l8.2 94.2h335.1l-3.3 24.3-21.2 242.2-1.7 16.2-187 51.6v.3h-1.2l-.3.1v-.1h-.1l-188.6-52L310.8 572h91.1l6.5 73.2 102.4 27.7h.4l102-27.6 11.4-118.6H510.9v-.1H306l-22.8-253.5-1.7-24.3h460.3l-1.6 24.3z" />
        </svg>
      ),
    },
    { title: "Typescript", image: "/ts.png" },
    { title: "React.js", image: "/react.jpg" },
    { title: "Node.js", image: "/node.jpeg" },
    { title: "Git", image: "/git.png" },
    { title: "Docker", image: "/docker.jpeg" },
  ];

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="2000"
      className={classes.section}
    >
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