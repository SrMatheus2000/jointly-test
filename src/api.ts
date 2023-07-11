import axios from "axios";
import { Comment, Post } from "./types";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPosts = async () => {
  const { data } = await api.get<Post[]>("/posts");
  return data;
}

export const getComments = async (postId: number) => {
  const { data } = await api.get<Comment[]>(`/posts/${postId}/comments`);
  return data;
}