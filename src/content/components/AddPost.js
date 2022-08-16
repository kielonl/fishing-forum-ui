import { useState, useContext } from "react";
import axios from "axios";

import { UserContext } from "../../App";
import ErrorBox from "../../mainPage/components/ErrorBox";
const url = process.env.REACT_APP_LOGIN_ENDPOINT + "/post/create";

const AddPost = ({ setMode }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    value: "asdfasdf",
    ifError: true,
  });
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
        setErrorMessage({ value: "asdfasdf", ifError: true });
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
      <ErrorBox error={errorMessage} />
      <button onClick={handleSubmit} className="content-addPost-button">
        Add Post
      </button>
    </div>
  );
};

export default AddPost;
