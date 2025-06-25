import * as React from "react";

const ArrowIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="10"
    fill="none"
    viewBox="0 0 10 10"
  >
    <path
      fill="#CDCDCD"
      d="M10 4.375H2.394L5.888.881 5 0 0 5l5 5 .881-.881-3.487-3.494H10z"
    ></path>
  </svg>
);

export default React.memo(ArrowIcon);
