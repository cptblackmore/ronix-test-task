import * as React from "react";

const CommentIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 18 18"
  >
    <path
      fill="#D7D7D7"
      d="M16.2 0H1.8C.81 0 .009.81.009 1.8L0 18l3.6-3.6h12.6c.99 0 1.8-.81 1.8-1.8V1.8c0-.99-.81-1.8-1.8-1.8M6.3 8.1H4.5V6.3h1.8zm3.6 0H8.1V6.3h1.8zm3.6 0h-1.8V6.3h1.8z"
    ></path>
  </svg>
);

export default React.memo(CommentIcon);
