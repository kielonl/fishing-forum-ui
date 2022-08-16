import LeftSide from "./components/leftSide/LeftSide";
import RightSide from "./components/rightSide/RightSide";
const Profile = () => {
  return (
    <div>
      <div className="userProfile-profile">
        <div className="userProfile-main">
          <LeftSide />
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default Profile;
