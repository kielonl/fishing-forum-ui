import { useState, useContext } from "react";

import { ListComments } from "./ListComments";
import { ApiCreate } from "./ApiCreate";
import { UserContext } from "../../contexts/userContext";

export const Post = ({ title, content, comments, image, post_id, setMode }) => {
  const [addingMode, setAddingMode] = useState(false);
  const [reply, setReply] = useState("");
  const user = useContext(UserContext);
  const handleClick = () => {
    setAddingMode(true);
  };

  const renderDisplayButton = (post_id) => {
    if (addingMode) {
      return (
        <ApiCreate
          setMode={setAddingMode}
          data={{
            parent_id: post_id,
            user_id: user?.user_id,
            content: reply,
          }}
          endpoint="/post/comment"
        >
          <textarea
            placeholder="Reply..."
            className="reply-text-area"
            onChange={(e) => setReply(e.target.value)}
          />
        </ApiCreate>
      );
    }
    return (
      <button onClick={handleClick} className="content-addPost-button">
        Reply
      </button>
    );
  };
  return (
    <div key={post_id} className="content-post-rightSide">
      <h1 className="content-post-title">{title}</h1>
      <div className="content-post-description">{content}</div>
      <img src={image} alt="" className="message-image" />
      <h1 className="post-comments">
        {comments.length > 0 && <ListComments comments={comments} />}
      </h1>
      {renderDisplayButton(post_id)}
    </div>
  );
};
