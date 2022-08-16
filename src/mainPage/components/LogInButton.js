import { useState } from "react";
import Modal from "../../Login/components/Modal";

import { AnimatePresence } from "framer-motion";

const LogInButton = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => {
    setModalOpen(false);
  };
  const open = () => {
    setModalOpen(true);
  };
  return (
    <>
      <button
        className="navbar-login-button"
        onClick={() => (modalOpen ? close() : open())}
      >
        Log in
      </button>
      <AnimatePresence>
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </>
  );
};

export default LogInButton;
