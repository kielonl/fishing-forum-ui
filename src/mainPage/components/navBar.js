import React from "react";
import "../styles/navBar.css";

const NavBar = () => {
  return (
    <ul className="navbar-main">
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
