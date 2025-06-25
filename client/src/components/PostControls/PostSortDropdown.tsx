import type { Post } from "../../types/Post";

interface PostSortDropdownProps {
  posts: Post[];
}

export const PostSortDropdown: React.FC<PostSortDropdownProps> = () => {
  return <button>Новое</button>;
};
