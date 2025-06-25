import { useState } from "react";
import ArrowIcon from "../assets/icons/ArrowIcon";
import { Container } from "../components/Container";
import { PostList } from "../components/PostList/PostList";
import { PostCreateForm } from "../components/PostCreateForm/PostCreateForm";

export const FeedPage: React.FC = () => {
  const [mode, setMode] = useState<"feed" | "create">("feed");

  return (
    <Container>
      <header className="border-b">
        <button>
          <ArrowIcon />
        </button>
        <h1>Лента</h1>
      </header>
      {mode === "feed" ? (
        <PostList onCreateClick={() => setMode("create")} />
      ) : (
        <PostCreateForm
          onCancel={() => setMode("feed")}
          onSuccess={() => setMode("feed")}
        />
      )}
    </Container>
  );
};
