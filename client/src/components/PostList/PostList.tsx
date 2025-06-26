import { PostCard } from "../PostCard/PostCard";
import { PostControls } from "../PostControls/PostControls";
import { usePostList } from "./usePostList";

interface PostListProps {
  onCreateClick: () => void;
}

export const PostList: React.FC<PostListProps> = ({ onCreateClick }) => {
  const {
    query,
    setQuery,
    sortOrder,
    setSortOrder,
    filteredPosts,
    updatePost,
  } = usePostList();

  return (
    <div>
      <PostControls
        query={query}
        onQueryChange={setQuery}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
        onCreateClick={onCreateClick}
      />
      <div className="flex flex-col gap-[10px]">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} onPostUpdate={updatePost} />
        ))}
      </div>
    </div>
  );
};
