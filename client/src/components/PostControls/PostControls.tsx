import type { Post } from "../../types/Post";
import { Button } from "../Button";
import { PostSearch } from "./PostSearch";
import { PostSortDropdown } from "./PostSortDropdown";

interface PostControlsProps {
  posts: Post[];
  onCreateClick: () => void;
}

export const PostControls: React.FC<PostControlsProps> = ({
  posts,
  onCreateClick,
}) => {
  return (
    <div>
      <PostSearch posts={posts} />
      <PostSortDropdown posts={posts} />
      <Button onClick={onCreateClick}>Новый пост</Button>
    </div>
  );
};
