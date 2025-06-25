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
      <input
        type="text"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Найти пост"
        className="w-full px-10 pr-10 py-2 rounded-lg border text-sm placeholder-neutral-400 bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {query && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
          aria-label="Очистить поиск"
        ></button>
      )}
    </div>
  );
};
