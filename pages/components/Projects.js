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
    git: "",
  },
  {
    id: 2,
    image: "/sampath.png",
    title: "Sampath Bank New Web (Industry project experience)",
    url: "",
    notView: true,
    des: `Sampath Bank website is the new website that sampath bank use in the future for them and their customers. 
    Built with Nuxt.JS`,
    git: "",
  },
  {
    id: 3,
    image: "/chat.PNG",
    title: "Chat Application",
    url: "https://chat-node-socket-thilina1234.herokuapp.com",
    des: `This is a simple chat application that users can create groups and chat with others. Built with Node.Js and
    with ejs template.`,
    git: "https://github.com/thilina4321/chat-app",
  },
  {
    id: 4,
    image: "/disney.PNG",
    title: "Disney Clone",
    url: "https://react-disney-clone-dd5d8.web.app/home",
    des: `This is a clone application for disney web application. Built with React and
    google firebase.`,
    git: "https://github.com/thilina4321/react-disney-clone",
  },
  {
    id: 5,
    title: "Experience Application",
    url: "https://github.com/thilina4321/react-places",
    image: "/exe.PNG",
    des: `Experience application is a web application that users can use to share their experience to tell about those to the world. Built with React, 
    Node and Mongodb database database.`,
    git: "https://github.com/thilina4321/experience-share",
  },
  {
    id: 6,
    title: "Weather app",
    url: "https://react-weather-app-ivb8m589h-thilina4321.vercel.app/",
    image: "/weather.PNG",
    des: `Weather application is application users can see the weather in their location. 
    Create with using React and open weather map API.`,
    git: "https://github.com/thilina4321/react-weather-app",
  },
];

const icons = [
  {
    name: "React",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-brand-react-native"
        width="80"
        height="80"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M6.357 9c-2.637 .68 -4.357 1.845 -4.357 3.175c0 2.107 4.405 3.825 9.85 3.825c.74 0 1.26 -.039 1.95 -.097"></path>
        <path d="M9.837 15.9c-.413 -.596 -.806 -1.133 -1.18 -1.8c-2.751 -4.9 -3.488 -9.77 -1.63 -10.873c1.15 -.697 3.047 .253 4.974 2.254"></path>
        <path d="M6.429 15.387c-.702 2.688 -.56 4.716 .56 5.395c1.783 1.08 5.387 -1.958 8.043 -6.804c.36 -.67 .683 -1.329 .968 -1.978"></path>
        <path d="M12 18.52c1.928 2 3.817 2.95 4.978 2.253c1.85 -1.102 1.121 -5.972 -1.633 -10.873c-.384 -.677 -.777 -1.204 -1.18 -1.8"></path>
        <path d="M17.66 15c2.612 -.687 4.34 -1.85 4.34 -3.176c0 -2.11 -4.408 -3.824 -9.845 -3.824c-.747 0 -1.266 .029 -1.955 .087"></path>
        <path d="M8 12c.285 -.66 .607 -1.308 .968 -1.978c2.647 -4.844 6.253 -7.89 8.046 -6.801c1.11 .679 1.262 2.706 .56 5.393"></path>
        <path d="M12.26 12.015h-.01c-.01 .13 -.12 .24 -.26 .24a0.263 .263 0 0 1 -.25 -.26c0 -.14 .11 -.25 .24 -.25h-.01c.13 -.01 .25 .11 .25 .24"></path>
      </svg>
    ),
  },

  {
    name: "Javascript",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-brand-javascript"
        width="80"
        height="80"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path>
        <path d="M7.5 8h3v8l-2 -1"></path>
        <path d="M16.5 8h-2.5a0.5 .5 0 0 0 -.5 .5v3a0.5 .5 0 0 0 .5 .5h1.423a0.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5"></path>
      </svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-brand-angular"
        width="80"
        height="80"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M5.428 17.245l6.076 3.471a1 1 0 0 0 .992 0l6.076 -3.471a1 1 0 0 0 .495 -.734l1.323 -9.704a1 1 0 0 0 -.658 -1.078l-7.4 -2.612a1 1 0 0 0 -.665 0l-7.399 2.613a1 1 0 0 0 -.658 1.078l1.323 9.704a1 1 0 0 0 .495 .734z"></path>
        <path d="M9 15l3 -8l3 8"></path>
        <path d="M10 13h4"></path>
      </svg>
    ),
  },
];

const Projects = () => {
  return (
    <section className={classes.section}>
      <div className={classes.about}>
        <h3> Projects </h3>

        <div className={classes.projects}>
          {projects.map(({ id, url, image, notView, title, des, git }) => (
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
                <div style={{ height: "30px" }}></div>
                {!notView && (
                  <div>
                    <a
                      href={git}
                      target="_blank"
                      className="social"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                )}
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
          <li> Javascript </li>
        </ul>

        <div className={classes.svg__icons}>
          {icons.map(({ name, icon }, index) => (
            <span className={classes.svg__icon} key={index}>
              {" "}
              {icon}{" "}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
