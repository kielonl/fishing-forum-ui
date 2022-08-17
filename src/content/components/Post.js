import React from "react";

import ListPosts from "./ListPosts";
import { useAsync } from "../../api/useAsync";
import { getPosts } from "./posts";

const Post = () => {
  const { loading, error, value: posts } = useAsync(getPosts);

  if (loading) return <div>Loading</div>;
  if (error) return <div>error</div>;
  return <ListPosts posts={posts.result} />;
};
export default Post;
