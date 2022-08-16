import React from "react";

import Address from "./Address";
import Details from "./Details";
const DetailsSide = () => {
  return (
    <div className="userProfile-detailsSide">
      <div className="userProfile-details-inputs">
        <div className="userProfile-details-address">
          <Address />
          <Details />
          <div className="userProfile-button-container">
            <button className="userProfile-button">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSide;
