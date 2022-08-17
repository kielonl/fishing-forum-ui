import React from "react";

const ListPosts = ({ posts }) => {
  return (
    <div>
      {posts.map(({ title, content, index }) => {
        return (
          <div>
            <h1 key={index}>{title}</h1>
            <div key={index}>{content}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ListPosts;
