import { useState } from "react";

// import ErrorBox from "../../mainPage/components/ErrorBox";
import { AlertBox } from "../../mainPage/components/AlertBox";
import { apiRequest } from "../../api/api";
import { HTTP_METHODS } from "../../constants/httpMethods";
import { alertColors } from "../../constants/alertColors";
// import SucessBox from "../../mainPage/components/SuccessBox";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState({
    value: "",
    ifAlert: false,
    color: null,
  });
  const handleSubmit = async () => {
    const sendCredentials = await apiRequest(HTTP_METHODS.POST, "/user", {
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
    setAlertMessage({
      value: "registered successfuly",
      ifAlert: true,
      color: alertColors.green,
    });
  };
  return (
    <div className="login-form">
      <h1>Register</h1>
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
        Register
      </button>

      <AlertBox alertInfo={alertMessage} />
    </div>
  );
};
