import Axios from "axios";

export const http = Axios.create({
  baseURL: "http://jddj.hbird.com.cn/wp-json/jddj/v1/",
});

export async function getPosts(params) {
  const res = await http.get("posts", { params });
  return res.data;
}

export async function getPostDetail(id) {
  const res = await http.get("posts/" + id);
  return res.data;
}

export async function getTerm(name) {
  const res = await http.get("terms/" + name);
  return res.data;
}
