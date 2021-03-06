import React, { useEffect } from "react";
import classes from "./project.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const projects = [
    {
      id: 1,
      image: "/sampath-cms.png",
      title: "Sampath Bank CMS (Industry project experience)",
      url: "",
      notView: true,
    },
    {
      id: 2,
      image: "/sampath.png",
      title: "Sampath Bank New Web (Industry project experience)",
      url: "",
      notView: true,
    },
    {
      id: 3,
      image: "/chat.PNG",
      title: "Chat Application",
      url: "https://chat-node-socket-thilina1234.herokuapp.com",
    },
    {
      id: 4,
      image: "/disney.PNG",
      title: "Disney Clone",
      url: "https://react-disney-clone-dd5d8.web.app/home",
    },
    {
      id: 5,
      title: "Experience Application",
      url: "https://experience-share.vercel.app/",
      image: "/exe.PNG",
      notView: true,
    },
    {
      id: 6,
      title: "Weather app",
      url: "https://react-weather-app-ivb8m589h-thilina4321.vercel.app/",
      image: "/weather.PNG",
    },
  ];
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="2000"
      id="projects"
      className={classes.section}
    >
      <h1>Projects</h1>

      <div className={classes.projects}>
        {projects.map((pro) => (
          <div key={pro.id} className={classes.project}>
            <img src={pro.image} alt={pro.title} height={200} width={`100%`} />
            <h3> {pro.title} </h3>
            {!pro.notView && (
              <p>
                <a
                  style={{ textDecoration: "none" }}
                  href={pro.url}
                  target="_blank"
                  className={classes.a}
                >
                  View
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
