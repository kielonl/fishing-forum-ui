import React from "react";
import { Slide } from "react-slideshow-image";
import "../styles/imageBanner.css";
import { useState, useEffect } from "react";
import axios from "axios";
const url = process.env.REACT_APP_LOGIN_ENDPOINT + "/best";

const ImageBanner = () => {
  const [images, setImages] = useState([]);
  const pullSlideImages = async () => {
    axios
      .get(url)
      .then((response) => {
        const data = response.data.images;
        setImages(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    pullSlideImages();
  }, []);
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
      <Slide className="image-slider" {...properties}>
        {images.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div style={{ backgroundImage: `url(${slideImage.url})` }}>
              {/* <span>{slideImage.caption}</span> */}
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default ImageBanner;
