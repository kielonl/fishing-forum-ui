import React, { useState, useContext } from "react";

import "./styles/Content.scss";
import AddPost from "./components/AddPost";
import { UserContext } from "../contexts/userContext";
import ListPosts from "./components/ListPosts";

const Content = () => {
  const [addingMode, setAddingMode] = useState(false);
  const user = useContext(UserContext);

  const handleClick = () => {
    setAddingMode(true);
  };

  const displayButton = () => {
    if (user && Object.keys(user).length === 0) {
      return;
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

  return (
    <div className="content-container">
      <div className="content-main-block">
        <ListPosts />
      </div>

      <div>{displayButton()}</div>
    </div>
  );
};

export default Content;
