import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthForm from "./components/Auth/AuthForm";
import HomePage from "./pages/HomePage";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        {!isLoggedIn && (
          <Route path="/auth">
            <AuthForm />
          </Route>
        )}
        {isLoggedIn && (
          <Route path="/profile">
            <UserProfile />
          </Route>
        )}
        {/* In any other case (if a user tries to access the page which is nor available for him, redirect him to the main) */}
        <Route path="*">
          {/* 404 page */}
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
