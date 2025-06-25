import { useCallback, useState } from "react";
import { PostService } from "../api/PostService";
import type { Post } from "../types/Post";

export const useLikePost = (
  postId: string,
  onPostUpdate: (post: Post) => void,
) => {
  const [hasLiked, setHasLiked] = useState(() => {
    const liked = JSON.parse(localStorage.getItem("likedPosts") || "[]");
    return liked.includes(postId);
  });

  const handleLike = useCallback(async () => {
    if (hasLiked) return;

    const updated = await PostService.likePost(postId);
    if (updated) {
      const liked = JSON.parse(localStorage.getItem("likedPosts") || "[]");
      localStorage.setItem("likedPosts", JSON.stringify([...liked, postId]));
      onPostUpdate(updated);
      setHasLiked(true);
    }
  }, [hasLiked, postId, onPostUpdate]);

  return { hasLiked, handleLike };
};
