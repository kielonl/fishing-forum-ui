import React, { useState } from "react";

export const PostContext = React.createContext();
export const PostContextUpdate = React.createContext();

export const PostProvider = ({ children }) => {
  const [post, setPost] = useState(null);

  return (
    <PostContext.Provider value={post}>
      <PostContextUpdate.Provider value={setPost}>
        {children}
      </PostContextUpdate.Provider>
    </PostContext.Provider>
  );
};
