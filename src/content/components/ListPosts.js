import React, { useContext, useEffect } from "react";

import { Reactions } from "./Reactions";

import { PostContext, PostContextUpdate } from "../../contexts/postContext";
import { apiRequest } from "../../api/api";
import { HTTP_METHODS } from "../../constants/httpMethods";
import { UserContext } from "../../contexts/userContext";
import { Post } from "./Post";

const ListPosts = () => {
  const post = useContext(PostContext);
  const setPost = useContext(PostContextUpdate);
  const user = useContext(UserContext);

  const pullData = async () => {
    const data = await apiRequest(HTTP_METHODS.GET, `/post/${user?.user_id}`);
    setPost(data);
  };
  useEffect(() => {
    pullData();
  }, [user]);

  const listPosts = post?.result?.map(
    ({ title, content, image, post_id, likes, reactedValue, comments }) => {
      if (post.length === 0) return <div key={post_id}>loading</div>;
      return (
        <div key={post_id} className="content-post">
          <div className="content-post-leftSide">
            <Reactions
              post_id={post_id}
              likes={likes}
              reactedValue={reactedValue}
            />
          </div>
          <Post
            post_id={post_id}
            title={title}
            content={content}
            comments={comments}
            image={image}
          />
        </div>
      );
    }
  );
  return <div>{listPosts}</div>;
};

export default ListPosts;
