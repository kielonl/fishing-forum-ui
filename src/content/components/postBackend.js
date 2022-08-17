import axios from "axios";
const url = process.env.REACT_APP_LOGIN_ENDPOINT + "/post";

export const getPosts = async () => {
  axios
    .get(url)
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      return error;
    });
};
