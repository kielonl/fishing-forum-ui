import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";

const DisplayUsername = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div className="navbar-username-wrapper">
      <div className="navbar-username" onClick={() => navigate("/profile")}>
        {user.username}
      </div>
    </div>
  );
};

export default DisplayUsername;
