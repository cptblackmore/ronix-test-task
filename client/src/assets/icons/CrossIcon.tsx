import * as React from "react";

interface CrossIconProps {
  color?: string;
}

const CrossIcon: React.FC<CrossIconProps> = ({ color = "#CDCDCD" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="10"
    fill="none"
    viewBox="0 0 10 10"
  >
    <path
      fill={color}
      className={`transition-colors fill-[${color}]`}
      d="M10 1.007 8.993 0 5 3.993 1.007 0 0 1.007 3.993 5 0 8.993 1.007 10 5 6.007 8.993 10 10 8.993 6.007 5z"
    ></path>
  </svg>
);

export default React.memo(CrossIcon);
