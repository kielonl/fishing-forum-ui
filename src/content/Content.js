import React, { useState, useContext } from "react";

import "./styles/Content.scss";
import LoadPost from "./components/LoadPosts";
import AddPost from "./components/AddPost";
import { UserContext } from "../contexts/userContext";

const Content = () => {
  const [addingMode, setAddingMode] = useState(false);
  const user = useContext(UserContext);
  const handleClick = () => {
    setAddingMode(true);
  };
  return (
    <div className="content-container">
      <div className="content-main-block">
        <LoadPost />
      </div>

      {Object.keys(user).length !== 0 ? (
        !addingMode ? (
          <button onClick={handleClick} className="content-addPost-button">
            Add Post
          </button>
        ) : (
          <AddPost setMode={setAddingMode} />
        )
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Content;
