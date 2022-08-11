import React from "react";
import "../styles/navBar.css";

const NavBar = () => {
  return (
    <ul className="navbar-main">
      <li className="navbar-item">wedkarstwo</li>
      <li className="navbar-item">rybactwo</li>
      <li className="navbar-item">myslictwo</li>
      <li className="navbar-item">kulinarne</li>
      <li className="navbar-item navbar-login">
        <button className="navbar-login-button">Log in</button>
      </li>
    </ul>
  );
};

export default NavBar;
