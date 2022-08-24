import React, { useEffect, useState } from "react";
import Carousel from "framer-motion-carousel";
import { apiRequest } from "../../api/api";
import { HTTP_METHODS } from "../../constants/httpMethods";
import "../styles/imageBanner.scss";

const properties = {
  duration: 2000,
  autoplay: true,
  transitonDuration: 500,
  arrows: true,
  infinite: true,
  indicators: true,
};

const ImageBanner = () => {
  const [images, setImages] = useState([]);

  const pullData = async () => {
    const data = await apiRequest(HTTP_METHODS.GET, "/best");
    setImages(data);
  };

  useEffect(() => {
    pullData();
  }, []);

  const renderGallery = () => {
    if (images.length == 0) return "No ładowanie";

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
        <Carousel>{images ? renderGallery() : "No błont kolego"}</Carousel>
      </div>
    </div>
  );
};

export default ImageBanner;
