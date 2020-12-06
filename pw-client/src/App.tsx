import React from "react";
import s from "./App.module.scss";
import Header from "./components/header/Header";
import Main from "./components/main/MainContainer";
import { BrowserRouter as Router } from "react-router-dom";
import storeFactory from "./redux/store";
import { Provider } from "react-redux";

const store = storeFactory();
function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
