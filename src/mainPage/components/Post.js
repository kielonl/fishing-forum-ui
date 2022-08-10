import React from "react";

const Post = (props) => {
  return (
    <>
      <div className="content-post">
        <h1 className="content-post-title">{props.title}</h1>
        <div className="content-post-description">{props.description}</div>
      </div>
    </>
  );
};
export default Post;
