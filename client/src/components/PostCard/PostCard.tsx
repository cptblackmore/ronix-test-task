import { PostService } from "../../api/PostService";
import type { Post } from "../../types/Post";
import { formatDate } from "../../utils/formatDate";
import { PostComment } from "../PostComment/PostComment";
import { PostCommentForm } from "../PostCommentForm/PostCommentForm";
import { useLikePost } from "../../hooks/useLikePost";

interface PostCardProps {
  post: Post;
  onPostUpdate: (updated: Post) => void;
}

export const PostCard: React.FC<PostCardProps> = ({ post, onPostUpdate }) => {
  const { hasLiked, handleLike } = useLikePost(post.id, onPostUpdate);

  const handleCommentAdded = async () => {
    const updated = await PostService.getPostById(post.id);
    onPostUpdate(updated);
  };

  return (
    <article className="rounded-xl border p-4">
      <header className="text-sm text-muted">
        <div>Author</div>
        <div>{formatDate(post.postedAt)}</div>
      </header>

      <main className="my-2">
        <h2 className="text-lg font-semibold">{post.title}</h2>
        {post.image && (
          <img
            src={import.meta.env.VITE_SERVER_URL + post.image}
            alt=""
            className="my-2 rounded"
          />
        )}
      </main>

      <footer className="text-sm text-gray-500 flex gap-4">
        <button
          onClick={handleLike}
          className={`flex items-center gap-1 transition-colors ${
            hasLiked ? "text-red-500" : "text-neutral-400 hover:text-red-400"
          }`}
          disabled={hasLiked}
        >
          ♡ {post.likes}
        </button>
        <span className="flex items-center gap-1 text-neutral-400">
          💬 {post.comments.length}
        </span>
      </footer>

      {post.comments.map((comment, i) => (
        <PostComment key={i} comment={comment} />
      ))}
      <PostCommentForm postId={post.id} onCommentAdded={handleCommentAdded} />
    </article>
  );
};
