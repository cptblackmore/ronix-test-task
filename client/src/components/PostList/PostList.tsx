import { useEffect, useState } from "react";
import { PostCard } from "../PostCard/PostCard";
import { PostControls } from "../PostControls/PostControls";
import { PostService } from "../../api/PostService";
import type { Post } from "../../types/Post";

export const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    PostService.getPosts().then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <PostControls posts={posts} />
      <div>
        {posts.map((post) => (
          <PostCard post={post} />
        ))}
      </div>
    </div>
  );
};
