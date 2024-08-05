import React from "react";

const BurgerIcon = ({ stroke = "white", width = 28, height = 23 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.7998 2.25H25.7998"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        opacity="0.34"
        d="M1.7998 11.4502H25.7998"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M1.7998 20.6504H25.7998"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default BurgerIcon;
