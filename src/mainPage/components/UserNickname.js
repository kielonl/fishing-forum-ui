import { useContext } from "react";
import { UserContext, UserContextUpdate } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";

import * as storageManager from "../../storageManager";
import logOut from "../../assets/log-out.svg";

const DisplayUsername = () => {
  const user = useContext(UserContext);
  const setUser = useContext(UserContextUpdate);
  const navigate = useNavigate();

  const handleLogOut = () => {
    setUser(undefined);
    storageManager.remove("user");
  };
  return (
    <div className="navbar-username-wrapper">
      <div className="navbar-username" onClick={() => navigate("/profile")}>
        {user?.username}
      </div>
      <button
        className="navbar-logout-button"
        style={{ backgroundImage: `url(${logOut})` }}
        onClick={handleLogOut}
      />
    </div>
  );
};

export default DisplayUsername;
