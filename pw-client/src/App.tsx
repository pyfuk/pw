import React from "react";
import s from "./App.module.scss";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <Header></Header>
      </div>
      <div className={s.main}>
        <Main></Main>
      </div>
    </div>
  );
}

export default App;
