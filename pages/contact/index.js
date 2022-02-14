import classes from "./contact.module.css";

import Email from "@material-ui/icons/Email";
import Call from "@material-ui/icons/Call";
import LinkedIn from "@material-ui/icons/LinkedIn";
import { Fragment } from "react";

const contacts = [
  {
    name: "Email",
    icon: (
      <a href="mailto:dilshanthilina53@gmail.com" target="_blank">
        <Email color="primary" />
      </a>
    ),
    content: "dilshanthilina53@gmail.com",
  },
  {
    name: "Phone",
    icon: (
      <a href="tel:0764622740">
        <Call color="primary" />
      </a>
    ),
    content: "0764622740",
  },
  {
    name: "LinkedIn",
    icon: (
      <a
        target="_blank"
        href="https://www.linkedin.com/in/thilina-dilshan-784048187/"
      >
        <LinkedIn color="primary" />
      </a>
    ),
    content: "Thilina Dilshan",
  },
];
const ContactPage = () => {
  return (
    <Fragment>
      <section className={classes.section}>
        {contacts.map((contact, index) => (
          <div className={classes.div} key={index}>
            <h1> {contact.name} </h1>
            <div className={classes.sub}>
              {contact.icon}
              <p> {contact.content} </p>
            </div>
          </div>
        ))}
      </section>

      <div
        style={{
          display: "flex",
          width: "80%",
          margin: "auto",
          justifyContent: "center",
          marginBottom: "50px",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15842.005470009979!2d79.97769862781902!3d6.950031519764486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25677ddae5c43%3A0x541d92dd5945da68!2sBiyagama!5e0!3m2!1sen!2slk!4v1634278609721!5m2!1sen!2slk"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </Fragment>
  );
};

export default ContactPage;
