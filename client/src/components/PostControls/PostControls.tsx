import type { SortOrder } from "../../types/SortOrder";
import { Button } from "../Button";
import { PostSearch } from "./PostSearch";
import { PostSortDropdown } from "./PostSortDropdown";

interface PostControlsProps {
  onCreateClick: () => void;
  query: string;
  onQueryChange: (query: string) => void;
  sortOrder: "new" | "old";
  onSortChange: (sortOrder: SortOrder) => void;
}

export const PostControls: React.FC<PostControlsProps> = ({
  query,
  onQueryChange,
  sortOrder,
  onSortChange,
  onCreateClick,
}) => {
  return (
    <div>
      <PostSearch query={query} onQueryChange={onQueryChange} />
      <PostSortDropdown sortOrder={sortOrder} onSortChange={onSortChange} />
      <Button onClick={onCreateClick}>Новый пост</Button>
    </div>
  );
};
