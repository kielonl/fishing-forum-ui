import { useState, useContext } from "react";

import { UserContext } from "../../contexts/userContext";
import { PostContextUpdate } from "../../contexts/postContext";
import { HTTP_METHODS } from "../../constants/httpMethods";
import { alertColors } from "../../constants/alertColors";
import { apiRequest } from "../../api/api";
import { AlertBox } from "../../mainPage/components/AlertBox";

const AddPost = ({ setMode }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [alertMessage, setAlertMessage] = useState({
    value: "",
    ifAlert: false,
    color: null,
  });
  const user = useContext(UserContext);
  const setPost = useContext(PostContextUpdate);

  const HandleSubmit = async () => {
    const sendPost = await apiRequest(HTTP_METHODS.POST, "/post/create", {
      title: title,
      content: content,
      author: user.user_id,
      image: image,
    });
    const errorResponse = sendPost?.response?.data.message;
    setMode(false);
    if (errorResponse) {
      setMode(true);
      setAlertMessage({
        value: errorResponse,
        ifAlert: true,
        color: alertColors.red,
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
      <AlertBox alertInfo={alertMessage} />
      <button onClick={HandleSubmit} className="content-addPost-button">
        Add Post
      </button>
    </div>
  );
};

export default AddPost;
