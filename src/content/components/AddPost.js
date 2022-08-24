import { useState, useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { PostContextUpdate } from "../../contexts/postContext";

import { apiRequest } from "../../api/api";
import ErrorBox from "../../mainPage/components/ErrorBox";

const AddPost = ({ setMode }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const user = useContext(UserContext);
  const setPost = useContext(PostContextUpdate);
  const [image, setImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState({
    value: "",
    ifError: false,
  });

  const HandleSubmit = async () => {
    try {
      await apiRequest("post", "/post/create", {
        title: title,
        content: content,
        author: user.user_id,
        image: image,
      });
      const getResponse = await apiRequest("get", "/post");
      setPost(getResponse.data);
      setMode(false);
    } catch (error) {
      setMode(true);
      setErrorMessage({
        value: error.response.data.message,
        ifError: true,
      });
    }
  };
  const sendFile = (e) => {
    const [file] = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
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
      <input type="file" onChange={sendFile} accept="image/*" />
      <ErrorBox error={errorMessage} />
      <button onClick={HandleSubmit} className="content-addPost-button">
        Add Post
      </button>
    </div>
  );
};

export default AddPost;
