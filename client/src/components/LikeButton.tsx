import { useState } from "react";
import FavoriteIcon from "../assets/icons/FavoriteIcon";

interface LikeButtonProps {
  likes: number;
  hasLiked: boolean;
  onLike: () => void;
}

export const LikeButton: React.FC<LikeButtonProps> = ({
  likes,
  hasLiked,
  onLike,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onLike}
      className={`group flex items-center gap-1 transition-colors ${
        hasLiked ? "text-secondary" : "text-[#D7D7D7] hover:text-secondary"
      }`}
      disabled={hasLiked}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <FavoriteIcon
        color={hovered ? "#ff6464" : hasLiked ? "#ff6464" : "#D7D7D7"}
      />
      {likes}
    </button>
  );
};
