import { makeRequest } from "../../api/useApiCall";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { PostContextUpdate } from "../../contexts/postContext";

import beerFilledLike from "../../assets/beer-filled-like.png";
import beerNotFilledLike from "../../assets/beer-not-filled-like.png";
import beerFilledDislike from "../../assets/beer-filled-dislike.png";
import beerNotFilledDislike from "../../assets/beer-not-filled-dislike.png";

export const Reactions = ({ likes, reactedValue }) => {
  const setPost = useContext(PostContextUpdate);
  const user = useContext(UserContext);

  const HandleClick = async (e, value) => {
    console.log(value);
    const post_id = e.target.parentNode.parentNode.getAttribute("post_id");
    const request = makeRequest("post", "/reaction/add", {
      user_id: user.user_id,
      post_id: post_id,
      value: value,
    });
    console.log(request);
    const getResponse = await makeRequest("get", `/post/${user?.user_id}`);

    setPost(getResponse.data);
  };

  return (
    <div className="content-icons">
      <img
        onClick={(e) => HandleClick(e, 1)}
        className="content-icon-like"
        src={reactedValue === 1 ? beerFilledLike : beerNotFilledLike}
        // onMouseEnter={({ target }) => (target.src = beerFilledLike)}
        // onMouseLeave={({ target }) => (target.src = beerNotFilledLike)}
      />
      <div className="content-score">{likes}</div>
      <img
        onClick={(e) => HandleClick(e, -1)}
        className="content-icon-dislike"
        src={reactedValue === -1 ? beerFilledDislike : beerNotFilledDislike}
        // onMouseEnter={({ target }) => (target.src = beerFilledDislike)}
        // onMouseLeave={({ target }) => (target.src = beerNotFilledDislike)}
      />
    </div>
  );
};
