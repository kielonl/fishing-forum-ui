import { useState, useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { makeRequest } from "../../api/api";
import ErrorBox from "../../mainPage/components/ErrorBox";

const AddPost = ({ setMode }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const user = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState({
    value: "",
    ifError: false,
  });

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
