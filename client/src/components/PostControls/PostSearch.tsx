import type { Post } from "../../types/Post";

interface PostSearchProps {
  posts: Post[];
}

export const PostSearch: React.FC<PostSearchProps> = () => {
  return <input />;
};
