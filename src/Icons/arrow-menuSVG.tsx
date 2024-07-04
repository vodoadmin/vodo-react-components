import React from "react";

const ArrowMenuIcon = ({ width = 26, height = 21, stroke = "white" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.56947 1.88086L1 10.4503L9.56947 19.0198"
        stroke={stroke}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.0003 10.4502H1.24023"
        stroke={stroke}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowMenuIcon;
