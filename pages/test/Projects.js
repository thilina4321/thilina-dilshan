import React from "react";
import classes from "./project.module.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: "/chat.PNG",
      title: "Chat Application",
      url: "https://chat-node-socket-thilina1234.herokuapp.com",
    },
    {
      id: 2,
      image: "/disney.PNG",
      title: "Disney Clone",
      url: "https://react-disney-clone-dd5d8.web.app/home",
    },
    {
      id: 3,
      title: "Post share Application",
      url: "https://experience-share.vercel.app/",
      image: "/exe.PNG",
    },
    {
      id: 4,
      title: "Weather app",
      url: "https://react-weather-app-ivb8m589h-thilina4321.vercel.app/",
      image: "/weather.PNG",
    },
  ];
  return (
    <section id="projects" className={classes.section}>
      <h1>Projects</h1>

      <div className={classes.projects}>
        {projects.map((pro) => (
          <div key={pro.id} className={classes.project}>
            <img src={pro.image} alt={pro.title} height={200} width={`100%`} />
            <h3> {pro.title} </h3>
            <p>
              <a href={pro.url} target="_blank" className={classes.a}>
                View
              </a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
