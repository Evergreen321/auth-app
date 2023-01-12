import ProfileForm from "./ProfileForm";
import classes from "./UserProfile.module.css";

import logo from "../../img/user.png";

const UserProfile = () => {
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <div className={classes.userCard}>
        <img src={logo} alt="general user logo" className={classes.userLogo} />
        <div>
          <p className={classes.userName}>Betty Johnson</p>
          <p className={classes.userLocation}>Burlington, ON, Canada</p>
        </div>
      </div>
      <ProfileForm />
    </section>
  );
};

export default UserProfile;
