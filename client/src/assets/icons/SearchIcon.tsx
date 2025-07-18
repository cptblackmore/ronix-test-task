import * as React from "react";

const SearchIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    fill="none"
    viewBox="0 0 12 12"
  >
    <path
      fill="#CDCDCD"
      d="M8.576 7.547h-.542l-.192-.185A4.44 4.44 0 0 0 8.92 4.46a4.46 4.46 0 1 0-4.46 4.46 4.44 4.44 0 0 0 2.903-1.078l.185.192v.542L10.977 12 12 10.978zm-4.116 0A3.083 3.083 0 0 1 1.372 4.46 3.083 3.083 0 0 1 4.46 1.372 3.083 3.083 0 0 1 7.547 4.46 3.083 3.083 0 0 1 4.46 7.547"
    ></path>
  </svg>
);

export default React.memo(SearchIcon);
