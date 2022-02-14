import Image from "next/image";
import { Call, Email } from "@material-ui/icons";
import classes from "./details.module.css";

const UserDetails = () => {
  let thisYaer = new Date().getFullYear();
  let year = thisYaer - 1998;

  return (
    <section className={classes.section}>
      <div className={classes.image}>
        <a href="tel:0764622740">
          <Call color="primary" />{" "}
        </a>
        <Image
          className={classes.img}
          src="/profile.jpg"
          width={200}
          height={200}
        />
        <a href="mailto:dilshanthilina53@gmail.com">
          {" "}
          <Email color="primary" />{" "}
        </a>
      </div>
      <div className={classes.bio}>
        <h3> Thilina Dilshan Heiyanthuduwa </h3>
        <p> {year} years old </p>
        <p> Biyagama, Sri Lanka </p>
      </div>

      <hr style={{ height: 4, backgroundColor: "green", width: "100%" }} />

      <div className={classes.developing}>
        <p className={classes.des}>
          {" "}
          I started my Information Technology journey in 2018/2019 at Institute
          of technology university of moratuwa as a IT undergraduate. Now I am
          full stack web and Mobile application developer who is
          working with Angular, React, Next.Js, Flutter and Node.js. And Also I
          have experience with MySql and Mongoose ODM.
        </p>
      </div>
    </section>
  );
};

export default UserDetails;
