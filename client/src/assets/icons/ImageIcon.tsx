import * as React from "react";

const ImageIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    fill="none"
    viewBox="0 0 12 12"
  >
    <path
      fill="#A9A9A9"
      d="M12 10.667V1.333C12 .6 11.4 0 10.667 0H1.333C.6 0 0 .6 0 1.333v9.334C0 11.4.6 12 1.333 12h9.334C11.4 12 12 11.4 12 10.667M3.667 7l1.666 2.007L7.667 6l3 4H1.333z"
    ></path>
  </svg>
);

export default React.memo(ImageIcon);
