import React, { useContext, useEffect } from "react";

import { PostContext, PostContextUpdate } from "../../contexts/postContext";
import { apiRequest } from "../../api/api";
import { HTTP_METHODS } from "../../constants/httpMethods";
const ListPosts = () => {
  const post = useContext(PostContext);
  const setPost = useContext(PostContextUpdate);
  const pullData = async () => {
    const data = await apiRequest(
      HTTP_METHODS.GET,
      "/post/6ab0ce9d-28b2-483d-a1ec-cf1ec38db784"
    );
    setPost(data);
  };
  useEffect(() => {
    pullData();
  }, []);

  const listPosts = post?.result?.map(({ title, content, image, post_id }) => {
    if (!post) return <div>loading</div>;
    return (
      <div key={post_id} className="content-post">
        <h1 className="content-post-title">{title}</h1>
        <div className="content-post-description">{content}</div>
        <img src={image} alt="" className="message-image" />
      </div>
    );
  });
  return <div>{listPosts}</div>;
};

export default ListPosts;
