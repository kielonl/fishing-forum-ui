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
      return <div></div>;
    }
    if (addingMode) {
      return <AddPost setMode={setAddingMode} />;
    }
    return (
      <button onClick={handleClick} className="content-addPost-button">
        Add Post
      </button>
    );
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
