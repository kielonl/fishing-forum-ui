import React from "react";

import "../styles/Content.scss";
import Post from "./Post";

const Content = () => {
  return (
    <div className="content-container">
      <div className="content-main-block">
        <Post
          title="103kg potwor"
          description="W miejscowości Michałówek w woj. Łódzkim został wyłowiony sum o rekordowej masie 😱😱."
        />
      </div>
    </div>
  );
};

export default Content;
