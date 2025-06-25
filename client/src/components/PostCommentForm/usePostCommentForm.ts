import { useState } from "react";
import { PostService } from "../../api/PostService";

export function usePostCommentForm(
  postId: string,
  onCommentAdded?: () => void,
) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    setLoading(true);
    try {
      await PostService.createComment(postId, text);
      setText("");
      onCommentAdded?.();
    } catch (e) {
      console.error("Failed to send comment", e);
    } finally {
      setLoading(false);
    }
  };

  return {
    text,
    loading,
    setText,
    handleSubmit,
  };
}
