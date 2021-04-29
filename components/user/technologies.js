import classes from "./technologies.module.css";

const techs = [
    { title: "Frontend Mobile", names: "Flutter" },
    { title: "Frontend Web", names: "Angular / React / Next.Js" },
    { title: "Backend", names: "Node.js" },
    { title: "Database", names: "MySQL" },
];
const Technologies = () => {
  return (
    <section className={classes.section}>
      <div> Favourite Technologies </div>
      {techs.map((tech, index) => (
        <div className={classes.tech}
         key={index} > 
            <h5> {tech.title} </h5>
            <p className={classes.names} > {tech.names} </p>
        </div>
      ))}
    </section>
  );
};

export default Technologies;
