import { useState } from "react";
import SendIcon from "../../assets/icons/SendIcon";
import { usePostCommentForm } from "./usePostCommentForm";

interface PostCommentFormProps {
  postId: string;
  onCommentAdded?: () => void;
}

export const PostCommentForm: React.FC<PostCommentFormProps> = ({
  postId,
  onCommentAdded,
}) => {
  const { text, loading, setText, handleSubmit } = usePostCommentForm(
    postId,
    onCommentAdded,
  );
  const [hovered, setHovered] = useState(false);

  return (
    <form onSubmit={handleSubmit} className="relative flex items-end gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="h-[36px] flex-1 pl-15 pr-[40px] bg-[#EFEFEF] placeholder-[#D3D3D3] rounded-b-10 rounded-t-5"
        placeholder="Написать комментарий…"
        disabled={loading}
      />
      <button
        type="submit"
        disabled={loading || !text.trim()}
        className="absolute right-4 top-1/2 -translate-y-1/2"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <SendIcon color={hovered ? "#4f8bd0" : "#D3D3D3"} />
      </button>
    </form>
  );
};
