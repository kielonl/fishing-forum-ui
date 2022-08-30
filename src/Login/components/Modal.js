import { useState } from "react";
import { motion } from "framer-motion";

import Backdrop from "./Backdrop";
import { Login } from "./Login";
import { Register } from "./Registration";

const Modal = ({ handleClose }) => {
  const [register, setRegister] = useState(false);
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "-100vh",
    },
  };
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        // className="modal orange-gradient"
        className="modal-box"
        variants={dropIn}
        initial="hidden"
        animate="visible"
      >
        {!register ? (
          <Login handleClose={handleClose} />
        ) : (
          <Register handleClose={handleClose} setRegister={setRegister} />
        )}
        <button
          onClick={() => setRegister(!register)}
          style={{
            color: "white",
            marginTop: "10px ",
            cursor: "pointer",
            background: "none",
            border: "none",
          }}
        >
          {!register ? "Register" : "Login"}
        </button>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
