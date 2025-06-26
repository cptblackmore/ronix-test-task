import { useState } from "react";
import { Container } from "../components/Container";
import { PostList } from "../components/PostList/PostList";
import { PostCreateForm } from "../components/PostCreateForm/PostCreateForm";
import ReturnIcon from "../assets/icons/ReturnIcon";
import { StoriesBar } from "../components/StoriesBar";
import { BottomNavbar } from "../components/BottomNavbar";

export const FeedPage: React.FC = () => {
  const [mode, setMode] = useState<"feed" | "create">("feed");

  return (
    <Container>
      <header className="border-b border-[#F8F8F8] flex items-center justify-between pt-[32px] pb-15 mb-15">
        <div className="flex items-center gap-[19px]">
          <button disabled className="cursor-not-allowed">
            <ReturnIcon />
          </button>
          <h1 className="text-[20px] text-[#DBDBDB]">Лента</h1>
        </div>
        <StoriesBar />
      </header>
      {mode === "feed" ? (
        <PostList onCreateClick={() => setMode("create")} />
      ) : (
        <PostCreateForm
          onCancel={() => setMode("feed")}
          onSuccess={() => setMode("feed")}
        />
      )}
      <BottomNavbar />
    </Container>
  );
};
