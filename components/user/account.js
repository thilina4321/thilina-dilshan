import classes from "./account.module.css";
import { GitHub, LinkedIn, LocationCity } from "@material-ui/icons";
const Accounts = () => {
  return (
    <section className={classes.section}>
      <div> My Accounts </div>
      <div className={classes.accounts}>
        <a target="_blank" href="https://github.com/thilina4321">
          <GitHub />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/thilina-dilshan-784048187/">
          <LinkedIn />
        </a>
        
      </div>
    </section>
  );
};

export default Accounts;
