import React, { useContext, useEffect } from "react";

import ListPosts from "./ListPosts";
import { PullData } from "../../api/useApiCall";

import { PostContextUpdate } from "../../contexts/postContext";
import { UserContext } from "../../contexts/userContext";

const Post = () => {
  const setPost = useContext(PostContextUpdate);
  const user = useContext(UserContext);
  const {
    loading,
    error,
    response: loadedPosts,
  } = PullData(`/post/${user?.user_id}`);

  useEffect(() => {
    setPost(loadedPosts);
  }, [loadedPosts]);

  if (loading) return <div>loading</div>;
  if (!error) return <div>error</div>;
  return <ListPosts />;
};
export default Post;
