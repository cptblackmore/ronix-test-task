import { useEffect, useState } from "react";
import { PostCard } from "../PostCard/PostCard";
import { PostControls } from "../PostControls/PostControls";
import { PostService } from "../../api/PostService";
import type { Post } from "../../types/Post";

interface PostListProps {
  onCreateClick: () => void;
}

export const PostList: React.FC<PostListProps> = ({ onCreateClick }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    PostService.getPosts().then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <PostControls posts={posts} onCreateClick={onCreateClick} />
      <div>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onPostUpdate={(updated) =>
              setPosts((prev) =>
                prev.map((p) => (p.id === updated.id ? updated : p)),
              )
            }
          />
        ))}
      </div>
    </div>
  );
};
