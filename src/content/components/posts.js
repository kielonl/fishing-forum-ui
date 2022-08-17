import { makeRequest } from "../../api/api";

export function getPosts() {
  return makeRequest("/post");
}
