import React from "react";
import { Slide } from "react-slideshow-image";
import "../styles/imageBanner.css";

const ImageBanner = () => {
  const slideImages = [
    {
      url: "https://ipla.pluscdn.pl/dituel/cp/1t/1tk62pu34rqvkhg3c26zxrpq3d7xgfdb.jpg",
      caption: "Slide 1",
    },
    {
      url: "https://imgcdn1.przelom.pl/im/v1/news-900-widen-wm/2020/03/30/30423_1585584202_97964700.jpg",
      caption: "Slide 2",
    },
    {
      url: "https://d-art.ppstatic.pl/kadry/k/r/1/93/33/58c04527eddcc_o_medium.jpg",
      caption: "Slide 3",
    },
  ];
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
        {slideImages.map((slideImage, index) => (
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
