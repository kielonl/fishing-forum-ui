import React from "react";
import "../styles/imageBanner.css";

const ImageBanner = () => {
  return (
    <>
      <div className="imageBanner-container">
        <div className="imageBanner-text-banner">
          <div>WEDKARZE TYGODNIA</div>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuo_VfGXmQbbJxy4aRPGOh-uyQsPycHq_HEQ&usqp=CAU"
          alt="fisherman"
        />
      </div>
    </>
  );
};

export default ImageBanner;
