import axios from "axios";
import { useEffect, useState } from "react";
const urlInternal = process.env.REACT_APP_API;

export const PullData = (url) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(`${urlInternal}${url}`);
  useEffect(() => {
    axios
      .get(`${urlInternal}${url}`)
      .then((response) => {
        setResponse(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { response, error, loading };
};
