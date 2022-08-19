import React, { useContext } from "react";

import { PostContext } from "../../contexts/postContext";

const ListPosts = () => {
  const post = useContext(PostContext);

  const listPosts = post?.result?.map(({ title, content, post_id }) => {
    return (
      <div key={post_id} className="content-post">
        <h1 className="content-post-title">{title}</h1>
        <div className="content-post-description">{content}</div>
      </div>
    );
  });
  return <div>{listPosts}</div>;
};

export default ListPosts;
