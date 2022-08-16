import { useContext } from "react";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";

const DisplayUsername = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div className="navbar-username" onClick={() => navigate("/profile")}>
      {user.username}
    </div>
  );
};

export default DisplayUsername;
