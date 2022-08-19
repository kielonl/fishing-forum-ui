import { useState, useContext } from "react";
import { motion } from "framer-motion";

import Backdrop from "./Backdrop";
import ErrorBox from "../../mainPage/components/ErrorBox";
import { UserContext, UserContextUpdate } from "../../contexts/userContext";
import { makeRequest } from "../../api/api";

const Modal = ({ handleClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState({});
  const setUser = useContext(UserContextUpdate);

  const handleSubmit = async () => {
    try {
      const response = await makeRequest("post", "/auth/login", {
        username: username,
        password: password,
      });
      setUser(response.data.result[0]);
      handleClose();
      setErrorMessage({
        value: "",
        ifError: false,
      });
    } catch (error) {
      setErrorMessage({
        value: error.respose.data.message,
        ifError: true,
      });
    }
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
          <button className="login-button" onClick={handleSubmit}>
            Log in
          </button>
          <ErrorBox error={errorMessage} />
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
