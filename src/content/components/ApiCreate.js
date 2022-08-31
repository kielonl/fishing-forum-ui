import { useState, useContext } from "react";

import { UserContext } from "../../contexts/userContext";
import { PostContextUpdate } from "../../contexts/postContext";
import { HTTP_METHODS } from "../../constants/httpMethods";
import { alertColors } from "../../constants/alertColors";
import { apiRequest } from "../../api/api";
import { AlertBox } from "../../mainPage/components/AlertBox";

export const ApiCreate = ({ children, data, setMode, endpoint }) => {
  const [alertMessage, setAlertMessage] = useState({
    value: "",
    ifAlert: false,
    color: null,
  });
  const user = useContext(UserContext);
  const setPost = useContext(PostContextUpdate);

  const HandleSubmit = async () => {
    const sendPost = await apiRequest(HTTP_METHODS.POST, endpoint, data);

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
      `/post/${user?.user_id}`
    );
    setPost(getResponse);
  };

  return (
    <div className="content-addPost">
      {children}
      <AlertBox alertInfo={alertMessage} />
      <button onClick={HandleSubmit} className="content-addPost-button">
        Add Post
      </button>
    </div>
  );
};
