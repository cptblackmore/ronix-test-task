import type { Post, PostCreatePayload } from "../types/Post";
import { safeFetch } from "../utils/safeFetch";

export class PostService {
  private static baseURL = import.meta.env.VITE_API_URL + "/posts";
  private static API_KEY = import.meta.env.VITE_API_KEY;

  static async getPosts() {
    return safeFetch<Post[]>(this.baseURL, {
      method: "GET",
      headers: {
        "X-Api-Key": this.API_KEY,
      },
    });
  }

  static async createPost(post: PostCreatePayload) {
    const formData = new FormData();
    if (post.title) {
      formData.append("title", post.title);
    }
    if (post.image) {
      formData.append("image", post.image);
    }

    return safeFetch<Post>(this.baseURL, {
      method: "POST",
      headers: {
        "X-Api-Key": this.API_KEY,
      },
      body: formData,
    });
  }
}
