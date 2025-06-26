import SearchIcon from "../../assets/icons/SearchIcon";
import { ClearIconButton } from "../ClearIconButton";

interface PostSearchProps {
  query: string;
  onQueryChange: (query: string) => void;
}

export const PostSearch: React.FC<PostSearchProps> = ({
  query,
  onQueryChange,
}) => {
  const handleClear = () => onQueryChange("");

  return (
    <div className="relative w-full max-w-sm">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
        <SearchIcon />
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Найти пост"
        className="w-full px-[2.7rem] py-2 rounded-5 border border-[#F1F1F1] placeholder-[#CDCDCD]"
      />
      <div className="absolute right-3 top-1/2 -translate-y-1/2">
        <ClearIconButton onClear={handleClear} />
      </div>
    </div>
  );
};
