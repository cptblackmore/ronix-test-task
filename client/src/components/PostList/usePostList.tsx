import { useEffect, useState, useCallback } from "react";
import type { Post } from "../../types/Post";
import { PostService } from "../../api/PostService";
import type { SortOrder } from "../../types/SortOrder";
import { usePostFilter } from "../../hooks/usePostFilter";

export function usePostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("new");

  useEffect(() => {
    PostService.getPosts().then((data) => setPosts(data));
  }, []);

  const updatePost = useCallback((updated: Post) => {
    setPosts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
  }, []);

  const filteredPosts = usePostFilter({ posts, query, sortOrder });

  return {
    query,
    setQuery,
    sortOrder,
    setSortOrder,
    filteredPosts,
    updatePost,
  };
}
