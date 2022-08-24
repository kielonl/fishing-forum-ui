import React from "react";
import Carousel from "framer-motion-carousel";
import "../styles/imageBanner.scss";
import { useApiCall } from "../../api/useApiCall";

const ImageBanner = () => {
  const { loading, error, response: images } = useApiCall("get", "/best");
  if (loading) return <div>loading</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="imageBanner-container">
      <div className="imageBanner-text-banner">
        <div>WEDKARZE TYGODNIA</div>
      </div>
      <Carousel className="image-slider">
        {images.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div style={{ backgroundImage: `url(${slideImage.url})` }} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageBanner;
