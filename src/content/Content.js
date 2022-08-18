import React, { useState } from "react";

import "./styles/Content.scss";
import LoadPost from "./components/LoadPosts";
import AddPost from "./components/AddPost";

const Content = () => {
  const [addingMode, setAddingMode] = useState(false);
  const handleClick = () => {
    setAddingMode(true);
  };
  return (
    <div className="content-container">
      <div className="content-main-block">
        <LoadPost />
      </div>

      {!addingMode ? (
        <button onClick={handleClick} className="content-addPost-button">
          Add Post
        </button>
      ) : (
        <AddPost setMode={setAddingMode} />
      )}
    </div>
  );
};

export default Content;
