import { useState, useContext } from "react";

import { UserContext } from "../../App";
import ErrorBox from "../../mainPage/components/ErrorBox";
import { makeRequest } from "../../api/api";

const AddPost = ({ setMode }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    value: "",
    ifError: false,
  });
  const { user } = useContext(UserContext);

  const HandleSubmit = async () => {
    try {
      await makeRequest("post", "/post/create", {
        title: title,
        content: content,
        author: user.user_id,
      });
      setMode(false);
    } catch (error) {
      setMode(true);
      setErrorMessage({
        value: error.response.data.message,
        ifError: true,
      });
    }
  };
  return (
    <div className="content-addPost">
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content of your post..."
        onChange={(e) => setContent(e.target.value)}
      />
      <ErrorBox error={errorMessage} />
      <button onClick={HandleSubmit} className="content-addPost-button">
        Add Post
      </button>
    </div>
  );
};

export default AddPost;
