import { useContext, useState } from "react";

import { UserContext } from "../../contexts/userContext";
import { apiRequest } from "../../api/api";
import { HTTP_METHODS } from "../../constants/httpMethods";
import { alertColors } from "../../constants/alertColors";
import { PostContextUpdate } from "../../contexts/postContext";
import { AlertBox } from "../../mainPage/components/AlertBox";

export const Reply = ({ post_id, setMode }) => {
  const [content, setContent] = useState("");
  const [alertMessage, setAlertMessage] = useState({
    value: "",
    ifAlert: false,
    color: null,
  });
  const user = useContext(UserContext);
  const setPost = useContext(PostContextUpdate);
  const handleSubmit = async () => {
    const sendReply = await apiRequest(HTTP_METHODS.POST, "/post/comment", {
      parent_id: post_id,
      user_id: user?.user_id,
      content: content,
    });

    const errorResponse = sendReply?.response?.data.message;
    setMode(false);

    if (true) {
      setAlertMessage({
        value: errorResponse,
        ifAlert: true,
        color: alertColors.red,
      });
    }

    const getResponse = await apiRequest(
      HTTP_METHODS.GET,
      `/post/${user?.user_id}`
    );
    setPost(getResponse);
  };

  return (
    <div className="">
      <textarea
        placeholder="Reply..."
        className="reply-text-area"
        onChange={(e) => setContent(e.target.value)}
      />
      <AlertBox alertInfo={alertMessage} />
      <button className="content-addPost-button" onClick={handleSubmit}>
        Add Post
      </button>
    </div>
  );
};
