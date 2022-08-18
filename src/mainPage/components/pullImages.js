import { makeRequest } from "../../api/api";

export const pullImages = () => {
  return makeRequest("/best");
};
