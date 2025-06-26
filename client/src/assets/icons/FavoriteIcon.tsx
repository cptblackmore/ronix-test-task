import * as React from "react";

interface FavoriteIconProps {
  color?: string;
}

const FavoriteIcon: React.FC<FavoriteIconProps> = ({ color = "#D7D7D7" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="18"
    fill="none"
    viewBox="0 0 20 18"
  >
    <path
      fill={color}
      className={`transition-colors fill-[${color}]`}
      d="M14.5 0c-1.74 0-3.41.795-4.5 2.05A6.04 6.04 0 0 0 5.5 0C2.42 0 0 2.374 0 5.395c0 3.708 3.4 6.73 8.55 11.32L10 18l1.45-1.295C16.6 12.125 20 9.103 20 5.395 20 2.374 17.58 0 14.5 0m-4.4 15.253-.1.098-.1-.098C5.14 11.026 2 8.23 2 5.395c0-1.962 1.5-3.433 3.5-3.433 1.54 0 3.14 1.592 3.57 2.315S10 5 10 5s.5 0 .94-.723 2.02-2.315 3.56-2.315c2 0 3.5 1.471 3.5 3.433 0 2.835-3.14 5.63-7.9 9.858"
    ></path>
  </svg>
);

export default React.memo(FavoriteIcon);
