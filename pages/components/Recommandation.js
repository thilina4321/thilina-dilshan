import React from "react";
import classes from "./recommandation.module.css";

const Recommandations = () => {
  return (
    <section className={classes.section}>
      <div className={classes.about}>
        <h3> Recommandations </h3>
        <h4 style={{ marginTop: "3rem" }}>
          {" "}
          Sudhara Dananjaya - Intern QA Engineer @ Virtusa{" "}
        </h4>
        <p>
          {" "}
          {` Thilina is One of the best person I have ever work
          with. His programming knowledge in javascript is very good and very
          good in MERN stack development. He is very good team player and I have
          work with him directly.`}{" "}
        </p>
        <h4 style={{ marginTop: "3rem" }}>
          {" "}
          Ishara Dilshan - Software Engineer{" "}
        </h4>
        <p>
          {" "}
          {` I have directly work with thilina in the industry
          projects. He is very good team player with sounds on knowledge about
          REACT, NEXT, NODE. Quality Code is one of the most highlited feature
          that I recognize from him when I worked with him at Arimac.`}{" "}
        </p>
      </div>
      <div className={classes.contact}>
        <h3> Experience </h3>
        <h4> Intern Software Engineer @ Arimac - (2021 June to 2022 Feb) </h4>
        <p>
          {" "}
          Working with several different projects with the technologies like
          React, Next and Node{" "}
        </p>
        <h4> Local Guide - Google Map (2020 - present) </h4>
        <p>
          {`I am contributing as a google map local guide to improve their service 
          by getting good and honest ideas about the places that I visit or known.`}
        </p>
        <h4> Writer @ Medium (2020 - present) </h4>
        <p>
          {`I am wirting articles to the medium website about the technical staffs
          that I learn.`}
        </p>
      </div>
    </section>
  );
};

export default Recommandations;
