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
    <div className="flex justify-between gap-[15px] mt-[5px] mb-[10px] min-w-0">
      <div className="flex-1 flex items-center gap-[15px] min-w-0">
        <PostSearch query={query} onQueryChange={onQueryChange} />
        <PostSortDropdown sortOrder={sortOrder} onSortChange={onSortChange} />
      </div>
      <Button onClick={onCreateClick}>Новый пост</Button>
    </div>
  );
};
