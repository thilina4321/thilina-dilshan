import React from "react";
import classes from "./projects.module.css";

const projects = [
  {
    id: 1,
    image: "/sampath-cms.png",
    title: "Sampath Bank CMS (Industry project experience)",
    url: "",
    notView: true,
    des: `Sampath Bank CMS is the content managment system that they use to
    manage the new sampath website's fontend and backend. Built with React, 
    Node and Mongodb database database.`,
  },
  {
    id: 2,
    image: "/sampath.png",
    title: "Sampath Bank New Web (Industry project experience)",
    url: "",
    notView: true,
    des: `Sampath Bank website is the new website that sampath bank use in the future for them and their customers. 
    Built with Nuxt.JS`,
  },
  {
    id: 3,
    image: "/chat.PNG",
    title: "Chat Application",
    url: "https://chat-node-socket-thilina1234.herokuapp.com",
    des: `This is a simple chat application that users can create groups and chat with others. Built with Node.Js and
    with ejs template.`,
  },
  {
    id: 4,
    image: "/disney.PNG",
    title: "Disney Clone",
    url: "https://react-disney-clone-dd5d8.web.app/home",
    des: `This is a clone application for disney web application. Built with React and
    google firebase.`,
  },
  {
    id: 5,
    title: "Experience Application",
    url: "https://github.com/thilina4321/react-places",
    image: "/exe.PNG",
    des: `Experience application is a web application that users can use to share their experience to tell about those to the world. Built with React, 
    Node and Mongodb database database.`,
  },
  {
    id: 6,
    title: "Weather app",
    url: "https://react-weather-app-ivb8m589h-thilina4321.vercel.app/",
    image: "/weather.PNG",
    des: `Weather application is application users can see the weather in their location. 
    Create with using React and open weather map API.`,
  },
];

const Projects = () => {
  return (
    <section className={classes.section}>
      <div className={classes.about}>
        <h3> Projects </h3>

        <div className={classes.projects}>
          {projects.map(({ id, url, image, notView, title, des }) => (
            <div className={classes.project} key={id}>
              <img
                style={{ marginRight: "1rem" }}
                src={image}
                alt={title}
                width={200}
                height={200}
              />
              <div className={classes.more__details}>
                {notView ? (
                  <h4> {title} </h4>
                ) : (
                  <h4>
                    <a href={url} target="_blank">
                      {title}
                    </a>
                  </h4>
                )}
                <p> {des} </p>
              </div>
            </div>
          ))}
        </div>
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

export default Projects;
