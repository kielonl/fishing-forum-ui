import React, { useState, useContext } from "react";

import "./styles/Content.scss";
import { ApiCreate } from "./components/ApiCreate";
import { UserContext } from "../contexts/userContext";
import ListPosts from "./components/ListPosts";

const Content = () => {
  const [addingMode, setAddingMode] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const user = useContext(UserContext);

  const handleClick = () => {
    setAddingMode(true);
  };

  const sendFile = (e) => {
    const [file] = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
  };

  const displayButton = () => {
    if (user && Object.keys(user).length === 0) {
      return;
    }
    if (addingMode) {
      return (
        <ApiCreate
          setMode={setAddingMode}
          data={{
            author: user?.user_id,
            title: title,
            content: content,
            image: image,
          }}
          endpoint="/post/create"
        >
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
        </ApiCreate>
      );
    }
    return (
      <button onClick={handleClick} className="content-addPost-button">
        Add Post
      </button>
    );
  };

  return (
    <div className="content-container">
      <div className="content-main-block">
        <ListPosts />
      </div>

      <div>{displayButton()}</div>
    </div>
  );
};

export default Content;
