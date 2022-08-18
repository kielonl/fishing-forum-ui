import React from "react";
import { PostProvider } from "../contexts/postContext";

import ImageBanner from "./components/ImageBanner";
import Content from "../content/Content";

const MainPage = () => {
  return (
    <div>
      <PostProvider>
        <ImageBanner />
        <Content />
      </PostProvider>
    </div>
  );
};
export default MainPage;
