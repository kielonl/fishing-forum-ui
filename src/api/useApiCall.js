// import axios from "axios";
// import { useEffect, useState } from "react";
// const urlInternal = process.env.REACT_APP_API;

// export const pullData = (url) => {
//   const [response, setResponse] = useState(null);
//   const [loading, setLoading] = useState(true);
//   console.log(`${urlInternal}${url}`);
//   useEffect(() => {
//     axios
//       .get(`${urlInternal}${url}`)
//       .then((response) => {
//         setResponse(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, [url]);

//   return { response, loading };
// };

// export const makeRequest = (method, url, data = {}, headers = {}) => {
//   const response = axios({
//     method: method,
//     url: `${urlInternal}${url}`,
//     data: data,
//     headers: headers,
//   });
//   return response;
// };
