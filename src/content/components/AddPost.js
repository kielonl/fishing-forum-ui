import { useState, useContext } from "react";
import axios from "axios";

import AddPostButton from "./AddPostButton";
import { UserContext } from "../../App";
const url = process.env.REACT_APP_LOGIN_ENDPOINT + "/post/create";

const AddPost = ({ setMode }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { user } = useContext(UserContext);

  const handleSubmit = () => {
    axios
      .post(url, { title: title, content: content, author: user.user_id })
      .then((response) => {
        setMode(false);
        console.log(response);
      })
      .catch((error) => {
        setMode(true);
        console.log(error);
      });
  };
  return (
    <div className="content-addPost">
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="cos"
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleSubmit} className="addPostButton">
        <AddPostButton />
      </button>
    </div>
  );
};

export default AddPost;
