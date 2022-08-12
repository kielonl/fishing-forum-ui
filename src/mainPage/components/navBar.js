<<<<<<< HEAD
import React from "react";
import "../styles/navBar.css";
import logo from "../logo.jpg";
=======
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "../../Login/modal/Modal";
import "../styles/navBar.css";

>>>>>>> loginModal
const NavBar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => {
    setModalOpen(false);
  };
  const open = () => {
    setModalOpen(true);
  };
  return (
    <ul className="navbar-main">
<<<<<<< HEAD
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
=======
      <li className="navbar-item">wedkarstwo</li>
      <li className="navbar-item">rybactwo</li>
      <li className="navbar-item">myslictwo</li>
      <li className="navbar-item">kulinarne</li>
      <li className="navbar-item navbar-login">
        <button
          className="navbar-login-button"
          onClick={() => (modalOpen ? close() : open())}
        >
          Log in
        </button>

        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
        </AnimatePresence>
>>>>>>> loginModal
      </li>
    </ul>
  );
};

export default NavBar;
