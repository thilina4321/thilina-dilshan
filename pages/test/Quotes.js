import React, { useEffect } from "react";
import classes from "./quotes.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Quotes = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const quotes = [
    {
      name: "Sudhara Dhananjaya",
      position: "Intern QA Engineer @ Virtusa",
      quotes: (
        <h2>
          <bold> " </bold> Thilina is One of the best person I have ever work
          with. His programming knowledge in javascript is very good and very
          good in MERN stack development. He is very good team player and I have
          work with him directly. <bold> " </bold>
        </h2>
      ),
    },
    {
      name: "Ishara Dilshan",
      position: "Software Engineer @ Arimac",
      quotes: (
        <h2>
          <bold> " </bold> I have directly work with thilina in the industry
          projects. He is very good team player with sounds on knowledge about
          REACT, NEXT, NODE. Quality Code is one of the most highlited feature
          that I recognize from him when I worked with him at Arimac.{" "}
          <bold> " </bold>
        </h2>
      ),
    },
  ];
  return (
    <section className={classes.section}>
      <h1>Quotes</h1>
      <div className={classes.quotes}>
        {quotes.map((q, i) => (
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className={classes.quote}
            key={i}
          >
            {q.quotes}
            <h3> {q.name} </h3>
            <h5> {q.position} </h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Quotes;
