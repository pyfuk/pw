import React from "react";
import s from "./App.module.scss";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className={s.wrapper}>
        <div className={s.header}>
          <Header></Header>
        </div>
        <div className={s.main}>
          <Main></Main>
        </div>
      </div>
    </Router>
  );
}

export default App;
