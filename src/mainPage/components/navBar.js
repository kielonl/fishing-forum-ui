import React, { useContext } from "react";

import LogInButton from "./LogInButton";
import DisplayUsername from "./UserNickname";
import NavBarItems from "./NavBarItems";

import { UserContext } from "../../App";
import "../styles/navBar.css";

const NavBar = () => {
  const { user } = useContext(UserContext);

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
