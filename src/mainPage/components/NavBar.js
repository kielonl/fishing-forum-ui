import React, { useContext } from "react";

import { UserContext } from "../../contexts/userContext";
import LogInButton from "./LogInButton";
import DisplayUsername from "./UserNickname";
import NavBarItems from "./NavBarItems";

import "../styles/navBar.scss";

const NavBar = () => {
  const user = useContext(UserContext);

  const HandleDisplay = () => {
    if (user === undefined) return;

    if (Object.keys(user)?.length === 0) {
      return <LogInButton />;
    }
    return <DisplayUsername />;
  };

  const Items = ["wedkarstwo", "rybactwo", "myslictwo", "kulinarne"];
  return (
    <ul className="navbar-main">
      <NavBarItems items={Items} />
      <li className="navbar-login not-bold">
        {/* {Object.keys(user).length === 0 ? <LogInButton /> : <DisplayUsername />}
         */}
        {HandleDisplay()}
      </li>
    </ul>
  );
};

export default NavBar;
