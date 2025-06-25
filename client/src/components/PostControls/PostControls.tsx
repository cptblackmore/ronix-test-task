import type { Post } from "../../types/Post";
import { Button } from "../Button";
import { PostSearch } from "./PostSearch";
import { PostSortDropdown } from "./PostSortDropdown";

interface PostControlsProps {
  posts: Post[];
}

export const PostControls: React.FC<PostControlsProps> = ({ posts }) => {
  return (
    <div>
      <PostSearch posts={posts} />
      <PostSortDropdown posts={posts} />
      <Button>Новый пост</Button>
    </div>
  );
};
