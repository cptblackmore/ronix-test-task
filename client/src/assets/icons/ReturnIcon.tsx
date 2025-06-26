import * as React from "react";

const ReturnIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    fill="none"
    viewBox="0 0 21 20"
  >
    <rect width="20" height="20" x="1" fill="#E4E4E4" rx="5"></rect>
    <rect width="20" height="20" fill="#F1F1F1" rx="5"></rect>
    <path
      fill="#CDCDCD"
      d="M15 9.375H7.394l3.493-3.494L10 5l-5 5 5 5 .881-.881-3.487-3.494H15z"
    ></path>
  </svg>
);

export default React.memo(ReturnIcon);
