import React, { useContext, useEffect } from "react";

import { Reactions } from "./Reactions";

import { PostContext, PostContextUpdate } from "../../contexts/postContext";
import { apiRequest } from "../../api/api";
import { HTTP_METHODS } from "../../constants/httpMethods";
import { UserContext } from "../../contexts/userContext";
import { listComments } from "./listComments";

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
    ({ title, content, image, post_id, likes, reactedValue, comments }, i) => {
      if (post.length === 0) return <div>loading</div>;
      return (
        <div key={i} className="content-post">
          <div className="content-post-leftSide">
            <Reactions
              post_id={post_id}
              likes={likes}
              reactedValue={reactedValue}
            />
          </div>
          <div className="content-post-rightSide">
            <h1 className="content-post-title">{title}</h1>
            <div className="content-post-description">{content}</div>
            <img src={image} alt="" className="message-image" />
            <h1 className="post-comments">
              {comments.length > 0 ? listComments({ comments }) : <div></div>}
            </h1>
          </div>
        </div>
      );
    }
  );
  return <div>{listPosts}</div>;
};

export default ListPosts;
