import { PostService } from "../../api/PostService";
import type { Post } from "../../types/Post";
import { formatDate } from "../../utils/formatDate";
import { PostComment } from "../PostComment/PostComment";
import { PostCommentForm } from "../PostCommentForm/PostCommentForm";
import { useLikePost } from "../../hooks/useLikePost";
import { Avatar } from "../Avatar";
import CommentIcon from "../../assets/icons/CommentIcon";
import { LikeButton } from "../LikeButton";

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
    <article
      className={`${post.comments.length > 0 ? "bg-[#F8F8F8]" : "bg-[#EFEFEF]"} rounded-10`}
    >
      <div className="bg-[#F1F1F1] border border-[#DBDBDB] rounded-10">
        <header className="p-15">
          <div className="flex items-center gap-15">
            <Avatar />
            <div>
              <div className="leading-6">Author</div>
              <div className="text-[#D7D7D7] leading-6">
                {formatDate(post.postedAt)}
              </div>
            </div>
          </div>
          <div className="border-b border-[#DBDBDB] mt-[10px]"></div>
        </header>

        <main>
          <h2 className="text-[16px] pl-15 pb-15 pr-15 leading-6">
            {post.title}
          </h2>
          {post.image && (
            <img
              src={import.meta.env.VITE_SERVER_URL + post.image}
              alt=""
              className="rounded-5 w-full"
            />
          )}
        </main>

        <footer className="text-[14px] font-semibold flex items-center gap-9 px-15 py-2.5">
          <LikeButton
            likes={post.likes}
            hasLiked={hasLiked}
            onLike={handleLike}
          />
          <span className="flex items-center gap-1 text-[#D7D7D7]">
            <CommentIcon /> {post.comments.length}
          </span>
        </footer>
      </div>

      {post.comments.length > 0 && (
        <div className="flex flex-col pl-15 pt-15 pr-15">
          {post.comments.map((comment, i) => (
            <PostComment key={i} comment={comment} />
          ))}
        </div>
      )}
      <PostCommentForm postId={post.id} onCommentAdded={handleCommentAdded} />
    </article>
  );
};
