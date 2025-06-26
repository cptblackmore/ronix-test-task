import * as React from "react";

interface SendIconProps {
  color?: string;
}

const SendIcon: React.FC<SendIconProps> = ({ color = "#D3D3D3" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    fill="none"
    viewBox="0 0 12 12"
  >
    <path
      fill={color}
      className={`transition-colors fill-[${color}]`}
      d="M0 1.948v8.104c0 1.49 1.607 2.435 2.907 1.685l8.669-5.001a.85.85 0 0 0 0-1.471L2.906.262C1.61-.486 0 .458 0 1.947zM8.976 6.74 6.868 7.829l-4.7 2.628a.459.459 0 0 1-.687-.404V6.741zm-6.81-5.195L6.87 4.173l2.107 1.089H1.48V1.949a.46.46 0 0 1 .686-.404"
    ></path>
  </svg>
);

export default React.memo(SendIcon);
