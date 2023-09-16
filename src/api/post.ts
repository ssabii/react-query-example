import axios from "axios";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const fetchPost = async (postId: number) => {
  const { data } = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  return data;
}

export const fetchPosts = async () => {
  const { data } = await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts");

  return data;
}