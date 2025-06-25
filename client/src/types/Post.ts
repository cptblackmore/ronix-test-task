import type { Comment } from "./Comment";

export interface Post {
  id: number;
  postedAt: string;
  title: string;
  comments: Comment[];
  likes: number;
  image?: string;
}
