import React from "react";
import s from "./Main.module.scss";
import { Switch, Route, Link } from "react-router-dom";
import SignIn from "../signIn/SignInContainer";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <section className={s.main_section}>
            <div className={s.container}>
              <h1>Parrot Wings</h1>
              <p>
                The application is for Parrot Wings (PW) transfer between system
                users.
              </p>
              <div className={s.buttons}>
                <Link to="/signup">Sign up</Link>
                <Link to="/signin">Sign in</Link>
              </div>
            </div>
          </section>
        </Route>
        <Route path="/signup">
          <section className={s.main_section}>
            <div className={s.container}>
              <h2>Sign Up</h2>
            </div>
          </section>
        </Route>
        <Route path="/signin">
          <section className={s.main_section}>
            <div className={s.container}>
              <h2>Sign In</h2>
              <SignIn />
            </div>
          </section>
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
