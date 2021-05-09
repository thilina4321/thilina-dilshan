import classes from "./contact.module.css";

import Email from "@material-ui/icons/Email";
import Call from "@material-ui/icons/Call";
import LinkedIn from "@material-ui/icons/LinkedIn";

const contacts = [
  {
    name: "Email",
    icon: (
      <a href="mailto:dilshanthilina53@gmail.com">
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
  );
};

export default ContactPage;
