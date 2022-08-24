import { useContext } from "react";

import { UserContext } from "../../../contexts/userContext";
import placeholder from "../../assets/placeholder.jpg";

const ImageSide = () => {
  const user = useContext(UserContext);
  return (
    <div className="userProfile-imageSide">
      <div className="userProfile-profileImaage-container">
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
export default ImageSide;
