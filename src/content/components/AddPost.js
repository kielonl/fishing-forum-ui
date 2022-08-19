import { useState, useContext } from "react";

import { UserContext } from "../../App";
import ErrorBox from "../../mainPage/components/ErrorBox";
import { makeRequest } from "../../api/api";

const AddPost = ({ setMode }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
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
        image: image,
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
