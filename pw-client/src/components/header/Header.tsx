import React from "react";
import s from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className={s.header_inner}>
        <div className={s.image_container}>
          <img src={process.env.PUBLIC_URL + "/pw.png"} alt="logo" />
        </div>
        <nav>
          <ul>
            <li>
              <span className={s.icon}>
                <FontAwesomeIcon icon={faHome} />
              </span>
              <Link to="/">Home</Link>
            </li>
            <li>
              <span className={s.icon}>
                <FontAwesomeIcon icon={faHome} />
              </span>
              <Link to="/signin">Sign in</Link>
            </li>
            <li>
              <span className={s.icon}>
                <FontAwesomeIcon icon={faHome} />
              </span>
              <Link to="/signup">Sign up</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
