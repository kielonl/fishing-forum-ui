import React, { useContext, useEffect } from "react";

import ListPosts from "./ListPosts";
import { useApiCall } from "../../api/useApiCall";

import { PostContextUpdate } from "../../contexts/postContext";

const Post = () => {
  const setPost = useContext(PostContextUpdate);

  const { loading, error, response: loadedPosts } = useApiCall("get", "/post");
  useEffect(() => {
    setPost(loadedPosts);
  }, [loadedPosts]);

  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;
  return <ListPosts />;
};
export default Post;
