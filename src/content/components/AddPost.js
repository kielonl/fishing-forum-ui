import { useState, useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { PostContext, PostContextUpdate } from "../../contexts/postContext";

import { makeRequest } from "../../api/api";
import ErrorBox from "../../mainPage/components/ErrorBox";

const AddPost = ({ setMode }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const user = useContext(UserContext);
  const post = useContext(PostContext);
  const setPost = useContext(PostContextUpdate);
  const [errorMessage, setErrorMessage] = useState({
    value: "",
    ifError: false,
  });

  const HandleSubmit = async () => {
    try {
      const response = await makeRequest("post", "/post/create", {
        title: title,
        content: content,
        author: user.user_id,
      });
      setPost(post.result.unshift(response.data.result[0]));
    } catch (error) {
      setMode(true);
      setErrorMessage({
        value: error,
        ifError: true,
      });
      console.log(error);
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
