import React from "react";
const TickIcon = ({ fill = "#EB3D34", width = 10, height = 8 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.13818 4.13177L3.61443 6.4901L8.57568 1.77344"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TickIcon;
