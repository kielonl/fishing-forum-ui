import { useEffect, useState } from "react";

export const useApiCall = (apiCall) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getResponse = async () => {
      try {
        const resolve = await apiCall;
        setResponse(resolve.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getResponse();
  }, []);
  return { response, error, loading };
};
