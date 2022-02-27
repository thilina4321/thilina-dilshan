import React, { Fragment } from "react";
import Main from "./Main";

const NewOne = () => {
  return (
    <Fragment>
      <Main />
      <section className="sub-section" id="about-me">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>About Me</h2>
          <div
            className="headshot-container"
            style={{ borderRadius: "50%", margin: "1rem" }}
          >
            <img
              style={{ borderRadius: "50%" }}
              //   className="logo"
              src="/profile.jpg"
              alt="thilina dilshan"
              width={300}
              height={300}
            />
          </div>
          <p>
            Hello, I am Thilina Dilshan. I am a Software Developer and
            Undergratuate , With the hands on industry experience about the MERN
            stack.
          </p>
        </div>
      </section>
      <section className="sub-section-alternative" id="projects">
        <h2>Projects</h2>
        <div className="project-container">
          <div className="project-card">
            <img
              className="project-image"
              src="/chat.png"
              alt="Project One Image"
              height={270}
            />
            <h3>Chat Application</h3>
            <p className="subtext">
              This is a chat application that I created using node.JS and
              socket.io. From this application your can create a chat room and
              make a chat with your friends
            </p>
            <hr />
            <p className="subtext">
              <a
                target="_blank"
                className="project-link"
                href="https://chat-node-socket-thilina1234.herokuapp.com"
              >
                View here
              </a>
            </p>
          </div>
          <div className="project-card">
            <img
              className="project-image"
              src="/disney.png"
              alt="Project One Image"
              height={270}
            />
            <h3>Disney Clone</h3>
            <p className="subtext">
              This is my project and some text about it. I enjoyed making this
              project.
            </p>
            <hr />
            <p className="subtext">
              <a
                target="_blank"
                className="project-link"
                href="https://react-disney-clone-dd5d8.web.app/home"
              >
                View here
              </a>
            </p>
          </div>
          <div className="project-card">
            <img
              className="project-image"
              src="src/images/project3.png"
              alt="Project One Image"
            />
            <h3>Project Three</h3>
            <p className="subtext">
              This is my project and some text about it. I enjoyed making this
              project.
            </p>
            <hr />
            <p className="subtext">
              <a
                className="project-link"
                href="https://www.github.com/kubowania"
              >
                View here
              </a>
            </p>
          </div>
          <div className="project-card">
            <img
              className="project-image"
              src="src/images/Project4.jpg"
              alt="Project One Image"
            />
            <h3>Project Four</h3>
            <p className="subtext">
              This is my project and some text about it. I enjoyed making this
              project.
            </p>
            <hr />
            <p className="subtext">
              <a
                className="project-link"
                href="https://www.github.com/kubowania"
              >
                View here
              </a>
            </p>
          </div>
        </div>
      </section>
      <footer id="contact-me">
        <h2>Contact me</h2>
        <p>dilshanthilina53@gmail.com</p>
      </footer>
    </Fragment>
  );
};

export default NewOne;
