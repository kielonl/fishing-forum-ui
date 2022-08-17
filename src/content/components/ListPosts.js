import React from "react";

const ListPosts = ({ posts }) => {
  return (
    <div>
      {console.log(posts)}
      {posts.map(({ title, content }) => {
        return (
          <div>
            <h1>{title}</h1>
            <div>{content}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ListPosts;
