import React from "react";

import { AxiosPost } from "./AxiosPost";
import ListPosts from "./ListPosts";

const url = process.env.REACT_APP_LOGIN_ENDPOINT + "/post";
const Post = () => {
  const { post, error, loaded } = AxiosPost(url);
  console.log(post);

  if (loaded) {
    return error ? (
      <div>Error: {error}</div>
    ) : (
      <ListPosts posts={post.result} />
    );
  }
  return (
    <div className="content-post">
      <div>loading</div>
    </div>
  );
};
export default Post;
