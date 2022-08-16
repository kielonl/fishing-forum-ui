import { useContext } from "react";
import { UserContext } from "../../../../App";

import placeholder from "../../../assets/placeholder.jpg";

const LeftSide = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="userProfile-leftSide">
      <div className="userProfile-profileImage-container">
        <div className="userProfile-username">{user.username}</div>
        <img
          className="userProfile-profileImage"
          src={placeholder}
          alt="prof"
        />
      </div>
    </div>
  );
};
export default LeftSide;
