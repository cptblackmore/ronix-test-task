import type { Comment } from "../../types/Comment";
import { formatDate } from "../../utils/formatDate";
import { Avatar } from "../Avatar";

interface PostCommentProps {
  comment: Comment;
}

export const PostComment: React.FC<PostCommentProps> = ({ comment }) => {
  return (
    <div className="flex gap-15 pb-[13px]">
      <Avatar />
      <div>
        <div className="leading-6">User</div>
        <div className="text-[#D7D7D7] leading-6">
          {formatDate(comment.postedAt)}
        </div>
        <p className="mt-2.5">{comment.text}</p>
      </div>
    </div>
  );
};
