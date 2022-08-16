import React, { useState } from "react";

import "./styles/Content.scss";
import Post from "./components/Post";
import AddPost from "./components/AddPost";

const Content = () => {
  const [addingMode, setAddingMode] = useState(false);
  const handleClick = () => {
    setAddingMode(true);
  };
  return (
    <div className="content-container">
      <div className="content-main-block">
        <Post
          title="103kg potwor"
          description="W miejscowości Michałówek w woj. Łódzkim został wyłowiony sum o rekordowej masie 😱😱."
        />
      </div>
      {console.log(addingMode)}

      {console.log(addingMode)}
      {addingMode ? (
        <AddPost setMode={setAddingMode} />
      ) : (
        <button onClick={handleClick} className="content-addPost-button">
          Add Post
        </button>
      )}
    </div>
  );
};

export default Content;
