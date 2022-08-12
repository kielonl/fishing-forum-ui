import React from "react";
import NavBar from "./components/navBar";
import ImageBanner from "./components/imageBanner";
import Content from "./components/content";

const MainPage = () => {
  return (
    <div>
      <NavBar />
      <ImageBanner />
      <Content />
    </div>
  );
};
export default MainPage;
