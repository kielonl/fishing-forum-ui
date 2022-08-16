import ImageSide from "./components/leftSide/ImageSide";
import DetailsSide from "./components/rightSide/DetailsSide";
import "./styles/UserProfile.scss";
const Profile = () => {
  return (
    <div>
      <div className="userProfile-profile">
        <div className="userProfile-main">
          <ImageSide />
          <DetailsSide />
        </div>
      </div>
    </div>
  );
};

export default Profile;
