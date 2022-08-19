import React, { useState, useContext } from "react";

import "./styles/Content.scss";
import LoadPost from "./components/LoadPosts";
import AddPost from "./components/AddPost";
import { UserContext } from "../contexts/userContext";

const Content = () => {
  const [addingMode, setAddingMode] = useState(false);
  const user = useContext(UserContext);
  const displayButton = () => {
    if (Object.keys(user).length !== 0) {
      if (!addingMode) {
        return (
          <button onClick={handleClick} className="content-addPost-button">
            Add Post
          </button>
        );
      }
      return <AddPost setMode={setAddingMode} />;
    }
    return <div></div>;
  };
  const handleClick = () => {
    setAddingMode(true);
  };
  return (
    <div className="content-container">
      <div className="content-main-block">
        <LoadPost />
      </div>

      <div>{displayButton()}</div>
    </div>
  );
};

export default Content;
