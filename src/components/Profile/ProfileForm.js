import { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";

import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    // can add validation

    // send a request to change the password

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBtub4rEZqy23vmWeHpX_ROqu95ItCMe0g",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
        headers: { "Content-Type": "application/json" },
      }
    ).then((res) => {
      // assumption: Always succeeds!
      // redirect the user to the main page
      history.replace("/");
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          ref={newPasswordInputRef}
          type="password"
          id="new-password"
          minLength="7"
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
