import BackGround from "./background";
import UserDetails from "./details";
import Technologies from "./technologies";
import Account from "./account";

import classes from "./user.module.css";

const UserProfile = () => {
  useEffect(() => {
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
      OneSignal.init({
        appId: "153a8f1f-37fb-427a-8528-aca2795acdfb",
      });
    });
  }, []);
  return (
    <div className={classes.section}>
      <BackGround />
      <UserDetails />
      <Technologies />
      <Account />
    </div>
  );
};

export default UserProfile;
