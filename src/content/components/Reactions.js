import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { PostContextUpdate } from "../../contexts/postContext";
import { apiRequest } from "../../api/api";

import beerFilledLike from "../../assets/beer-filled-like.png";
import beerNotFilledLike from "../../assets/beer-not-filled-like.png";
import beerFilledDislike from "../../assets/beer-filled-dislike.png";
import beerNotFilledDislike from "../../assets/beer-not-filled-dislike.png";

export const Reactions = ({ likes, reactedValue, post_id }) => {
  const setPost = useContext(PostContextUpdate);
  const user = useContext(UserContext);

  const HandleClick = async (value) => {
    await apiRequest("post", "/reaction/add", {
      user_id: user.user_id,
      post_id: post_id,
      value: value,
    });
    const getResponse = await apiRequest("get", `/post/${user?.user_id}`);
    setPost(getResponse);
  };

  return (
    <div className="content-icons">
      <img
        onClick={(e) => HandleClick(1)}
        className="content-icon-like"
        alt=""
        src={reactedValue === 1 ? beerFilledLike : beerNotFilledLike}
      />

      <div className="content-score">{likes}</div>
      <img
        onClick={(e) => HandleClick(-1)}
        className="content-icon-dislike"
        alt=""
        src={reactedValue === -1 ? beerFilledDislike : beerNotFilledDislike}
      />
    </div>
  );
};
