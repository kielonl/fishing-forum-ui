import React, { useContext } from "react";
import logo from "../logo.jpg";

import LogInButton from "./logInButton";
import DisplayUsername from "./userNickname";
import { UserContext } from "../../App";
import "../styles/navBar.css";

const NavBar = (props) => {
  const { user } = useContext(UserContext);

  console.log(user);
  return (
    <ul className="navbar-main">
      <li>
        <img className="navbar-logo" src={logo} alt="logo" />
      </li>
      <div className="navbar-categories">
        <li className="navbar-item bold">
          <div>wedkarstwo</div>
        </li>
        <li className="navbar-item not-bold">
          <div>rybactwo</div>
        </li>
        <li className="navbar-item not-bold">
          <div>myslictwo</div>
        </li>
        <li className="navbar-item not-bold">
          <div>kulinarne</div>
        </li>
      </div>
      <li className="navbar-login not-bold">
        {Object.keys(user).length === 0 ? <LogInButton /> : <DisplayUsername />}
      </li>
    </ul>
  );
};

export default NavBar;
