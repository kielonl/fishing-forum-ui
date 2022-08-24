import React, { useContext, useEffect } from "react";
import { makeRequest } from "../../api/api";
import { PostContextUpdate } from "../../contexts/postContext";
import { PostContext } from "../../contexts/postContext";

const ListPosts = () => {
  const post = useContext(PostContext);
  const setPost = useContext(PostContextUpdate);

  const { loading, error, response: loadedPosts } = makeRequest("get", "/post");
  useEffect(() => {
    setPost(loadedPosts);
  }, [loadedPosts]);

  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;
  const listPosts = post?.result?.map(({ title, content, image, post_id }) => {
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
