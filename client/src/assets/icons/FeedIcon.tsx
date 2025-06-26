import * as React from "react";

interface FeedIconProps {
  color?: string;
}

const FeedIcon: React.FC<FeedIconProps> = ({ color = "#CFCFCF" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    fill="none"
    viewBox="0 0 30 30"
  >
    <path
      fill={color}
      className={`transition-colors fill-[${color}]`}
      d="M26.667 0H3.333A3.343 3.343 0 0 0 0 3.333v23.334C0 28.5 1.5 30 3.333 30h23.334C28.5 30 30 28.5 30 26.667V3.333C30 1.5 28.5 0 26.667 0m-8.334 23.333H6.667V20h11.666zm5-6.666H6.667v-3.334h16.666zm0-6.667H6.667V6.667h16.666z"
    ></path>
  </svg>
);

export default React.memo(FeedIcon);
