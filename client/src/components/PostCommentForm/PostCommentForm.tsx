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

  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2 pt-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 px-4 py-2 text-sm bg-neutral-100 rounded-md"
        placeholder="Написать комментарий…"
        disabled={loading}
      />
      <button
        type="submit"
        disabled={loading || !text.trim()}
        className="disabled:opacity-30 text-neutral-600"
      >
        ⏎
      </button>
    </form>
  );
};
