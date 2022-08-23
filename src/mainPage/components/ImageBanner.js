import React from "react";
import { Slide } from "react-slideshow-image";
import "../styles/imageBanner.scss";
import { PullData } from "../../api/useApiCall";

const ImageBanner = () => {
  const { loading, error, response: images } = PullData("/best");
  if (loading) return <div>loading</div>;
  if (error) return <div>{error}</div>;

  const properties = {
    duration: 2000,
    autoplay: true,
    transitonDuration: 500,
    arrows: true,
    infinite: true,
    indicators: true,
  };
  return (
    <div className="imageBanner-container">
      <div className="imageBanner-text-banner">
        <div>WEDKARZE TYGODNIA</div>
      </div>
      <Slide className="image-slider" {...properties} cssClass="image-slider">
        {images.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div style={{ backgroundImage: `url(${slideImage.url})` }} />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default ImageBanner;
