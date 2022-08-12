import { useState, useContext } from "react";
import { motion } from "framer-motion";
import axios from "axios";

import Backdrop from "../backdrop/Backdrop";
import { UserContext } from "../../App";

const url = process.env.REACT_APP_LOGIN_ENDPOINT + "/auth/login";
const Modal = ({ handleClose, text }, props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = async () => {
    axios
      .post(url, {
        username: username,
        password: password,
      })
      .then((response) => {
        const data = response.data[0];
        setUser(data);
        handleClose();
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
          <input
            type="text"
            className="login-input"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            className="login-input"
            onChange={(e) => setPassword(e.target.value)}
          />
          <motion.button
            className="login-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleSubmit}
          >
            Log in
          </motion.button>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
