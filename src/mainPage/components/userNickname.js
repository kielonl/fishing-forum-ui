import { useContext } from "react";
import { UserContext } from "../../App";

const DisplayUsername = () => {
  const { user } = useContext(UserContext);
  return <div className="navbar-username">{user.username}</div>;
};

export default DisplayUsername;
