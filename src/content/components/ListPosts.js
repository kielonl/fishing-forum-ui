import React, { useContext } from "react";

import { PostContext, PostContextUpdate } from "../../contexts/postContext";

import beerFilledLike from "../../assets/beer-filled-like.png";
import beerNotFilledLike from "../../assets/beer-not-filled-like.png";
import beerFilledDislike from "../../assets/beer-filled-dislike.png";
import beerNotFilledDislike from "../../assets/beer-not-filled-dislike.png";
import { makeRequest } from "../../api/api";
import { UserContext } from "../../contexts/userContext";

const ListPosts = () => {
  const post = useContext(PostContext);
  const user = useContext(UserContext);
  const setPost = useContext(PostContextUpdate);
  console.log(user.user_id);
  const handleLike = async (e) => {
    const post_id = e.target.parentNode.parentNode.getAttribute("post_id");
    const request = await makeRequest("post", "/reaction/add", {
      user_id: user.user_id,
      post_id: post_id,
      value: 1,
    });
    const getResponse = await makeRequest("post", `/post${user?.user_id}`);
    setPost(getResponse.data);
  };
  const handleDislike = async (e) => {
    const post_id = e.target.parentNode.parentNode.getAttribute("post_id");

    const request = await makeRequest("post", "/reaction/add", {
      user_id: user.user_id,
      post_id: post_id,
      value: -1,
    });
    const getResponse = await makeRequest("post", "/post");
    setPost(getResponse.data);
  };
  const listPosts = post?.result?.map(
    ({ title, content, image, post_id, likes }) => {
      return (
        <div key={post_id} post_id={post_id} className="content-post">
          <div className="content-icons">
            <img
              onClick={(e) => handleLike(e)}
              className="content-icon-like"
              src={beerNotFilledLike}
              onMouseEnter={({ target }) => (target.src = beerFilledLike)}
              onMouseLeave={({ target }) => (target.src = beerNotFilledLike)}
            />
            <div className="content-score">{likes}</div>
            <img
              onClick={(e) => handleDislike(e)}
              className="content-icon-dislike"
              src={beerNotFilledDislike}
              onMouseEnter={({ target }) => (target.src = beerFilledDislike)}
              onMouseLeave={({ target }) => (target.src = beerNotFilledDislike)}
            />
          </div>
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
