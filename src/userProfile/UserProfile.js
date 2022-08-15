import React from "react";

import "./styles/UserProfile.scss";
import NavBar from "../mainPage/components/NavBar";
import placeholder from "./assets/placeholder.jpg";

const UserProfile = () => {
  return (
    <div>
      <div className="userProfile-container">
        <NavBar />
        <div className="userProfile-profile">
          <div className="userProfile-main">
            <div className="userProfile-leftSide">
              <div className="userProfile-profileImage-container">
                <div className="userProfile-username">jacek</div>
                <img
                  className="userProfile-profileImage"
                  src={placeholder}
                  alt="prof"
                />
              </div>
            </div>
            <div className="userProfile-rightSide">
              <div className="userProfile-details">
                <div className="userProfile-details-inputs">
                  <div className="userProfile-details-address">
                    <div className="userProfile-address-row">
                      <input type="text" placeholder="Country" />
                      <input type="text" placeholder="City" />
                    </div>
                    <div className="userProfile-address-row">
                      <input type="text" placeholder="Street" />
                      <input type="text" placeholder="Voivodeship" />
                    </div>
                    <div className="userProfile-address-row">
                      Fishing card?
                      <input type="checkbox" />
                      <input type="number" placeholder="Years of experience" />
                      <input type="number" placeholder="Biggest catch" />
                    </div>
                    <div className="userProfile-button-container">
                      <button className="userProfile-button">Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
