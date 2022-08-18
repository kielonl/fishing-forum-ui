import React from "react";

const ListPosts = ({ posts }) => {
  return (
    <div>
      {posts.map(({ title, content, post_id }) => {
        return (
          <div key={post_id} className="content-post">
            <h1 className="content-post-title">{title}</h1>
            <div className="content-post-description">{content}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ListPosts;
