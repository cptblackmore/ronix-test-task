import type { Comment } from "./Comment";

type PostContent =
  | { text: string; image?: string }
  | { image: string; text?: string };

export interface Post {
  id: number;
  postedAt: string;
  title: string;
  content: PostContent;
  comments: Comment[];
  likes: number;
}
