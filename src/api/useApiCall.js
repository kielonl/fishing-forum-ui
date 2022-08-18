import { useEffect, useState } from "react";
import { makeRequest } from "./api";

export const useApiCall = (method, url) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getResponse = async () => {
      try {
        const resolve = await makeRequest(method, url);
        setResponse(resolve.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getResponse();
  }, [method, url]);
  return { response, error, loading };
};
