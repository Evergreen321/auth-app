import { useContext } from "react";
import classes from "./HomePage.module.css";
import AuthContext from "../store/auth-context";

const HomePage = () => {
  const authCtx = useContext(AuthContext);

  return (
    <section className={classes.starting}>
      {!authCtx.isLoggedIn && (
        <div>
          <h1>Welcome!</h1>
          <p className={classes.text}>
            {" "}
            Please, log in using your credentials.
          </p>
        </div>
      )}
      {authCtx.isLoggedIn && <h1>Welcome!</h1>}
    </section>
  );
};

export default HomePage;
