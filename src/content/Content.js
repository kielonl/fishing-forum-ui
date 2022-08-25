import React, { useState, useContext } from "react";

import "./styles/Content.scss";
import AddPost from "./components/AddPost";
import { UserContext } from "../contexts/userContext";
import ListPosts from "./components/ListPosts";

const Content = () => {
  const [addingMode, setAddingMode] = useState(false);
  const user = useContext(UserContext);

  const displayButton = () => {
    if (user === undefined) return;
    if (Object.keys(user).length === 0) {
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
        <ListPosts />
      </div>

      <div>{displayButton()}</div>
    </div>
  );
};

export default Content;
