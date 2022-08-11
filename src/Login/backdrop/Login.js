import React from "react";
import framer, { motion } from "framer-motion";

import "../styles/Login.css";

const Login = ({ children, onClick }) => {
  return (
    <motion.div
      className="backdrop"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};
export default Login;
