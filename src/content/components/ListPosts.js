import React, { useContext } from "react";

import { PostContext } from "../../contexts/postContext";
import { Reactions } from "./Reactions";
const ListPosts = () => {
  const post = useContext(PostContext);

  console.log(post);
  const listPosts = post?.result?.map(
    ({ title, content, image, post_id, likes, reactedValue }) => {
      return (
        <div key={post_id} post_id={post_id} className="content-post">
          <Reactions likes={likes} reactedValue={reactedValue} />
          <h1 className="content-post-title">{title}</h1>
          <div className="content-post-description">{content}</div>
          <img src={image} alt="" className="message-image" />
        </div>
      );
    }
  );
  return <div>{listPosts}</div>;
};

export default ListPosts;
