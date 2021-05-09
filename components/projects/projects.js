import classes from "./project.module.css";
import Project from "./project";

const Projects = (props) => {
  return (
    <section>
      {props.projects.map((pro) => {
        const { id, name, proImage, description, link, gitLink, isHost } = pro

        return (
          <Project
            key={id}
            name={name}
            proImage={proImage}
            description={description}
            link={link}
            gitLink={gitLink}
            isHost={isHost}
          />
        );
      })}
    </section>
  );
};

export default Projects;
