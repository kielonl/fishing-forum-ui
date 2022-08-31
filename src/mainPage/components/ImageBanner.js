import React, { useEffect, useState } from "react";
import Carousel from "framer-motion-carousel";
import { apiRequest } from "../../api/api";
import { HTTP_METHODS } from "../../constants/httpMethods";
import "../styles/imageBanner.scss";

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
    if (images.length === 0) return "loading";
    return images?.map((slideImage, index) => (
      <div className="each-slide" key={index}>
        <img src={slideImage?.image} alt="slide" />
      </div>
    ));
  };

  return (
    <div className="imageBanner-container">
      <div className="imageBanner-text-banner">
        <div>WEDKARZE TYGODNIA</div>
      </div>
      <Carousel>{images ? renderGallery() : "error"}</Carousel>
    </div>
  );
};

export default ImageBanner;
