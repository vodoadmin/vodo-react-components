import React from "react";
interface ArrowMenuIconProps {
  className?: string;
  width?: number;
  height?: number;
  stroke?: string;
}
const ArrowMenuIcon = ({ className, width, height, stroke }: ArrowMenuIconProps) => {
  return (
    <svg
      width={width || 26}
      height={height || 21}
      viewBox={`0 0 26 21`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.56947 1.88086L1 10.4503L9.56947 19.0198"
        stroke={stroke || "white"}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.0003 10.4502H1.24023"
        stroke={stroke || "white"}
        fill="white"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowMenuIcon;
