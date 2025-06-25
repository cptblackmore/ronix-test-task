import type { Post } from "../../types/Post";
import { formatDate } from "../../utils/formatDate";

interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article>
      <header>
        {"Author"} {formatDate(post.postedAt)}
      </header>
      <main>
        <h2>{post.title}</h2>
        {post.image &&
          <img src={post.image} alt="" />
        }
      </main>
      <footer>
        {post.likes} {post.comments.length}
      </footer>
    </article>
  );
};
