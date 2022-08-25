import { useState, useContext } from "react";

import { UserContext } from "../../contexts/userContext";
import { PostContextUpdate } from "../../contexts/postContext";
import { HTTP_METHODS } from "../../constants/httpMethods";
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
    const sendPost = await apiRequest(HTTP_METHODS.POST, "/post/create", {
      title: title,
      content: content,
      author: user.user_id,
      image: image,
    });
    setMode(false);
    if (sendPost?.response?.data?.message) {
      setMode(true);
      setErrorMessage({
        value: sendPost?.response?.data?.message,
        ifError: true,
      });
    }
    const getResponse = await apiRequest(
      HTTP_METHODS.GET,
      "/post/6ab0ce9d-28b2-483d-a1ec-cf1ec38db784"
    );
    setPost(getResponse);
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
