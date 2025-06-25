import type { Comment } from "./Comment";

export interface Post {
  id: string;
  postedAt: string;
  title: string;
  comments: Comment[];
  likes: number;
  image?: string;
}

export interface PostCreatePayload {
  title?: string;
  image?: File;
}
