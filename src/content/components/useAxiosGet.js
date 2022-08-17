import axios from "axios";

import { useState, useEffect } from "react";

export const useAxiosGet = (url) => {
  const [post, setPost] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  console.log(url);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(url);
        setPost(response.data);
        console.log(post);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);
  return { post, error, loaded };
};
