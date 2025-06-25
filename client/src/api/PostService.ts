import type { Post } from "../types/Post";
import { safeFetch } from "../utils/safeFetch";

export class PostService {
  private static baseURL = "http://localhost:5000/api/posts";

  static async getPosts() {
    return safeFetch<Post[]>(this.baseURL, { method: "GET" });
  }
}
