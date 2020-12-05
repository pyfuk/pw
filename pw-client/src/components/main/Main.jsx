import React from "react";
import s from "./Main.module.scss";
const Main = () => {
  return (
    <main>
      <section className={s.main_section}>
        <div className={s.container}>
          <h1>Parrot Wings</h1>
          <p>
            The application is for Parrot Wings (PW) transfer between system
            users.
          </p>
          <div className={s.buttons}>
            <a>Sign up</a>
            <a>Sign in</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
