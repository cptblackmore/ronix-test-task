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

  static async getPostById(postId: string) {
    return safeFetch<Post>(`${this.baseURL}/${postId}`, {
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

  static async createComment(postId: string, text: string) {
    return safeFetch<Post>(`${this.baseURL}/${postId}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": this.API_KEY,
      },
      body: JSON.stringify({ text }),
    });
  }

  static async likePost(postId: string): Promise<Post | null> {
    const likedRaw = localStorage.getItem("likedPosts");
    const liked: Set<string> = new Set(likedRaw ? JSON.parse(likedRaw) : []);

    if (liked.has(postId)) {
      return null;
    }

    const post = await safeFetch<Post>(`${this.baseURL}/${postId}/likes`, {
      method: "POST",
      headers: {
        "X-Api-Key": this.API_KEY,
      },
    });

    liked.add(postId);
    localStorage.setItem("likedPosts", JSON.stringify([...liked]));

    return post;
  }
}
