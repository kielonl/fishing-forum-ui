import React from "react";
import "../styles/navBar.css";
import logo from "../logo.jpg";
const NavBar = () => {
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
        <button className="navbar-login-button">Log in</button>
      </li>
    </ul>
  );
};

export default NavBar;
