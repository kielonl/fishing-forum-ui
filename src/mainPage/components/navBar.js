import React, { useContext } from "react";

import LogInButton from "./logInButton";
import DisplayUsername from "./userNickname";
import NavBarItems from "./navBarItems";

import { UserContext } from "../../App";
import "../styles/navBar.css";

const NavBar = () => {
  const { user } = useContext(UserContext);

  console.log(user);
  const Items = ["wedkarstwo", "rybactwo", "myslictwo", "kulinarne"];
  return (
    <ul className="navbar-main">
      <NavBarItems items={Items} />
      <li className="navbar-login not-bold">
        {Object.keys(user).length === 0 ? <LogInButton /> : <DisplayUsername />}
      </li>
    </ul>
  );
};

export default NavBar;
