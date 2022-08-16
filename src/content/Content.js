import React, { useState } from "react";

import "./styles/Content.scss";
import Post from "./components/Post";
import AddPost from "./components/AddPost";
import AddPostButton from "./components/AddPostButton";

const Content = () => {
  const [addingMode, setAddingMode] = useState(false);

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
        <AddPostButton setMode={setAddingMode} />
      )}
    </div>
  );
};

export default Content;
