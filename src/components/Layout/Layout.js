import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";

import classes from "./Layout.module.css";

import AuthContext from "../../store/auth-context";

const Layout = (props) => {
  const authCtx = useContext(AuthContext);
  // const history = useHistory();

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    // history.replace("/");
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <Link to="/">
          <div className={classes.logo}>React Auth</div>
        </Link>
        <nav>
          <ul>
            {!isLoggedIn && (
              <li>
                <Link to="/auth">Login</Link>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
