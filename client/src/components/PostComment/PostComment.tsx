import type { Comment } from "../../types/Comment";
import { formatDate } from "../../utils/formatDate";

interface PostCommentProps {
  comment: Comment;
}

export const PostComment: React.FC<PostCommentProps> = ({ comment }) => {
  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 bg-neutral-300 rounded-full shrink-0" />
      <div>
        <div className="text-sm font-medium text-neutral-700">User</div>
        <div className="text-xs text-neutral-400">
          {formatDate(comment.postedAt)}
        </div>
        <p className="text-sm text-neutral-800 mt-1">{comment.text}</p>
      </div>
    </div>
  );
};
