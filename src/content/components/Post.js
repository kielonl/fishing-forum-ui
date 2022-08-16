import React from "react";

const Post = ({ title, description }) => {
  return (
    <div className="content-post">
      <h1 className="content-post-title">{title}</h1>
      <div className="content-post-description">{description}</div>
    </div>
  );
};
export default Post;
