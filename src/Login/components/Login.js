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
      {/* <input
        type="text"
        placeholder="username..."
        className="input login-input"
        onChange={(e) => setUsername(e.target.value)}
      /> */}
      <div class="form-control">
        <label class="label">
          <span class="label-text">Your username</span>
        </label>
        <label class="input-group input-group-vertical">
          <span>Username</span>
          <input
            type="text"
            placeholder="Łowca dorszy"
            class="input input-bordered"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>

      <div class="form-control">
        <label class="label">
          <span class="label-text">Your password</span>
        </label>
        <label class="input-group input-group-vertical">
          <span>Password</span>
          <input
            type="text"
            placeholder="1234"
            class="input input-bordered"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>

      <button
        // className="login-button"
        className="btn login-button"
        onClick={handleSubmit}
      >
        Log in
      </button>
      <AlertBox alertInfo={alertMessage} />
    </div>
  );
};
