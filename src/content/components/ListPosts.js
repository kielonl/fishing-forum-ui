import React from "react";

const ListPosts = ({ posts }) => {
  return (
    <div>
      {posts.map(({ title, content, post_id }) => {
        return (
          <div key={post_id}>
            <h1>{title}</h1>
            <div>{content}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ListPosts;
