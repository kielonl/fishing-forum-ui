import { motion } from "framer-motion";
import Backdrop from "../backdrop/Backdrop";

const Modal = ({ handleClose, text }) => {
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
        className="modal orange-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
      >
        <div className="login-form">
          <h1>Log in</h1>
          <input type="text" className="login-input" />
          <input type="text" className="login-input" />
          <motion.button
            className="login-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Log in
          </motion.button>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
