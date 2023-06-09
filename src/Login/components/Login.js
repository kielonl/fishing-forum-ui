import { useState, useContext } from "react";

import { AlertBox } from "../../mainPage/components/AlertBox";
import { apiRequest } from "../../api/api";
import { HTTP_METHODS } from "../../constants/httpMethods";
import { alertColors } from "../../constants/alertColors";
import { UserContextUpdate } from "../../contexts/userContext";

export const Login = ({ handleClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState({
    value: "",
    ifAlert: false,
    color: null,
  });
  const setUser = useContext(UserContextUpdate);

  const handleSubmit = async () => {
    const sendCredentials = await apiRequest(HTTP_METHODS.POST, "/auth/login", {
      username: username,
      password: password,
    });
    const errorResponse = sendCredentials?.response?.data.message;
    if (errorResponse) {
      setAlertMessage({
        value: errorResponse,
        ifAlert: true,
        color: alertColors.red,
      });
      return;
    }
    setUser(sendCredentials[0]);
    handleClose();
    setAlertMessage({
      value: "",
      ifAlert: false,
      color: null,
    });
  };

  return (
    <div className="login-form">
      <h1>Log in</h1>
      <input
        type="text"
        placeholder="username..."
        className="login-input"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password..."
        className="login-input"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login-button" onClick={handleSubmit}>
        Log in
      </button>
      <AlertBox alertInfo={alertMessage} />
    </div>
  );
};
