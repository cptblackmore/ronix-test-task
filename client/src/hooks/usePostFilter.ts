import { useMemo } from "react";
import type { Post } from "../types/Post";
import type { SortOrder } from "../types/SortOrder";

interface UsePostFilterParams {
  posts: Post[];
  query: string;
  sortOrder: SortOrder;
}

export function usePostFilter({
  posts,
  query,
  sortOrder,
}: UsePostFilterParams) {
  return useMemo(() => {
    let result = [...posts];

    if (query.trim()) {
      result = result.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase()),
      );
    }

    result.sort((a, b) => {
      const dateA = new Date(a.postedAt).getTime();
      const dateB = new Date(b.postedAt).getTime();
      return sortOrder === "new" ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [posts, query, sortOrder]);
}
