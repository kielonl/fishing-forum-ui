import React from "react";
import Carousel from "framer-motion-carousel";
import { useApiCall } from "../../api/useApiCall";
import "../styles/imageBanner.scss";

const ImageBanner = () => {
  const { loading, error, response: images } = useApiCall("get", "/best");
  if (loading) return <div>🚽</div>;
  if (error) return <div>😰</div>;

  const renderGallery = () => {
    return images.map((slideImage, index) => (
      <div className="each-slide" key={index}>
        <div style={{ backgroundImage: `url(${slideImage.url})` }} />
      </div>
    ));
  };

  return (
    <div className="imageBanner-container">
      <div className="imageBanner-text-banner">
        <div>WEDKARZE TYGODNIA</div>
      </div>
      <div>
        <Carousel>{renderGallery()}</Carousel>
      </div>
    </div>
  );
};

export default ImageBanner;
