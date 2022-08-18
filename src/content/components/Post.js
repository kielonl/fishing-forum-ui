import React from "react";

import ListPosts from "./ListPosts";
import { useApiCall } from "../../api/useAsync";
import { makeRequest } from "../../api/api";

const Post = () => {
  const {
    loading,
    error,
    response: posts,
  } = useApiCall(makeRequest("get", "/post"));

  if (loading) return <div>Loading</div>;
  if (error) return <div>error</div>;
  return <ListPosts posts={posts.result} />;
};
export default Post;
