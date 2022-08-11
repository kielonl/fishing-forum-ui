import React, { useState } from "react";

import Modal from "../../Login/modal/index";
import "../styles/NavBar.css";

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
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </li>
    </ul>
  );
};

export default NavBar;
