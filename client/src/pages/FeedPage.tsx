import ArrowIcon from "../assets/icons/ArrowIcon";
import { Container } from "../components/Container";
import { PostList } from "../components/PostList/PostList";

export const FeedPage: React.FC = () => {
  return (
    <Container>
      <header className="border-b">
        <button>
          <ArrowIcon />
        </button>
        <h1>Лента</h1>
      </header>
      <PostList />
    </Container>
  );
};
